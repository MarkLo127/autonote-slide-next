from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from typing import Optional

from backend.app.models.schemas import AnalyzeResponse, LLMSettings
from backend.app.services.parsing.file_loader import load_file_as_text_and_paragraphs
from backend.app.services.nlp.language_detect import detect_lang
from backend.app.services.nlp.segmenter import ensure_offsets_if_needed
from backend.app.services.nlp.keyword_extractor import extract_keywords_by_paragraph
from backend.app.services.nlp.summarizer import summarize_global, summarize_by_paragraph
from backend.app.services.wordcloud.wordcloud_gen import build_wordcloud
from backend.app.services.storage import save_upload, make_public_url

router = APIRouter(prefix="/analyze", tags=["analyze"])

@router.post("", response_model=AnalyzeResponse)
async def analyze_file(
    file: UploadFile = File(...),
    llm_api_key: str = Form(...),
    llm_base_url: Optional[str] = Form(None),
    llm_model: str = Form("gpt-5-mini-2025-08-07"),
):
    # 1) 儲存上傳
    saved_path = save_upload(file)

    # 2) 解析→純文字+段落
    full_text, paragraphs = load_file_as_text_and_paragraphs(saved_path)

    if not full_text.strip():
        raise HTTPException(400, "解析不到文字內容，請確認檔案是否為掃描影像或受保護。")

    # 3) 語言偵測
    lang = detect_lang(full_text)

    # 4) 段落 offset 校正（若解析器未給就補）
    paragraphs = ensure_offsets_if_needed(full_text, paragraphs)

    # 5) 摘要（全局 + 每段）
    settings = LLMSettings(api_key=llm_api_key, base_url=llm_base_url, model=llm_model)
    global_summary = await summarize_global(full_text, settings)
    paragraph_summaries = await summarize_by_paragraph(paragraphs, settings)

    # 6) 關鍵字（每段）
    paragraph_keywords = extract_keywords_by_paragraph(paragraphs, lang)

    # 7) 文字雲
    wc_path = build_wordcloud(paragraph_keywords, lang)
    wc_url = make_public_url(wc_path)

    return AnalyzeResponse(
        language=lang,
        paragraphs=paragraphs,
        global_summary=global_summary,
        paragraph_summaries=paragraph_summaries,
        paragraph_keywords=paragraph_keywords,
        wordcloud_image_url=wc_url,
    )
