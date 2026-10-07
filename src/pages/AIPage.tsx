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
  Layers,
  FileCheck2,
  ChevronRight
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
  "Solve the questions in the attached paper in order.",
  "Solve Question 1 from the attached paper with McCall factor mappings.",
  "Explain the 5 extended quality factors (Safety, Expandability, etc.) from Question 2.",
  "Explain the defect removal cost model with step-by-step 100-defect calculations.",
  "Draw the SCHS context model as a Mermaid diagram.",
  "Compare Walkthroughs, Fagan Inspections, and Formal Design Reviews.",
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
    const readyFiles = files.filter((f) => f.status === "ready");

    if ((!text.trim() && readyFiles.length === 0) || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text || (readyFiles.length > 0 ? "Solve the questions in the attached paper in order." : "Hello"),
      attachmentNames: readyFiles.map((f) => f.name),
    };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setStatusNotice(null);

    const outgoingFiles = readyFiles.map((f) => ({
      name: f.name,
      mimeType: f.mimeType,
      size: f.size,
      data: f.data,
      pages: f.pages,
      detectedQuestions: f.detectedQuestions,
    }));

    // If device is offline OR user turned on Force Offline mode:
    if (!isOnline || offlineOnly) {
      try {
        const offlineReply = await generateOfflineTutorReply(
          userMessage.content,
          outgoingFiles,
          updatedMessages
        );
        setMessages([
          ...updatedMessages,
          { role: "assistant", content: offlineReply, source: "offline" },
        ]);
        setStatusNotice(
          readyFiles.length > 0
            ? "Offline mode — attachment parsed locally with verified model answers."
            : "Synthesized locally via 100% Offline UNZA Knowledge Engine."
        );
      } catch (err: any) {
        console.error("Offline tutor error:", err);
        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            content: "### 🎓 Academic Tutor (Offline Notice)\nI encountered an issue processing your query offline. Please specify a question number (e.g. 'Solve Question 1') or UNZA course topic.",
            source: "offline",
          },
        ]);
      } finally {
        setLoading(false);
      }
      return;
    }

    // Online Gemini API request
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
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || `Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply, source: "cloud" },
      ]);
    } catch (err: any) {
      console.warn("Cloud AI unavailable, activating Offline Intelligence Engine:", err?.message || err);
      const fallbackReply = await generateOfflineTutorReply(
        userMessage.content,
        outgoingFiles,
        updatedMessages
      );
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: fallbackReply, source: "offline" },
      ]);
      setStatusNotice(
        readyFiles.length > 0
          ? "Offline mode — attachment parsed locally (Cloud unreachable)."
          : "Cloud service unreachable — answered automatically using the offline UNZA Knowledge Engine."
      );
    } finally {
      setLoading(false);
    }
  };

  // Check URL query parameters
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
    setStatusNotice(null);
  };

  const handleCopy = (index: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const currentModeOffline = !isOnline || offlineOnly;
  const readyFilesCount = files.filter((f) => f.status === "ready").length;

  return (
    <div className="flex flex-col h-[calc(100vh-90px)] w-full max-w-[1400px] mx-auto px-2 sm:px-4 pb-3">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 mb-3 shrink-0 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Courses</span>
            </Link>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Exact-Question Grounding · Verified Model Solutions · 100% Offline Capable</span>
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white text-base shadow-md">
              🤖
            </span>
            <span>UNZA AI Study Assistant & Diagram Tutor</span>
          </h1>

          <p className="text-sm text-slate-400">
            Attach past paper PDFs & exam sheets · Live decompressed page streams · Exact question solving without drift
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Offline Toggle Button */}
          <button
            onClick={toggleOfflineMode}
            className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-bold transition-all border shadow-sm ${
              currentModeOffline
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300"
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
                <WifiOff className="w-4 h-4 text-amber-400" />
                <span>Offline Engine: Active</span>
              </>
            ) : (
              <>
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span>Hybrid: Online</span>
              </>
            )}
          </button>

          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 rounded-xl text-xs font-semibold transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span className="hidden sm:inline">Clear Chat</span>
            </button>
          )}
        </div>
      </div>

      {/* Prominent Full-Width Attachment Strip */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 mb-3 shadow-md shrink-0">
        <FileUploader files={files} setFiles={setFiles} disabled={loading} />

        {currentModeOffline && readyFilesCount > 0 && (
          <div className="mt-2.5 px-3.5 py-2 bg-amber-950/40 border border-amber-800/60 rounded-xl text-amber-200 text-xs flex items-center gap-2 font-medium">
            <FileCheck2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Offline mode — attachment parsed locally with verified model answers.</span>
          </div>
        )}
      </div>

      {/* Chat scroll pane (min-height >= 75vh) */}
      <div className="flex-1 overflow-y-auto rounded-xl bg-slate-900/60 border border-slate-800 p-5 sm:p-8 space-y-6 text-[15px] leading-[1.7] shadow-inner">
        {messages.length === 0 && (
          <div className="text-center py-10 sm:py-16 max-w-2xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto text-3xl shadow-inner">
              🎓
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                What would you like to revise today?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Click <b>Choose File / Upload</b> above to attach past paper PDFs (e.g. <code className="text-purple-300">CSC 4642 2024 EXAM.pdf</code>). The tutor decompresses the text, identifies each question, and provides full model answers in sequential order.
              </p>
            </div>

            {/* Suggestions */}
            <div className="space-y-2.5 pt-3 text-left">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-bold block text-center">
                Recommended Study Prompts:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="p-3.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/50 rounded-xl text-xs sm:text-sm text-left text-slate-200 hover:text-white transition-all shadow-sm group flex items-start gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>{s}</span>
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
              className={`flex items-start gap-3.5 ${
                isUser ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm shadow-md ${
                  isUser
                    ? "bg-blue-600 text-white"
                    : msg.source === "offline"
                    ? "bg-amber-600/20 border border-amber-500/30 text-amber-300"
                    : "bg-purple-600/20 border border-purple-500/30 text-purple-400"
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[95%] sm:max-w-[88%] rounded-xl p-5 text-sm leading-[1.7] space-y-3 ${
                  isUser
                    ? "bg-blue-600 text-white rounded-tr-none shadow-md"
                    : "bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none shadow-xl"
                }`}
              >
                {!isUser ? (
                  <>
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-2 text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-slate-200 text-sm">UNZA Academic Tutor</span>
                        {msg.source === "offline" ? (
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-semibold">
                            ⚡ Local Offline Engine
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[11px] font-semibold">
                            ☁️ Gemini 3.8 Flash
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleCopy(i, msg.content)}
                        className="hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1 rounded hover:bg-slate-900"
                        title="Copy answer"
                      >
                        {isCopied ? (
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
                    </div>

                    <div className="prose prose-invert prose-sm max-w-none prose-headings:text-white prose-p:leading-relaxed prose-table:my-3 prose-th:bg-slate-900 prose-th:p-2 prose-td:p-2 prose-td:border-b prose-td:border-slate-800">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          pre({ children }) {
                            return <>{children}</>;
                          },
                          code({ className, children, node, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || "");
                            const lang = match?.[1];
                            const code = String(children).replace(/\n$/, "");

                            if (lang === "mermaid") {
                              return <MermaidDiagram code={code} />;
                            }

                            if (match || String(children).includes("\n")) {
                              return (
                                <pre className="bg-slate-950 text-slate-200 p-4 rounded-xl border border-slate-800 overflow-x-auto text-[14px] font-mono my-3 leading-normal">
                                  <code className={className} {...props}>
                                    {children}
                                  </code>
                                </pre>
                              );
                            }

                            return (
                              <code className="bg-slate-900 border border-slate-800 text-sky-300 px-2 py-0.5 rounded text-[13px] font-mono" {...props}>
                                {children}
                              </code>
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
                    <p className="whitespace-pre-line text-slate-100 font-semibold text-sm leading-relaxed">
                      {msg.content}
                    </p>
                    {msg.attachmentNames && msg.attachmentNames.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-blue-400/40 text-xs text-blue-100 flex flex-wrap gap-2 items-center">
                        <Paperclip className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-semibold">Attached:</span>
                        {msg.attachmentNames.map((name, nIdx) => (
                          <span
                            key={nIdx}
                            className="px-2.5 py-1 rounded bg-blue-700/60 font-mono text-xs"
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
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl rounded-tl-none p-5 text-sm text-slate-400 flex items-center gap-3 shadow-xl">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce" />
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
              <span className="font-mono text-xs text-purple-300">
                {currentModeOffline
                  ? "Decompressing pages, detecting questions & formulating verified answers..."
                  : "Extracting questions & generating exact-question grounded solution..."}
              </span>
            </div>
          </div>
        )}

        {statusNotice && (
          <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 text-xs flex items-center gap-2.5 max-w-3xl mx-auto shadow-md">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-400" />
            <div className="flex-1">
              <span className="text-slate-300">{statusNotice}</span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input row — auto-grow textarea */}
      <div className="mt-3 bg-slate-900 border border-slate-800 rounded-2xl p-3.5 shadow-2xl shrink-0">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            rows={3}
            placeholder={
              files.length > 0
                ? "Describe what you would like answered from your attachments (or send directly)… (Ctrl+Enter to submit)"
                : "Ask anything, request a diagram, or attach a past paper… (Ctrl+Enter to submit)"
            }
            disabled={loading}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 disabled:opacity-50 resize-y min-h-[80px] max-h-[240px] leading-relaxed w-full"
          />

          <button
            type="submit"
            disabled={loading || (!input.trim() && readyFilesCount === 0)}
            className="w-full sm:w-auto px-7 py-3.5 min-h-[44px] bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-95 shrink-0"
          >
            <span>Ask Tutor</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
