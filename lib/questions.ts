import { type Category, type Difficulty, type Question } from "@/types";
import { shuffle } from "@/lib/utils";

// Lazy-loaded question banks
async function loadBank(category: Category): Promise<Question[]> {
  switch (category) {
    case "nodejs":
      return (await import("@/data/nodejs")).nodejsQuestions;
    case "csharp":
      return (await import("@/data/csharp")).csharpQuestions;
    case "english":
      return (await import("@/data/english")).englishQuestions;
    case "web":
      return (await import("@/data/web")).webQuestions;
  }
}

export async function getQuestionsByCategory(
  category: Category,
  difficulty: Difficulty,
  count: number = 10
): Promise<Question[]> {
  const bank = await loadBank(category);
  const filtered = bank.filter((q) => q.difficulty === difficulty);
  return shuffle(filtered).slice(0, count);
}

export async function getQuestionById(
  category: Category,
  id: string
): Promise<Question | undefined> {
  const bank = await loadBank(category);
  return bank.find((q) => q.id === id);
}

export async function getCategoryStats(
  category: Category
): Promise<{ total: number; byDifficulty: Record<Difficulty, number> }> {
  const bank = await loadBank(category);
  return {
    total: bank.length,
    byDifficulty: {
      beginner: bank.filter((q) => q.difficulty === "beginner").length,
      intermediate: bank.filter((q) => q.difficulty === "intermediate").length,
      advanced: bank.filter((q) => q.difficulty === "advanced").length,
    },
  };
}
