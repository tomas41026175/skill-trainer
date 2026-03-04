-- 啟用 UUID 擴充
create extension if not exists "uuid-ossp";

-- 學習會話
create table sessions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users not null,
  category text not null check (category in ('nodejs','csharp','english','web')),
  difficulty text not null check (difficulty in ('beginner','intermediate','advanced')),
  started_at timestamptz default now(),
  updated_at timestamptz default now(),
  completed_at timestamptz,
  checkpoint_index int default 0,
  metadata jsonb default '{}'
);

-- 題目記錄
create table question_records (
  id uuid primary key default uuid_generate_v4(),
  session_id uuid references sessions(id) on delete cascade,
  question_id text not null,
  question_text text not null,
  user_answer text not null,
  is_correct boolean not null,
  ai_feedback text,
  score int default 0,
  created_at timestamptz default now(),
  answered_at timestamptz
);

-- 用戶進度（每分類一筆）
create table user_progress (
  user_id uuid references auth.users not null,
  category text not null,
  total_questions int default 0,
  correct_questions int default 0,
  last_practiced_at timestamptz,
  streak_days int default 0,
  checkpoint_data jsonb default '{}',
  primary key (user_id, category)
);

alter table sessions enable row level security;
alter table question_records enable row level security;
alter table user_progress enable row level security;

create policy "sessions_own" on sessions for all using (auth.uid() = user_id);
create policy "records_own" on question_records for all using (
  session_id in (select id from sessions where user_id = auth.uid())
);
create policy "progress_own" on user_progress for all using (auth.uid() = user_id);
