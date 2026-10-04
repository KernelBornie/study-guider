import { Course } from "@/types";
import { csc4642_2024Final } from "./2024-final";
import { csc4642_2023Final } from "./2023-final";
import { csc4642_Assessment1 } from "./assessment-1";
import { csc4642_Assessment2 } from "./assessment-2";
import { csc4642_SqaTest } from "./sqa-test";
import { csc4642_CamScannerExam } from "./camscanner-exam";

export const csc4642: Course = {
  id: "csc4642",
  slug: "csc4642-sqa",
  code: "CSC 4642",
  title: "Software Quality Assurance",
  description: "Complete UNZA CSC 4642 verified solutions, past examination papers, continuous assessments, mid-term tests, and interactive visual revision models.",
  color: "blue",
  papers: [
    csc4642_2024Final,
    csc4642_2023Final,
    csc4642_Assessment1,
    csc4642_Assessment2,
    csc4642_SqaTest,
    csc4642_CamScannerExam
  ],
};
