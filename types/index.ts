export type Category = "nodejs" | "csharp" | "english" | "web" | "frontend";
export type Difficulty = "beginner" | "intermediate" | "advanced";
export type QuestionType = "multiple-choice" | "fill-blank" | "true-false";

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  topic: string;
  type: QuestionType;
  question: string;
  options?: { label: string; value: string }[];
  answer: string | string[];
  explanation: string;
  tags: string[];
}

export interface Session {
  id: string;
  user_id: string;
  category: Category;
  difficulty: Difficulty;
  started_at: string;
  updated_at: string;
  completed_at: string | null;
  checkpoint_index: number;
  metadata: Record<string, unknown>;
}

export interface QuestionRecord {
  id: string;
  session_id: string;
  question_text: string;
  user_answer: string;
  ai_feedback: string | null;
  score: number | null;
  is_correct: boolean;
  created_at: string;
  answered_at: string | null;
}

export interface UserProgress {
  user_id: string;
  category: Category;
  total_questions: number;
  correct_questions: number;
  last_practiced_at: string | null;
  streak_days: number;
  checkpoint_data: Record<string, unknown>;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  description: string;
  color: string;
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "nodejs",
    label: "Node.js",
    description: "JavaScript 運行時、非同步程式設計、NPM 生態系",
    color: "bg-green-500",
    icon: "⬡",
  },
  {
    id: "csharp",
    label: "C#",
    description: "物件導向、LINQ、.NET 框架、非同步程式設計",
    color: "bg-purple-500",
    icon: "♯",
  },
  {
    id: "english",
    label: "English",
    description: "閱讀理解、單字填空、句型改錯",
    color: "bg-blue-500",
    icon: "A",
  },
  {
    id: "web",
    label: "Web Dev",
    description: "HTML、CSS、HTTP、DOM、Browser API",
    color: "bg-orange-500",
    icon: "◈",
  },
  {
    id: "frontend",
    label: "Frontend Engineering",
    description: "狀態機設計、元件 API、TypeScript 型別、效能直覺",
    color: "bg-rose-500",
    icon: "⬡",
  },
];
