'use client';

import { PDFDocument } from "pdf-lib";

export type PdfPageSummary = {
  page_number: number;
  classification: string;
  bullets: string[];
  keywords: string[];
  skipped: boolean;
  skip_reason?: string | null;
};

export type PdfGlobalSummary = {
  bullets: string[];
  expansions: {
    key_conclusions: string;
    core_data: string;
    risks_and_actions: string;
  };
};

export type PdfAnalysisPayload = {
  documentTitle: string;
  languageLabel?: string | null;
  totalPages: number;
  globalSummary: PdfGlobalSummary;
  aggregatedKeywords: string[];
  pageSummaries: PdfPageSummary[];
  wordcloudUrl?: string | null;
  mindmapImageUrl?: string | null;
};

const PAGE_WIDTH = 1190;
const PAGE_HEIGHT = 1684;
const PDF_PAGE_WIDTH = 595.28; // A4 width in points
const PDF_PAGE_HEIGHT = 841.89; // A4 height in points
const MARGIN_X = 80;
const MARGIN_TOP = 80;
const MARGIN_BOTTOM = 100;
const SECTION_GAP = 32;
const HEADING_COLOR = "#111827";
const BODY_COLOR = "#1f2937";
const MUTED_COLOR = "#6b7280";

const CLASSIFICATION_LABEL: Record<string, string> = {
  normal: "一般內容",
  toc: "目錄頁",
  pure_image: "純圖片",
  blank: "空白/水印",
  cover: "封面",
};

type PageContext = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  cursorY: number;
  pageNumber: number;
};

const createPage = (pageNumber: number): PageContext => {
  const canvas = document.createElement("canvas");
  canvas.width = PAGE_WIDTH;
  canvas.height = PAGE_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("無法建立畫布內容 (CanvasRenderingContext2D)");
  }

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, PAGE_WIDTH, PAGE_HEIGHT);
  ctx.textBaseline = "top";
  ctx.fillStyle = BODY_COLOR;
  ctx.font = "16px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";

  return {
    canvas,
    ctx,
    cursorY: MARGIN_TOP,
    pageNumber,
  };
};

const drawFooter = (ctx: CanvasRenderingContext2D, pageNumber: number) => {
  ctx.save();
  ctx.fillStyle = MUTED_COLOR;
  ctx.font = "14px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  ctx.fillText(
    `第 ${pageNumber} 頁`,
    PAGE_WIDTH - MARGIN_X - ctx.measureText(`第 ${pageNumber} 頁`).width,
    PAGE_HEIGHT - MARGIN_BOTTOM + 36,
  );
  ctx.restore();
};

const wrapLine = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] => {
  if (!text) return [""];
  const sanitized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines: string[] = [];

  for (const rawLine of sanitized.split("\n")) {
    let current = "";
    for (const char of rawLine) {
      const testLine = current + char;
      const width = ctx.measureText(testLine).width;
      if (width <= maxWidth || current.length === 0) {
        current = testLine;
      } else {
        lines.push(current);
        current = char === " " ? "" : char;
      }
    }
    if (current) {
      lines.push(current);
    } else if (rawLine.length === 0) {
      lines.push("");
    }
  }
  return lines;
};

const drawParagraph = (
  context: PageContext,
  text: string,
  options?: { font?: string; color?: string; lineHeight?: number; gapAfter?: number },
  ensureSpace?: () => void,
) => {
  const font = options?.font ?? "16px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  const color = options?.color ?? BODY_COLOR;
  const lineHeight = options?.lineHeight ?? 26;
  const gapAfter = options?.gapAfter ?? 12;

  let ctx = context.ctx;
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;

  const lines = wrapLine(ctx, text, PAGE_WIDTH - MARGIN_X * 2);
  for (const line of lines) {
    if (context.cursorY + lineHeight > PAGE_HEIGHT - MARGIN_BOTTOM) {
      ctx.restore();
      ensureSpace?.();
      ctx = context.ctx;
      ctx.save();
      ctx.font = font;
      ctx.fillStyle = color;
    }
    ctx.fillText(line, MARGIN_X, context.cursorY);
    context.cursorY += lineHeight;
  }
  context.cursorY += gapAfter;
  ctx.restore();
};

