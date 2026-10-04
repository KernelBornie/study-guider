import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import DOMPurify from "dompurify";
import { Download, AlertCircle, Copy, Check, Code, Maximize2, Minimize2, X } from "lucide-react";
import { sanitiseMermaid, extractOffendingLine } from "@/services/mermaidSanitiser";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "strict",
  fontFamily: "ui-sans-serif, system-ui, sans-serif",
});

let idCounter = 0;

interface Props {
  code: string;
}

export default function MermaidDiagram({ code }: Props) {
  const [svg, setSvg] = useState<string>("");
  const [errorInfo, setErrorInfo] = useState<{
    message: string;
    lineNum?: number;
    lineText?: string;
  } | null>(null);
  const [sanitisedCode, setSanitisedCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showSource, setShowSource] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const clean = sanitiseMermaid(code);
    setSanitisedCode(clean);
    const uniqueId = `mermaid-${++idCounter}-${Date.now()}`;

    (async () => {
      try {
        await mermaid.parse(clean);

        const { svg: rendered } = await mermaid.render(uniqueId, clean);
        if (!cancelled) {
          const sanitized = DOMPurify.sanitize(rendered, {
            USE_PROFILES: { svg: true, svgFilters: true },
          });
          setSvg(sanitized);
          setErrorInfo(null);
        }
      } catch (e: any) {
        if (!cancelled) {
          const errMsg = e?.message || "Failed to render Mermaid diagram";
          const offending = extractOffendingLine(clean, errMsg);
          setErrorInfo({
            message: errMsg,
            lineNum: offending?.lineNum,
            lineText: offending?.lineText,
          });
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code]);

  // Handle Esc key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleDownload = () => {
    if (!svg) return;
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `unza-diagram-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (errorInfo) {
    return (
      <div className="my-5 rounded-2xl border border-rose-800/80 bg-rose-950/40 p-5 text-sm text-rose-200 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-rose-300 text-base">
                Mermaid Diagram Failed to Render
              </div>
              <div className="text-xs text-rose-400 font-mono mt-1">
                {errorInfo.message}
              </div>
            </div>
          </div>

          <button
            onClick={() => handleCopyCode(sanitisedCode || code)}
            className="flex items-center gap-2 px-3.5 py-2 min-h-[44px] bg-rose-900/50 hover:bg-rose-900/80 border border-rose-700/60 rounded-xl text-xs font-semibold text-rose-200 transition-colors shrink-0"
            title="Copy Mermaid source to edit"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Source</span>
              </>
            )}
          </button>
        </div>

        {errorInfo.lineNum && errorInfo.lineText && (
          <div className="p-3 bg-slate-950 border border-rose-900/60 rounded-xl text-xs space-y-1.5">
            <span className="text-rose-400 font-semibold text-xs">
              Offending Line {errorInfo.lineNum}:
            </span>
            <pre className="font-mono text-amber-300 text-xs overflow-x-auto bg-rose-950/60 p-2 rounded-lg">
              {errorInfo.lineText}
            </pre>
          </div>
        )}

        <div className="space-y-1.5">
          <div className="text-xs text-slate-400 font-medium">
            Diagram Source (Plain Text Fallback):
          </div>
          <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono overflow-x-auto whitespace-pre leading-relaxed">
            {sanitisedCode || code}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="my-5 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 gap-2">
          <span className="font-mono text-blue-400 font-semibold flex items-center gap-1.5 text-sm">
            <span>📊</span> Live Generated Diagram
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 min-h-[44px] rounded-lg hover:bg-slate-800 text-xs"
              title="Expand to Fullscreen Modal"
            >
              <Maximize2 className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Expand Canvas</span>
            </button>
            <button
              onClick={() => setShowSource(!showSource)}
              className="hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 min-h-[44px] rounded-lg hover:bg-slate-800 text-xs"
              title={showSource ? "Hide Mermaid Source" : "View Mermaid Source"}
            >
              <Code className="w-4 h-4 text-purple-400" />
              <span>{showSource ? "Hide Code" : "Code"}</span>
            </button>
            <button
              onClick={() => handleCopyCode(sanitisedCode || code)}
              className="hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 min-h-[44px] rounded-lg hover:bg-slate-800 text-xs"
              title="Copy Mermaid code"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              className="hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 min-h-[44px] rounded-lg hover:bg-slate-800 text-xs"
              title="Export as SVG"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>SVG</span>
            </button>
          </div>
        </div>

        {showSource && (
          <pre className="p-4 bg-slate-900/95 border-b border-slate-800 text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed">
            {sanitisedCode || code}
          </pre>
        )}

        {/* Spacious diagram canvas */}
        <div
          ref={containerRef}
          className="p-6 overflow-x-auto flex justify-center items-center min-h-[400px] max-h-[700px] resize-y text-slate-200 [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:max-h-[650px]"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>

      {/* Full-Screen Diagram Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-lg">📊</span>
              <h2 className="text-base font-bold text-white font-mono">
                Full-Screen Architecture Diagram Canvas
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/50 text-blue-200 text-xs font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Export SVG</span>
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                title="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
                <span>Close</span>
              </button>
            </div>
          </div>

          <div
            ref={modalContainerRef}
            className="flex-1 overflow-auto flex items-center justify-center p-6 text-slate-200 [&_svg]:w-full [&_svg]:max-h-[85vh] [&_svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      )}
    </>
  );
}
