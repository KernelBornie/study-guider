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
  FileText
} from "lucide-react";
import FileUploader, { AttachedFile } from "@/components/FileUploader";
import MermaidDiagram from "@/components/MermaidDiagram";

interface Message {
  role: "user" | "assistant";
  content: string;
  attachmentNames?: string[];
}

const SUGGESTIONS = [
  "Draw the SCHS context model as a Mermaid diagram.",
  "Draw a UML class diagram for an online examination system.",
  "Explain the McCall Factor Model with a visual mindmap diagram.",
  "Calculate cyclomatic complexity for a program graph with E=21, N=17, P=5.",
  "Explain the defect removal cost model with a flowchart.",
  "What are the major differences between SQA and Quality Control (QC)?",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
    setError(null);

    const outgoingFiles = files.map((f) => ({
      name: f.name,
      mimeType: f.mimeType,
      size: f.size,
      data: f.data,
    }));

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
        throw new Error(errorData?.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply },
      ]);
      setFiles([]); // Clear attached files upon success
    } catch (err: any) {
      console.error("Chat error:", err);
      setError(err?.message || "Failed to reach the AI tutor. Please verify GEMINI_API_KEY is configured.");
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
    setError(null);
  };

  const handleCopy = (index: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
            <span className="text-[11px] text-slate-400 font-mono">
              Powered by Gemini 3.8 Flash · Vision & Live Diagrams
            </span>
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs">
              🤖
            </span>
            <span>UNZA AI Study Assistant & Diagram Tutor</span>
          </h1>

          <p className="text-xs text-slate-400">
            Ask any question · Attach past paper PDFs & screenshots · Get live Mermaid diagrams
          </p>
        </div>

        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 rounded-lg text-xs transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Chat</span>
          </button>
        )}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto rounded-xl bg-slate-900/60 border border-slate-800 p-4 sm:p-6 space-y-6">
        {messages.length === 0 && (
          <div className="text-center py-8 sm:py-12 max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto text-2xl shadow-inner">
              🎓
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">
                What would you like to revise today?
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upload a past paper PDF or screenshot, and I will analyze each question, explain calculations, and draw architecture diagrams.
              </p>
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
                    className="p-3 bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/40 rounded-lg text-xs text-left text-slate-300 hover:text-white transition-all shadow-sm group"
                  >
                    <span className="text-blue-400 font-bold mr-1.5 group-hover:translate-x-0.5 inline-block transition-transform">
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
                      <span>UNZA Academic Tutor</span>
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
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
              <span className="text-[11px] font-mono">Analyzing question & synthesizing solution with diagrams...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-300 text-xs flex items-center gap-2 max-w-2xl mx-auto shadow-sm">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <div className="flex-1">
              <span className="font-semibold block">Tutor connection note:</span>
              <span className="text-[11px] text-rose-200">{error}</span>
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
                : "Ask anything, request a diagram, or attach a past paper..."
            }
            disabled={loading}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || (!input.trim() && files.length === 0)}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm"
          >
            <span>Ask Tutor</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
