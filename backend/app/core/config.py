import os
from typing import Optional

# === 專案路徑 ===
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../.."))
STORAGE_DIR = os.path.join(BASE_DIR, "storage")
UPLOAD_DIR = os.path.join(STORAGE_DIR, "uploads")
WORDCLOUD_DIR = os.path.join(STORAGE_DIR, "wordclouds")
MINDMAP_DIR = os.path.join(STORAGE_DIR, "mindmaps")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
FONTS_DIR = os.path.join(ASSETS_DIR, "fonts")

STATIC_DIR = STORAGE_DIR
STATIC_MOUNT = "/static"

# === 字型自動搜尋 ===
FONT_EXTS = (".ttf", ".otf", ".ttc")
PREFERRED_KEYWORDS = [
    "NotoSansTC", "Noto Sans TC",
    "NotoSansCJK", "Noto Sans CJK",
    "SourceHanSans", "Source Han Sans", "思源黑體",
]

def _score_font(path: str) -> int:
    """根據檔名是否包含偏好關鍵字給分，越高越優先。"""
    name = os.path.basename(path)
    score = 0
    for i, kw in enumerate(PREFERRED_KEYWORDS):
        if kw.lower().replace(" ", "") in name.lower().replace(" ", ""):
            score += (len(PREFERRED_KEYWORDS) - i) * 10
    score += max(0, 50 - len(name))  # 短檔名稍加分
    return score

def _discover_font(root: str) -> Optional[str]:
    """在 root（含子資料夾）尋找第一個合適字型，依 score 決勝。"""
    if not os.path.isdir(root):
        return None
    candidates = []
    for r, _, files in os.walk(root):
        for f in files:
            if f.lower().endswith(FONT_EXTS):
                p = os.path.join(r, f)
                candidates.append((p, _score_font(p)))
    if not candidates:
        return None
    candidates.sort(key=lambda x: (-x[1], x[0]))
    return candidates[0][0]

DEFAULT_ZH_FONT = _discover_font(FONTS_DIR)
DEFAULT_EN_FONT = None  # 英文不用指定字型

# ✅ 不再顯示「請設 FONT_ZH_PATH」的 warning
