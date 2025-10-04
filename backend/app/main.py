from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse, PlainTextResponse
import os

from backend.app.routes import analyze, health, mindmap
from backend.app.core.config import ASSETS_DIR, ASSETS_MOUNT, STATIC_DIR, STATIC_MOUNT

app = FastAPI(
    title="AutoNoteSlide API",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)

# ===== CORS =====
# 開發期先放寬；上線後建議改為你的前端網域，例如：
# allow_origins = ["http://localhost:3000", "https://your-frontend.example"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== 靜態檔（文字雲、上傳預覽）=====
# check_dir=False：就算 storage/ 尚未存在也能啟動
app.mount(STATIC_MOUNT, StaticFiles(directory=STATIC_DIR, check_dir=False), name="static")
app.mount(ASSETS_MOUNT, StaticFiles(directory=ASSETS_DIR, check_dir=False), name="assets")

# ===== 首頁導向到 /docs =====
@app.get("/", include_in_schema=False)
def root():
    return RedirectResponse(url="/docs")

# ===== 上傳大小限制（預設 50MB，可用環境變數 MAX_BODY_MB 覆寫）=====
_MAX_MB = int(os.getenv("MAX_BODY_MB", "50"))
MAX_BODY = _MAX_MB * 1024 * 1024

@app.middleware("http")
async def limit_upload_size(request: Request, call_next):
    try:
        content_length = int(request.headers.get("content-length") or 0)
    except ValueError:
        content_length = 0
    if content_length > MAX_BODY:
        return PlainTextResponse(f"Payload too large (> {_MAX_MB} MB)", status_code=413)
    return await call_next(request)

# ===== 掛載路由 =====
app.include_router(health.router)
app.include_router(analyze.router)
app.include_router(mindmap.router)