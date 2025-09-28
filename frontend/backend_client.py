# === 1) 自動尋找含 backend/ 的專案根目錄，加入 sys.path ===
import sys
from pathlib import Path

_here = Path(__file__).resolve()
for parent in [_here.parent, *_here.parents]:
    if (parent / "backend").exists():
        if str(parent) not in sys.path:
            sys.path.insert(0, str(parent))
        break
# === end of sys.path patch ===

# === 2) 你的原本匯入（保持不變）===
import asyncio
import json
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path as _Path
from typing import Any, Dict, List

import streamlit as st
import streamlit.components.v1 as components
from PIL import Image, UnidentifiedImageError

# === 專案引用（保持你原本的匯入）===
from backend.app.core.config import UPLOAD_DIR
from backend.app.models.schemas import LLMSettings
from backend.app.services.nlp.keyword_extractor import extract_keywords_by_paragraph
from backend.app.services.nlp.language_detect import detect_lang
from backend.app.services.nlp.segmenter import ensure_offsets_if_needed
from backend.app.services.nlp.summarizer import (
    summarize_by_paragraph,
    summarize_global,
)
from backend.app.services.parsing.file_loader import load_file_as_text_and_paragraphs
from backend.app.services.mindmap.mindmap_gen import (
    build_graphviz_mindmap,
    build_mermaid_mindmap,
    infer_doc_title,
    save_graphviz_png,
    select_root_label,
    save_mermaid,
)
from backend.app.services.storage import make_public_url
from backend.app.services.wordcloud.wordcloud_gen import build_wordcloud


