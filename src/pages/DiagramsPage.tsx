import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiagramPrototyping } from "@/components/DiagramPrototyping";
import { DiagramDefectRemoval } from "@/components/DiagramDefectRemoval";
import { DiagramFormalDesignReview } from "@/components/DiagramFormalDesignReview";
import { DiagramMcCallTree } from "@/components/DiagramMcCallTree";
import { DiagramErrorChain } from "@/components/DiagramErrorChain";
import { ArrowLeft, PenTool, Layers, CheckCircle2 } from "lucide-react";

export default function DiagramsPage() {
  const [selectedDiagram, setSelectedDiagram] = useState<"q5" | "q6" | "q7" | "mccall" | "error">("q5");

  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-slate-800 pb-3">
        <Link to="/" className="hover:text-white transition-colors">Courses</Link>
        <span>/</span>
        <span className="text-slate-200 font-semibold">Visual Diagrams Gallery</span>
      </div>

      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
              <PenTool className="w-3.5 h-3.5" />
              EXAM VISUAL REVISION GALLERY
            </span>
            <h1 className="text-2xl font-bold text-white mt-1">
              Official Exam Process Flow & Architecture Diagrams
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              High-scoring structural diagrams and process flows required by UNZA examiners across SQA exam questions.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedDiagram("q5")}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedDiagram === "q5" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Q5: Prototyping Cycle
            </button>
            <button
              onClick={() => setSelectedDiagram("q6")}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedDiagram === "q6" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Q6: Defect Removal Plan
            </button>
            <button
              onClick={() => setSelectedDiagram("q7")}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedDiagram === "q7" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Q7: Design Review Flow
            </button>
            <button
              onClick={() => setSelectedDiagram("mccall")}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedDiagram === "mccall" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Q1: McCall Factor Tree
            </button>
            <button
              onClick={() => setSelectedDiagram("error")}
              className={`px-3 py-1.5 rounded transition-colors ${
                selectedDiagram === "error" ? "bg-blue-600 text-white font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Q3: Error Chain
            </button>
          </div>
        </div>
      </div>

      {/* Selected Diagram Canvas */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        {selectedDiagram === "q5" && <DiagramPrototyping />}
        {selectedDiagram === "q6" && <DiagramDefectRemoval />}
        {selectedDiagram === "q7" && <DiagramFormalDesignReview />}
        {selectedDiagram === "mccall" && <DiagramMcCallTree />}
        {selectedDiagram === "error" && <DiagramErrorChain />}
      </div>
    </div>
  );
}
