import React from 'react';
import { EXAM_META, SECTION_A_QUESTIONS, SECTION_B_QUESTIONS } from '../data/examData';
import { Printer, Download, ArrowLeft } from 'lucide-react';

interface PrintViewProps {
  onBack: () => void;
}

export const PrintView: React.FC<PrintViewProps> = ({ onBack }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen p-6 sm:p-12 font-serif max-w-4xl mx-auto shadow-2xl print:shadow-none print:p-0">
      {/* Top Action Bar (hidden when printed) */}
      <div className="print:hidden flex items-center justify-between pb-6 mb-8 border-b border-slate-300 font-sans">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Interactive Portal
        </button>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* Official UNZA Header */}
      <div className="text-center border-b-2 border-slate-900 pb-6 mb-8 space-y-1">
        <div className="text-lg font-bold uppercase tracking-widest">{EXAM_META.institution}</div>
        <div className="text-sm font-semibold">{EXAM_META.school}</div>
        <div className="text-sm">{EXAM_META.department}</div>
        <div className="pt-3">
          <span className="text-xl font-bold tracking-tight block">
            {EXAM_META.courseCode} · {EXAM_META.courseName}
          </span>
          <span className="text-sm font-bold uppercase tracking-wider block mt-1">
            {EXAM_META.examTitle} — MODEL ANSWERS & SOLUTION KEY
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-slate-700 pt-2 font-sans">
          <span><strong>Date:</strong> {EXAM_META.date}</span>
          <span><strong>Time:</strong> {EXAM_META.time}</span>
          <span><strong>Duration:</strong> {EXAM_META.duration}</span>
          <span><strong>Venue:</strong> {EXAM_META.venue}</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg mb-8 text-xs font-sans space-y-1">
        <strong className="block text-slate-900 uppercase">Instructions to Candidates:</strong>
        <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
          {EXAM_META.instructions.map((ins, i) => (
            <li key={i}>{ins}</li>
          ))}
        </ul>
      </div>

      {/* SECTION A */}
      <div className="space-y-8 mb-12">
        <div className="border-b-2 border-slate-900 pb-2">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            SECTION A: SHORT ANSWER QUESTIONS [40 MARKS] — COMPULSORY
          </h2>
        </div>

        {SECTION_A_QUESTIONS.map(q => (
          <div key={q.id} className="space-y-6">
            <div className="font-bold text-base border-b border-slate-300 pb-1 flex justify-between">
              <span>{q.number}: {q.title}</span>
              <span className="font-sans text-xs">[{q.marks} Marks]</span>
            </div>

            {q.subQuestions.map(sq => (
              <div key={sq.label} className="space-y-3 pl-4 border-l-2 border-slate-200">
                <div className="font-semibold text-sm text-slate-800">
                  <span className="font-bold mr-1">Part {sq.label}:</span>
                  <span className="whitespace-pre-line">{sq.text}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded border border-slate-200 text-xs leading-relaxed font-sans whitespace-pre-line">
                  <strong className="text-slate-900 uppercase block mb-1">Model Solution:</strong>
                  {sq.answer}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* SECTION B */}
      <div className="space-y-8">
        <div className="border-b-2 border-slate-900 pb-2">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            SECTION B: ESSAY & LONG ANSWER QUESTIONS [60 MARKS] — ANSWER ANY THREE
          </h2>
          <p className="text-xs italic text-slate-600 mt-1 font-sans">
            (Complete solutions for ALL FIVE Section B questions are provided below for full syllabus revision).
          </p>
        </div>

        {SECTION_B_QUESTIONS.map(q => (
          <div key={q.id} className="space-y-6 page-break-inside-avoid">
            <div className="font-bold text-base border-b border-slate-300 pb-1 flex justify-between">
              <span>{q.number}: {q.title}</span>
              <span className="font-sans text-xs">[{q.marks} Marks]</span>
            </div>

            {q.subQuestions.map(sq => (
              <div key={sq.label} className="space-y-3 pl-4 border-l-2 border-slate-200">
                <div className="font-semibold text-sm text-slate-800">
                  <span className="font-bold mr-1">Part {sq.label}:</span>
                  <span className="whitespace-pre-line">{sq.text}</span>
                </div>

                <div className="bg-slate-50 p-4 rounded border border-slate-200 text-xs leading-relaxed font-sans whitespace-pre-line">
                  <strong className="text-slate-900 uppercase block mb-1">Model Solution:</strong>
                  {sq.answer}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center border-t-2 border-slate-900 pt-6 mt-12 text-xs font-sans text-slate-600">
        End of Examination Paper · Prepared from UNZA CSC 4642 Course Notes
      </div>
    </div>
  );
};
