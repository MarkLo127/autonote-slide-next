from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["health"])

@router.get("")
def ok():
    return {"status": "ok"}

@router.get("/debug/paths")
def debug_paths():
    from backend.app.core.config import BASE_DIR, STORAGE_DIR, UPLOAD_DIR, WORDCLOUD_DIR, FONTS_DIR, DEFAULT_ZH_FONT
    return {
        "BASE_DIR": BASE_DIR,
        "STORAGE_DIR": STORAGE_DIR,
        "UPLOAD_DIR": UPLOAD_DIR,
        "WORDCLOUD_DIR": WORDCLOUD_DIR,
        "FONTS_DIR": FONTS_DIR,
        "DEFAULT_ZH_FONT": DEFAULT_ZH_FONT,
    }