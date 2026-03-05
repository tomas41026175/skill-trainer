import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Category, Difficulty, Session } from "@/types";

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

// GET /api/sessions?category=nodejs&limit=20
export async function GET(
  req: NextRequest
): Promise<NextResponse<ApiResponse<Session[]>>> {
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

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") as Category | null;
    const limit = parseInt(searchParams.get("limit") ?? "20", 10);

    let query = supabase
      .from("sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("started_at", { ascending: false })
      .limit(limit);

    if (category) {
      query = query.eq("category", category);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: data as Session[] });
  } catch (err) {
    const message = err instanceof Error ? err.message : "伺服器錯誤";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

interface CreateSessionBody {
  category: Category;
  difficulty: Difficulty;
}

// POST /api/sessions  body: {category, difficulty}
export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse<Session>>> {
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

    const body = (await req.json()) as CreateSessionBody;
    const { category, difficulty } = body;

    if (!category || !difficulty) {
      return NextResponse.json(
        { success: false, error: "缺少必要欄位：category 和 difficulty" },
        { status: 400 }
      );
    }

    const validCategories: Category[] = ["nodejs", "csharp", "english", "web"];
    const validDifficulties: Difficulty[] = [
      "beginner",
      "intermediate",
      "advanced",
    ];

    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { success: false, error: `無效的 category：${category}` },
        { status: 400 }
      );
    }

    if (!validDifficulties.includes(difficulty)) {
      return NextResponse.json(
        { success: false, error: `無效的 difficulty：${difficulty}` },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("sessions")
      .insert({
        user_id: user.id,
        category,
        difficulty,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data: data as Session },
      { status: 201 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "伺服器錯誤";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
