"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message === "Invalid login credentials"
          ? "Email 或密碼錯誤，請重新確認"
          : signInError.message);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("登入時發生未預期的錯誤，請稍後再試");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-slate-50 px-4 pt-20 md:pt-32">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 md:p-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <BookOpen className="w-7 h-7 text-indigo-500" />
          <span className="text-xl font-bold text-slate-900">Skill Trainer</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 text-center mb-2">登入帳號</h1>
        <p className="text-sm text-slate-500 text-center mb-8">繼續你的技能練習旅程</p>

        {error && (
          <div className="mb-5 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
              密碼
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors"
          >
            {isLoading ? "登入中..." : "登入"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          還沒有帳號？{" "}
          <Link href="/dashboard" className="text-indigo-600 hover:underline font-medium">
            直接開始練習
          </Link>
        </p>
      </div>
    </div>
  );
}
