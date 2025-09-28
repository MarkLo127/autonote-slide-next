from typing import Optional, List
from openai import OpenAI

class LLMClient:
    """
    封裝 LLM 客戶端：
    - 支援自填 base_url（可空）
    - 支援指定 model
    """
    def __init__(self, api_key: str, model: str, base_url: Optional[str] = None):
        self.client = OpenAI(api_key=api_key, base_url=base_url)
        self.model = model

    def chat(self, messages: List[dict], temperature: float = 0.2) -> str:
        resp = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            temperature=temperature,
        )
        return resp.choices[0].message.content
