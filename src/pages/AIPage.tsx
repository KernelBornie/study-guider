import React, { useState, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { 
  ArrowLeft, 
  Send, 
  Trash2, 
  Sparkles, 
  GraduationCap, 
  Bot, 
  User, 
  AlertCircle,
  Copy,
  Check,
  Paperclip,
  FileText,
  WifiOff,
  Wifi,
  Cpu,
  Layers
} from "lucide-react";
import FileUploader, { AttachedFile } from "@/components/FileUploader";
import MermaidDiagram from "@/components/MermaidDiagram";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { generateOfflineTutorReply } from "@/services/aiTutorEngine";

interface Message {
  role: "user" | "assistant";
  content: string;
  attachmentNames?: string[];
  source?: "offline" | "cloud";
}

const SUGGESTIONS = [
  "Draw the SCHS context model as a Mermaid diagram.",
  "Draw a UML class diagram for an online examination system.",
  "Explain the McCall Factor Model with a visual mindmap diagram.",
  "Calculate cyclomatic complexity for a program graph with E=21, N=17, P=5.",
  "Explain the defect removal cost model with a flowchart.",
  "What are the major differences between SQA and Quality Control (QC)?",
  "Compare Walkthroughs, Fagan Inspections, and Formal Design Reviews.",
  "Explain the safety-critical Insulin Pump software state machine.",
];

export default function AIPage() {
  const isOnline = useOnlineStatus();
  const [offlineOnly, setOfflineOnly] = useState<boolean>(() => {
    try {
      return localStorage.getItem("unza_force_offline_ai") === "true";
    } catch {
      return false;
    }
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const toggleOfflineMode = () => {
    const next = !offlineOnly;
    setOfflineOnly(next);
    try {
      localStorage.setItem("unza_force_offline_ai", String(next));
    } catch {
      // ignore
    }
  };

  const sendMessage = async (text: string) => {
    if ((!text.trim() && files.length === 0) || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text || "(See attached files)",
      attachmentNames: files.map((f) => f.name),
    };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setStatusNotice(null);

    const outgoingFiles = files.map((f) => ({
      name: f.name,
      mimeType: f.mimeType,
      size: f.size,
      data: f.data,
    }));

    // If device is offline OR user turned on Force Offline mode:
    if (!isOnline || offlineOnly) {
      // Simulate slight realistic processing for UX
      setTimeout(() => {
        try {
          const offlineReply = generateOfflineTutorReply(
            userMessage.content,
            outgoingFiles,
            updatedMessages
          );
          setMessages([
            ...updatedMessages,
            { role: "assistant", content: offlineReply, source: "offline" },
          ]);
          setFiles([]);
          setStatusNotice("Synthesized locally via 100% Offline UNZA Knowledge Engine.");
        } catch (err: any) {
          console.error("Offline tutor error:", err);
          setMessages([
            ...updatedMessages,
            {
              role: "assistant",
              content: "### 🎓 Academic Tutor (Offline Notice)\nI encountered an issue processing your query offline. Please try rephrasing or asking about a specific UNZA course topic.",
              source: "offline",
            },
          ]);
        } finally {
          setLoading(false);
        }
      }, 400);
      return;
    }

    // Attempt online API call with automatic offline fallback
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
          files: outgoingFiles,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply, source: "cloud" },
      ]);
      setFiles([]);
    } catch (err: any) {
      console.warn("Cloud AI unavailable, activating Offline Intelligence Engine:", err?.message || err);
      // Fallback seamlessly to offline intelligence engine
      const fallbackReply = generateOfflineTutorReply(
        userMessage.content,
        outgoingFiles,
        updatedMessages
      );
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: fallbackReply, source: "offline" },
      ]);
      setFiles([]);
      setStatusNotice("Cloud service unreachable — answered automatically using the offline UNZA Knowledge Engine.");
    } finally {
      setLoading(false);
    }
  };

  // Check URL query parameters (e.g. from "Ask AI about this paper")
  useEffect(() => {
    const q = searchParams.get("q");
    if (q && messages.length === 0) {
      sendMessage(q);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const clearChat = () => {
    setMessages([]);
    setFiles([]);
    setStatusNotice(null);
  };

  const handleCopy = (index: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const currentModeOffline = !isOnline || offlineOnly;

  return (
    <div className="flex flex-col h-[calc(100vh-130px)] max-w-4xl mx-auto pb-4">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 mb-4 shrink-0 shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Courses</span>
            </Link>
            <span className="text-slate-600">·</span>
            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <Cpu className="w-3 h-3 text-purple-400" />
              <span>100% Offline Capable · Visual Diagrams & Verified Solutions</span>
            </span>
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs">
              🤖
            </span>
            <span>UNZA AI Study Assistant & Diagram Tutor</span>
          </h1>

          <p className="text-xs text-slate-400">
            Ask any question · Attach past paper PDFs, images & notes · Live Mermaid diagrams · Works without internet
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Offline Toggle Button */}
          <button
            onClick={toggleOfflineMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              currentModeOffline
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm"
                : "bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-300"
            }`}
            title={
              currentModeOffline
                ? "100% Offline Mode Active (Zero internet data used)"
                : "Hybrid Mode: Cloud Gemini with automatic offline fallback"
            }
          >
            {currentModeOffline ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                <span>Offline Engine: Active</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hybrid: Online</span>
              </>
            )}
          </button>

          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 rounded-lg text-xs transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear Chat</span>
            </button>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto rounded-xl bg-slate-900/60 border border-slate-800 p-4 sm:p-6 space-y-6">
        {messages.length === 0 && (
          <div className="text-center py-8 sm:py-12 max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-2xl shadow-inner">
              🎓
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">
                What would you like to revise today?
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upload a past paper PDF or screenshot, and I will analyze each question, explain calculations, and draw architecture diagrams — online or 100% offline.
              </p>
            </div>

            {/* Offline Readiness Callout */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-left text-xs text-slate-300 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight space-y-0.5">
                <span className="font-bold text-white block">Offline Tutor Engine Ready</span>
                <span className="text-slate-400">
                  Full UNZA past paper solutions, formulas, defect models, and live Mermaid drawings are cached and fully functional without an internet connection.
                </span>
              </div>
            </div>

            {/* Suggestions */}
            <div className="space-y-2 pt-2 text-left">
              <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold block text-center">
                Suggested Topics to Explore:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="p-3 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/40 rounded-lg text-xs text-left text-slate-300 hover:text-white transition-all shadow-sm group"
                  >
                    <span className="text-purple-400 font-bold mr-1.5 group-hover:translate-x-0.5 inline-block transition-transform">
                      →
                    </span>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.map((msg, i) => {
          const isUser = msg.role === "user";
          const isCopied = copiedIndex === i;

          return (
            <div
              key={i}
              className={`flex items-start gap-3 ${
                isUser ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                  isUser
                    ? "bg-blue-600 text-white"
                    : msg.source === "offline"
                    ? "bg-amber-600/20 border border-amber-500/30 text-amber-300"
                    : "bg-purple-600/20 border border-purple-500/30 text-purple-400"
                }`}
              >
                {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-xl p-4 text-xs leading-relaxed space-y-2 ${
                  isUser
                    ? "bg-blue-600 text-white rounded-tr-none shadow-md"
                    : "bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none shadow-md"
                }`}
              >
                {!isUser ? (
                  <>
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2 text-[10px] text-slate-400 font-mono">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-300">UNZA Academic Tutor</span>
                        {msg.source === "offline" ? (
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px]">
                            ⚡ Local Offline Engine
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[9px]">
                            ☁️ Gemini 3.8 Flash
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleCopy(i, msg.content)}
                        className="hover:text-white flex items-center gap-1 transition-colors"
                        title="Copy answer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="prose prose-invert prose-xs max-w-none prose-headings:text-white prose-p:leading-relaxed prose-table:my-2 prose-th:bg-slate-900 prose-th:p-2 prose-td:p-2 prose-td:border-b prose-td:border-slate-800">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          code({ inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || "");
                            const lang = match?.[1];
                            const code = String(children).replace(/\n$/, "");

                            if (!inline && lang === "mermaid") {
                              return <MermaidDiagram code={code} />;
                            }

                            return inline ? (
                              <code className="bg-slate-900 border border-slate-800 text-sky-300 px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                                {children}
                              </code>
                            ) : (
                              <pre className="bg-slate-950 text-slate-200 p-3 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono my-2">
                                <code>{children}</code>
                              </pre>
                            );
                          },
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </>
                ) : (
                  <div>
                    <p className="whitespace-pre-line text-slate-100 font-medium">{msg.content}</p>
                    {msg.attachmentNames && msg.attachmentNames.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-blue-400/40 text-[11px] text-blue-100 flex flex-wrap gap-1.5 items-center">
                        <Paperclip className="w-3 h-3 shrink-0" />
                        <span>Attached:</span>
                        {msg.attachmentNames.map((name, nIdx) => (
                          <span
                            key={nIdx}
                            className="px-2 py-0.5 rounded bg-blue-700/60 font-mono text-[10px]"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl rounded-tl-none p-4 text-xs text-slate-400 flex items-center gap-2 shadow-md">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
              <span className="text-[11px] font-mono">
                {currentModeOffline
                  ? "Analyzing query & synthesizing solution with local Mermaid diagrams..."
                  : "Analyzing question & synthesizing solution with diagrams..."}
              </span>
            </div>
          </div>
        )}

        {statusNotice && (
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 text-xs flex items-center gap-2 max-w-2xl mx-auto shadow-sm">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
            <div className="flex-1">
              <span className="text-[11px] text-slate-300">{statusNotice}</span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input & File Upload Container */}
      <div className="mt-3 bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-lg shrink-0 space-y-2.5">
        <FileUploader files={files} setFiles={setFiles} disabled={loading} />

        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              files.length > 0
                ? "Describe what you would like answered from your attachments (or send directly)..."
                : currentModeOffline
                ? "Ask anything offline, request a diagram, or attach a past paper..."
                : "Ask anything, request a diagram, or attach a past paper..."
            }
            disabled={loading}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || (!input.trim() && files.length === 0)}
            className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm active:scale-95"
          >
            <span>Ask Tutor</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
