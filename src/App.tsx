import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import CoursePage from "@/pages/CoursePage";
import PaperPage from "@/pages/PaperPage";
import AdminPage from "@/pages/AdminPage";
import DiagramsPage from "@/pages/DiagramsPage";
import CalculatorsPage from "@/pages/CalculatorsPage";
import AIPage from "@/pages/AIPage";
import { Bot } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseSlug" element={<CoursePage />} />
          <Route path="/course/:courseSlug/paper/:paperSlug" element={<PaperPage />} />
          <Route path="/diagrams" element={<DiagramsPage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>

      {/* Floating AI Study Assistant Trigger */}
      <Link
        to="/ai"
        className="fixed bottom-6 right-6 bg-gradient-to-tr from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-2xl border border-purple-400/30 z-50 transition-all hover:scale-110 active:scale-95 group"
        title="Ask UNZA AI Study Assistant"
      >
        <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform">🤖</span>
      </Link>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500 space-y-1">
        <p>The University of Zambia · School of Natural Sciences · Department of Computer Science</p>
        <p className="text-[11px] text-slate-600">
          UNZA Multi-Course Study-Guider & Verified Solutions Engine
        </p>
      </footer>
    </div>
  );
}
