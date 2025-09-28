import unicodedata

def normalize_text(s: str) -> str:
    """
    統一編碼、去 BOM、修掉奇怪空白。
    """
    if not s:
        return ""
    s = s.replace("\ufeff", "")  # BOM
    s = unicodedata.normalize("NFC", s)
    # 把 Windows 換行轉成 \n
    s = s.replace("\r\n", "\n").replace("\r", "\n")
    # 盡量保留原格式，不做 aggressive trim；切段時處理
    return s
