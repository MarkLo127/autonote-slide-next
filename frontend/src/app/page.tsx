"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type DragEvent,
} from "react";
import Image from "next/image";

type Paragraph = {
  index: number;
  text: string;
  start_char: number;
  end_char: number;
};

type SummaryItem = {
  paragraph_index: number;
  summary: string;
};

type KeywordItem = {
  paragraph_index: number;
  keywords: string[];
};

type AnalyzeResponse = {
  language: string;
  paragraphs: Paragraph[];
  global_summary: string;
  paragraph_summaries: SummaryItem[];
  paragraph_keywords: KeywordItem[];
  wordcloud_image_url: string | null;
};

type MindmapResponse = {
  language: string;
  paragraphs: Paragraph[];
  paragraph_keywords: KeywordItem[];
  doc_title: string;
  mindmap_mermaid: string;
  mindmap_file_url: string | null;
  mindmap_image_url: string | null;
  mindmap_image_file: string | null;
  source_upload_url?: string | null;
};

type FeatureKey = "summary" | "keywords" | "mindmap";
type PreviewTab = "upload" | "analysis";
type FilePreviewKind = "none" | "pdf" | "text" | "image" | "generic";

const rawBackendOrigin =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:8000";
const BACKEND_BASE = rawBackendOrigin.replace(/\/$/, "");
const ANALYZE_ENDPOINT = `${BACKEND_BASE}/analyze`;
const MINDMAP_ENDPOINT = `${BACKEND_BASE}/mindmap`;

const normalizeOptionalUrl = (url: string) =>
  url ? url.trim().replace(/\/$/, "") : "";

const toAbsoluteUrl = (url: string | null | undefined): string | null => {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/")) return `${BACKEND_BASE}${url}`;
  return `${BACKEND_BASE}/${url}`;
};

const featureConfigs: Array<{
  key: FeatureKey;
  label: string;
  description: string;
  icon: string;
  accent: string;
}> = [
  {
    key: "summary",
    label: "摘要整理",
    description: "自動彙整重點內容",
    icon: "📝",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    key: "keywords",
    label: "關鍵字擷取",
    description: "擷取每段文字焦點",
    icon: "🔍",
    accent: "from-emerald-500 to-green-500",
  },
  {
    key: "mindmap",
    label: "心智圖生成",
    description: "建立視覺化脈絡",
    icon: "🧠",
    accent: "from-orange-500 to-amber-500",
  },
];

const fileTypes = [
  { label: "PDF", color: "text-rose-500" },
  { label: "PPT", color: "text-orange-500" },
  { label: "PPTX", color: "text-orange-400" },
  { label: "DOC", color: "text-blue-500" },
  { label: "DOCX", color: "text-blue-400" },
  { label: "MD", color: "text-emerald-500" },
  { label: "TXT", color: "text-slate-500" },
];

