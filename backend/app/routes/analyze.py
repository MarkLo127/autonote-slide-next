import asyncio
import json
import os
from typing import Optional

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import StreamingResponse

from backend.app.models.schemas import AnalyzeResponse, LLMSettings, PageSummary
from backend.app.services.analyze.page_classifier import classify_page
from backend.app.services.analyze.page_parser import parse_pages
from backend.app.services.analyze.summary_engine import SummaryEngine, SYSTEM_PROMPT
from backend.app.services.nlp.language_detect import detect_lang
from backend.app.services.storage import save_upload

router = APIRouter(prefix="/analyze", tags=["analyze"])

@router.post("")
async def analyze_file(
    file: UploadFile = File(...),
    llm_api_key: str = Form(...),
    llm_base_url: Optional[str] = Form(None),
    llm_model: str = Form("gpt-5-mini-2025-08-07"),
):
    if not file.filename:
        raise HTTPException(400, "檔案名稱缺失，請重新上傳。")

    async def event_stream():
        queue: asyncio.Queue[Optional[str]] = asyncio.Queue()

        async def push_event(payload: dict):
            await queue.put(json.dumps(payload, ensure_ascii=False) + "\n")

        async def run_pipeline():
            try:
                await push_event({"type": "progress", "progress": 5, "message": "開始儲存檔案"})
                saved_path = save_upload(file)
                await push_event({"type": "progress", "progress": 12, "message": "檔案儲存完成"})

                _, ext = os.path.splitext(saved_path)
                try:
                    pages = parse_pages(saved_path, ext)
                except ValueError as exc:
                    raise HTTPException(400, str(exc)) from exc

                await push_event(
                    {
                        "type": "progress",
                        "progress": 28,
                        "message": f"完成文字解析，共 {len(pages)} 頁",
                    }
                )

                classified = [classify_page(page.page_number, page.text) for page in pages]
                await push_event(
                    {
                        "type": "progress",
                        "progress": 35,
                        "message": "頁面判定完成",
                    }
                )

                settings = LLMSettings(api_key=llm_api_key, base_url=llm_base_url, model=llm_model)
                engine = SummaryEngine(settings=settings, concurrency=4)

                total_pages = len(classified)
                completed_pages = 0

                async def page_progress(_: int):
                    nonlocal completed_pages
                    completed_pages += 1
                    base = 35
                    span = 50
                    percent = base + int(span * completed_pages / max(1, total_pages))
                    await push_event(
                        {
                            "type": "progress",
                            "progress": min(percent, 90),
                            "message": f"完成第 {completed_pages}/{total_pages} 頁摘要",
                        }
                    )

                page_results = await engine.summarize_pages(classified, progress_callback=page_progress)

                await push_event(
                    {
                        "type": "progress",
                        "progress": 92,
                        "message": "彙整全局摘要",
                    }
                )

                global_summary = await engine.summarize_global(page_results)

                joined_text = "\n".join(page.text for page in pages)
                language = detect_lang(joined_text)

                response_payload = AnalyzeResponse(
                    language=language,
                    total_pages=total_pages,
                    page_summaries=[
                        PageSummary(
                            page_number=result.page_number,
                            classification=result.classification,
                            bullets=result.bullets,
                            skipped=result.skipped,
                            skip_reason=result.skip_reason,
                        )
                        for result in page_results
                    ],
                    global_summary=global_summary,
                    system_prompt=SYSTEM_PROMPT,
                )

                await push_event(
                    {
                        "type": "result",
                        "progress": 100,
                        "message": "分析完成",
                        "data": response_payload.model_dump(mode="json"),
                    }
                )
            except HTTPException as exc:
                await push_event(
                    {
                        "type": "error",
                        "progress": 100,
                        "message": exc.detail,
                    }
                )
            except Exception as exc:  # pylint: disable=broad-except
                await push_event(
                    {
                        "type": "error",
                        "progress": 100,
                        "message": f"分析失敗：{exc}",
                    }
                )
            finally:
                await queue.put(None)

        pipeline_task = asyncio.create_task(run_pipeline())

        try:
            while True:
                event = await queue.get()
                if event is None:
                    break
                yield event
        finally:
            await pipeline_task

    return StreamingResponse(event_stream(), media_type="application/x-ndjson")
