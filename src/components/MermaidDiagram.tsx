import React, { useEffect, useRef, useState, useCallback } from "react";
import mermaid from "mermaid";
import DOMPurify from "dompurify";
import { 
  Download, 
  AlertCircle, 
  Copy, 
  Check, 
  Code, 
  Maximize2, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Image as ImageIcon,
  Sun,
  Moon,
  Compass,
  Info
} from "lucide-react";
import { sanitiseMermaid, extractOffendingLine } from "@/services/mermaidSanitiser";

// Initialize mermaid with crystal-clear high-contrast theme variables
mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    darkMode: true,
    background: "#020617",
    primaryColor: "#0f172a",
    primaryTextColor: "#f8fafc",
    primaryBorderColor: "#38bdf8",
    secondaryColor: "#1e1b4b",
    secondaryTextColor: "#f1f5f9",
    secondaryBorderColor: "#a855f7",
    tertiaryColor: "#064e3b",
    tertiaryTextColor: "#f0fdf4",
    tertiaryBorderColor: "#10b981",
    lineColor: "#38bdf8",
    textColor: "#f8fafc",
    mainBkg: "#0f172a",
    nodeBorder: "#38bdf8",
    nodeTextColor: "#f8fafc",
    clusterBkg: "#030712",
    clusterBorder: "#475569",
    titleColor: "#93c5fd",
    edgeLabelBackground: "#020617",
    actorBkg: "#1e293b",
    actorBorder: "#a855f7",
    actorTextColor: "#f8fafc",
    actorLineColor: "#94a3b8",
    signalColor: "#38bdf8",
    signalTextColor: "#f8fafc",
    labelBoxBkgColor: "#1e293b",
    labelBoxBorderColor: "#38bdf8",
    labelTextColor: "#f8fafc",
    loopTextColor: "#f8fafc",
    noteBkgColor: "#1e1b4b",
    noteBorderColor: "#818cf8",
    noteTextColor: "#e0e7ff",
    fontSize: "15px",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  securityLevel: "loose",
  flowchart: {
    htmlLabels: true,
    curve: "basis",
    useMaxWidth: false,
    padding: 24,
    nodeSpacing: 55,
    rankSpacing: 60,
  },
  sequence: {
    useMaxWidth: false,
    showSequenceNumbers: true,
    actorMargin: 75,
    boxMargin: 18,
    messageMargin: 46,
    mirrorActors: false,
    actorFontSize: "15px",
    messageFontSize: "14px",
    noteFontSize: "13px",
  },
  class: {
    useMaxWidth: false,
    padding: 22,
  },
  state: {
    useMaxWidth: false,
    padding: 22,
  },
});

let idCounter = 0;

interface Props {
  code: string;
  title?: string;
}

type CanvasMode = "dark" | "light" | "blueprint";

