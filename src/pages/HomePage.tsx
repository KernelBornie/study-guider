import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLocalData } from "@/hooks/useLocalData";
import { buildGlobalSearchIndex } from "@/data/courses";
import { 
  Search, 
  BookOpen, 
  FileText, 
  ArrowRight, 
  PenTool, 
  Calculator, 
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  GraduationCap
} from "lucide-react";

export default function HomePage() {
  const { courses } = useLocalData();
  const [searchQuery, setSearchQuery] = useState("");

  const searchIndex = useMemo(() => buildGlobalSearchIndex(courses), [courses]);

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return courses;
    const q = searchQuery.toLowerCase();
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.papers.some((p) => p.title.toLowerCase().includes(q))
    );
  }, [courses, searchQuery]);

  const matchingQuestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 3) return [];
    const q = searchQuery.toLowerCase();
    return searchIndex
      .filter(
        (item) =>
          item.questionText.toLowerCase().includes(q) ||
          item.answerText.toLowerCase().includes(q) ||
          (item.questionTitle && item.questionTitle.toLowerCase().includes(q))
      )
      .slice(0, 8); // Top 8 relevant matches
  }, [searchIndex, searchQuery]);

  const totalPapersCount = courses.reduce((acc, c) => acc + c.papers.length, 0);

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 p-6 sm:p-10 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>The University of Zambia · Computer Science Department</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Multi-Course Examination & Revision Portal
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Verified model answers, step-by-step mathematical calculations, and interactive visual flowcharts for UNZA final exams, continuous assessments, and tests.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="px-3.5 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-xs font-mono">
              <span className="text-slate-400 block text-[10px]">Active Courses</span>
              <span className="text-white font-bold text-sm">{courses.length} Courses</span>
            </div>
            <div className="px-3.5 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-xs font-mono">
              <span className="text-slate-400 block text-[10px]">Past Papers & Tests</span>
              <span className="text-emerald-400 font-bold text-sm">{totalPapersCount} Papers</span>
            </div>
            <div className="px-3.5 py-1.5 bg-slate-950/60 border border-slate-800 rounded-lg text-xs font-mono">
              <span className="text-slate-400 block text-[10px]">Interactive Assets</span>
              <span className="text-blue-400 font-bold text-sm">Visual Flowcharts & Labs</span>
            </div>
          </div>
        </div>

        {/* Global Live Search Bar & Action Buttons */}
        <div className="mt-8 max-w-3xl flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across courses, papers, questions (e.g., 'McCall', 'Defect', 'KAOS', 'Cyclomatic')..."
              className="w-full pl-10 pr-4 py-3 bg-slate-950/90 border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <Link
              to="/ai"
              className="px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md transition-all hover:scale-[1.02]"
            >
              <span>🤖 AI Tutor</span>
            </Link>
            <Link
              to="/admin"
              className="px-4 py-3 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center whitespace-nowrap transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Full-Text Question Search Results (if searching) */}
      {searchQuery.trim().length >= 3 && matchingQuestions.length > 0 && (
        <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Found {matchingQuestions.length} Matching Question(s) Across All Papers:
            </span>
            <span className="text-xs text-slate-400">Click to navigate directly</span>
          </div>

          <div className="space-y-2">
            {matchingQuestions.map((match) => (
              <Link
                key={`${match.courseSlug}-${match.paperSlug}-${match.questionId}`}
                to={`/course/${match.courseSlug}/paper/${match.paperSlug}#${match.questionId}`}
                className="block p-3 rounded-lg bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 transition-all text-xs group"
              >
                <div className="flex items-center justify-between gap-2 text-slate-400 mb-1">
                  <span className="font-semibold text-blue-400">
                    {match.courseCode} · {match.paperTitle}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {match.questionNumber} ({match.subQuestionLabel})
                  </span>
                </div>
                <div className="text-slate-200 font-medium group-hover:text-white line-clamp-1">
                  {match.questionText}
                </div>
                <div className="text-slate-400 text-[11px] line-clamp-1 mt-0.5 font-sans">
                  {match.answerText.replace(/[#*`]/g, "")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Courses Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              Enrolled Courses
            </h2>
            <p className="text-xs text-slate-400">
              Select a course to view all final exams, continuous assessments, and solutions.
            </p>
          </div>
          <Link
            to="/admin"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
          >
            Manage Content →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => {
            const isBlue = course.color === "blue";
            const isPurple = course.color === "purple";
            const borderAccent = isPurple ? "border-purple-500/40 hover:border-purple-500" : "border-blue-500/40 hover:border-blue-500";
            const badgeBg = isPurple ? "bg-purple-500/10 text-purple-400 border-purple-500/30" : "bg-blue-500/10 text-blue-400 border-blue-500/30";

            return (
              <div
                key={course.id}
                className={`bg-slate-900 border ${borderAccent} rounded-xl p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/50`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${badgeBg}`}>
                      {course.code}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {course.papers.length} paper{course.papers.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Quick Papers List */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                      Available Papers & Tests:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.papers.map((p) => (
                        <Link
                          key={p.id}
                          to={`/course/${course.slug}/paper/${p.slug}`}
                          className="px-2 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-300 hover:text-white transition-colors"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/course/${course.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
                  >
                    <span>Open Course Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-slate-400 font-mono">
                    UNZA Department of CS
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400 space-y-2">
            <p className="text-sm">No courses or papers found matching "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-blue-400 hover:underline"
            >
              Reset search query
            </button>
          </div>
        )}
      </div>

      {/* Interactive Tool Workshops Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <Link
          to="/diagrams"
          className="group p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
            <PenTool className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
              Exam Visual Diagrams Gallery
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Step-by-step interactive diagrams required by UNZA examiners: Prototyping Cycle, 100-Defect Removal Flow, Formal Design Review 3-Lane Flowchart, and McCall Quality Factor Tree.
            </p>
          </div>
        </Link>

        <Link
          to="/calculators"
          className="group p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
              Interactive SQA Calculators
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Live calculation laboratory for McCabe's Cyclomatic Complexity ($V(G) = E - N + 2 = P + 1$), Path vs. Line coverage, and Equivalence Class Partitioning.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
