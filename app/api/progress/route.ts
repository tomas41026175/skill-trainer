import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Category, UserProgress } from "@/types";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

function createServerSupabase(token: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );
}

function extractToken(req: NextRequest): string | null {
  return req.headers.get("authorization")?.replace("Bearer ", "") ?? null;
}

function calculateStreakDays(
  lastPracticedAt: string | null,
  currentStreakDays: number
): number {
  if (!lastPracticedAt) {
    return 1;
  }

  const now = new Date();
  const last = new Date(lastPracticedAt);

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const lastStart = new Date(last.getFullYear(), last.getMonth(), last.getDate());

  const diffMs = todayStart.getTime() - lastStart.getTime();
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    // 今天已練習過，streak 不變
    return currentStreakDays;
  }

  if (diffDays === 1) {
    // 昨天練習過，streak + 1
    return currentStreakDays + 1;
  }

  // 超過 1 天未練習，streak 重置為 1
  return 1;
}

// GET /api/progress
export async function GET(
  req: NextRequest
): Promise<NextResponse<ApiResponse<UserProgress[]>>> {
  try {
    const token = extractToken(req);
    if (!token) {
      return NextResponse.json(
        { success: false, error: "未提供授權 Token" },
        { status: 401 }
      );
    }

    const supabase = createServerSupabase(token);
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: "身份驗證失敗" },
        { status: 401 }
      );
    }

    const { data, error } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data as UserProgress[],
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "伺服器錯誤";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

interface UpsertProgressBody {
  category: Category;
  total_questions?: number;
  correct_questions?: number;
  checkpoint_data?: Record<string, unknown>;
}

// POST /api/progress
export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse<UserProgress>>> {
  try {
    const token = extractToken(req);
    if (!token) {
      return NextResponse.json(
        { success: false, error: "未提供授權 Token" },
        { status: 401 }
      );
    }

    const supabase = createServerSupabase(token);
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json(
        { success: false, error: "身份驗證失敗" },
        { status: 401 }
      );
    }

    const body = (await req.json()) as UpsertProgressBody;
    const { category, total_questions, correct_questions, checkpoint_data } = body;

    if (!category) {
      return NextResponse.json(
        { success: false, error: "缺少必要欄位：category" },
        { status: 400 }
      );
    }

    const validCategories: Category[] = ["nodejs", "csharp", "english", "web"];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { success: false, error: `無效的 category：${category}` },
        { status: 400 }
      );
    }

    // 查詢現有進度以計算 streak_days
    const { data: existing } = await supabase
      .from("user_progress")
      .select("last_practiced_at, streak_days")
      .eq("user_id", user.id)
      .eq("category", category)
      .single();

    const currentStreakDays = (existing?.streak_days as number | undefined) ?? 0;
    const lastPracticedAt = (existing?.last_practiced_at as string | null | undefined) ?? null;
    const newStreakDays = calculateStreakDays(lastPracticedAt, currentStreakDays);

    const upsertPayload: Record<string, unknown> = {
      user_id: user.id,
      category,
      streak_days: newStreakDays,
      last_practiced_at: new Date().toISOString(),
    };

    if (total_questions !== undefined) {
      upsertPayload.total_questions = total_questions;
    }

    if (correct_questions !== undefined) {
      upsertPayload.correct_questions = correct_questions;
    }

    if (checkpoint_data !== undefined) {
      upsertPayload.checkpoint_data = checkpoint_data;
    }

    const { data, error } = await supabase
      .from("user_progress")
      .upsert(upsertPayload, { onConflict: "user_id,category" })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: data as UserProgress },
      { status: 200 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "伺服器錯誤";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
