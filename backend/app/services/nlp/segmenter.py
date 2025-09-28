from typing import List
from backend.app.models.schemas import Paragraph

def ensure_offsets_if_needed(full_text: str, paragraphs: List[Paragraph]) -> List[Paragraph]:
    """
    若解析器已含 start_char/end_char 就原樣返回；否則重新計算。
    """
    need_fix = any((p.start_char is None or p.start_char < 0 or p.end_char is None or p.end_char <= 0) for p in paragraphs)
    if not need_fix:
        return paragraphs

    updated = []
    cursor = 0
    for i, p in enumerate(paragraphs):
        snippet = p.text.strip()
        start = full_text.find(snippet, cursor)
        if start < 0:
            start = full_text.find(snippet)
        end = start + len(snippet) if start >= 0 else cursor
        updated.append(Paragraph(index=i, text=snippet, start_char=max(0,start), end_char=max(end,start)))
        cursor = end
    return updated
