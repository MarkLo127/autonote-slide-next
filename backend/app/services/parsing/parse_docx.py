from typing import Tuple, List
from docx import Document
from backend.app.models.schemas import Paragraph
from backend.app.utils.text_clean import normalize_text

def parse_docx(path: str) -> Tuple[str, List[Paragraph]]:
    doc = Document(path)
    paras = [p.text.strip() for p in doc.paragraphs if p.text and p.text.strip()]
    full_text = normalize_text("\n\n".join(paras))

    paragraphs: List[Paragraph] = []
    cursor = 0
    for i, t in enumerate(paras):
        t_norm = normalize_text(t)
        start = full_text.find(t_norm, cursor)
        if start < 0:
            start = full_text.find(t_norm)
        end = start + len(t_norm) if start >= 0 else cursor
        paragraphs.append(Paragraph(index=i, text=t_norm, start_char=max(0,start), end_char=max(end,start)))
        cursor = end
    return full_text, paragraphs
