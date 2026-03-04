import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { QuestionRecord } from "@/types";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

function createServerSupabase(token: string) {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );
}

function extractToken(req: NextRequest): string | null {
  return req.headers.get("authorization")?.replace("Bearer ", "") ?? null;
}

async function verifySessionOwnership(
  supabase: ReturnType<typeof createServerSupabase>,
  sessionId: string,
  userId: string
): Promise<boolean> {
  const { data } = await supabase
    .from("sessions")
    .select("id")
    .eq("id", sessionId)
    .eq("user_id", userId)
    .single();

  return data !== null;
}

// GET /api/sessions/[id]/questions
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<ApiResponse<QuestionRecord[]>>> {
  try {
    const { id } = await params;
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

    const isOwner = await verifySessionOwnership(supabase, id, user.id);
    if (!isOwner) {
      return NextResponse.json(
        { success: false, error: "會話不存在或無存取權限" },
        { status: 404 }
      );
    }

    const { data, error } = await supabase
      .from("question_records")
      .select("*")
      .eq("session_id", id)
      .order("created_at", { ascending: true });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: data as QuestionRecord[],
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "伺服器錯誤";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

interface CreateQuestionRecordBody {
  question_id: string;
  question_text: string;
  user_answer: string;
  is_correct: boolean;
}

// POST /api/sessions/[id]/questions
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<ApiResponse<QuestionRecord>>> {
  try {
    const { id } = await params;
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

    const isOwner = await verifySessionOwnership(supabase, id, user.id);
    if (!isOwner) {
      return NextResponse.json(
        { success: false, error: "會話不存在或無存取權限" },
        { status: 404 }
      );
    }

    const body = (await req.json()) as CreateQuestionRecordBody;
    const { question_id, question_text, user_answer, is_correct } = body;

    if (
      !question_id ||
      !question_text ||
      user_answer === undefined ||
      is_correct === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "缺少必要欄位：question_id、question_text、user_answer、is_correct",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("question_records")
      .insert({
        session_id: id,
        question_id,
        question_text,
        user_answer,
        is_correct,
        score: is_correct ? 1 : 0,
        answered_at: new Date().toISOString(),
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
      { success: true, data: data as QuestionRecord },
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
