import os
import re
from datetime import datetime
from typing import Dict, List, Optional

import jieba
from wordcloud import WordCloud

from backend.app.core.config import DEFAULT_EN_FONT, DEFAULT_ZH_FONT, WORDCLOUD_DIR

EN_WORD_RE = re.compile(r"[A-Za-z][A-Za-z\-']{1,}")


def _tokenize_fallback(text: Optional[str], lang: str) -> List[str]:
    if not text:
        return []
    lowered = (lang or "").lower()
    if lowered.startswith("zh"):
        return [token.strip() for token in jieba.cut(text) if token.strip()]
    if lowered.startswith("en"):
        return re.findall(r"[A-Za-z][A-Za-z\-']{1,}", text.lower())
    tokens = re.split(r"\s+", text)
    return [token.strip() for token in tokens if token.strip()]


def build_wordcloud(paragraph_keywords: List[Dict], lang: str, fallback_text: Optional[str] = None) -> str:
    # ✅ 用到時才建
    os.makedirs(WORDCLOUD_DIR, exist_ok=True)

    collected: List[str] = []
    for item in paragraph_keywords:
        keywords = item.get("keywords") if isinstance(item, dict) else None
        if not keywords:
            continue
        for word in keywords:
            if isinstance(word, str):
                stripped = word.strip()
                if stripped:
                    collected.append(stripped)

    if not collected and fallback_text:
        collected = _tokenize_fallback(fallback_text, lang)

    lowered_lang = (lang or '').lower()
    if lowered_lang.startswith('en'):
        english_only = [word for word in collected if EN_WORD_RE.search(word)]
        if english_only:
            collected = english_only

    # WordCloud 需要至少一個詞彙才能生成
    if not collected:
        raise RuntimeError("文字內容不足，無法生成文字雲。")

    text = " ".join(collected[:1000])

    is_zh = str(lang).lower().startswith("zh")
    font_path = DEFAULT_ZH_FONT if is_zh else DEFAULT_EN_FONT
    if is_zh and (not font_path or not os.path.exists(font_path)):
        raise RuntimeError(
            "找不到中文字型：請將 Noto Sans TC / Noto Sans CJK 放到 assets/fonts/，"
            "或用環境變數 FONT_ZH_PATH 指向字型檔。"
        )

    wc = WordCloud(background_color="white", width=1200, height=600, font_path=font_path or None).generate(text)
    out = os.path.join(WORDCLOUD_DIR, f"wc_{datetime.utcnow().strftime('%Y%m%d%H%M%S%f')}.png")
    wc.to_file(out)
    return out
