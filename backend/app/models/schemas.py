from pydantic import BaseModel
from typing import List, Optional

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
    paragraphs: List[Paragraph]
    global_summary: str
    paragraph_summaries: List[SummaryItem]
    paragraph_keywords: List[KeywordItem]
    wordcloud_image_url: str
