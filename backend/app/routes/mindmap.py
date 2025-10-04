from typing import Optional

from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from backend.app.services.mindmap.mindmap_gen import (
    build_graphviz_mindmap,
    build_mermaid_mindmap,
    infer_doc_title,
    save_graphviz_png,
    save_mermaid,
    select_root_label,
)
from backend.app.services.nlp.keyword_extractor import extract_keywords_by_paragraph
from backend.app.services.nlp.language_detect import detect_lang, determine_visual_language
from backend.app.services.nlp.segmenter import ensure_offsets_if_needed
from backend.app.services.parsing.file_loader import load_file_as_text_and_paragraphs
from backend.app.services.storage import make_public_url, save_upload

router = APIRouter(prefix="/mindmap", tags=["mindmap"])

@router.post("")
async def mindmap_endpoint(
    file: UploadFile = File(...),
    llm_api_key: Optional[str] = Form(None),   # 目前心智圖不一定需要 LLM；保留擴充
    llm_base_url: Optional[str] = Form(None),
    llm_model: Optional[str] = Form(None),
):
    """
    讀取上傳檔案 -> 分段 -> 關鍵字 -> 生成 Mermaid mindmap 文字，並把 .mmd 存到 storage/mindmaps。
    回傳：
      - language
      - paragraphs
      - paragraph_keywords
      - mindmap_mermaid (文字)
      - mindmap_file_url (下載 .mmd 的公開 URL)
      - mindmap_image_url (PNG 心智圖圖片)
    """
    # 1) 先存上傳檔（沿用現有 storage 邏輯）
    abs_path = save_upload(file)

    # 2) 讀檔 + 分段
    try:
        full_text, paragraphs = load_file_as_text_and_paragraphs(abs_path)
    except ValueError as exc:
        raise HTTPException(400, str(exc)) from exc
    except Exception as exc:  # pylint: disable=broad-except
        raise HTTPException(500, f"無法解析檔案：{exc}") from exc

    if not full_text or not full_text.strip():
        raise HTTPException(400, "檔案內容為空，或解析不到文字（掃描 PDF 可考慮加 OCR）")

    lang = detect_lang(full_text)
    visual_lang = determine_visual_language(full_text, lang)
    paragraphs = ensure_offsets_if_needed(full_text, paragraphs)
    doc_title = infer_doc_title(paragraphs, file.filename or "Document")

    # 整理 paragraphs 結構（index, text, start_char, end_char）
    para_payload = [p.model_dump() for p in paragraphs]

    # 3) 關鍵字（每段）
    paragraph_keywords = extract_keywords_by_paragraph(paragraphs, visual_lang)

    # 4) 生成 Mermaid mindmap
    # doc title 盡量取原檔名；沒有就用 meta/title
    root_title = select_root_label(paragraph_keywords, doc_title)
    mmd_text = build_mermaid_mindmap(root_title, paragraph_keywords, top_k=8, max_refs_per_kw=5)
    mmd_abs, _ = save_mermaid(mmd_text, name_hint=root_title)

    graph = build_graphviz_mindmap(root_title, paragraph_keywords, top_k=8, max_refs_per_kw=5)
    png_abs, png_name = save_graphviz_png(graph, name_hint=root_title)

    # 5) 對外 URL
    mmd_url = make_public_url(mmd_abs)

    return {
        "language": visual_lang,
        "paragraphs": para_payload,
        "paragraph_keywords": paragraph_keywords,
        "doc_title": root_title,
        "mindmap_mermaid": mmd_text,
        "mindmap_file_url": mmd_url,           # e.g. /static/mindmaps/xxx.mmd
        "mindmap_image_url": make_public_url(png_abs) if png_abs else None,
        "mindmap_image_file": png_name,
        "source_upload_url": make_public_url(abs_path),  # 方便除錯
    }
