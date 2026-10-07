import { Course, Paper } from "@/types";
import { csc4642 } from "./courses/csc4642-sqa";
import { csc4630 } from "./courses/csc4630-ase";
import { csc3600 } from "./courses/csc3600-se";

export const courses: Course[] = [csc4642, csc4630, csc3600];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);

export const getPaper = (courseSlug: string, paperSlug: string): Paper | undefined => {
  const course = getCourseBySlug(courseSlug);
  return course?.papers.find((p) => p.slug === paperSlug);
};

export interface FlatSearchItem {
  courseSlug: string;
  courseCode: string;
  courseTitle: string;
  paperSlug: string;
  paperTitle: string;
  questionId: string;
  questionNumber: string;
  questionTitle?: string;
  subQuestionLabel: string;
  questionText: string;
  answerText: string;
}

export const buildGlobalSearchIndex = (allCourses: Course[]): FlatSearchItem[] => {
  const results: FlatSearchItem[] = [];
  for (const course of allCourses) {
    for (const paper of course.papers) {
      for (const section of paper.sections) {
        for (const q of section.questions) {
          const subList = q.subQuestions || q.questions || [];
          for (const sq of subList) {
            results.push({
              courseSlug: course.slug,
              courseCode: course.code,
              courseTitle: course.title,
              paperSlug: paper.slug,
              paperTitle: paper.title,
              questionId: sq.id,
              questionNumber: q.number,
              questionTitle: q.topic || q.title,
              subQuestionLabel: sq.label || sq.subNumber || "",
              questionText: sq.question || sq.text || "",
              answerText: sq.answer || sq.modelAnswer || "",
            });
          }
        }
      }
    }
  }
  return results;
};
