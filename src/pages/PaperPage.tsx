import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocalData } from "@/hooks/useLocalData";
import { 
  ArrowLeft, 
  Printer, 
  Check, 
  Copy, 
  Clock, 
  Award, 
  Layers, 
  CheckCircle2, 
  PenTool, 
  Search, 
  BookOpen,
  ChevronDown,
  ChevronUp,
  Share2
} from "lucide-react";
import { DiagramPrototyping } from "@/components/DiagramPrototyping";
import { DiagramDefectRemoval } from "@/components/DiagramDefectRemoval";
import { DiagramFormalDesignReview } from "@/components/DiagramFormalDesignReview";
import { DiagramMcCallTree } from "@/components/DiagramMcCallTree";
import { DiagramErrorChain } from "@/components/DiagramErrorChain";
import { DiagramWhiteBoxTesting } from "@/components/DiagramWhiteBoxTesting";
import MermaidDiagram from "@/components/MermaidDiagram";

export default function PaperPage() {
  const { courseSlug, paperSlug } = useParams<{ courseSlug: string; paperSlug: string }>();
  const { courses } = useLocalData();

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeDiagram, setActiveDiagram] = useState<string | null>(null);
  const [searchInPaper, setSearchInPaper] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("all");

  const course = courses.find((c) => c.slug === courseSlug);
  const paper = course?.papers.find((p) => p.slug === paperSlug);

  if (!course || !paper) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Paper Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested paper was not found in course "{courseSlug}".
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-500"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>
      </div>
    );
  }

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderDiagram = (type: string) => {
    switch (type) {
      case "prototyping":
        return <DiagramPrototyping />;
      case "defect-removal":
        return <DiagramDefectRemoval />;
      case "formal-review":
        return <DiagramFormalDesignReview />;
      case "mccall-tree":
        return <DiagramMcCallTree />;
      case "error-chain":
        return <DiagramErrorChain />;
      case "whitebox":
        return <DiagramWhiteBoxTesting />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Courses</Link>
          <span>/</span>
          <Link to={`/course/${course.slug}`} className="hover:text-white transition-colors font-medium">
            {course.code}
          </Link>
          <span>/</span>
          <span className="text-slate-200 font-semibold">{paper.title}</span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/ai?q=${encodeURIComponent(
              `Please assist me with revising the examination paper:\n` +
              `Title: ${paper.title} (${course.code} - ${course.title})\n` +
              `Venue: ${paper.venue || "The University of Zambia"}\n` +
              `Duration: ${paper.duration} | Total Marks: ${paper.totalMarks} Marks\n` +
              `Structure: ${paper.structure || `${paper.sections.length} Sections`}\n\n` +
              `Topics & Questions Overview:\n` +
              paper.sections.map((sec) =>
                `### ${sec.name}\n` +
                sec.questions.map((q) => `- ${q.number}: ${q.topic || q.title || "Topic"} [${q.marks} marks]`).join("\n")
              ).join("\n\n") +
              `\n\nPlease provide an executive study guide covering the key principles, model answers, and exam preparation tips for each topic.`
            )}`}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            <span>🤖 Ask AI About This Paper</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Official Paper Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 font-bold">
                {course.code}
              </span>
              <span>·</span>
              <span>{course.title}</span>
              <span>·</span>
              <span>Year {paper.year}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {paper.title}
            </h1>

            <p className="text-xs text-slate-400 max-w-2xl">
              Comprehensive verified solutions with complete step-by-step arithmetic and interactive process flows based on official University of Zambia syllabus.
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 font-mono text-xs">
            <div className="px-3.5 py-1.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Total Marks</span>
              <span className="text-emerald-400 font-bold text-sm">{paper.totalMarks} Marks</span>
            </div>
            <div className="px-3.5 py-1.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-slate-500 block text-[10px]">Exam Duration</span>
              <span className="text-amber-400 font-bold text-sm">{paper.duration}</span>
            </div>
          </div>
        </div>

        {/* Section Navigation Pills & Search Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setSelectedSection("all")}
              className={`px-3 py-1 rounded-md transition-colors ${
                selectedSection === "all" ? "bg-blue-600 text-white font-medium" : "bg-slate-950 text-slate-400 hover:text-white"
              }`}
            >
              All Sections ({paper.sections.length})
            </button>
            {paper.sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  selectedSection === sec.id ? "bg-blue-600 text-white font-medium" : "bg-slate-950 text-slate-400 hover:text-white"
                }`}
              >
                {sec.name}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchInPaper}
              onChange={(e) => setSearchInPaper(e.target.value)}
              placeholder="Search in this paper..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Sections & Questions */}
      <div className="space-y-10">
        {paper.sections
          .filter((sec) => selectedSection === "all" || selectedSection === sec.id)
          .map((section) => {
            const visibleQuestions = section.questions.filter((q) => {
              if (!searchInPaper.trim()) return true;
              const term = searchInPaper.toLowerCase();
              const subList = q.subQuestions || q.questions || [];
              return (
                q.number.toLowerCase().includes(term) ||
                (q.title && q.title.toLowerCase().includes(term)) ||
                (q.topic && q.topic.toLowerCase().includes(term)) ||
                subList.some(
                  (sq) =>
                    (sq.question && sq.question.toLowerCase().includes(term)) ||
                    (sq.text && sq.text.toLowerCase().includes(term)) ||
                    (sq.answer && sq.answer.toLowerCase().includes(term)) ||
                    (sq.modelAnswer && sq.modelAnswer.toLowerCase().includes(term))
                )
              );
            });

            if (visibleQuestions.length === 0) return null;

            return (
              <section key={section.id} className="space-y-6 print:break-before-page">
                {/* Section Header */}
                <div className="border-b border-slate-800 pb-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      {section.name}
                    </h2>
                    {section.compulsory && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                        Compulsory
                      </span>
                    )}
                  </div>
                  {section.instructions && (
                    <p className="text-xs text-slate-400 mt-1 italic">
                      {section.instructions}
                    </p>
                  )}
                </div>

                {/* Questions List */}
                <div className="space-y-8">
                  {visibleQuestions.map((q) => {
                    const subList = q.subQuestions || q.questions || [];

                    return (
                      <div
                        key={q.id}
                        id={q.id}
                        className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-sm"
                      >
                        {/* Question Banner */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                          <div className="space-y-1">
                            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                              {q.number}
                            </span>
                            <h3 className="text-lg font-bold text-white">
                              {q.topic || q.title || q.number}
                            </h3>
                          </div>

                          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-950 border border-slate-800 text-emerald-400">
                            {q.marks} Marks
                          </span>
                        </div>

                        {/* Sub-Questions */}
                        <div className="space-y-6">
                          {subList.map((sq) => {
                            const isCopied = copiedId === sq.id;
                            const isDiagramOpen = activeDiagram === sq.id;
                            const qText = sq.question || sq.text || "";
                            const aText = sq.answer || sq.modelAnswer || "";
                            const qLabel = sq.label || sq.subNumber || "";

                            return (
                              <div
                                key={sq.id}
                                id={sq.id}
                                className="rounded-lg bg-slate-950/70 border border-slate-800/90 p-5 space-y-4"
                              >
                                {/* Sub-question prompt header */}
                                <div className="flex items-start justify-between gap-3">
                                  <div className="space-y-1 text-xs">
                                    <div className="flex items-center gap-2">
                                      <span className="font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10">
                                        Part {qLabel}
                                      </span>
                                      <span className="text-slate-400 font-mono">
                                        [{sq.marks} marks]
                                      </span>
                                    </div>
                                    <div className="text-slate-200 text-sm font-medium mt-1 whitespace-pre-line leading-relaxed">
                                      {qText}
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => handleCopy(sq.id, `${qText}\n\nAnswer:\n${aText}`)}
                                    className="text-slate-400 hover:text-white p-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors shrink-0"
                                    title="Copy question and answer"
                                  >
                                    {isCopied ? (
                                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                      <Copy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                </div>

                                {/* Answer Box */}
                                <div className="p-4 rounded-lg bg-slate-900/90 border-l-4 border-emerald-500 border-y border-r border-slate-800 text-xs text-slate-200 leading-relaxed font-sans overflow-x-auto">
                                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Verified Solution / Model Answer:
                                  </div>
                                  <div className="prose prose-invert prose-xs max-w-none prose-headings:text-white prose-p:leading-relaxed prose-table:my-2 prose-th:bg-slate-950 prose-th:p-2 prose-td:p-2 prose-td:border-b prose-td:border-slate-800">
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
                                              <pre className="bg-slate-950 text-slate-200 p-3 rounded-lg border border-slate-800 overflow-x-auto text-xs font-mono my-2 leading-normal">
                                                <code className={className} {...props}>
                                                  {children}
                                                </code>
                                              </pre>
                                            );
                                          }

                                          return (
                                            <code className="bg-slate-900 border border-slate-800 text-sky-300 px-1.5 py-0.5 rounded text-[12px] font-mono" {...props}>
                                              {children}
                                            </code>
                                          );
                                        },
                                      }}
                                    >
                                      {aText}
                                    </ReactMarkdown>
                                  </div>
                                </div>

                                {/* Key Points Callout (if available) */}
                                {sq.keyPoints && sq.keyPoints.length > 0 && (
                                  <div className="p-3 bg-blue-950/20 border border-blue-500/20 rounded-lg text-xs space-y-1.5">
                                    <span className="text-blue-400 font-bold uppercase tracking-wider text-[10px] block">
                                      Key Marking Points:
                                    </span>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-slate-300 text-[11px]">
                                      {sq.keyPoints.map((kp, idx) => (
                                        <li key={idx} className="flex items-start gap-1.5">
                                          <span className="text-blue-400 shrink-0">•</span>
                                          <span>{kp}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Interactive Visual Diagram Toggle */}
                                {sq.diagramType && (
                                  <div className="space-y-3 pt-1">
                                    <button
                                      onClick={() => setActiveDiagram(isDiagramOpen ? null : sq.id)}
                                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-semibold transition-colors"
                                    >
                                      <PenTool className="w-3.5 h-3.5 text-blue-400" />
                                      <span>
                                        {isDiagramOpen ? "Hide Interactive Visual Diagram" : "View Interactive Visual Diagram"}
                                      </span>
                                      {isDiagramOpen ? (
                                        <ChevronUp className="w-3.5 h-3.5 ml-1" />
                                      ) : (
                                        <ChevronDown className="w-3.5 h-3.5 ml-1" />
                                      )}
                                    </button>

                                    {isDiagramOpen && (
                                      <div className="p-4 bg-slate-950 rounded-xl border border-blue-500/30 overflow-hidden shadow-2xl transition-all">
                                        {renderDiagram(sq.diagramType)}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}
