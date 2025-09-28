from typing import List
from backend.app.models.schemas import Paragraph, LLMSettings
from backend.app.core.llm_client import LLMClient

SYS_PROMPT = "你是一個專業文件助理，請用文件語言輸出摘要，保留關鍵名詞。"

async def summarize_global(full_text: str, settings: LLMSettings) -> str:
    client = LLMClient(settings.api_key, settings.model, settings.base_url)
    prompt = f"請用 5-8 句總結以下文件重點，必要時條列式：\n\n{full_text[:12000]}"
    return client.chat([
        {"role": "system", "content": SYS_PROMPT},
        {"role": "user", "content": prompt},
    ])

async def summarize_by_paragraph(paragraphs: List[Paragraph], settings: LLMSettings):
    client = LLMClient(settings.api_key, settings.model, settings.base_url)
    out = []
    for p in paragraphs:
        text = p.text[:2000]
        summary = client.chat([
            {"role": "system", "content": SYS_PROMPT},
            {"role": "user", "content": f"請用 1-2 句總結下面段落：\n{text}"},
        ])
        out.append({"paragraph_index": p.index, "summary": summary})
    return out
