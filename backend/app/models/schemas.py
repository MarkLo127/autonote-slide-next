from typing import List, Optional

from pydantic import BaseModel, Field


class PageSummary(BaseModel):
    page_number: int
    classification: str
    bullets: List[str]
    keywords: List[str] = Field(default_factory=list)
    skipped: bool
    skip_reason: Optional[str] = None


class GlobalSummaryExpansions(BaseModel):
    key_conclusions: str
    core_data: str
    risks_and_actions: str


class GlobalSummary(BaseModel):
    bullets: List[str]
    expansions: GlobalSummaryExpansions

class LLMSettings(BaseModel):
    api_key: str
    base_url: Optional[str] = None
    model: str = "gpt-5-mini-2025-08-07"

class Paragraph(BaseModel):
    index: int
    text: str
    start_char: int
    end_char: int

class SummaryItem(BaseModel):
    paragraph_index: int
    summary: str

class KeywordItem(BaseModel):
    paragraph_index: int
    keywords: List[str]

class AnalyzeResponse(BaseModel):
    language: str
    total_pages: int
    page_summaries: List[PageSummary]
    global_summary: GlobalSummary
    system_prompt: Optional[str] = None
    wordcloud_image_url: Optional[str] = None
