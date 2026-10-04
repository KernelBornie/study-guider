import { useState, useEffect } from "react";
import { Course, Paper, Question, Section } from "@/types";
import { courses as staticCourses } from "@/data/courses";

const STORAGE_KEY = "study-guider-courses-v6";

export function useLocalData() {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved =
        localStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem("study-guider-courses-v5") ||
        localStorage.getItem("study-guider-courses-v4") ||
        localStorage.getItem("study-guider-courses-v3") ||
        localStorage.getItem("study-guider-courses-v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge official static courses with latest verified content and preserve user papers
          const updatedCourses = staticCourses.map((staticC) => {
            const userCourse = parsed.find((p: any) => p.slug === staticC.slug);
            if (!userCourse) return staticC;
            const staticPaperSlugs = new Set(staticC.papers.map((p) => p.slug));
            const customUserPapers = (userCourse.papers || []).filter(
              (p: any) => !staticPaperSlugs.has(p.slug)
            );
            return {
              ...userCourse,
              papers: [...staticC.papers, ...customUserPapers],
            };
          });

          // Also include any user-created custom courses
          const staticSlugs = new Set(staticCourses.map((c) => c.slug));
          const customUserCourses = parsed.filter((c: any) => !staticSlugs.has(c.slug));
          return [...updatedCourses, ...customUserCourses];
        }
      }
    } catch (e) {
      console.error("Failed to load local courses", e);
    }
    return staticCourses;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    } catch (e) {
      console.error("Failed to save local courses", e);
    }
  }, [courses]);

  const addCourse = (course: Course) => {
    setCourses((prev) => [...prev, course]);
  };

  const updateCourse = (updated: Course) => {
    setCourses((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const addPaper = (courseSlug: string, paper: Paper) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.slug === courseSlug
          ? { ...course, papers: [...course.papers, paper] }
          : course
      )
    );
  };

  const updatePaper = (courseSlug: string, updatedPaper: Paper) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.slug === courseSlug
          ? {
              ...course,
              papers: course.papers.map((p) =>
                p.id === updatedPaper.id ? updatedPaper : p
              ),
            }
          : course
      )
    );
  };

  const deletePaper = (courseSlug: string, paperId: string) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.slug === courseSlug
          ? { ...course, papers: course.papers.filter((p) => p.id !== paperId) }
          : course
      )
    );
  };

  const addQuestion = (
    courseSlug: string,
    paperId: string,
    sectionId: string,
    newQuestion: Question
  ) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.slug !== courseSlug) return course;
        return {
          ...course,
          papers: course.papers.map((paper) => {
            if (paper.id !== paperId) return paper;
            return {
              ...paper,
              sections: paper.sections.map((sec) => {
                if (sec.id !== sectionId) return sec;
                return {
                  ...sec,
                  questions: [...sec.questions, newQuestion],
                };
              }),
            };
          }),
        };
      })
    );
  };

  const deleteQuestion = (
    courseSlug: string,
    paperId: string,
    sectionId: string,
    questionId: string
  ) => {
    setCourses((prev) =>
      prev.map((course) => {
        if (course.slug !== courseSlug) return course;
        return {
          ...course,
          papers: course.papers.map((paper) => {
            if (paper.id !== paperId) return paper;
            return {
              ...paper,
              sections: paper.sections.map((sec) => {
                if (sec.id !== sectionId) return sec;
                return {
                  ...sec,
                  questions: sec.questions.filter((q) => q.id !== questionId),
                };
              }),
            };
          }),
        };
      })
    );
  };

  const resetToDefaults = () => {
    setCourses(staticCourses);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportDataAsJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(courses, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `unza-study-guider-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importDataFromJson = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].slug && parsed[0].papers) {
        setCourses(parsed);
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON data", e);
    }
    return false;
  };

  return {
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    addPaper,
    updatePaper,
    deletePaper,
    addQuestion,
    deleteQuestion,
    resetToDefaults,
    exportDataAsJson,
    importDataFromJson,
  };
}
