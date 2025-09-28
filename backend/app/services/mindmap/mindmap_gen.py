import os
import re
import unicodedata
from collections import Counter
from datetime import datetime
from typing import Dict, List, Sequence, Tuple

from backend.app.core.config import MINDMAP_DIR

try:  # pragma: no cover - 若外部提供工具則直接沿用
    from backend.app.services.wordcloud.annotator import safe_slug  # type: ignore
except ImportError:  # pragma: no cover - 本地 fallback
    safe_slug = None  # type: ignore


def _fallback_slug(value: str) -> str:
    """簡易 slugify：去除非 ASCII 字元並轉成連字號。"""
    normalized = unicodedata.normalize("NFKD", value or "")
    ascii_only = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^A-Za-z0-9]+", "-", ascii_only).strip("-")
    return slug.lower()


def _sanitize_label(text: str, limit: int = 60) -> str:
    """壓縮空白、限制長度並移除不合適字元。"""
    collapsed = " ".join((text or "").split())
    if limit and len(collapsed) > limit:
        collapsed = collapsed[: limit - 1].rstrip() + "…"
    return collapsed.replace("\"", "'")


def _paragraph_text(paragraph: Dict | object) -> str:
    if isinstance(paragraph, dict):
        return paragraph.get("text", "")
    return getattr(paragraph, "text", "")


def infer_doc_title(paragraphs: Sequence, fallback: str = "Document", limit: int = 80) -> str:
    """從段落中推測文件標題，若無則退回檔名/預設值。"""
    for item in paragraphs:
        candidate = _sanitize_label(_paragraph_text(item), limit)
        if len(candidate) >= 4:
            return candidate
    return _sanitize_label(fallback, limit)


def _top_keywords(paragraph_keywords: List[Dict], top_k: int = 8) -> List[str]:
    bag = Counter()
    for item in paragraph_keywords:
        for kw in item.get("keywords", []):
            if not kw:
                continue
            bag[kw.strip()] += 1
    return [w for w, _ in bag.most_common(top_k)]


def _related_keywords(
    focus_kw: str,
    paragraph_keywords: List[Dict],
    max_items: int,
) -> List[str]:
    """找出與主關鍵字同段落出現的其它關鍵字（去重）。"""
    related: List[str] = []
    seen = set()
    focus_lower = focus_kw.lower()
    for item in paragraph_keywords:
        kws = [w.strip() for w in item.get("keywords", []) if w and w.strip()]
        if not any(w.lower() == focus_lower for w in kws):
            continue
        for cand in kws:
            cand_lower = cand.lower()
            if cand_lower == focus_lower or cand_lower in seen:
                continue
            seen.add(cand_lower)
            related.append(cand)
            if len(related) >= max_items:
                return related
    return related


def _primary_token(text: str) -> str | None:
    tokens = re.findall(r"[A-Za-z0-9][A-Za-z0-9\-_/]*", text or "")
    for token in tokens:
        if token:
            return token
    return None


def select_root_label(paragraph_keywords: List[Dict], fallback: str = "Document") -> str:
    """根據關鍵字頻率挑選心智圖根節點標籤，優先使用 fallback 中的主要關鍵字。"""
    fallback_token = _primary_token(fallback)
    if fallback_token:
        fallback_token = _sanitize_label(fallback_token, limit=40)
        lower = fallback_token.lower()
        for item in paragraph_keywords:
            for kw in item.get("keywords", []):
                if kw and kw.lower() == lower:
                    return _sanitize_label(kw, limit=40)
        return fallback_token

    top = _top_keywords(paragraph_keywords, top_k=1)
    if top:
        return _sanitize_label(top[0], limit=40)
    return _sanitize_label(fallback, limit=40)


