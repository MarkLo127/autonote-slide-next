from typing import Tuple, List
from backend.app.models.schemas import Paragraph
from backend.app.utils.text_clean import normalize_text
import re

def parse_txt(path: str) -> Tuple[str, List[Paragraph]]:
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        raw = f.read()
    full_text = normalize_text(raw)
    blocks = [b.strip() for b in re.split(r"\n\s*\n", full_text) if b.strip()]

    paragraphs: List[Paragraph] = []
    cursor = 0
    for i, b in enumerate(blocks):
        start = full_text.find(b, cursor)
        if start < 0:
            start = full_text.find(b)
        end = start + len(b) if start >= 0 else cursor
        paragraphs.append(Paragraph(index=i, text=b, start_char=max(0,start), end_char=max(end,start)))
        cursor = end
    return full_text, paragraphs
