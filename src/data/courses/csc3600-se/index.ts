import { Course } from "@/types";
import { csc3600_Test1 } from "./test-1";
import { csc3600_Assignment1 } from "./assignment-1";
import { csc3600_StudyGuideDiagrams } from "./study-guide-diagrams";
import { csc3600_StudyGuideModules } from "./study-guide-modules";

export const csc3600: Course = {
  id: "csc3600",
  slug: "csc3600-se",
  code: "CSC 3600",
  title: "Software Engineering",
  description:
    "Complete UNZA CSC 3600 study guides & solutions — all 18 Sommerville modules, 10 UML modeling diagram topics, verification vs validation, safety-critical systems (Insulin Pump), psychiatric healthcare management (Mentcare), and Smart Campus Healthcare System (SCHS).",
  color: "amber",
  papers: [
    csc3600_StudyGuideDiagrams,
    csc3600_StudyGuideModules,
    csc3600_Test1,
    csc3600_Assignment1,
  ],
};
