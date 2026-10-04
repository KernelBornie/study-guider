import { Course } from "@/types";
import { csc4630_2024Supplement } from "./supplement-2024";
import { csc4630_LethbridgeStudyGuide } from "./lethbridge-study-guide";
import { csc4630_2026MoodleQuiz } from "./2026-moodle-quiz";
import { csc4630_2024Final } from "./2024-final";

export const csc4630: Course = {
  id: "csc4630",
  slug: "csc4630-ase",
  code: "CSC 4630",
  title: "Advanced Software Engineering",
  description: "Object-Oriented Software Engineering (Lethbridge & Laganière), Goal-Oriented Requirements (KAOS), UML modelling, Persistence Frameworks, Design Patterns, SOA, and Real-Time Systems.",
  color: "purple",
  papers: [
    csc4630_2024Supplement,
    csc4630_LethbridgeStudyGuide,
    csc4630_2026MoodleQuiz,
    csc4630_2024Final
  ],
};
