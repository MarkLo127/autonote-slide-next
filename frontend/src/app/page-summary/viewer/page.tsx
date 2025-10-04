"use client";

import { useMemo } from "react";

type SearchParamValue = string | string[] | undefined;

type PageSummaryPayload = {
  page_number: number;
  classification: string;
  bullets: string[];
  keywords: string[];
  skipped: boolean;
  skip_reason?: string | null;
  language?: string | null;
  total_pages?: number;
  document_title?: string | null;
};

type PageSummaryViewerProps = {
  searchParams?: {
    data?: SearchParamValue;
  };
};

const toSingleValue = (value: SearchParamValue) => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return value ?? "";
};

const classificationMap: Record<string, string> = {
  normal: "一般內容",
  toc: "目錄頁",
  pure_image: "純圖片",
  blank: "空白/水印",
  cover: "封面",
};

const parsePayload = (raw: string): PageSummaryPayload | null => {
  if (!raw) return null;
  try {
    let decoded = raw;
    if (raw.includes("%")) {
      try {
        decoded = decodeURIComponent(raw);
      } catch (err) {
        console.warn("逐頁檢視器解碼失敗，將使用原始資料", err);
        decoded = raw;
      }
    }
    return JSON.parse(decoded) as PageSummaryPayload;
  } catch (err) {
    console.error("解析逐頁重點資料失敗", err, raw);
    return null;
  }
};

export default function PageSummaryViewer({ searchParams }: PageSummaryViewerProps) {
  const rawData = toSingleValue(searchParams?.data);

  const payload = useMemo(() => parsePayload(rawData), [rawData]);

  if (!payload) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-200">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-8 py-10 text-center">
          <h1 className="text-xl font-semibold text-white">找不到逐頁摘要資料</h1>
          <p className="mt-3 text-sm text-slate-400">
            請從分析頁面的「放大查看」重新開啟此標籤頁。
          </p>
        </div>
      </div>
    );
  }

  const {
    page_number: pageNumber,
    classification,
    bullets,
    keywords,
    skipped,
    skip_reason: skipReason,
    language,
    total_pages: totalPages,
    document_title: documentTitle,
  } = payload;

  const classificationLabel = classificationMap[classification] ?? classification;
  const languageLabel = language ? language.toUpperCase() : null;

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Page Summary Viewer</p>
            <h1 className="text-lg font-semibold text-white">
              {documentTitle || `第 ${pageNumber} 頁重點`}
            </h1>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
              <span>頁碼：第 {pageNumber} 頁{typeof totalPages === "number" ? `／共 ${totalPages} 頁` : ""}</span>
              <span>分類：{classificationLabel}</span>
              {languageLabel ? <span>語言：{languageLabel}</span> : null}
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex flex-1 justify-center overflow-auto bg-slate-950 px-6 py-10">
          <div className="w-full max-w-3xl space-y-8">
            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">
              <h2 className="text-base font-semibold text-white">重點摘要</h2>
              {bullets.length ? (
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
                  {bullets.map((item, index) => (
                    <li
                      key={`${pageNumber}-bullet-${index}`}
                      className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 shadow-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-slate-400">此頁暫無摘要內容。</p>
              )}
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">
              <h2 className="text-base font-semibold text-white">關鍵字</h2>
              {keywords.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {keywords.map((kw, index) => (
                    <span
                      key={`${pageNumber}-keyword-${index}`}
                      className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-slate-400">此頁暫無關鍵字。</p>
              )}
            </section>

            {skipped && skipReason ? (
              <section className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-6 shadow-lg">
                <h2 className="text-base font-semibold text-amber-200">跳過原因</h2>
                <p className="mt-3 text-sm text-amber-100">{skipReason}</p>
              </section>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

