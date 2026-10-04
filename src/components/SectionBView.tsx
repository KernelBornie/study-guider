import React, { useState } from 'react';
import { SECTION_B_QUESTIONS } from '../data/examData';
import { DiagramPrototyping } from './DiagramPrototyping';
import { DiagramDefectRemoval } from './DiagramDefectRemoval';
import { DiagramFormalDesignReview } from './DiagramFormalDesignReview';
import { DiagramErrorChain } from './DiagramErrorChain';
import { CheckCircle, ChevronDown, ChevronUp, Layers, PenTool } from 'lucide-react';

export const SectionBView: React.FC = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>('all');
  const [openSubQ, setOpenSubQ] = useState<{ [key: string]: boolean }>({
    'q3-1.a': true,
    'q3-1.b': true,
    'q3-2': true,
    'q3-3.a': true,
    'q3-3.b': true,
    'q3-4.a': true,
    'q3-4.b': true,
    'q4-1': true,
    'q4-2.a': true,
    'q4-2.b': true,
    'q4-3': true,
    'q5-a': true,
    'q5-b': true,
    'q5-c': true,
    'q6-1': true,
    'q6-2': true,
    'q7-1.a': true,
    'q7-1.b': true,
    'q7-2': true
  });

  const toggleSub = (id: string) => {
    setOpenSubQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedQuestions = selectedQuestionId === 'all' 
    ? SECTION_B_QUESTIONS 
    : SECTION_B_QUESTIONS.filter(q => q.id === selectedQuestionId);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              SECTION B · ANSWER ANY THREE (3) QUESTIONS · 60 MARKS
            </span>
            <h2 className="text-xl font-bold text-white mt-1">Section B: Essay, Architecture & Calculation Questions</h2>
            <p className="text-xs text-slate-400 mt-1">
              All 5 questions (Questions 3 to 7) are answered below in full with all diagrams drawn.
            </p>
          </div>

          {/* Question Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedQuestionId('all')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                selectedQuestionId === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Questions (3–7)
            </button>
            {SECTION_B_QUESTIONS.map(q => (
              <button
                key={q.id}
                onClick={() => setSelectedQuestionId(q.id)}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                  selectedQuestionId === q.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {q.number.replace("QUESTION ", "Q")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions Rendering */}
      <div className="space-y-8">
        {displayedQuestions.map(q => (
          <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {/* Question Bar */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-xs font-bold rounded border border-blue-500/30">
                  {q.number}
                </span>
                <h3 className="text-base font-bold text-white">{q.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 font-mono">[{q.marks} Marks]</span>
                {q.id === 'q5' || q.id === 'q6' || q.id === 'q7' ? (
                  <span className="flex items-center gap-1 text-amber-400 font-semibold bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30 text-[11px]">
                    <PenTool className="w-3 h-3" /> Includes Drawing
                  </span>
                ) : null}
              </div>
            </div>

            {/* Subquestions */}
            <div className="divide-y divide-slate-800">
              {q.subQuestions.map(sq => {
                const subKey = `${q.id}-${sq.label}`;
                const isOpen = !!openSubQ[subKey];
                return (
                  <div key={sq.label} className="p-5 space-y-4">
                    <div 
                      onClick={() => toggleSub(subKey)}
                      className="cursor-pointer flex items-start justify-between gap-4 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                            Part {sq.label}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">[{sq.marks} marks]</span>
                        </div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors whitespace-pre-line leading-relaxed">
                          {sq.text}
                        </div>
                      </div>
                      <button className="text-slate-400 group-hover:text-white p-1">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="space-y-4 animate-in fade-in duration-150">
                        {/* Key Examination Points */}
                        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg">
                          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block mb-1.5">
                            Exam Marking Points:
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                            {sq.keyPoints.map((pt, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Embedded Diagram if needed */}
                        {sq.diagramType === 'prototyping' && (
                          <div className="my-3">
                            <DiagramPrototyping />
                          </div>
                        )}

                        {sq.diagramType === 'defect-removal' && (
                          <div className="my-3">
                            <DiagramDefectRemoval />
                          </div>
                        )}

                        {sq.diagramType === 'formal-review' && (
                          <div className="my-3">
                            <DiagramFormalDesignReview />
                          </div>
                        )}

                        {sq.diagramType === 'error-chain' && (
                          <div className="my-3">
                            <DiagramErrorChain />
                          </div>
                        )}

                        {/* Full Detailed Solution Text */}
                        <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-lg space-y-2">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                            Full Model Exam Answer:
                          </span>
                          <div className="text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                            {sq.answer}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
