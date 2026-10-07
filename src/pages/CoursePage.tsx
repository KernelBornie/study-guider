import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocalData } from "@/hooks/useLocalData";
import { 
  ArrowLeft, 
  FileText, 
  Clock, 
  Award, 
  Layers, 
  Calendar, 
  ChevronRight,
  Sparkles,
  BookOpen,
  Filter
} from "lucide-react";

export default function CoursePage() {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const { courses } = useLocalData();
  const [filterType, setFilterType] = useState<string>("all");

  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) {
    return (
      <div className="py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Course Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested course with slug "{courseSlug}" could not be located.
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

  const filteredPapers = course.papers.filter((paper) => {
    if (filterType === "all") return true;
    if (filterType === "study" && (paper.category === "Study Paper" || paper.paperType === "Study Paper" || paper.title.toLowerCase().includes("study guide"))) return true;
    if (filterType === "final" && (paper.paperType === "Final Exam" || paper.title.toLowerCase().includes("final"))) return true;
    if (filterType === "test" && (paper.paperType === "Test" || paper.title.toLowerCase().includes("test"))) return true;
    if (filterType === "assessment" && (paper.paperType === "Assessment" || paper.title.toLowerCase().includes("assessment"))) return true;
    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          Courses
        </Link>
        <span>/</span>
        <span className="text-slate-200 font-semibold">{course.code}</span>
      </div>

      {/* Course Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">
                {course.code}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                The University of Zambia · Dept. of Computer Science
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {course.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="flex sm:flex-col gap-2 font-mono text-xs">
            <div className="px-3.5 py-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Papers & Tests</span>
              <span className="text-emerald-400 font-bold text-sm">{course.papers.length} Papers</span>
            </div>
            <div className="px-3.5 py-2 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Curriculum Year</span>
              <span className="text-blue-400 font-bold text-sm">
                {course.code === "CSC 4630" ? "2023 – 2026" : "2023 – 2024"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          <button
            onClick={() => setFilterType("all")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filterType === "all" ? "bg-blue-600 text-white font-medium" : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            All Papers ({course.papers.length})
          </button>
          <button
            onClick={() => setFilterType("study")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filterType === "study" ? "bg-blue-600 text-white font-medium" : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Study Paper
          </button>
          <button
            onClick={() => setFilterType("final")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filterType === "final" ? "bg-blue-600 text-white font-medium" : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Final Exams
          </button>
          <button
            onClick={() => setFilterType("test")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filterType === "test" ? "bg-blue-600 text-white font-medium" : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Tests
          </button>
          <button
            onClick={() => setFilterType("assessment")}
            className={`px-3 py-1 rounded-md transition-colors ${
              filterType === "assessment" ? "bg-blue-600 text-white font-medium" : "bg-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            Assessments
          </button>
        </div>

        <span className="text-xs text-slate-400 font-mono">
          Showing {filteredPapers.length} of {course.papers.length}
        </span>
      </div>

      {/* Papers Grid */}
      <div className="space-y-4">
        {filteredPapers.map((paper) => {
          const totalQuestions = paper.sections.reduce((acc, s) => acc + s.questions.length, 0);

          return (
            <Link
              key={paper.id}
              to={`/course/${course.slug}/paper/${paper.slug}`}
              className="group block p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                      {paper.category || paper.paperType || "Final Exam"}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Year: {paper.year}
                    </span>
                    {paper.venue && (
                      <span className="text-xs text-slate-400 font-mono">
                        · Venue: {paper.venue}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {paper.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Duration: {paper.duration}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      Marks: {paper.totalMarks} Marks
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Layers className="w-3.5 h-3.5 text-blue-400" />
                      Sections: {paper.structure || `${paper.sections.length} Section${paper.sections.length !== 1 ? "s" : ""} (${totalQuestions} Questions)`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="px-3.5 py-2 bg-blue-600 group-hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors whitespace-nowrap">
                    <span>Study Paper</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}

        {filteredPapers.length === 0 && (
          <div className="p-8 text-center bg-slate-900/40 rounded-xl border border-slate-800 text-slate-400 text-xs">
            No papers match the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}
