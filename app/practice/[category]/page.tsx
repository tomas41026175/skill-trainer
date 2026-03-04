"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  CATEGORIES,
  type Category,
  type Difficulty,
  type Question,
} from "@/types";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import { calcAccuracy } from "@/lib/utils";

type PracticeState = "selecting" | "practicing" | "completed";

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string; description: string }[] = [
  { value: "beginner", label: "初級", description: "基礎概念與常見知識" },
  { value: "intermediate", label: "中級", description: "進階應用與實務場景" },
  { value: "advanced", label: "高級", description: "深度原理與複雜問題" },
];

const COUNT_OPTIONS = [5, 10, 15];

export default function PracticePage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;

  const categoryInfo = CATEGORIES.find((c) => c.id === categoryId);

  const [practiceState, setPracticeState] = useState<PracticeState>("selecting");
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ answer: string; isCorrect: boolean }[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentUserAnswer, setCurrentUserAnswer] = useState<string | undefined>(undefined);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect if invalid category
  useEffect(() => {
    if (!categoryInfo) {
      router.push("/dashboard");
    }
  }, [categoryInfo, router]);

  const getAuthHeaders = useCallback(async (): Promise<HeadersInit> => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session?.access_token
      ? { Authorization: `Bearer ${session.access_token}`, "Content-Type": "application/json" }
      : { "Content-Type": "application/json" };
  }, []);

  async function handleStart() {
    setIsLoading(true);
    setError(null);

    try {
      const headers = await getAuthHeaders();

      // Create session
      const sessionRes = await fetch("/api/sessions", {
        method: "POST",
        headers,
        body: JSON.stringify({ category: categoryId, difficulty }),
      });

      let newSessionId: string | null = null;
      if (sessionRes.ok) {
        const sessionData = await sessionRes.json();
        newSessionId = sessionData.id ?? null;
        setSessionId(newSessionId);
      }

      // Load questions dynamically (client-side import)
      const { getQuestionsByCategory } = await import("@/lib/questions");
      const loadedQuestions = await getQuestionsByCategory(
        categoryId as Category,
        difficulty,
        count
      );

      if (loadedQuestions.length === 0) {
        setError("此難度尚無題目，請選擇其他難度");
        return;
      }

      setQuestions(loadedQuestions);
      setCurrentIndex(0);
      setAnswers([]);
      setIsAnswered(false);
      setCurrentUserAnswer(undefined);
      setPracticeState("practicing");
    } catch {
      setError("載入題目失敗，請稍後再試");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAnswer(answer: string, isCorrect: boolean) {
    setCurrentUserAnswer(answer);
    setIsAnswered(true);

    const newAnswers = [...answers, { answer, isCorrect }];
    setAnswers(newAnswers);

    // Record question result
    if (sessionId) {
      try {
        const headers = await getAuthHeaders();
        const question = questions[currentIndex];
        await fetch(`/api/sessions/${sessionId}/questions`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            question_text: question.question,
            user_answer: answer,
            is_correct: isCorrect,
            score: isCorrect ? 1 : 0,
          }),
        });

        // Update checkpoint
        await fetch(`/api/sessions/${sessionId}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ checkpoint_index: currentIndex + 1 }),
        });
      } catch {
        // Non-critical: continue practice even if recording fails
      }
    }
  }

  async function handleNext() {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= questions.length) {
      await handleComplete();
      return;
    }

    setCurrentIndex(nextIndex);
    setIsAnswered(false);
    setCurrentUserAnswer(undefined);
  }

  async function handleComplete() {
    const totalCorrect = answers.filter((a) => a.isCorrect).length;

    // Update progress and session
    if (sessionId) {
      try {
        const headers = await getAuthHeaders();

        await Promise.all([
          fetch("/api/progress", {
            method: "POST",
            headers,
            body: JSON.stringify({
              category: categoryId,
              correct_questions: totalCorrect,
              total_questions: questions.length,
            }),
          }),
          fetch(`/api/sessions/${sessionId}`, {
            method: "PATCH",
            headers,
            body: JSON.stringify({ completed_at: new Date().toISOString() }),
          }),
        ]);
      } catch {
        // Non-critical
      }
    }

    setPracticeState("completed");
  }

  function handleRetry() {
    setSessionId(null);
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers([]);
    setIsAnswered(false);
    setCurrentUserAnswer(undefined);
    setPracticeState("selecting");
  }

  if (!categoryInfo) return null;

  // ── Selecting State ──────────────────────────────────────────────────
  if (practiceState === "selecting") {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl" aria-hidden="true">{categoryInfo.icon}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">{categoryInfo.label}</h1>
          </div>
          <p className="text-slate-500 text-sm md:text-base">{categoryInfo.description}</p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Difficulty Selection */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-slate-700 mb-3">選擇難度</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DIFFICULTY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDifficulty(opt.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  difficulty === opt.value
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"
                }`}
              >
                <p className={`font-semibold text-sm ${difficulty === opt.value ? "text-indigo-700" : "text-slate-700"}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-slate-500 mt-1">{opt.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Count Selection */}
        <div className="mb-10">
          <h2 className="text-base font-semibold text-slate-700 mb-3">題目數量</h2>
          <div className="flex gap-3">
            {COUNT_OPTIONS.map((n) => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`flex-1 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                  count === n
                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 hover:border-indigo-300 text-slate-700"
                }`}
              >
                {n} 題
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleStart}
          disabled={isLoading}
          className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base transition-colors"
        >
          {isLoading ? "載入題目中..." : "開始練習"}
        </button>
      </div>
    );
  }

  // ── Practicing State ─────────────────────────────────────────────────
  if (practiceState === "practicing") {
    const currentQuestion = questions[currentIndex];
    const isLast = currentIndex === questions.length - 1;

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden="true">{categoryInfo.icon}</span>
              <span className="font-semibold text-slate-700">{categoryInfo.label}</span>
              <span className="text-xs text-slate-400 ml-1">· {difficulty}</span>
            </div>
            <span className="text-sm text-slate-500">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
          <ProgressBar current={currentIndex + (isAnswered ? 1 : 0)} total={questions.length} showLabel={false} />
        </div>

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          userAnswer={currentUserAnswer}
        />

        {/* Next button */}
        {isAnswered && (
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
            >
              {isLast ? "完成練習" : "下一題"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── Completed State ───────────────────────────────────────────────────
  const totalCorrect = answers.filter((a) => a.isCorrect).length;
  const accuracy = calcAccuracy(totalCorrect, questions.length);

  function getAccuracyColor(): string {
    if (accuracy >= 80) return "text-green-600";
    if (accuracy >= 50) return "text-yellow-600";
    return "text-red-600";
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
      <div className="text-5xl mb-6" aria-hidden="true">
        {accuracy >= 80 ? "🎉" : accuracy >= 50 ? "👍" : "📚"}
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">練習完成！</h1>
      <p className="text-slate-500 mb-10 text-sm">{categoryInfo.label} · {difficulty}</p>

      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className={`text-5xl font-bold mb-2 ${getAccuracyColor()}`}>{accuracy}%</div>
        <p className="text-slate-500 text-sm mb-6">正確率</p>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-green-700">{totalCorrect}</p>
            <p className="text-xs text-green-600 mt-1">正確</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4">
            <p className="text-2xl font-bold text-red-700">{questions.length - totalCorrect}</p>
            <p className="text-xs text-red-600 mt-1">錯誤</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleRetry}
          className="flex-1 py-3 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors"
        >
          再練一次
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
        >
          回 Dashboard
        </button>
      </div>
    </div>
  );
}
