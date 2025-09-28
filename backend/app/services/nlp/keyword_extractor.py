from typing import List
from collections import Counter
from backend.app.models.schemas import Paragraph
import re

# 中文分詞
import jieba
# 英文停用詞
from nltk.corpus import stopwords

EN_STOP = set()
try:
    EN_STOP = set(stopwords.words('english'))
except Exception:
    EN_STOP = {"the","a","an","of","to","in","and","is","are","for","on","with","as","by","this","that"}

ZH_STOP = {"的","了","在","是","和","及","與","並"}

def _is_zh(lang: str) -> bool:
    return lang.lower().startswith("zh")

def _tokenize(text: str, lang: str):
    if _is_zh(lang):
        return [w.strip() for w in jieba.cut(text) if w.strip()]
    return re.findall(r"[A-Za-z][A-Za-z\-']{1,}", text.lower())

def extract_keywords_by_paragraph(paragraphs: List[Paragraph], lang: str, topk: int = 8):
    results = []
    stop = ZH_STOP if _is_zh(lang) else EN_STOP
    for p in paragraphs:
        tokens = [t for t in _tokenize(p.text, lang) if t not in stop and len(t) > 1]
        freq = Counter(tokens)
        keywords = [w for w,_ in freq.most_common(topk)]
        results.append({"paragraph_index": p.index, "keywords": keywords})
    return results