def build_mermaid_mindmap(
    doc_title: str,
    paragraph_keywords: List[Dict],
    top_k: int = 8,
    max_refs_per_kw: int = 5,
) -> str:
    """
    產生 Mermaid mindmap 文字：
    mindmap
      root)Title(
        Keyword A
          Related kw1
          Related kw2
        Keyword B
          ...
    """
    root_label = select_root_label(paragraph_keywords, doc_title or "Document")
    keywords = _top_keywords(paragraph_keywords, top_k=top_k)

    lines = ["mindmap", f"  root){root_label}("]
    for idx, kw in enumerate(keywords):
        side_prefix = "::left:: " if idx % 2 else "::right:: "
        kw_label = _sanitize_label(kw, limit=40)
        lines.append(f"    {side_prefix}{kw_label}")
        related = _related_keywords(kw, paragraph_keywords, max_refs_per_kw)
        for rel in related:
            lines.append(f"      {_sanitize_label(rel, limit=40)}")
    return "\n".join(lines)


def build_graphviz_mindmap(
    doc_title: str,
    paragraph_keywords: List[Dict],
    top_k: int = 8,
    max_refs_per_kw: int = 5,
):
    try:
        from graphviz import Digraph
    except ImportError:  # pragma: no cover - optional dependency
        return None

    root_label = select_root_label(paragraph_keywords, doc_title)
    keywords = _top_keywords(paragraph_keywords, top_k=top_k)

    graph = Digraph(
        "mindmap",
        graph_attr={
            "rankdir": "LR",
            "splines": "true",
            "nodesep": "0.9",
            "ranksep": "1.1",
            "size": "8,8!",
            "ratio": "fill",
            "pad": "0.6",
            "dpi": "220",
        },
        node_attr={"fontname": "Helvetica", "fontsize": "13"},
        edge_attr={"arrowsize": "0.6"},
    )

    graph.node(
        "root",
        root_label,
        shape="oval",
        style="filled",
        fillcolor="#1a73e8",
        fontcolor="#ffffff",
        fontsize="15",
    )

    for idx, kw in enumerate(keywords):
        kw_id = f"kw{idx}"
        kw_label = _sanitize_label(kw, limit=40)
        graph.node(
            kw_id,
            kw_label,
            shape="box",
            style="rounded,filled",
            fillcolor="#E8F0FE",
            color="#1a73e8",
        )

        is_right_side = (idx % 2 == 0)
        if is_right_side:
            graph.edge("root", kw_id)
        else:
            graph.edge(kw_id, "root")

        related = _related_keywords(kw, paragraph_keywords, max_refs_per_kw)
        for ridx, rel in enumerate(related):
            rel_id = f"{kw_id}_{ridx}"
            graph.node(
                rel_id,
                _sanitize_label(rel, limit=40),
                shape="box",
                style="rounded,filled",
                fillcolor="#FFF7AE",
                color="#F4B400",
                fontsize="11",
            )
            if is_right_side:
                graph.edge(kw_id, rel_id)
            else:
                graph.edge(rel_id, kw_id)

    return graph


def save_graphviz_png(graph, name_hint: str = "mindmap") -> Tuple[str | None, str | None]:
    if graph is None:
        return None, None

    os.makedirs(MINDMAP_DIR, exist_ok=True)
    ts = datetime.utcnow().strftime("%Y%m%d%H%M%S%f")
    slug = safe_slug(name_hint) if callable(safe_slug) else None
    slug = slug or _fallback_slug(name_hint) or "mindmap"
    filename = f"{slug}_{ts}"
    output_path = os.path.join(MINDMAP_DIR, filename)
    try:
        rendered = graph.render(output_path, format="png", cleanup=True)
    except Exception as exc:  # pragma: no cover - graphviz runtime failure
        raise RuntimeError(f"Graphviz render failed: {exc}") from exc
    return rendered, os.path.basename(rendered)


def save_mermaid(mmd_text: str, name_hint: str = "mindmap") -> Tuple[str, str]:
    """
    將 .mmd 存到 storage/mindmaps，回傳 (abs_path, filename)
    """
    os.makedirs(MINDMAP_DIR, exist_ok=True)
    ts = datetime.utcnow().strftime("%Y%m%d%H%M%S%f")
    slug = safe_slug(name_hint) if callable(safe_slug) else None
    slug = slug or _fallback_slug(name_hint) or "mindmap"
    fname = f"{slug}_{ts}.mmd"
    abs_path = os.path.join(MINDMAP_DIR, fname)
    with open(abs_path, "w", encoding="utf-8") as f:
        f.write(mmd_text)
    return abs_path, fname
