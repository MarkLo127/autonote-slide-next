from typing import Tuple, List
from pypdf import PdfReader
from backend.app.models.schemas import Paragraph
from backend.app.utils.text_clean import normalize_text
import re

def parse_pdf(path: str) -> Tuple[str, List[Paragraph]]:
    reader = PdfReader(path)
    pages = []
    for page in reader.pages:
        try:
            pages.append(page.extract_text() or "")
        except Exception:
            pages.append("")  # 有些頁可能取不出來
    full_text = normalize_text("\n\n".join(pages))

    # 以空行/標題粗切段
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
