from typing import Tuple, List
from backend.app.models.schemas import Paragraph
from .parse_pdf import parse_pdf
from .parse_docx import parse_docx
from .parse_pptx import parse_pptx
from .parse_md import parse_md
from .parse_txt import parse_txt

PARSERS = {
    ".pdf": parse_pdf,
    ".docx": parse_docx,
    ".pptx": parse_pptx,
    ".md": parse_md,
    ".txt": parse_txt,
}

def load_file_as_text_and_paragraphs(path: str) -> Tuple[str, List[Paragraph]]:
    import os
    ext = os.path.splitext(path)[1].lower()
    if ext not in PARSERS:
        raise ValueError(f"不支援的副檔名: {ext}")
    return PARSERS[ext](path)
