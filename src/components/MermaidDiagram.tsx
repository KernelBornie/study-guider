import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import DOMPurify from "dompurify";
import { Download, AlertCircle, Copy, Check } from "lucide-react";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "strict",
  fontFamily: "ui-sans-serif, system-ui, sans-serif",
});

let idCounter = 0;

export default function MermaidDiagram({ code }: { code: string }) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const uniqueId = `mermaid-${++idCounter}-${Date.now()}`;

    (async () => {
      try {
        const { svg: rendered } = await mermaid.render(uniqueId, code.trim());
        if (!cancelled) {
          const sanitized = DOMPurify.sanitize(rendered, {
            USE_PROFILES: { svg: true, svgFilters: true },
          });
          setSvg(sanitized);
          setError(null);
        }
      } catch (e: any) {
        if (!cancelled) {
          console.error("Mermaid render error:", e);
          setError(e?.message ?? "Failed to render diagram");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code]);

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

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (error) {
    return (
      <div className="my-3 p-3 bg-rose-950/40 border border-rose-800/60 rounded-lg text-xs text-rose-300 overflow-x-auto space-y-2">
        <div className="flex items-center gap-1.5 font-semibold text-rose-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>Diagram rendering notice: {error}</span>
        </div>
        <pre className="p-2 bg-slate-950 rounded border border-slate-800 text-[11px] text-slate-300 font-mono overflow-x-auto">
          {code}
        </pre>
      </div>
    );
  }

  return (
    <div className="my-4 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg">
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/80 border-b border-slate-800 text-[11px] text-slate-400">
        <span className="font-mono text-blue-400 font-semibold flex items-center gap-1">
          <span>📊</span> Live Generated Diagram
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCode}
            className="hover:text-white flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-slate-800"
            title="Copy Mermaid code"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Code</span>
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="hover:text-white flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-slate-800"
            title="Export as SVG"
          >
            <Download className="w-3 h-3 text-blue-400" />
            <span>SVG</span>
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="p-4 overflow-x-auto flex justify-center text-slate-200 [&_svg]:max-w-full [&_svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
