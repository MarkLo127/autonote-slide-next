"""LLM powered summarisation orchestrator aligned with new spec."""

from __future__ import annotations

import asyncio
import json
from dataclasses import dataclass
from typing import Awaitable, Callable, List

from openai import AsyncOpenAI

from backend.app.models.schemas import GlobalSummary, GlobalSummaryExpansions, LLMSettings, PageSummary
from .page_classifier import ClassifiedPage, SKIP_CLASS_LABELS


SYSTEM_PROMPT = """你是文件壓縮摘要專家，擅長結論先行與精準行動建議。全程使用繁體中文，嚴禁逐字複製原文，嚴禁使用省略號「..」「…」，嚴禁空話與贅語。輸出必須可驗證並標註頁碼。"""

PAGE_PROMPT_TEMPLATE = """
分析第 {page_no} 頁內容。頁面分類：{page_class}。

頁面文字如下（如超長已截斷 4000 字）：
"""

PAGE_INSTRUCTIONS = """
請將上列內容改寫成 4 條要點（符合 3-5 條的要求），每條 ≤30 個全形字，單一資訊點（事實/結論/數據/風險/待辦），並保留數據的單位、時間、對比方向。
以 JSON 格式輸出：{"bullets": ["要點一", "要點二", "要點三", "要點四"]}
不要加入頁碼、不要加入前綴符號，我會在後續處理。"""

GLOBAL_PROMPT_TEMPLATE = """
根據以下每頁要點整理全局摘要：
{page_points}

請統整重點，輸出 JSON：
{{
  "overview": ["總結1", "總結2", "總結3", "總結4", "總結5"],
  "expansions": {{
    "key_conclusions": "段落 ≤120 字",
    "core_data": "段落 ≤120 字，列出頁碼範圍",
    "risks_and_actions": "段落 ≤120 字，含優先順序"
  }}
}}
三段擴充必須是完整語句，禁止省略號與冗言。"""


@dataclass
class PageSummaryResult:
    page_number: int
    classification: str
    bullets: List[str]
    skipped: bool
    skip_reason: str | None


class SummaryEngine:
    def __init__(self, settings: LLMSettings, concurrency: int = 4):
        self._client = AsyncOpenAI(api_key=settings.api_key, base_url=settings.base_url)
        self._model = settings.model
        self._concurrency = max(1, concurrency)

    async def _chat_json(self, system_prompt: str, user_prompt: str) -> dict:
        response = await self._client.chat.completions.create(  # type: ignore[attr-defined]
            model=self._model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            response_format={"type": "json_object"},
        )
        content = response.choices[0].message.content or "{}"
        return json.loads(content)

    async def summarize_page(self, page: ClassifiedPage) -> PageSummaryResult:
        if page.classification in SKIP_CLASS_LABELS and page.classification != "normal":
            return PageSummaryResult(
                page_number=page.page_number,
                classification=page.classification,
                bullets=[self._prefix_bullet(page.page_number, page.skip_reason or "〈本頁跳過〉")],
                skipped=True,
                skip_reason=page.skip_reason,
            )

        text = page.text[:4000]
        prompt = PAGE_PROMPT_TEMPLATE.format(page_no=page.page_number, page_class=page.classification)
        user_prompt = f"{prompt}\n{text}\n\n{PAGE_INSTRUCTIONS}".strip()
        data = await self._chat_json(SYSTEM_PROMPT, user_prompt)
        bullets = [line.strip() for line in data.get("bullets", []) if line and line.strip()]
        bullets = [self._prefix_bullet(page.page_number, bullet) for bullet in bullets[:5]]

        if len(bullets) < 3:
            bullets = self._fallback_bullets(page)

        return PageSummaryResult(
            page_number=page.page_number,
            classification=page.classification,
            bullets=bullets[:5],
            skipped=False,
            skip_reason=None,
        )

    async def summarize_pages(
        self,
        pages: List[ClassifiedPage],
        progress_callback: Callable[[int], Awaitable[None]] | None = None,
    ) -> List[PageSummaryResult]:
        semaphore = asyncio.Semaphore(self._concurrency)
        results: List[PageSummaryResult | None] = [None] * len(pages)

        async def _worker(idx: int, page: ClassifiedPage):
            async with semaphore:
                summary = await self.summarize_page(page)
            results[idx] = summary
            if progress_callback:
                await progress_callback(idx + 1)

        await asyncio.gather(*(_worker(idx, page) for idx, page in enumerate(pages)))
        return [r for r in results if r is not None]

    async def summarize_global(self, page_results: List[PageSummaryResult]) -> GlobalSummary:
        page_points = []
        for page in page_results:
            for bullet in page.bullets:
                page_points.append(f"{bullet}")

        payload = "\n".join(page_points[:160]) or "暫無要點"
        data = await self._chat_json(SYSTEM_PROMPT, GLOBAL_PROMPT_TEMPLATE.format(page_points=payload))

        overview = [item.strip() for item in data.get("overview", []) if item and item.strip()]
        expansions_raw = data.get("expansions", {})

        expansions = GlobalSummaryExpansions(
            key_conclusions=self._trim_to_limit(expansions_raw.get("key_conclusions", ""), 120),
            core_data=self._trim_to_limit(expansions_raw.get("core_data", ""), 120),
            risks_and_actions=self._trim_to_limit(expansions_raw.get("risks_and_actions", ""), 120),
        )

        overview = [self._trim_to_limit(item, 35) for item in overview][:7]
        if len(overview) < 5:
            overview.extend(["（待補要點）"] * (5 - len(overview)))

        return GlobalSummary(bullets=overview[:7], expansions=expansions)

    @staticmethod
    def _trim_to_limit(text: str, limit: int) -> str:
        stripped = text.strip()
        if len(stripped) <= limit:
            return stripped
        return stripped[: limit - 1].rstrip() + "。"

    @staticmethod
    def _prefix_bullet(page_number: int, bullet: str) -> str:
        core = bullet.replace("..", "").replace("…", "").strip()
        return f"〔p.{page_number}〕• {core}"

    @staticmethod
    def _fallback_bullets(page: ClassifiedPage) -> List[str]:
        lines = [line for line in page.text.splitlines() if line.strip()]
        bullets: List[str] = []
        for line in lines[:4]:
            bullets.append(f"〔p.{page.page_number}〕• {line.strip()[:28]}" )
            if len(bullets) == 4:
                break
        if not bullets:
            bullets.append(f"〔p.{page.page_number}〕• 無法解析頁面內容")
        return bullets