class process:
    # === 狀態初始化：在 session_state 建立分析結果容器 ===
    @staticmethod
    def _ensure_state():
        if "analysis_results" not in st.session_state:
            st.session_state["analysis_results"] = {}

    # === 同步執行 async 協程（在 Streamlit 下安全執行）===
    @staticmethod
    def _run_sync(coro):
        try:
            loop = asyncio.get_running_loop()
        except RuntimeError:
            return asyncio.run(coro)
        else:
            return loop.run_until_complete(coro)

    # === 將 Streamlit 上傳物件寫入 UPLOAD_DIR，並回傳檔案路徑 ===
    @staticmethod
    def _save_streamlit_upload(uploaded_file) -> str:
        os.makedirs(UPLOAD_DIR, exist_ok=True)
        suffix = _Path(uploaded_file.name).suffix or ""
        filename = f"up_{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S%f')}{suffix}"
        output_path = _Path(UPLOAD_DIR) / filename
        output_path.write_bytes(uploaded_file.getbuffer())
        return str(output_path)

    # === 將段落物件安全轉為 dict（兼容 pydantic / 一般物件）===
    @staticmethod
    def _paragraph_to_dict(paragraph) -> Dict[str, Any]:
        if hasattr(paragraph, "model_dump"):
            data = paragraph.model_dump()
        else:
            data = {
                "index": getattr(paragraph, "index", 0),
                "text": getattr(paragraph, "text", ""),
                "start_char": getattr(paragraph, "start_char", 0),
                "end_char": getattr(paragraph, "end_char", 0),
            }
        data.setdefault("text", "")
        return data

    @staticmethod
    def _render_doc_header(res: Dict[str, Any]):
        title = (res.get("doc_title") or res.get("file_name") or "未命名").strip()
        st.markdown(f"### 📄 {title}")
        original = res.get("file_name")
        if original and original != title:
            st.caption(f"原始檔名：{original}")

    @staticmethod
    def _render_mermaid_diagram(mermaid_code: str):
        if not mermaid_code:
            return
        element_id = f"mindmap_{uuid.uuid4().hex}"
        graph_json = json.dumps(mermaid_code)
        components.html(
            f"""
            <div id="{element_id}" style="width: 100%;"></div>
            <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
            <script>
              const graphDefinition = {graph_json};
              const mount = document.getElementById("{element_id}");
              const renderMindmap = () => {{
                if (!window.mermaid) {{
                  setTimeout(renderMindmap, 60);
                  return;
                }}
                try {{
                  mermaid.initialize({{ startOnLoad: false }});
                  mermaid.render("{element_id}_svg", graphDefinition, (svgCode) => {{
                    mount.innerHTML = svgCode;
                  }});
                }} catch (err) {{
                  console.error('Mermaid render error', err);
                }}
              }};
              renderMindmap();
            </script>
            """,
            height=600,
            scrolling=True,
        )

    # === 核心：分析文件（全局摘要、段落摘要、關鍵字、文字雲路徑）===
    @staticmethod
    def analyze_document(uploaded_file, settings: LLMSettings) -> Dict[str, Any]:
        result: Dict[str, Any] = {"file_name": uploaded_file.name}

        # 1) 讀檔與文字解析
        try:
            saved_path = process._save_streamlit_upload(uploaded_file)
            full_text, paragraphs = load_file_as_text_and_paragraphs(saved_path)
        except ValueError as exc:
            result["error"] = str(exc)
            return result
        except Exception as exc:  # pylint: disable=broad-except
            result["error"] = f"上傳檔案處理失敗：{exc}"
            return result

        if not full_text.strip():
            result["error"] = "解析不到文字內容，可能是掃描影像或受保護文件。"
            return result

        # 2) 語言偵測與段落偏移補全
        lang = detect_lang(full_text)
        paragraphs = ensure_offsets_if_needed(full_text, paragraphs)
        doc_title = infer_doc_title(paragraphs, uploaded_file.name)
        paragraph_dicts = [process._paragraph_to_dict(p) for p in paragraphs]

        # 3) LLM 摘要（全局 + 段落）
        try:
            global_summary = process._run_sync(summarize_global(full_text, settings))
            paragraph_summaries = process._run_sync(
                summarize_by_paragraph(paragraphs, settings)
            )
        except Exception as exc:  # pylint: disable=broad-except
            result["error"] = f"LLM 呼叫失敗：{exc}"
            return result

        paragraph_summaries = [
            {"paragraph_index": item["paragraph_index"], "summary": item["summary"]}
            for item in paragraph_summaries
        ]

        # 4) 關鍵字（逐段）
        paragraph_keywords = extract_keywords_by_paragraph(paragraphs, lang)
        paragraph_keywords = [
            {
                "paragraph_index": item["paragraph_index"],
                "keywords": item.get("keywords", []),
            }
            for item in paragraph_keywords
        ]

        # 5) 主要標題取關鍵字（若無則沿用）
        doc_title = select_root_label(paragraph_keywords, doc_title)
        result["doc_title"] = doc_title

        # 6) 文字雲（若失敗則記錄錯誤訊息）
        wordcloud_path = None
        wordcloud_error = None
        try:
            wordcloud_path = build_wordcloud(paragraph_keywords, lang)
        except RuntimeError as exc:
            wordcloud_error = str(exc)

        # 7) 心智圖（Mermaid + 圖片 + 下載連結）
        mindmap_mermaid = ""
        mindmap_file_url: str | None = None
        mindmap_error: str | None = None
        mindmap_image_path: str | None = None
        mindmap_image_url: str | None = None
        try:
            mindmap_mermaid = build_mermaid_mindmap(doc_title, paragraph_keywords)
            mindmap_abs, _ = save_mermaid(mindmap_mermaid, name_hint=doc_title)
            mindmap_file_url = make_public_url(mindmap_abs)

            graph = build_graphviz_mindmap(doc_title, paragraph_keywords)
            png_path, _ = save_graphviz_png(graph, name_hint=doc_title)
            if png_path:
                mindmap_image_path = png_path
                mindmap_image_url = make_public_url(png_path)
        except Exception as exc:  # pylint: disable=broad-except
            mindmap_error = f"心智圖生成失敗：{exc}"

        # 8) 組裝結果
        result.update(
            {
                "language": lang,
                "paragraphs": paragraph_dicts,
                "global_summary": global_summary,
                "paragraph_summaries": paragraph_summaries,
                "paragraph_keywords": paragraph_keywords,
                "wordcloud_path": wordcloud_path,
                "wordcloud_error": wordcloud_error,
                "doc_title": doc_title,
                "mindmap_mermaid": mindmap_mermaid,
                "mindmap_file_url": mindmap_file_url,
                "mindmap_image_path": mindmap_image_path,
                "mindmap_image_url": mindmap_image_url,
                "mindmap_error": mindmap_error,
            }
        )
        return result

    # === 顯示：文字雲（僅於關鍵字頁顯示）===
    @staticmethod
    def render_wordcloud(path: str, error: str | None):
        if path:
            try:
                with Image.open(path) as img:
                    st.image(img, caption="文字雲", use_container_width=True)
            except (FileNotFoundError, UnidentifiedImageError):
                st.warning("文字雲圖片讀取失敗，請重新生成。")
        elif error:
            st.warning(error)

    # === 顯示頁：摘要整理（只顯示摘要，不顯示關鍵字/文字雲/心智圖）===
    @staticmethod
    def render_summary_view(results: List[Dict[str, Any]]):
        if not results:
            st.info("尚未產生摘要，請先上傳文件並點擊「開始摘要整理」。")
            return

        for res in results:
            st.divider()
            process._render_doc_header(res)
            if res.get("error"):
                st.error(res["error"])
                continue

            st.caption(f"語言偵測：{res['language']}")
            st.markdown("**全局摘要**")
            st.write(res["global_summary"])

            with st.expander("段落摘要", expanded=False):
                for item in res["paragraph_summaries"]:
                    idx = item["paragraph_index"] + 1
                    st.markdown(f"**第 {idx} 段**")
                    st.write(item["summary"])

    # === 顯示頁：關鍵字擷取（只顯示關鍵字表與文字雲）===
    @staticmethod
    def render_keywords_view(results: List[Dict[str, Any]]):
        if not results:
            st.info("尚未擷取關鍵字，請先上傳文件並點擊「開始關鍵字擷取」。")
            return

        for res in results:
            st.divider()
            process._render_doc_header(res)
            if res.get("error"):
                st.error(res["error"])
                continue

            table_rows = [
                {
                    "段落": item["paragraph_index"] + 1,
                    "關鍵字": "、".join(item.get("keywords", [])) or "無",
                }
                for item in res["paragraph_keywords"]
            ]
            st.dataframe(table_rows, use_container_width=True)
            process.render_wordcloud(res.get("wordcloud_path") or "", res.get("wordcloud_error"))

    # === 顯示頁：心智圖生成（顯示 Mermaid mindmap 與下載連結）===
    @staticmethod
    def render_mindmap_view(results: List[Dict[str, Any]]):
        if not results:
            st.info("尚未生成心智圖，請先上傳文件並點擊「開始生成心智圖」。")
            return

        for res in results:
            st.divider()
            process._render_doc_header(res)
            if res.get("error"):
                st.error(res["error"])
                continue

            mermaid = (res.get("mindmap_mermaid") or "").strip()
            download_url = res.get("mindmap_file_url") or ""
            mindmap_error = res.get("mindmap_error")
            image_path = res.get("mindmap_image_path") or ""
            image_url = res.get("mindmap_image_url") or ""
            if mindmap_error:
                st.warning(mindmap_error)

            if image_path and os.path.exists(image_path):
                st.image(image_path, caption="心智圖", use_container_width=True)
            elif image_url:
                st.image(image_url, caption="心智圖", use_container_width=True)
            elif mermaid:
                process._render_mermaid_diagram(mermaid)
            elif not mindmap_error:
                st.info("尚無心智圖內容，請確認關鍵字是否產生成功。")
