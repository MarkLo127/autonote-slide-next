from langdetect import detect

def detect_lang(text: str) -> str:
    try:
        code = detect(text[:5000])
        return "zh" if code.startswith("zh") else code
    except Exception:
        return "en"
