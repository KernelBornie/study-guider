import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalData } from "@/hooks/useLocalData";
import { Course, Paper, Question, Section } from "@/types";
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Download, 
  Upload, 
  RotateCcw, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function AdminPage() {
  const {
    courses,
    addCourse,
    deleteCourse,
    addPaper,
    deletePaper,
    addQuestion,
    deleteQuestion,
    resetToDefaults,
    exportDataAsJson,
    importDataFromJson
  } = useLocalData();

  // New Course State
  const [courseCode, setCourseCode] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseColor, setCourseColor] = useState("blue");

  // New Paper State
  const [selectedCourseForPaper, setSelectedCourseForPaper] = useState("");
  const [paperTitle, setPaperTitle] = useState("");
  const [paperYear, setPaperYear] = useState(new Date().getFullYear().toString());
  const [paperDuration, setPaperDuration] = useState("3 Hours");
  const [paperMarks, setPaperMarks] = useState("100");
  const [paperType, setPaperType] = useState<"Final Exam" | "Test" | "Assessment" | "Quiz">("Final Exam");

  // New Question State
  const [qCourseSlug, setQCourseSlug] = useState("");
  const [qPaperId, setQPaperId] = useState("");
  const [qSectionName, setQSectionName] = useState("Section A: Compulsory");
  const [qNumber, setQNumber] = useState("Question 1");
  const [qTitle, setQTitle] = useState("");
  const [qMarks, setQMarks] = useState("20");
  const [sqLabel, setSqLabel] = useState("1");
  const [sqText, setSqText] = useState("");
  const [sqAnswer, setSqAnswer] = useState("");
  const [sqMarks, setSqMarks] = useState("10");

  // UI state
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const notify = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!courseCode.trim() || !courseTitle.trim()) {
      alert("Please provide Course Code and Course Title");
      return;
    }

    const slug = courseCode.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (courses.some((c) => c.slug === slug)) {
      alert(`A course with slug "${slug}" already exists!`);
      return;
    }

    const newCourse: Course = {
      id: crypto.randomUUID(),
      slug,
      code: courseCode.trim().toUpperCase(),
      title: courseTitle.trim(),
      description: courseDesc.trim() || "Course notes and examination questions.",
      color: courseColor,
      papers: [],
    };

    addCourse(newCourse);
    setCourseCode("");
    setCourseTitle("");
    setCourseDesc("");
    notify(`Course ${newCourse.code} created successfully!`);
  };

  const handleAddPaper = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourseForPaper || !paperTitle.trim()) {
      alert("Please select a course and provide a paper title");
      return;
    }

    const slug = paperTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newPaper: Paper = {
      id: crypto.randomUUID(),
      slug,
      title: paperTitle.trim(),
      year: parseInt(paperYear, 10) || new Date().getFullYear(),
      duration: paperDuration.trim() || "3 Hours",
      totalMarks: parseInt(paperMarks, 10) || 100,
      paperType: paperType,
      sections: [
        {
          id: "section-a",
          name: "Section A: Compulsory",
          instructions: "Answer all questions in this section.",
          compulsory: true,
          questions: [],
        },
      ],
    };

    addPaper(selectedCourseForPaper, newPaper);
    setPaperTitle("");
    notify(`Paper "${newPaper.title}" added to course!`);
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qCourseSlug || !qPaperId || !sqText.trim() || !sqAnswer.trim()) {
      alert("Please select Course, Paper, and enter Question prompt and Model Answer");
      return;
    }

    const selectedCourse = courses.find((c) => c.slug === qCourseSlug);
    const selectedPaper = selectedCourse?.papers.find((p) => p.id === qPaperId);
    if (!selectedPaper) return;

    // Check if section exists or use first section
    let targetSectionId = selectedPaper.sections[0]?.id;
    if (!targetSectionId) {
      // create section if none
      targetSectionId = "section-a";
    }

    const newQ: Question = {
      id: `q-${crypto.randomUUID().slice(0, 6)}`,
      number: qNumber.trim(),
      title: qTitle.trim() || qNumber.trim(),
      marks: parseInt(qMarks, 10) || 20,
      subQuestions: [
        {
          id: `sq-${crypto.randomUUID().slice(0, 6)}`,
          label: sqLabel.trim(),
          marks: parseInt(sqMarks, 10) || 10,
          question: sqText.trim(),
          answer: sqAnswer.trim(),
        },
      ],
    };

    addQuestion(qCourseSlug, qPaperId, targetSectionId, newQ);
    setSqText("");
    setSqAnswer("");
    notify(`Question "${newQ.number}" added successfully!`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importDataFromJson(content);
        if (success) {
          notify("Data backup successfully restored!");
        } else {
          alert("Invalid backup JSON file structure.");
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb & Action */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Courses</Link>
          <span>/</span>
          <span className="text-slate-200 font-semibold">Admin Panel</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={exportDataAsJson}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Export Backup</span>
          </button>

          <label className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium cursor-pointer transition-colors">
            <Upload className="w-3.5 h-3.5 text-emerald-400" />
            <span>Import Backup</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={() => {
              if (confirm("Reset all courses and papers back to official UNZA default solutions? Custom changes in browser will be restored.")) {
                resetToDefaults();
                notify("Reset to official UNZA default past papers!");
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/60 rounded-lg text-xs font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-2">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
          STUDY-GUIDER CONTENT MANAGEMENT SYSTEM
        </span>
        <h1 className="text-2xl font-bold text-white">Course & Exam Paper Administration</h1>
        <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
          Create new courses, add examination papers, register questions with Markdown solutions, or delete obsolete materials. All changes persist automatically in browser storage.
        </p>

        {statusMessage && (
          <div className="mt-3 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{statusMessage}</span>
          </div>
        )}
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form 1: Add Course */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold border-b border-slate-800 pb-3">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <h3>1. Create New Course</h3>
          </div>

          <form onSubmit={handleAddCourse} className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Course Code</label>
                <input
                  type="text"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="e.g. CSC 4643"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Accent Color</label>
                <select
                  value={courseColor}
                  onChange={(e) => setCourseColor(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="emerald">Emerald</option>
                  <option value="amber">Amber</option>
                  <option value="rose">Rose</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 font-medium">Course Title</label>
              <input
                type="text"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="e.g. Software Testing & Automation"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 font-medium">Description</label>
              <textarea
                value={courseDesc}
                onChange={(e) => setCourseDesc(e.target.value)}
                placeholder="Brief course summary, topics covered, and curriculum details..."
                rows={2}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Register Course</span>
            </button>
          </form>
        </div>

        {/* Form 2: Add Paper */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold border-b border-slate-800 pb-3">
            <FileText className="w-4 h-4 text-emerald-400" />
            <h3>2. Add Paper / Test to Course</h3>
          </div>

          <form onSubmit={handleAddPaper} className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="text-slate-400 font-medium">Select Parent Course</label>
              <select
                value={selectedCourseForPaper}
                onChange={(e) => setSelectedCourseForPaper(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                required
              >
                <option value="">-- Choose Course --</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.code} — {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Paper Title</label>
                <input
                  type="text"
                  value={paperTitle}
                  onChange={(e) => setPaperTitle(e.target.value)}
                  placeholder="e.g. 2025 Final Examination"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Paper Category</label>
                <select
                  value={paperType}
                  onChange={(e) => setPaperType(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="Final Exam">Final Exam</option>
                  <option value="Test">Mid-Term Test</option>
                  <option value="Assessment">Assessment</option>
                  <option value="Quiz">Quiz</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Year</label>
                <input
                  type="number"
                  value={paperYear}
                  onChange={(e) => setPaperYear(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Duration</label>
                <input
                  type="text"
                  value={paperDuration}
                  onChange={(e) => setPaperDuration(e.target.value)}
                  placeholder="3 Hours"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-medium">Total Marks</label>
                <input
                  type="number"
                  value={paperMarks}
                  onChange={(e) => setPaperMarks(e.target.value)}
                  placeholder="100"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Paper to Course</span>
            </button>
          </form>
        </div>
      </div>

      {/* Form 3: Add Question & Answer to Existing Paper */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-white font-bold border-b border-slate-800 pb-3">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <h3>3. Quick Question & Solution Builder</h3>
        </div>

        <form onSubmit={handleAddQuestion} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-400 font-medium">Target Course</label>
              <select
                value={qCourseSlug}
                onChange={(e) => {
                  setQCourseSlug(e.target.value);
                  setQPaperId("");
                }}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
              >
                <option value="">-- Choose Course --</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.code} — {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 font-medium">Target Paper</label>
              <select
                value={qPaperId}
                onChange={(e) => setQPaperId(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                required
                disabled={!qCourseSlug}
              >
                <option value="">-- Choose Paper --</option>
                {courses
                  .find((c) => c.slug === qCourseSlug)
                  ?.papers.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.year})
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className="space-y-1 sm:col-span-1">
              <label className="text-slate-400 font-medium">Question #</label>
              <input
                type="text"
                value={qNumber}
                onChange={(e) => setQNumber(e.target.value)}
                placeholder="Question 1"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-slate-400 font-medium">Question Title / Topic</label>
              <input
                type="text"
                value={qTitle}
                onChange={(e) => setQTitle(e.target.value)}
                placeholder="e.g. Equivalence Partitioning & Boundary Values"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
              />
            </div>

            <div className="space-y-1 sm:col-span-1">
              <label className="text-slate-400 font-medium">Part Label</label>
              <input
                type="text"
                value={sqLabel}
                onChange={(e) => setSqLabel(e.target.value)}
                placeholder="1a"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 font-medium">Question Prompt / Text</label>
            <textarea
              value={sqText}
              onChange={(e) => setSqText(e.target.value)}
              placeholder="State the full question prompt here..."
              rows={2}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-slate-400 font-medium">Model Answer (Markdown supported)</label>
              <span className="text-[10px] text-slate-500">Supports **bold**, `code`, lists, and tables</span>
            </div>
            <textarea
              value={sqAnswer}
              onChange={(e) => setSqAnswer(e.target.value)}
              placeholder="Write the complete solution here..."
              rows={4}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Save Question to Paper</span>
          </button>
        </form>
      </div>

      {/* Existing Content Hierarchy & Deletion Manager */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-lg font-bold text-white">Existing Course Catalog & Papers</h2>
          <p className="text-xs text-slate-400">
            View course structures or remove specific courses and papers.
          </p>
        </div>

        <div className="space-y-3">
          {courses.map((course) => {
            const isExpanded = expandedCourse === course.id;

            return (
              <div
                key={course.id}
                className="rounded-lg border border-slate-800 bg-slate-950/80 overflow-hidden"
              >
                <div className="p-4 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                    className="flex items-center gap-2 text-left font-bold text-white text-sm hover:text-blue-400 transition-colors flex-1"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {course.code}
                    </span>
                    <span>{course.title}</span>
                    <span className="text-xs text-slate-400 font-normal font-mono">
                      ({course.papers.length} papers)
                    </span>
                  </button>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/course/${course.slug}`}
                      className="px-2.5 py-1 text-xs bg-slate-900 hover:bg-slate-800 text-slate-300 rounded border border-slate-800"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${course.code} - ${course.title}" and all its papers?`)) {
                          deleteCourse(course.id);
                          notify(`Deleted course ${course.code}`);
                        }
                      }}
                      className="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 rounded transition-colors"
                      title="Delete course"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-slate-800/60 space-y-2 text-xs">
                    <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider py-1">
                      Papers in this course:
                    </div>

                    {course.papers.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between p-2.5 rounded bg-slate-900 border border-slate-800/80"
                      >
                        <div className="space-y-0.5">
                          <div className="font-semibold text-slate-200">{p.title}</div>
                          <div className="text-slate-400 text-[11px] font-mono">
                            {p.year} · {p.duration} · {p.totalMarks} Marks · {p.sections.length} Sections
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            to={`/course/${course.slug}/paper/${p.slug}`}
                            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px]"
                          >
                            Open
                          </Link>
                          <button
                            onClick={() => {
                              if (confirm(`Delete paper "${p.title}"?`)) {
                                deletePaper(course.slug, p.id);
                                notify(`Deleted paper "${p.title}"`);
                              }
                            }}
                            className="p-1 text-rose-400 hover:text-rose-300"
                            title="Delete paper"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {course.papers.length === 0 && (
                      <div className="text-slate-400 italic py-2">
                        No papers registered in this course yet. Use the form above to add one.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