export default function MermaidDiagram({ code, title }: Props) {
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
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [modalZoomLevel, setModalZoomLevel] = useState<number>(1);
  const [canvasMode, setCanvasMode] = useState<CanvasMode>("dark");
  const [showLegend, setShowLegend] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // Detect diagram type for friendly header badge & legend
  const getDiagramMeta = useCallback((src: string) => {
    const trimmed = src.trim().toLowerCase();
    if (trimmed.startsWith("sequencediagram")) {
      return {
        badge: "Sequence Diagram",
        type: "sequence",
        icon: "⏱️",
        notation: "Vertical lifelines · Chronological message arrows · Activation blocks",
      };
    }
    if (trimmed.startsWith("classdiagram")) {
      return {
        badge: "Class Diagram",
        type: "class",
        icon: "📐",
        notation: "3-Compartment classes (Name, Attributes, Methods) · Associations & Multiplicities",
      };
    }
    if (trimmed.startsWith("statediagram")) {
      return {
        badge: "State Machine",
        type: "state",
        icon: "🔄",
        notation: "States · Event transitions [guard conditions] / actions · Nested sub-states",
      };
    }
    if (trimmed.startsWith("erdiagram")) {
      return {
        badge: "Entity Relationship",
        type: "er",
        icon: "🗄️",
        notation: "Entities · Primary/Foreign keys · Cardinality relationships (1-to-many)",
      };
    }
    if (trimmed.startsWith("flowchart lr") || trimmed.startsWith("graph lr")) {
      return {
        badge: "Flowchart (Left-to-Right)",
        type: "flowchart-lr",
        icon: "➡️",
        notation: "Horizontal system pipeline · Connected process nodes & directional flow arrows",
      };
    }
    if (trimmed.startsWith("flowchart") || trimmed.startsWith("graph")) {
      return {
        badge: "Flowchart / Architectural Model",
        type: "flowchart-td",
        icon: "📊",
        notation: "Top-down process hierarchy · Subgraphs (boundaries) · Labeled decision nodes",
      };
    }
    if (trimmed.startsWith("component")) {
      return {
        badge: "Component Diagram",
        type: "component",
        icon: "🧩",
        notation: "Modular components · Provided/Required interfaces (socket & ball)",
      };
    }
    return {
      badge: "Architecture Model",
      type: "architecture",
      icon: "🏗️",
      notation: "High-level subsystem boundaries · External systems & data interchange links",
    };
  }, []);

  const meta = getDiagramMeta(sanitisedCode || code);

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
          // Enhance SVG: remove rigid max-width and ensure smooth responsive scaling
          let enhancedSvg = rendered.replace(
            /style="max-width:\s*[^"]+;?"/gi,
            'style="width: 100%; max-width: 100%; height: auto; display: block;"'
          );

          // Inject custom high-contrast SVG styling for crystal-clear readability
          const styleInjection = `
            <style>
              /* High-contrast crisp diagram styles */
              svg { font-family: Inter, ui-sans-serif, system-ui, sans-serif !important; }
              .node rect, .node circle, .node polygon, .node path { stroke-width: 2.2px !important; }
              .edgePath path { stroke-width: 2.4px !important; }
              .edgeLabel { 
                font-weight: 700 !important; 
                font-size: 13.5px !important; 
                background-color: rgba(2, 6, 23, 0.95) !important;
                padding: 2px 6px !important;
                border-radius: 4px !important;
              }
              .edgeLabel span { color: #38bdf8 !important; font-weight: 700 !important; }
              .label, .nodeLabel { font-weight: 600 !important; font-size: 14.5px !important; }
              .cluster rect { stroke-width: 2px !important; }
              .cluster span { font-weight: 700 !important; font-size: 14px !important; letter-spacing: 0.02em !important; }
              .actor { stroke-width: 2px !important; font-weight: 700 !important; }
              .messageText { font-weight: 600 !important; font-size: 13.5px !important; fill: #f8fafc !important; }
              .classGroup rect { stroke-width: 2px !important; }
              .classGroup text { font-weight: 500 !important; }
              .classTitle text { font-weight: 700 !important; font-size: 15px !important; }
            </style>
          `;
          enhancedSvg = enhancedSvg.replace(">", `>${styleInjection}`);

          const sanitized = DOMPurify.sanitize(enhancedSvg, {
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

  const handleDownloadSVG = () => {
    if (!svg) return;
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `unza-diagram-${meta.type}-${Date.now()}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPNG = () => {
    if (!svg) return;
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svg, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    const viewBox = svgElement.getAttribute("viewBox");
    let width = 1600;
    let height = 1000;

    if (viewBox) {
      const parts = viewBox.split(/\s+/).map(Number);
      if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
        width = Math.round(parts[2] * 2.5);
        height = Math.round(parts[3] * 2.5);
      }
    } else {
      const w = parseFloat(svgElement.getAttribute("width") || "1200");
      const h = parseFloat(svgElement.getAttribute("height") || "800");
      width = Math.round(w * 2.5);
      height = Math.round(h * 2.5);
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw background based on canvas mode
    if (canvasMode === "light") {
      ctx.fillStyle = "#ffffff";
    } else if (canvasMode === "blueprint") {
      ctx.fillStyle = "#0a192f";
    } else {
      ctx.fillStyle = "#020617";
    }
    ctx.fillRect(0, 0, width, height);

    const img = new Image();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = `unza-diagram-${meta.type}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = url;
  };

  const handleCopyCode = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setZoomLevel(1);

  const modalZoomIn = () => setModalZoomLevel((prev) => Math.min(prev + 0.25, 3.0));
  const modalZoomOut = () => setModalZoomLevel((prev) => Math.max(prev - 0.25, 0.4));
  const modalResetZoom = () => setModalZoomLevel(1);

  const cycleCanvasMode = () => {
    setCanvasMode((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "blueprint";
      return "dark";
    });
  };

  if (errorInfo) {
    return (
      <div className="my-5 rounded-2xl border border-rose-800/80 bg-rose-950/40 p-5 text-sm text-rose-200 shadow-xl space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-rose-300 text-base">
                Mermaid Diagram Rendering Issue
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

  // Get background classes based on canvas mode
  const getCanvasBgClass = (mode: CanvasMode) => {
    switch (mode) {
      case "light":
        return "bg-white text-slate-950 border-slate-300";
      case "blueprint":
        return "bg-[#071326] bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:18px_18px] text-cyan-100 border-cyan-900/60";
      case "dark":
      default:
        return "bg-slate-950 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] text-slate-100 border-slate-800";
    }
  };

  return (
    <>
      <div className="my-6 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl transition-all">
        {/* Sleek diagram action header */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800 text-xs text-slate-400 gap-2.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
              <span>{meta.icon}</span>
              <span>{meta.badge}</span>
            </span>
            {title && (
              <span className="text-xs font-semibold text-slate-200 hidden md:inline truncate max-w-xs">
                · {title}
              </span>
            )}
            <span className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">
              Vector SVG · Zoom {Math.round(zoomLevel * 100)}%
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {/* Zoom Controls */}
            <div className="flex items-center bg-slate-950 rounded-lg border border-slate-800 p-0.5 shadow-inner">
              <button
                onClick={zoomOut}
                disabled={zoomLevel <= 0.6}
                className="p-1.5 hover:text-white rounded hover:bg-slate-800 transition-colors disabled:opacity-40"
                title="Zoom Out (-25%)"
              >
                <ZoomOut className="w-3.5 h-3.5 text-slate-300" />
              </button>
              <button
                onClick={resetZoom}
                className="px-2 py-1 text-[11px] font-mono text-slate-300 hover:text-white rounded hover:bg-slate-800 transition-colors"
                title="Reset Zoom to 100%"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={zoomIn}
                disabled={zoomLevel >= 2.4}
                className="p-1.5 hover:text-white rounded hover:bg-slate-800 transition-colors disabled:opacity-40"
                title="Zoom In (+25%)"
              >
                <ZoomIn className="w-3.5 h-3.5 text-slate-300" />
              </button>
            </div>

            {/* Quick Zoom Presets */}
            <div className="hidden lg:flex items-center bg-slate-950 rounded-lg border border-slate-800 p-0.5 text-[10px] font-mono">
              <button
                onClick={() => setZoomLevel(0.75)}
                className={`px-1.5 py-0.5 rounded ${zoomLevel === 0.75 ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                75%
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className={`px-1.5 py-0.5 rounded ${zoomLevel === 1 ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                100%
              </button>
              <button
                onClick={() => setZoomLevel(1.5)}
                className={`px-1.5 py-0.5 rounded ${zoomLevel === 1.5 ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                150%
              </button>
            </div>

            {/* Canvas Theme / Contrast Toggle (Dark / Light / Blueprint) */}
            <button
              onClick={cycleCanvasMode}
              className="flex items-center gap-1 px-2.5 py-2 min-h-[36px] rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title={`Canvas: ${canvasMode.toUpperCase()} (Click to switch to ${canvasMode === "dark" ? "Light" : canvasMode === "light" ? "Blueprint" : "Dark"})`}
            >
              {canvasMode === "dark" && <Moon className="w-3.5 h-3.5 text-blue-400" />}
              {canvasMode === "light" && <Sun className="w-3.5 h-3.5 text-amber-400" />}
              {canvasMode === "blueprint" && <Compass className="w-3.5 h-3.5 text-cyan-400" />}
              <span className="text-[11px] font-mono capitalize hidden sm:inline">{canvasMode}</span>
            </button>

            {/* Legend / Info Toggle */}
            <button
              onClick={() => setShowLegend(!showLegend)}
              className={`p-2 min-h-[36px] rounded-lg border transition-colors ${
                showLegend 
                  ? "bg-blue-600 text-white border-blue-400" 
                  : "bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white"
              }`}
              title="Toggle Notation Legend & Reading Tips"
            >
              <Info className="w-3.5 h-3.5" />
            </button>

            {/* Expand Fullscreen */}
            <button
              onClick={() => {
                setModalZoomLevel(1);
                setIsModalOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-2 min-h-[36px] rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:text-emerald-300 text-xs font-medium transition-colors"
              title="Expand to Fullscreen Modal"
            >
              <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">Fullscreen</span>
            </button>

            {/* View Source Toggle */}
            <button
              onClick={() => setShowSource(!showSource)}
              className="flex items-center gap-1 px-2.5 py-2 min-h-[36px] rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-purple-300 text-xs font-medium transition-colors"
              title={showSource ? "Hide Mermaid Source" : "View Mermaid Source"}
            >
              <Code className="w-3.5 h-3.5 text-purple-400" />
              <span>{showSource ? "Hide" : "Code"}</span>
            </button>

            {/* Copy Source */}
            <button
              onClick={() => handleCopyCode(sanitisedCode || code)}
              className="p-2 min-h-[36px] rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Copy Mermaid code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            {/* Export Actions */}
            <button
              onClick={handleDownloadPNG}
              className="flex items-center gap-1 px-2.5 py-2 min-h-[36px] rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-sky-300 text-xs font-medium transition-colors"
              title="Export High-Res PNG Image (2.5x Resolution)"
            >
              <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>PNG</span>
            </button>

            <button
              onClick={handleDownloadSVG}
              className="flex items-center gap-1 px-2.5 py-2 min-h-[36px] rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-blue-300 text-xs font-medium transition-colors"
              title="Export Scalable Vector SVG"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>SVG</span>
            </button>
          </div>
        </div>

        {/* Optional Diagram Legend / Notation Callout */}
        {showLegend && (
          <div className="px-4 py-2.5 bg-blue-950/40 border-b border-blue-900/50 text-xs text-blue-200 flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-150">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-300">Notation Standard:</span>
              <span className="text-slate-300">{meta.notation}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>
                <span>Entities / Actors</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                <span>Active Channels</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
                <span>Databases / Systems</span>
              </span>
            </div>
          </div>
        )}

        {showSource && (
          <div className="relative border-b border-slate-800">
            <div className="absolute right-3 top-3">
              <button
                onClick={() => handleCopyCode(sanitisedCode || code)}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1 font-mono"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-900/95 text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed">
              {sanitisedCode || code}
            </pre>
          </div>
        )}

        {/* High-visibility Canvas with zoom container */}
        <div 
          className={`relative overflow-auto p-6 sm:p-10 flex justify-center items-center min-h-[440px] max-h-[750px] resize-y transition-colors duration-200 ${getCanvasBgClass(canvasMode)}`}
        >
          <div
            ref={containerRef}
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "center center",
              transition: "transform 0.15s ease-out",
            }}
            className="flex justify-center items-center w-full max-w-full [&_svg]:max-w-none [&_svg]:h-auto [&_svg]:drop-shadow-lg [&_svg]:overflow-visible"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>

        {/* Bottom Diagram Footer Strip with Notation & Labels */}
        <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-slate-900/80 border-t border-slate-800/80 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">Diagram Type:</span>
            <span className="font-semibold text-slate-200">{meta.badge}</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline truncate max-w-md">
              {meta.notation}
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400">
            <span>Canvas: {canvasMode}</span>
            <span>Scale: {Math.round(zoomLevel * 100)}%</span>
          </div>
        </div>
      </div>

      {/* Full-Screen High-Resolution Diagram Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{meta.icon}</span>
              <div>
                <h2 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <span>{meta.badge}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Fullscreen Vector Inspection
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  {meta.notation}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Modal Zoom Controls */}
              <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
                <button
                  onClick={modalZoomOut}
                  disabled={modalZoomLevel <= 0.4}
                  className="p-2 hover:text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-40"
                  title="Zoom Out (-25%)"
                >
                  <ZoomOut className="w-4 h-4 text-slate-300" />
                </button>
                <button
                  onClick={modalResetZoom}
                  className="px-3 py-1 text-xs font-mono text-slate-200 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Reset to 100%"
                >
                  {Math.round(modalZoomLevel * 100)}%
                </button>
                <button
                  onClick={modalZoomIn}
                  disabled={modalZoomLevel >= 3.0}
                  className="p-2 hover:text-white rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-40"
                  title="Zoom In (+25%)"
                >
                  <ZoomIn className="w-4 h-4 text-slate-300" />
                </button>
              </div>

              {/* Quick modal preset pills */}
              <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1 text-xs font-mono">
                <button
                  onClick={() => setModalZoomLevel(1)}
                  className={`px-2 py-1 rounded-lg ${modalZoomLevel === 1 ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  100%
                </button>
                <button
                  onClick={() => setModalZoomLevel(1.5)}
                  className={`px-2 py-1 rounded-lg ${modalZoomLevel === 1.5 ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  150%
                </button>
                <button
                  onClick={() => setModalZoomLevel(2)}
                  className={`px-2 py-1 rounded-lg ${modalZoomLevel === 2 ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
                >
                  200%
                </button>
              </div>

              {/* Contrast / Theme Toggle */}
              <button
                onClick={cycleCanvasMode}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] hover:text-white rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors"
                title={`Canvas Theme: ${canvasMode.toUpperCase()}`}
              >
                {canvasMode === "dark" && <Moon className="w-4 h-4 text-blue-400" />}
                {canvasMode === "light" && <Sun className="w-4 h-4 text-amber-400" />}
                {canvasMode === "blueprint" && <Compass className="w-4 h-4 text-cyan-400" />}
                <span className="text-xs font-mono capitalize">{canvasMode}</span>
              </button>

              {/* PNG Download */}
              <button
                onClick={handleDownloadPNG}
                className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/50 text-sky-200 text-xs font-semibold transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-sky-400" />
                <span>Save PNG</span>
              </button>

              {/* SVG Download */}
              <button
                onClick={handleDownloadSVG}
                className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/50 text-blue-200 text-xs font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Save SVG</span>
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                title="Close Fullscreen (Esc)"
              >
                <X className="w-5 h-5 text-rose-400" />
                <span>Close</span>
              </button>
            </div>
          </div>

          <div
            className={`flex-1 overflow-auto flex items-center justify-center p-8 rounded-2xl mt-3 transition-colors ${getCanvasBgClass(canvasMode)}`}
          >
            <div
              ref={modalContainerRef}
              style={{
                transform: `scale(${modalZoomLevel})`,
                transformOrigin: "center center",
                transition: "transform 0.15s ease-out",
              }}
              className="flex items-center justify-center w-full max-w-full [&_svg]:max-w-none [&_svg]:h-auto [&_svg]:drop-shadow-2xl [&_svg]:overflow-visible"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>
        </div>
      )}
    </>
  );
}
