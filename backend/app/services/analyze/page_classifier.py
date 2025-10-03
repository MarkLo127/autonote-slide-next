"""Heuristics for classifying parsed pages before summarisation."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional


@dataclass
class ClassifiedPage:
    page_number: int
    text: str
    classification: str
    skip_reason: Optional[str]


SKIP_CLASS_LABELS = {"toc", "pure_image", "blank", "cover"}


def _line_tokens(text: str) -> list[str]:
    return [line.strip() for line in text.splitlines() if line.strip()]


def _is_probably_cover(text: str, page_number: int) -> bool:
    if page_number != 1:
        return False
    lines = _line_tokens(text)
    if not lines:
        return True
    if len(lines) <= 4 and any(keyword in lines[0] for keyword in {"報告", "企畫", "簡報", "計畫", "Proposal", "Report"}):
        return True
    return False


def _is_probably_blank(text: str) -> bool:
    stripped = text.strip()
    if not stripped:
        return False
    alnum = [ch for ch in stripped if ch.isalnum()]
    return len(alnum) <= 4


def _is_probably_pure_image(text: str) -> bool:
    stripped = text.strip()
    if stripped:
        return False
    return True


def _is_probably_toc(text: str) -> bool:
    import re

    lines = _line_tokens(text)
    if not lines:
        return False
    toc_hits = sum(1 for line in lines if re.search(r"\.{2,}\s*\d+$", line) or re.search(r"\s\d+$", line))
    keywords = {"目錄", "目录", "contents", "content"}
    has_keyword = any(any(keyword in line.lower() for keyword in keywords) for line in lines[:6])
    return has_keyword and toc_hits >= max(2, len(lines) // 3)


def classify_page(page_number: int, text: str) -> ClassifiedPage:
    stripped = text.strip()

    if _is_probably_toc(stripped):
        return ClassifiedPage(page_number, stripped, "toc", "〈本頁跳過（目錄）〉")

    if _is_probably_cover(stripped, page_number):
        return ClassifiedPage(page_number, stripped, "cover", "〈本頁跳過（封面）〉")

    if _is_probably_blank(stripped):
        return ClassifiedPage(page_number, stripped, "blank", "〈本頁跳過（空白/水印）〉")

    if _is_probably_pure_image(stripped):
        return ClassifiedPage(page_number, stripped, "pure_image", "〈本頁跳過（純圖片）〉")

    return ClassifiedPage(page_number, stripped, "normal", None)