const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  return `${value.toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
};

const isPdfFile = (file: File) =>
  file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

const isTextFile = (file: File) => {
  const lower = file.name.toLowerCase();
  return (
    file.type.startsWith("text/") ||
    lower.endsWith(".txt") ||
    lower.endsWith(".md") ||
    lower.endsWith(".csv")
  );
};

const isImageFile = (file: File) => file.type.startsWith("image/");

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isMindmapLoading, setIsMindmapLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeResponse | null>(
    null,
  );
  const [mindmapResult, setMindmapResult] = useState<MindmapResponse | null>(
    null,
  );
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("summary");
  const [previewTab, setPreviewTab] = useState<PreviewTab>("upload");
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [filePreviewType, setFilePreviewType] =
    useState<FilePreviewKind>("none");
  const [filePreviewContent, setFilePreviewContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [mindmapError, setMindmapError] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [llmBaseUrl, setLlmBaseUrl] = useState("");
  const [hasLoadedSettings, setHasLoadedSettings] = useState(false);
  const fileInputId = useId();
  const uploadHelpId = `${fileInputId}-help`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedKey = window.localStorage.getItem("autonote:llmApiKey") ?? "";
    const storedBase = window.localStorage.getItem("autonote:llmBaseUrl") ?? "";
    setApiKey(storedKey);
    setLlmBaseUrl(storedBase);
    setHasLoadedSettings(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedSettings || typeof window === "undefined") return;
    window.localStorage.setItem("autonote:llmApiKey", apiKey);
  }, [apiKey, hasLoadedSettings]);

  useEffect(() => {
    if (!hasLoadedSettings || typeof window === "undefined") return;
    window.localStorage.setItem("autonote:llmBaseUrl", llmBaseUrl);
  }, [llmBaseUrl, hasLoadedSettings]);

  useEffect(() => {
    let objectUrl: string | null = null;
    let cancelled = false;

    if (!selectedFiles.length) {
      setFilePreviewUrl(null);
      setFilePreviewType("none");
      setFilePreviewContent("");
      setPreviewTab("upload");
      return () => {
        if (objectUrl) {
          URL.revokeObjectURL(objectUrl);
        }
      };
    }

    const file = selectedFiles[0];
    setPreviewTab("upload");

    if (isPdfFile(file)) {
      objectUrl = URL.createObjectURL(file);
      if (!cancelled) {
        setFilePreviewUrl(objectUrl);
        setFilePreviewType("pdf");
        setFilePreviewContent("");
      }
    } else if (isTextFile(file)) {
      const reader = new FileReader();
      reader.onload = () => {
        if (!cancelled) {
          setFilePreviewContent((reader.result as string) ?? "");
          setFilePreviewUrl(null);
          setFilePreviewType("text");
        }
      };
      reader.readAsText(file, "utf-8");
    } else if (isImageFile(file)) {
      objectUrl = URL.createObjectURL(file);
      if (!cancelled) {
        setFilePreviewUrl(objectUrl);
        setFilePreviewType("image");
        setFilePreviewContent("");
      }
    } else {
      objectUrl = URL.createObjectURL(file);
      if (!cancelled) {
        setFilePreviewUrl(objectUrl);
        setFilePreviewType("generic");
        setFilePreviewContent("");
      }
    }

    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [selectedFiles]);

  const handleFilesSelected = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files).slice(0, 5);
    if (fileArray.length === 0) return;
    setSelectedFiles(fileArray);
    setError(null);
    setMindmapError(null);
    setAnalysisResult(null);
    setMindmapResult(null);
    setActiveFeature("summary");
    setPreviewTab("upload");
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDragging(false);
      if (event.dataTransfer?.files) {
        handleFilesSelected(event.dataTransfer.files);
      }
    },
    [handleFilesSelected],
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragging(false);
  }, []);

  const selectedFileName = selectedFiles[0]?.name ?? "";

  const handleAnalyze = useCallback(async () => {
    if (!selectedFiles.length) {
      setError("請先選擇要上傳的檔案");
      return;
    }
    if (!apiKey.trim()) {
      setError("請先於右上角設定 API Key");
      setSettingsOpen(true);
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setMindmapError(null);
    setActiveFeature("summary");

    try {
      const formData = new FormData();
      formData.append("file", selectedFiles[0]);
      formData.append("llm_api_key", apiKey);
      const cleanedBase = normalizeOptionalUrl(llmBaseUrl);
      if (cleanedBase) {
        formData.append("llm_base_url", cleanedBase);
      }

      const response = await fetch(ANALYZE_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "分析失敗，請稍後再試");
      }

      const data = (await response.json()) as AnalyzeResponse;
      const normalized: AnalyzeResponse = {
        ...data,
        wordcloud_image_url: toAbsoluteUrl(data.wordcloud_image_url),
      };
      setAnalysisResult(normalized);
      setMindmapResult(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "分析時發生未知錯誤";
      setError(message);
      setAnalysisResult(null);
      setMindmapResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  }, [selectedFiles, apiKey, llmBaseUrl]);

  const ensureMindmap = useCallback(async () => {
    if (!selectedFiles.length) {
      setMindmapError("請先選擇檔案");
      return;
    }
    if (mindmapResult || isMindmapLoading) return;

    setMindmapError(null);
    setIsMindmapLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFiles[0]);
      if (apiKey.trim()) {
        formData.append("llm_api_key", apiKey);
      }
      const cleanedBase = normalizeOptionalUrl(llmBaseUrl);
      if (cleanedBase) {
        formData.append("llm_base_url", cleanedBase);
      }

      const response = await fetch(MINDMAP_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "心智圖生成失敗");
      }

      const data = (await response.json()) as MindmapResponse;
      const normalized: MindmapResponse = {
        ...data,
        mindmap_file_url: toAbsoluteUrl(data.mindmap_file_url),
        mindmap_image_url: toAbsoluteUrl(data.mindmap_image_url),
        source_upload_url: toAbsoluteUrl(data.source_upload_url),
      };
      setMindmapResult(normalized);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "心智圖生成時發生未知錯誤";
      setMindmapError(message);
      setMindmapResult(null);
    } finally {
      setIsMindmapLoading(false);
    }
  }, [selectedFiles, mindmapResult, isMindmapLoading, apiKey, llmBaseUrl]);

  const handleFeatureSelect = useCallback(
    async (feature: FeatureKey) => {
      setActiveFeature(feature);
      if (feature === "mindmap") {
        await ensureMindmap();
      }
    },
    [ensureMindmap],
  );

  const resetSelection = useCallback(() => {
    setSelectedFiles([]);
    setAnalysisResult(null);
    setMindmapResult(null);
    setError(null);
    setMindmapError(null);
    setActiveFeature("summary");
    setPreviewTab("upload");
  }, []);

  const renderSummary = () => {
    if (!analysisResult) {
      return (
        <p className="text-slate-500">
          上傳並分析檔案後，將在此處展示全局摘要與段落摘要結果。
        </p>
      );
    }

    const languageLabel = analysisResult.language
      ? analysisResult.language.toUpperCase()
      : "";

    return (
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
            語言：{languageLabel}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">全局摘要</h3>
          <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
            {analysisResult.global_summary || "尚未取得摘要"}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">段落摘要</h3>
          <div className="mt-4 max-h-[320px] space-y-4 overflow-y-auto pr-2">
            {analysisResult.paragraph_summaries.map((item) => {
              const paragraph = analysisResult.paragraphs.find(
                (p) => p.index === item.paragraph_index,
              );
              return (
                <div
                  key={item.paragraph_index}
                  className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-slate-600">
                    第 {item.paragraph_index + 1} 段
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {paragraph?.text.slice(0, 160) || ""}
                    {paragraph && paragraph.text.length > 160 ? "…" : ""}
                  </p>
                  <p className="mt-3 text-[15px] leading-6 text-slate-800">
                    {item.summary}
                  </p>
                </div>
              );
            })}
            {analysisResult.paragraph_summaries.length === 0 && (
              <p className="text-slate-500">尚未取得段落摘要。</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderKeywords = () => {
    if (!analysisResult) {
      return (
        <p className="text-slate-500">
          先分析檔案後，即可在此查看每段的關鍵字摘要。
        </p>
      );
    }

    return (
      <div className="space-y-6">
        <div className="max-h-[320px] space-y-6 overflow-y-auto pr-2">
          {analysisResult.paragraph_keywords.map((item) => (
            <div
              key={item.paragraph_index}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-600">
                第 {item.paragraph_index + 1} 段
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.keywords.length ? (
                  item.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600"
                    >
                      {kw}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400">無關鍵字資料</span>
                )}
              </div>
            </div>
          ))}
          {analysisResult.paragraph_keywords.length === 0 && (
            <p className="text-slate-500">尚未取得關鍵字資料。</p>
          )}
        </div>
        {analysisResult.wordcloud_image_url ? (
          <div>
            <h3 className="text-lg font-semibold text-slate-800">文字雲</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={analysisResult.wordcloud_image_url}
                  alt="關鍵字文字雲"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-slate-500">尚未取得文字雲圖片。</p>
        )}
      </div>
    );
  };

  const renderMindmap = () => {
    if (mindmapError) {
      return <p className="text-rose-500">{mindmapError}</p>;
    }

    if (isMindmapLoading) {
      return <p className="text-slate-500">心智圖生成中，請稍候…</p>;
    }

    if (!mindmapResult) {
      return (
        <p className="text-slate-500">
          點擊下方「心智圖生成」後，將於此顯示自動生成的圖像與摘要。
        </p>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {mindmapResult.doc_title || "心智圖"}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            語言：{mindmapResult.language.toUpperCase()}
          </p>
        </div>
        {mindmapResult.mindmap_image_url ? (
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={mindmapResult.mindmap_image_url}
                  alt="心智圖預覽"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => window.open(mindmapResult.mindmap_image_url ?? undefined, "_blank")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
              >
                放大查看
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10h4.5M19.5 10V5.5M5 19l5.5-5.5M5 19v-4.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9v-2a2.5 2.5 0 0 1 2.5-2.5h2M19.5 15v2a2.5 2.5 0 0 1-2.5 2.5h-2" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <p className="text-slate-500">暫無心智圖圖片可預覽。</p>
        )}
      </div>
    );
  };

  const renderUploadPreview = () => {
    if (!selectedFiles.length) {
      return (
        <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/70 p-6 text-sm text-slate-500">
          上傳檔案後即可在此預覽原始內容。
        </div>
      );
    }

    if (filePreviewType === "pdf" && filePreviewUrl) {
      return (
        <iframe
          title="檔案預覽"
          src={filePreviewUrl}
          className="h-full w-full rounded-2xl border border-slate-200 bg-white"
        />
      );
    }

    if (filePreviewType === "image" && filePreviewUrl) {
      return (
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            src={filePreviewUrl}
            alt="選擇的圖片預覽"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      );
    }

    if (filePreviewType === "text") {
      return (
        <div className="h-full overflow-y-auto rounded-2xl border border-slate-200 bg-white/90 p-4">
          <pre className="whitespace-pre-wrap text-sm leading-6 text-slate-700">
            {filePreviewContent}
          </pre>
        </div>
      );
    }

    if (filePreviewType === "generic" && filePreviewUrl) {
      return (
        <iframe
          title="檔案預覽"
          src={filePreviewUrl}
          className="h-full w-full rounded-2xl border border-slate-200 bg-white"
        />
      );
    }

    return (
      <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/70 p-6 text-sm text-slate-500">
        此檔案格式暫不支援內嵌預覽，請重新選擇其他檔案。
      </div>
    );
  };

  const renderAnalysisPanel = () => {
    if (!analysisResult) {
      return (
        <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white/70 p-6 text-sm text-slate-500">
          請先完成分析，或點擊「開始分析」後再試一次。
        </div>
      );
    }

    const renderActiveFeature = () => {
      if (activeFeature === "summary") return renderSummary();
      if (activeFeature === "keywords") return renderKeywords();
      return renderMindmap();
    };

    return (
      <div className="flex h-full flex-col">
        <div className="grid gap-3 sm:grid-cols-3">
          {featureConfigs.map((feature) => {
            const isActive = activeFeature === feature.key;
            return (
              <button
                key={feature.key}
                type="button"
                onClick={() => handleFeatureSelect(feature.key)}
                className={`flex flex-col gap-1 rounded-3xl border px-4 py-4 text-left transition ${
                  isActive
                    ? `border-transparent bg-gradient-to-r ${feature.accent} text-white`
                    : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:text-indigo-600"
                }`}
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-base font-semibold">{feature.label}</span>
                <span
                  className={`text-sm ${
                    isActive ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {feature.description}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex-1 overflow-y-auto pr-1">
          {renderActiveFeature()}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8ff] via-[#f4f7fb] to-[#edf1ff] text-slate-900">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center px-8 pt-8">
        <div aria-hidden />
        <div className="col-start-2 col-end-3 flex items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 text-2xl text-white shadow-lg">
            📄
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-slate-900">AutoNote & Slide</p>
            <p className="text-sm text-slate-500">智慧文檔處理平台</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="group col-start-3 col-end-4 justify-self-end rounded-2xl border border-white/60 bg-white/80 p-3 shadow-lg transition hover:shadow-xl"
          aria-label="開啟 API 設定"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-6 w-6 text-slate-600 transition group-hover:text-slate-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317a1 1 0 0 1 .894-.553h1.562a1 1 0 0 1 .894.553l.482.964a1 1 0 0 0 .764.553l1.064.12a1 1 0 0 1 .874.874l.12 1.064a1 1 0 0 0 .553.764l.964.482a1 1 0 0 1 .553.894v1.562a1 1 0 0 1-.553.894l-.964.482a1 1 0 0 0-.553.764l-.12 1.064a1 1 0 0 1-.874.874l-1.064.12a1 1 0 0 0-.764.553l-.482.964a1 1 0 0 1-.894.553h-1.562a1 1 0 0 1-.894-.553l-.482-.964a1 1 0 0 0-.764-.553l-1.064-.12a1 1 0 0 1-.874-.874l-.12-1.064a1 1 0 0 0-.553-.764l-.964-.482a1 1 0 0 1-.553-.894v-1.562a1 1 0 0 1 .553-.894l.964-.482a1 1 0 0 0 .553-.764l.12-1.064a1 1 0 0 1 .874-.874l1.064-.12a1 1 0 0 0 .764-.553l.482-.964Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </header>

      <main className="mx-auto mt-8 max-w-[1400px] px-8 pb-20 lg:px-10">
        <div className="rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 to-amber-100/70 px-8 py-5 text-sm font-medium text-amber-800 shadow-sm text-center lg:text-base">
          目前僅支援電腦端使用，請使用電腦瀏覽器獲得最佳體驗
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2 xl:items-stretch">
          <section className="relative flex w-full flex-col rounded-[40px] border border-white/60 bg-white/95 p-10 shadow-2xl lg:min-h-[620px] xl:min-h-[700px]">
            <div className="mt-10 flex flex-1 flex-col items-center gap-6 text-center">
              <div
                className={`flex min-h-[420px] w-full flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed bg-gradient-to-br from-slate-50 to-slate-100/70 p-10 transition ${dragging ? "border-indigo-400 bg-indigo-50/70" : "border-slate-200"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <label htmlFor={fileInputId} className="sr-only">
                  選擇要分析的檔案
                </label>
                <input
                  id={fileInputId}
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.md,.txt"
                  className="sr-only"
                  aria-describedby={uploadHelpId}
                  onChange={(event) => {
                    if (event.target.files) {
                      handleFilesSelected(event.target.files);
                    }
                  }}
                />
                <div className="flex h-28 w-28 items-center justify-center rounded-[36px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-4xl text-white shadow-xl">
                  ⬆️
                </div>
                <div className="flex max-w-xl flex-col gap-3">
                  <h1 className="text-3xl font-semibold text-slate-900">上傳您的檔案</h1>
                  <p className="text-base leading-7 text-slate-600">
                    將檔案拖放到此處，或點擊任何地方瀏覽檔案。上傳後系統將自動為您整理重點、擷取關鍵字並生成心智圖。
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-slate-700"
                >
                  選擇檔案
                </button>
                <p id={uploadHelpId} className="text-xs leading-6 text-slate-500">
                  支援格式：PDF · PPT · PPTX · Word · Markdown · TXT
                  <br />
                  最大檔案大小：50MB，一次最多 5 個檔案
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
                  {fileTypes.map((type) => (
                    <span
                      key={type.label}
                      className={`${type.color} rounded-full bg-white px-3 py-1 shadow-sm`}
                    >
                      {type.label}
                    </span>
                  ))}
                </div>
              </div>

              {selectedFiles.length > 0 ? (
                <div className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-left text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-800">
                        已選擇 {selectedFiles.length} 個檔案
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        目前僅會分析第一個檔案：{selectedFileName}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={resetSelection}
                      className="text-xs font-medium text-rose-500 hover:text-rose-600"
                    >
                      清除
                    </button>
                  </div>
                  <ul className="mt-3 max-h-[160px] space-y-2 overflow-y-auto">
                    {selectedFiles.map((file) => (
                      <li
                        key={file.name}
                        className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm"
                      >
                        <span className="truncate pr-3 text-slate-700">
                          {file.name}
                        </span>
                        <span className="text-xs text-slate-400">
                          {formatBytes(file.size)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {error ? (
                <div className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
                  {error}
                </div>
              ) : null}

              <button
                type="button"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="mt-auto inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:from-indigo-600 hover:to-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isAnalyzing ? "分析中…" : "開始分析"}
              </button>
            </div>
          </section>

          <section className="relative flex w-full flex-col rounded-[40px] border border-white/60 bg-white/95 p-10 shadow-2xl lg:min-h-[620px] xl:min-h-[700px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">檔案預覽</h2>
                <p className="mt-3 text-base text-slate-600">
                  左側上傳檔案後，可在此切換原始檔案與分析結果。
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPreviewTab("upload")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    previewTab === "upload"
                      ? "bg-slate-900 text-white shadow"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  上傳檔案預覽
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewTab("analysis")}
                  disabled={!analysisResult}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    previewTab === "analysis"
                      ? "bg-slate-900 text-white shadow"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  } ${!analysisResult ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  分析結果
                </button>
              </div>
            </div>
            <div className="mt-6 flex-1 overflow-hidden rounded-[28px] bg-slate-50/90 p-4">
              {previewTab === "upload" ? (
                <div className="h-full w-full">{renderUploadPreview()}</div>
              ) : (
                <div className="h-full w-full">{renderAnalysisPanel()}</div>
              )}
            </div>
          </section>
        </div>
      </main>

      {settingsOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 px-4">
          <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/95 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">API 設定</h3>
                <p className="text-sm text-slate-500">請輸入您的 LLM API Key 與 Base URL</p>
              </div>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                aria-label="關閉設定"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="apiKey">
                  API Key
                </label>
                <input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(event) => setApiKey(event.target.value)}
                  placeholder="請輸入您的 API Key"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-indigo-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="llmBaseUrlInput">
                  LLM Base URL（可選填）
                </label>
                <input
                  id="llmBaseUrlInput"
                  type="url"
                  value={llmBaseUrl}
                  onChange={(event) => setLlmBaseUrl(event.target.value)}
                  placeholder="https://api.example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-indigo-400 focus:outline-none"
                />
                <p className="mt-2 text-xs text-slate-400">
                  若不填寫將使用後端預設的 LLM Base URL。
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                取消
              </button>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-600"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
