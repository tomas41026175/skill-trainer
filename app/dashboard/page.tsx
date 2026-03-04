"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  CheckCircle,
  Flame,
  CalendarDays,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CATEGORIES, type UserProgress, type Session, type Category } from "@/types";
import StatsCard from "@/components/StatsCard";
import CategoryCard from "@/components/CategoryCard";
import { calcAccuracy, formatDate } from "@/lib/utils";

interface DashboardStats {
  totalQuestions: number;
  accuracy: number;
  streakDays: number;
  todayQuestions: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [progressList, setProgressList] = useState<UserProgress[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalQuestions: 0,
    accuracy: 0,
    streakDays: 0,
    todayQuestions: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        const headers: HeadersInit = session?.access_token
          ? { Authorization: `Bearer ${session.access_token}` }
          : {};

        const [progressRes, sessionsRes] = await Promise.all([
          fetch("/api/progress", { headers }),
          fetch("/api/sessions", { headers }),
        ]);

        if (!progressRes.ok || !sessionsRes.ok) {
          throw new Error("資料載入失敗");
        }

        const progressData: UserProgress[] = await progressRes.json();
        const sessionsData: Session[] = await sessionsRes.json();

        setProgressList(progressData);
        setSessions(sessionsData);

        // Calculate aggregate stats
        const totalQ = progressData.reduce((sum, p) => sum + p.total_questions, 0);
        const totalCorrect = progressData.reduce((sum, p) => sum + p.correct_questions, 0);
        const maxStreak = progressData.reduce((max, p) => Math.max(max, p.streak_days), 0);

        const today = new Date().toDateString();
        const todayQ = sessionsData.reduce((sum, s) => {
          const sessionDate = new Date(s.started_at).toDateString();
          if (sessionDate === today) {
            return sum + ((s.metadata as Record<string, number>).answered_count ?? 0);
          }
          return sum;
        }, 0);

        setStats({
          totalQuestions: totalQ,
          accuracy: calcAccuracy(totalCorrect, totalQ),
          streakDays: maxStreak,
          todayQuestions: todayQ,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "載入失敗");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function getProgressForCategory(categoryId: Category): UserProgress | undefined {
    return progressList.find((p) => p.category === categoryId);
  }

  function handleCategoryClick(categoryId: Category) {
    router.push(`/practice/${categoryId}`);
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Stats skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-4 md:p-6 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200" />
                <div className="flex-1">
                  <div className="h-6 bg-slate-200 rounded w-16 mb-2" />
                  <div className="h-4 bg-slate-100 rounded w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-5 animate-pulse">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-slate-200" />
                <div className="h-5 bg-slate-200 rounded w-24" />
              </div>
              <div className="h-4 bg-slate-100 rounded mb-2" />
              <div className="h-4 bg-slate-100 rounded w-4/5" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-700 text-center">
          <p className="font-semibold mb-1">載入失敗</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  const recentSessions = sessions.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatsCard
          label="累計題數"
          value={stats.totalQuestions}
          icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />}
          color="text-indigo-500"
        />
        <StatsCard
          label="正確率"
          value={`${stats.accuracy}%`}
          icon={<CheckCircle className="w-5 h-5 md:w-6 md:h-6" />}
          color="text-green-500"
        />
        <StatsCard
          label="連續天數"
          value={stats.streakDays}
          icon={<Flame className="w-5 h-5 md:w-6 md:h-6" />}
          color="text-orange-500"
        />
        <StatsCard
          label="今日題數"
          value={stats.todayQuestions}
          icon={<CalendarDays className="w-5 h-5 md:w-6 md:h-6" />}
          color="text-blue-500"
        />
      </div>

      {/* Category Cards */}
      <h2 className="text-lg md:text-xl font-semibold text-slate-700 mb-4">選擇練習領域</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            progress={getProgressForCategory(category.id)}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>

      {/* Recent Sessions */}
      {recentSessions.length > 0 && (
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-slate-700 mb-4">最近練習紀錄</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <ul className="divide-y divide-slate-100">
              {recentSessions.map((session) => {
                const categoryInfo = CATEGORIES.find((c) => c.id === session.category);
                const isCompleted = session.completed_at !== null;
                return (
                  <li key={session.id} className="flex items-center gap-4 px-5 py-4">
                    <div
                      className={`w-2 h-10 rounded-full flex-shrink-0 ${categoryInfo?.color ?? "bg-slate-300"}`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 text-sm truncate">
                        {categoryInfo?.label ?? session.category}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {formatDate(session.started_at)} · {session.difficulty}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                        isCompleted
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {isCompleted ? "完成" : "進行中"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
