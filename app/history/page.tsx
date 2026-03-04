"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { CATEGORIES, type Session } from "@/types";
import { formatDate, calcAccuracy } from "@/lib/utils";

export default function HistoryPage() {
  const router = useRouter();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSessions() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        const headers: HeadersInit = session?.access_token
          ? { Authorization: `Bearer ${session.access_token}` }
          : {};

        const res = await fetch("/api/sessions", { headers });
        if (!res.ok) throw new Error("資料載入失敗");

        const data: Session[] = await res.json();
        setSessions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "載入失敗");
      } finally {
        setIsLoading(false);
      }
    }

    fetchSessions();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="h-8 bg-slate-200 rounded w-40 mb-8 animate-pulse" />
        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-5 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-2 h-12 rounded-full bg-slate-200 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-5 bg-slate-200 rounded w-32 mb-2" />
                  <div className="h-4 bg-slate-100 rounded w-48" />
                </div>
                <div className="w-16 h-7 bg-slate-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-700 text-center">
          <p className="font-semibold mb-1">載入失敗</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">練習歷史</h1>

      {sessions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center text-slate-500">
          <p className="text-lg mb-2">尚無練習紀錄</p>
          <p className="text-sm mb-6">前往 Dashboard 開始你的第一次練習</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
          >
            前往 Dashboard
          </button>
        </div>
      ) : (
        <>
          {/* Mobile Card View */}
          <div className="flex flex-col gap-4 md:hidden">
            {sessions.map((session) => {
              const categoryInfo = CATEGORIES.find((c) => c.id === session.category);
              const isCompleted = session.completed_at !== null;
              const answered = (session.metadata as Record<string, number>).answered_count ?? 0;
              const correct = (session.metadata as Record<string, number>).correct_count ?? 0;
              const accuracy = calcAccuracy(correct, answered);

              return (
                <div key={session.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex items-stretch">
                  <div className={`w-2 flex-shrink-0 ${categoryInfo?.color ?? "bg-slate-300"}`} />
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg" aria-hidden="true">{categoryInfo?.icon}</span>
                        <span className="font-semibold text-slate-800 text-sm">
                          {categoryInfo?.label ?? session.category}
                        </span>
                        <span className="text-xs text-slate-400 px-2 py-0.5 bg-slate-100 rounded-full">
                          {session.difficulty}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          isCompleted
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {isCompleted ? "完成" : "進行中"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-400">{formatDate(session.started_at)}</p>
                      {answered > 0 && (
                        <p className="text-xs text-slate-600">
                          正確率 <span className="font-semibold">{accuracy}%</span>
                          {" "}({correct}/{answered})
                        </p>
                      )}
                    </div>

                    {!isCompleted && (
                      <button
                        onClick={() => router.push(`/practice/${session.category}`)}
                        className="mt-3 px-4 py-1.5 rounded-lg border border-indigo-400 text-indigo-600 text-xs font-medium hover:bg-indigo-50 transition-colors"
                      >
                        繼續練習
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-6 py-4 font-semibold text-slate-600">分類</th>
                  <th className="text-left px-4 py-4 font-semibold text-slate-600">難度</th>
                  <th className="text-left px-4 py-4 font-semibold text-slate-600">日期</th>
                  <th className="text-left px-4 py-4 font-semibold text-slate-600">正確率</th>
                  <th className="text-left px-4 py-4 font-semibold text-slate-600">狀態</th>
                  <th className="px-4 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {sessions.map((session) => {
                  const categoryInfo = CATEGORIES.find((c) => c.id === session.category);
                  const isCompleted = session.completed_at !== null;
                  const answered = (session.metadata as Record<string, number>).answered_count ?? 0;
                  const correct = (session.metadata as Record<string, number>).correct_count ?? 0;
                  const accuracy = calcAccuracy(correct, answered);

                  return (
                    <tr key={session.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-8 rounded-full flex-shrink-0 ${categoryInfo?.color ?? "bg-slate-300"}`} />
                          <span className="mr-1" aria-hidden="true">{categoryInfo?.icon}</span>
                          <span className="font-medium text-slate-800">
                            {categoryInfo?.label ?? session.category}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          {session.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-slate-500 text-xs">
                        {formatDate(session.started_at)}
                      </td>
                      <td className="px-4 py-4">
                        {answered > 0 ? (
                          <span className="text-slate-700 font-medium">
                            {accuracy}%{" "}
                            <span className="text-slate-400 font-normal">({correct}/{answered})</span>
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            isCompleted
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {isCompleted ? "完成" : "進行中"}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        {!isCompleted && (
                          <button
                            onClick={() => router.push(`/practice/${session.category}`)}
                            className="px-3 py-1.5 rounded-lg border border-indigo-400 text-indigo-600 text-xs font-medium hover:bg-indigo-50 transition-colors"
                          >
                            繼續練習
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
