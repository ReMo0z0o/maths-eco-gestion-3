import type { Exam, ExamQuestion } from "./types";
import { exam as janvier2026 } from "./janvier2026";
import { exam as janvier2025 } from "./janvier2025";
import { exam as janvier2022 } from "./janvier2022";
import { exam as janvier2021 } from "./janvier2021";
import { exam as exemple1 } from "./exemple1";

export type { Exam, ExamQuestion, ExamStep } from "./types";

/** Du plus récent au plus ancien */
export const allExams: Exam[] = [janvier2026, janvier2025, janvier2022, janvier2021, exemple1];

const byId = new Map(allExams.map((e) => [e.id, e]));

export function getExam(id: string): Exam | undefined {
  return byId.get(id);
}

export function getExamQuestion(
  examId: string,
  questionId: string,
): { exam: Exam; question: ExamQuestion } | undefined {
  const exam = byId.get(examId);
  if (!exam) return undefined;
  const question = exam.questions.find((q) => q.id === questionId);
  return question ? { exam, question } : undefined;
}