const drawBulletList = (
  context: PageContext,
  bullets: string[],
  options?: { lineHeight?: number; bulletSpacing?: number },
  ensureSpace?: () => void,
) => {
  const lineHeight = options?.lineHeight ?? 26;
  const bulletSpacing = options?.bulletSpacing ?? 10;
  const font = "16px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";

  let ctx = context.ctx;
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = BODY_COLOR;

  for (const bullet of bullets) {
    const lines = wrapLine(ctx, bullet, PAGE_WIDTH - MARGIN_X * 2 - 24);

    const bulletHeight = Math.max(lineHeight, lines.length * lineHeight);
    if (context.cursorY + bulletHeight > PAGE_HEIGHT - MARGIN_BOTTOM) {
      ctx.restore();
      ensureSpace?.();
      ctx = context.ctx;
      ctx.save();
      ctx.font = font;
      ctx.fillStyle = BODY_COLOR;
    }

    const bulletX = MARGIN_X;
    const textX = bulletX + 24;
    ctx.fillText("•", bulletX, context.cursorY);
    let lineCursor = context.cursorY;
    for (const line of lines) {
      ctx.fillText(line, textX, lineCursor);
      lineCursor += lineHeight;
    }
    context.cursorY = Math.max(context.cursorY + bulletHeight, lineCursor);
    context.cursorY += bulletSpacing;
  }

  ctx.restore();
};

const canvasToPngBytes = async (canvas: HTMLCanvasElement): Promise<Uint8Array> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      async (blob) => {
        try {
          if (!blob) {
            reject(new Error("無法將畫布轉換為 PNG"));
            return;
          }
          const buffer = await blob.arrayBuffer();
          resolve(new Uint8Array(buffer));
        } catch (err) {
          reject(err);
        }
      },
      "image/png",
      1,
    );
  });

const loadImage = async (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`無法載入圖像：${url}`));
    image.src = url;
  });

