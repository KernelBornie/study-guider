import React, { useState } from 'react';
import { SectionAView } from './components/SectionAView';
import { SectionBView } from './components/SectionBView';
import { DiagramPrototyping } from './components/DiagramPrototyping';
import { DiagramDefectRemoval } from './components/DiagramDefectRemoval';
import { DiagramFormalDesignReview } from './components/DiagramFormalDesignReview';
import { DiagramMcCallTree } from './components/DiagramMcCallTree';
import { DiagramErrorChain } from './components/DiagramErrorChain';
import { CalculatorsView } from './components/CalculatorsView';
import { PrintView } from './components/PrintView';
import { EXAM_META } from './data/examData';
import { 
  BookOpen, 
  FileText, 
  PenTool, 
  Calculator, 
  Lightbulb, 
  Printer, 
  CheckCircle2, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'section-a' | 'section-b' | 'diagrams' | 'calculators' | 'strategy'>('section-a');
  const [selectedDiagram, setSelectedDiagram] = useState<'q5' | 'q6' | 'q7' | 'mccall' | 'error'>('q5');
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  if (isPrintMode) {
    return <PrintView onBack={() => setIsPrintMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Contract: 1 row, 3 zones */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <span className="text-base sm:text-lg font-bold tracking-tight text-white">
            UNZA CSC 4642 · SQA Solutions
          </span>
          <span className="hidden sm:inline text-xs text-slate-400 font-mono">
            2024 Final Examination
          </span>
        </div>

        {/* Zone 2: 4-6 Nav links with 1-2 word labels */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium">
          <button
            onClick={() => setActiveTab('section-a')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'section-a' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Section A
          </button>
          <button
            onClick={() => setActiveTab('section-b')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'section-b' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Section B
          </button>
          <button
            onClick={() => setActiveTab('diagrams')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'diagrams' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Visual Diagrams
          </button>
          <button
            onClick={() => setActiveTab('calculators')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'calculators' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Calculators
          </button>
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'strategy' 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Exam Strategy
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPrintMode(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Print / Save PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </header>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden flex items-center justify-around bg-slate-900/90 border-b border-slate-800 px-2 py-2 text-xs overflow-x-auto">
        <button
          onClick={() => setActiveTab('section-a')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'section-a' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Section A
        </button>
        <button
          onClick={() => setActiveTab('section-b')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'section-b' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Section B
        </button>
        <button
          onClick={() => setActiveTab('diagrams')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'diagrams' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Diagrams
        </button>
        <button
          onClick={() => setActiveTab('calculators')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'calculators' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Calculators
        </button>
        <button
          onClick={() => setActiveTab('strategy')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'strategy' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
        >
          Tips
        </button>
      </div>

      {/* Hero Overview Banner */}
      <div className="border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>{EXAM_META.institution}</span>
                <span>·</span>
                <span>{EXAM_META.school}</span>
                <span>·</span>
                <span>{EXAM_META.courseCode}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {EXAM_META.courseName} — 2024 Exam Solutions
              </h1>
              <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                Complete, fully verified answers based directly on UNZA course lecture slides (Topics 1–9 and Unit 3). Includes step-by-step mathematical solutions and interactive structural diagrams for all required questions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 text-xs font-mono">
              <div className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300">
                <span className="text-slate-500 block text-[10px]">Total Exam Marks</span>
                <span className="text-emerald-400 font-bold text-sm">100 Marks</span>
              </div>
              <div className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300">
                <span className="text-slate-500 block text-[10px]">Exam Duration</span>
                <span className="text-amber-400 font-bold text-sm">3 Hours (NSLT)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8">
        {activeTab === 'section-a' && <SectionAView />}
        {activeTab === 'section-b' && <SectionBView />}

        {activeTab === 'diagrams' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                    EXAM VISUAL REVISION GALLERY
                  </span>
                  <h2 className="text-xl font-bold text-white mt-1">Official Exam Process Flow & Architecture Diagrams</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Select a diagram to review the visual structure required by UNZA examiners:
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setSelectedDiagram('q5')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      selectedDiagram === 'q5' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Q5: Prototyping Model
                  </button>
                  <button
                    onClick={() => setSelectedDiagram('q6')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      selectedDiagram === 'q6' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Q6: Defect Removal Plan
                  </button>
                  <button
                    onClick={() => setSelectedDiagram('q7')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      selectedDiagram === 'q7' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Q7: Formal Design Review
                  </button>
                  <button
                    onClick={() => setSelectedDiagram('mccall')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      selectedDiagram === 'mccall' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Q1: McCall Factor Tree
                  </button>
                  <button
                    onClick={() => setSelectedDiagram('error')}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      selectedDiagram === 'error' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Q3: Error-Fault-Failure
                  </button>
                </div>
              </div>
            </div>

            {selectedDiagram === 'q5' && <DiagramPrototyping />}
            {selectedDiagram === 'q6' && <DiagramDefectRemoval />}
            {selectedDiagram === 'q7' && <DiagramFormalDesignReview />}
            {selectedDiagram === 'mccall' && <DiagramMcCallTree />}
            {selectedDiagram === 'error' && <DiagramErrorChain />}
          </div>
        )}

        {activeTab === 'calculators' && <CalculatorsView />}

        {activeTab === 'strategy' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                EXAMINATION BLUEPRINT & STRATEGY
              </span>
              <h2 className="text-xl font-bold text-white mt-1">High-Scoring Exam Tactics for UNZA CSC 4642</h2>
              <p className="text-xs text-slate-400 mt-1">
                Guidelines for time management, diagram drawing conventions, and avoiding common pitfalls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Time Budget */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Time Management (3 Hours = 180 Minutes)
                </h3>
                <div className="text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="p-3 bg-slate-950/80 rounded border border-slate-800">
                    <span className="font-bold text-amber-300 block">General Rule: 1.8 minutes per mark.</span>
                    • <strong>Section A (40 Marks):</strong> Allocate ~70 minutes (35 mins for Q1 and 35 mins for Q2).<br />
                    • <strong>Section B (60 Marks):</strong> Allocate ~95 minutes (~30 minutes each for your 3 chosen questions).<br />
                    • <strong>Review & Calculation Check:</strong> 15 minutes at the end to verify arithmetic.
                  </div>
                </div>
              </div>

              {/* Diagram Drawing Guidelines */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-blue-400" />
                  Drawing Guidelines for Questions 5, 6 & 7
                </h3>
                <div className="text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="p-3 bg-slate-950/80 rounded border border-slate-800">
                    • <strong>Question 5 (Prototyping):</strong> Always draw the decision diamond ('Requirements Fulfilled?') and show the loop back with 'Demands for Corrections, Changes, and Additions'.<br />
                    • <strong>Question 6 (Defect Removal):</strong> Draw each box showing POD, PD, Total In, %FE, RD, and TRC, with the arrow carrying unremoved defects (PD) to the next box.<br />
                    • <strong>Question 7 (Design Review):</strong> Organize into 3 swimlanes (Dev Team, Review Leader, Review Team) and clearly separate the 3 outcomes (Full, Partial, Denial).
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes to Avoid */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <h3 className="text-base font-bold text-rose-300 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-rose-400" />
                Critical Mistakes to Avoid (Based on Past Examiner Reports)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 space-y-1">
                  <div className="font-bold text-white">1. Confusing Error, Fault & Failure</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Remember: Error is the human action/mistake; Fault is the static bug in code/docs; Failure is the dynamic breakdown during runtime when the fault is executed. A fault never causes a failure unless activated.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 space-y-1">
                  <div className="font-bold text-white">2. Forgetting Carry-Over Defects (PD)</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    In the defect removal calculation, incoming defects to Phase N are always: POD_N + PD_(N-1). Never calculate RD using only POD!
                  </p>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 space-y-1">
                  <div className="font-bold text-white">3. Confusing QA and QC</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Quality Control (QC) is product-oriented, occurs after development, and detects defects in the end product. Quality Assurance (QA) is process-oriented, occurs throughout lifecycle, and prevents defect generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4 text-center text-xs text-slate-400 space-y-1">
        <p className="text-slate-400">
          The University of Zambia · School of Natural Sciences · Department of Computer Science
        </p>
        <p className="text-slate-400 text-[11px]">
          CSC 4642: Software Quality Assurance (2024 Exam Reference & Model Answers)
        </p>
      </footer>
    </div>
  );
}
