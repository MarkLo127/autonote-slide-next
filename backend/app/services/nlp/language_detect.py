from __future__ import annotations

import unicodedata
import re
from typing import Iterable, Tuple

from langdetect import detect, detect_langs  # type: ignore
from langdetect.lang_detect_exception import LangDetectException


def _count_chars(text: str, ranges: Iterable[Tuple[int, int]]) -> int:
    return sum(1 for char in text for start, end in ranges if start <= ord(char) <= end)

def _cjk_hangul_counts(text: str) -> Tuple[int, int]:
    cjk_ranges = (
        (0x4E00, 0x9FFF),
        (0x3400, 0x4DBF),
    )
    hangul_ranges = (
        (0xAC00, 0xD7A3),
        (0x1100, 0x11FF),
        (0x3130, 0x318F),
    )
    cjk_count = _count_chars(text, cjk_ranges)
    hangul_count = _count_chars(text, hangul_ranges)
    return cjk_count, hangul_count


def _strip_control(text: str) -> str:
    return "".join(
        char for char in text if unicodedata.category(char)[0] != "C"
    )

EN_WORD_RE = re.compile(r"[A-Za-z]{3,}")


def _count_ascii_letters(text: str) -> int:
    return sum(1 for char in text if char.isascii() and char.isalpha())


def detect_lang(text: str) -> str:
    sample = _strip_control(text[:5000])
    if not sample:
        return "en"

    try:
        # Use probability list so we can reason about confidence levels.
        lang_probs = detect_langs(sample)
    except LangDetectException:
        try:
            return detect(sample)
        except LangDetectException:
            return "en"

    if not lang_probs:
        return "en"

    primary_entry = lang_probs[0]
    primary = primary_entry.lang
    primary_prob = getattr(primary_entry, "prob", 0.0) or 0.0

    if primary.startswith("zh"):
        return "zh"

    zh_prob = max(
        (entry.prob for entry in lang_probs if entry.lang.startswith("zh")),
        default=0.0,
    )
    if zh_prob and (zh_prob >= 0.4 or zh_prob >= primary_prob * 0.9):
        return "zh"

    if primary == "ko":
        cjk_count, hangul_count = _cjk_hangul_counts(sample)
        # langdetect 偶爾會將中文誤判為韓文；若幾乎無韓文字且有大量 CJK 字元，則視為中文。
        if cjk_count >= 20 and hangul_count == 0:
            return "zh"
        if hangul_count > 0 and cjk_count >= hangul_count * 4:
            return "zh"

    return primary

def determine_visual_language(text: str, detected_lang: str) -> str:
    base = (detected_lang or "en").lower()
    if base.startswith("en"):
        return "en"

    sample = _strip_control((text or "")[:8000])
    if not sample:
        return detected_lang

    english_letters = _count_ascii_letters(sample)
    if english_letters == 0:
        return detected_lang

    english_words = {word.lower() for word in EN_WORD_RE.findall(sample)}
    cjk_count, _ = _cjk_hangul_counts(sample)

    if not english_words:
        return detected_lang

    total_letters = english_letters + cjk_count
    if base.startswith("zh") and english_letters >= 30 and cjk_count >= 30:
        ratio = english_letters / max(total_letters, 1)
        if ratio >= 0.25 or len(english_words) >= 12:
            return "en"

    if english_letters >= 80 and len(english_words) >= 20:
        return "en"

    return detected_lang
