"use client";

import { useMemo, useState } from "react";

const clamp = (value: number, min: number, max: number) => {
  if (Number.isNaN(value)) return min;
  return Math.min(Math.max(value, min), max);
};

type SearchParamValue = string | string[] | undefined;

type MindmapViewerProps = {
  searchParams?: {
    image?: SearchParamValue;
    title?: SearchParamValue;
    lang?: SearchParamValue;
    file?: SearchParamValue;
    viewer?: SearchParamValue;
  };
};

const toSingleValue = (value: SearchParamValue) => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
};

const VIEWER_DEFAULTS: Record<string, { header: string; title: string; downloadLabel: string }> = {
  mindmap: {
    header: "Mindmap Viewer",
    title: "心智圖放大檢視",
    downloadLabel: "下載 Mermaid 檔",
  },
  wordcloud: {
    header: "Wordcloud Viewer",
    title: "文字雲放大檢視",
    downloadLabel: "下載原始檔",
  },
  default: {
    header: "Image Viewer",
    title: "圖像放大檢視",
    downloadLabel: "下載原始檔",
  },
};

export default function MindmapViewer({ searchParams }: MindmapViewerProps) {
  const imageUrl = toSingleValue(searchParams?.image);
  const viewerMode = toSingleValue(searchParams?.viewer)?.toLowerCase() || "mindmap";
  const viewerConfig = VIEWER_DEFAULTS[viewerMode] ?? VIEWER_DEFAULTS.default;
  const title = toSingleValue(searchParams?.title) || viewerConfig.title;
  const lang = toSingleValue(searchParams?.lang);
  const fileUrl = toSingleValue(searchParams?.file);

  const [scale, setScale] = useState(1);

  const headerSubtitle = useMemo(() => {
    if (!lang) return undefined;
    return `語言：${lang.toUpperCase()}`;
  }, [lang]);

  const handleZoom = (delta: number) => {
    setScale((prev) => {
      const next = clamp(Math.round((prev + delta) * 100) / 100, 0.3, 3);
      return next;
    });
  };

  if (!imageUrl) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-200">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-8 py-10 text-center">
          <h1 className="text-xl font-semibold text-white">找不到圖像資源</h1>
          <p className="mt-3 text-sm text-slate-400">
            請確保從分析頁面透過「放大查看」開啟此頁面。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{viewerConfig.header}</p>
            <h1 className="text-lg font-semibold text-white">{title}</h1>
            {headerSubtitle ? (
              <p className="text-sm text-slate-400">{headerSubtitle}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {fileUrl ? (
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400 hover:text-white"
              >
                {viewerConfig.downloadLabel}
              </a>
            ) : null}
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-2 py-1 text-xs text-slate-400">
              <span>Ctrl / ⌘ + 滑鼠滾輪 可縮放</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleZoom(0.2)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400 hover:text-white"
              >
                放大
              </button>
              <button
                type="button"
                onClick={() => handleZoom(-0.2)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400 hover:text-white"
              >
                縮小
              </button>
              <button
                type="button"
                onClick={() => setScale(1)}
                className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-400 hover:text-white"
              >
                重置
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div
          className="relative flex-1 overflow-auto bg-slate-950"
          onWheel={(event) => {
            if (!event.ctrlKey && !event.metaKey) return;
            event.preventDefault();
            const delta = event.deltaY < 0 ? 0.15 : -0.15;
            handleZoom(delta);
          }}
        >
          <div className="flex min-h-full justify-center">
            <div
              className="flex items-center justify-center p-8"
              style={{ transform: `scale(${scale})`, transformOrigin: "center top" }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="max-w-none rounded-xl border border-slate-800 bg-slate-900 shadow-2xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