export const generateAnalysisPdf = async (payload: PdfAnalysisPayload): Promise<Uint8Array> => {
  const pages: HTMLCanvasElement[] = [];
  const current = createPage(1);

  const commitPage = () => {
    drawFooter(current.ctx, current.pageNumber);
    pages.push(current.canvas);
    const next = createPage(current.pageNumber + 1);
    current.canvas = next.canvas;
    current.ctx = next.ctx;
    current.cursorY = next.cursorY;
    current.pageNumber = next.pageNumber;
  };

  const ensureSpace = (minHeight = 120) => {
    if (current.cursorY + minHeight > PAGE_HEIGHT - MARGIN_BOTTOM) {
      commitPage();
    }
  };

  // 報告抬頭
  current.ctx.save();
  current.ctx.fillStyle = HEADING_COLOR;
  current.ctx.font = "700 32px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  const title = "分析報告";
  current.ctx.fillText(title, MARGIN_X, current.cursorY);
  current.cursorY += 46;

  current.ctx.font = "600 24px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  current.ctx.fillText(payload.documentTitle || "未命名檔案", MARGIN_X, current.cursorY);
  current.cursorY += 38;

  current.ctx.restore();

  current.ctx.save();
  current.ctx.font = "15px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
  current.ctx.fillStyle = MUTED_COLOR;
  const metaPieces = [
    payload.languageLabel ? `語言：${payload.languageLabel}` : null,
    `總頁數：${payload.totalPages}`,
  ].filter(Boolean) as string[];
  current.ctx.fillText(metaPieces.join("  •  "), MARGIN_X, current.cursorY);
  current.ctx.restore();
  current.cursorY += 40;

  const drawSectionHeading = (text: string) => {
    ensureSpace(80);
    current.ctx.save();
    current.ctx.fillStyle = HEADING_COLOR;
    current.ctx.font = "600 22px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    current.ctx.fillText(text, MARGIN_X, current.cursorY);
    current.ctx.restore();
    current.cursorY += 34;
  };

  const drawSubHeading = (text: string) => {
    ensureSpace(50);
    current.ctx.save();
    current.ctx.fillStyle = HEADING_COLOR;
    current.ctx.font = "600 18px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    current.ctx.fillText(text, MARGIN_X, current.cursorY);
    current.ctx.restore();
    current.cursorY += 28;
  };

  // 全局摘要
  drawSectionHeading("全局摘要");
  if (payload.globalSummary.bullets.length) {
    drawBulletList(current, payload.globalSummary.bullets, undefined, () => {
      commitPage();
      drawSectionHeading("全局摘要");
    });
  } else {
    drawParagraph(current, "尚未提供全局摘要。", { color: MUTED_COLOR });
  }
  current.cursorY += SECTION_GAP;

  // 延伸說明
  drawSectionHeading("延伸說明");
  drawSubHeading("關鍵結論");
  drawParagraph(
    current,
    payload.globalSummary.expansions.key_conclusions || "暫無資料",
    { gapAfter: 16 },
    () => {
      commitPage();
      drawSectionHeading("延伸說明");
      drawSubHeading("關鍵結論");
    },
  );

  drawSubHeading("核心資料");
  drawParagraph(
    current,
    payload.globalSummary.expansions.core_data || "暫無資料",
    { gapAfter: 16 },
    () => {
      commitPage();
      drawSectionHeading("延伸說明");
      drawSubHeading("核心資料");
    },
  );

  drawSubHeading("風險與建議");
  drawParagraph(
    current,
    payload.globalSummary.expansions.risks_and_actions || "暫無資料",
    undefined,
    () => {
      commitPage();
      drawSectionHeading("延伸說明");
      drawSubHeading("風險與建議");
    },
  );

  current.cursorY += SECTION_GAP;

  // 關鍵字
  drawSectionHeading("整體關鍵字");
  if (payload.aggregatedKeywords.length) {
    const keywordText = payload.aggregatedKeywords.join("，");
    drawParagraph(
      current,
      keywordText,
      {
        gapAfter: 0,
      },
      () => {
        commitPage();
        drawSectionHeading("整體關鍵字");
      },
    );
  } else {
    drawParagraph(current, "暫無整體關鍵字資料。", { color: MUTED_COLOR });
  }

  commitPage();

  // 逐頁摘要
  const drawPageSummaryHeading = () => {
    current.ctx.save();
    current.ctx.fillStyle = HEADING_COLOR;
    current.ctx.font = "600 24px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    current.ctx.fillText("逐頁重點摘要", MARGIN_X, current.cursorY);
    current.ctx.restore();
    current.cursorY += 38;
  };

  drawPageSummaryHeading();

  for (const summary of payload.pageSummaries) {
    ensureSpace(160);
    const classificationLabel =
      CLASSIFICATION_LABEL[summary.classification] ?? summary.classification;

    current.ctx.save();
    current.ctx.fillStyle = HEADING_COLOR;
    current.ctx.font = "600 18px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    current.ctx.fillText(`第 ${summary.page_number} 頁`, MARGIN_X, current.cursorY);
    const meta = summary.skipped && summary.skip_reason ? "（已跳過）" : classificationLabel;
    current.ctx.fillStyle = MUTED_COLOR;
    current.ctx.font = "15px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    const metaText = ` ${meta}`;
    current.ctx.fillText(metaText, MARGIN_X + current.ctx.measureText(`第 ${summary.page_number} 頁`).width + 6, current.cursorY + 2);
    current.ctx.restore();
    current.cursorY += 28;

    if (summary.bullets.length) {
      drawBulletList(current, summary.bullets, undefined, () => {
        commitPage();
        drawPageSummaryHeading();
        current.ctx.save();
        current.ctx.fillStyle = HEADING_COLOR;
        current.ctx.font = "600 18px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
        current.ctx.fillText(`第 ${summary.page_number} 頁`, MARGIN_X, current.cursorY);
        const newMeta = summary.skipped && summary.skip_reason ? "（已跳過）" : classificationLabel;
        current.ctx.fillStyle = MUTED_COLOR;
        current.ctx.font = "15px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
        current.ctx.fillText(
          ` ${newMeta}`,
          MARGIN_X + current.ctx.measureText(`第 ${summary.page_number} 頁`).width + 6,
          current.cursorY + 2,
        );
        current.ctx.restore();
        current.cursorY += 28;
      });
    } else {
      drawParagraph(
        current,
        "本頁無摘要資料。",
        { color: MUTED_COLOR, gapAfter: 10 },
        () => {
          commitPage();
          drawPageSummaryHeading();
          current.ctx.save();
          current.ctx.fillStyle = HEADING_COLOR;
          current.ctx.font = "600 18px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
          current.ctx.fillText(`第 ${summary.page_number} 頁`, MARGIN_X, current.cursorY);
          current.ctx.restore();
          current.cursorY += 28;
        },
      );
    }

    if (summary.keywords.length) {
      const keywordLine = summary.keywords.join("、");
      drawParagraph(
        current,
        `關鍵字：${keywordLine}`,
        { color: MUTED_COLOR, gapAfter: 18 },
        () => {
          commitPage();
          drawPageSummaryHeading();
          current.ctx.save();
          current.ctx.fillStyle = HEADING_COLOR;
          current.ctx.font = "600 18px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
          current.ctx.fillText(`第 ${summary.page_number} 頁`, MARGIN_X, current.cursorY);
          current.ctx.restore();
          current.cursorY += 28;
        },
      );
    }

    if (summary.skipped && summary.skip_reason) {
      drawParagraph(
        current,
        `跳過原因：${summary.skip_reason}`,
        { color: MUTED_COLOR, gapAfter: 28 },
        () => {
          commitPage();
          drawPageSummaryHeading();
          current.ctx.save();
          current.ctx.fillStyle = HEADING_COLOR;
          current.ctx.font = "600 18px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
          current.ctx.fillText(`第 ${summary.page_number} 頁`, MARGIN_X, current.cursorY);
          current.ctx.restore();
          current.cursorY += 28;
        },
      );
    } else {
      current.cursorY += 18;
    }
  }

  commitPage();

  const drawImagePage = async (title: string, imageUrl?: string | null) => {
    const needsNewPage = current.cursorY !== MARGIN_TOP;
    if (needsNewPage) {
      commitPage();
    }

    current.ctx.save();
    current.ctx.fillStyle = HEADING_COLOR;
    current.ctx.font = "600 26px 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans TC', sans-serif";
    current.ctx.fillText(title, MARGIN_X, current.cursorY);
    current.ctx.restore();
    current.cursorY += 40;

    if (imageUrl) {
      try {
        const image = await loadImage(imageUrl);
        const availableWidth = PAGE_WIDTH - MARGIN_X * 2;
        const availableHeight = PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM - 80;
        const scale = Math.min(availableWidth / image.width, availableHeight / image.height, 1);
        const drawWidth = image.width * scale;
        const drawHeight = image.height * scale;
        const offsetX = MARGIN_X + (availableWidth - drawWidth) / 2;
        current.ctx.drawImage(image, offsetX, current.cursorY, drawWidth, drawHeight);
      } catch (err) {
        drawParagraph(current, `圖像載入失敗：${(err as Error).message}`, { color: MUTED_COLOR });
      }
    } else {
      drawParagraph(current, "尚未取得圖像資料。", { color: MUTED_COLOR });
    }

    commitPage();
  };

  await drawImagePage("文字雲", payload.wordcloudUrl);
  await drawImagePage("心智圖", payload.mindmapImageUrl);

  const pdfDoc = await PDFDocument.create();
  for (const canvas of pages) {
    const pngBytes = await canvasToPngBytes(canvas);
    const pngImage = await pdfDoc.embedPng(pngBytes);
    const page = pdfDoc.addPage([PDF_PAGE_WIDTH, PDF_PAGE_HEIGHT]);
    const scale = PDF_PAGE_WIDTH / PAGE_WIDTH;
    const scaled = pngImage.scale(scale);
    page.drawImage(pngImage, {
      x: 0,
      y: PDF_PAGE_HEIGHT - scaled.height,
      width: scaled.width,
      height: scaled.height,
    });
  }

  return pdfDoc.save();
};

