import os
from datetime import datetime, timezone

from fastapi import UploadFile

from backend.app.core.config import UPLOAD_DIR, STATIC_MOUNT

def save_upload(file: UploadFile) -> str:
    # ✅ 用到時才建
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    ts = datetime.now(timezone.utc).strftime("%Y%m%d%H%M%S%f")
    _, ext = os.path.splitext(file.filename)
    path = os.path.join(UPLOAD_DIR, f"up_{ts}{ext}")
    with open(path, "wb") as f:
        f.write(file.file.read())
    return path

def make_public_url(abs_path: str) -> str:
    # e.g. storage/wordclouds/xxx.png -> /static/wordclouds/xxx.png
    rel = abs_path.replace("\\", "/").split("storage/")[-1]
    return f"{STATIC_MOUNT}/{rel}"
