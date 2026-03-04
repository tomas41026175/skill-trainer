import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function normalizeAnswer(answer: string): string {
  return answer.trim().toLowerCase();
}

export function checkAnswer(
  userAnswer: string,
  correctAnswer: string | string[]
): boolean {
  const normalized = normalizeAnswer(userAnswer);
  if (Array.isArray(correctAnswer)) {
    return correctAnswer.some((a) => normalizeAnswer(a) === normalized);
  }
  return normalizeAnswer(correctAnswer) === normalized;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function calcAccuracy(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}
