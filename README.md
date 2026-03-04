# Skill Trainer

技能練習平台，支援 Node.js、C#、English、Web Dev 四大學習分類。

## 功能

- **固定題庫**：120+ 題，涵蓋 4 個分類 × 3 個難度
- **進度追蹤**：正確率、連續天數、分類統計
- **會話管理**：自動存檔，支援中斷後繼續
- **RWD 設計**：手機、平板、桌面全支援

## 技術棧

- **Frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Database**: Supabase (PostgreSQL + Auth)
- **部署**: Vercel

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 設定環境變數

複製 `.env.local.example` 為 `.env.local`：

```bash
cp .env.local.example .env.local
```

填入你的 Supabase 設定值。

### 3. 初始化資料庫

在 Supabase Dashboard > SQL Editor 執行 `supabase/schema.sql`。

### 4. 啟動開發伺服器

```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## Supabase 設定

1. 前往 [Supabase](https://supabase.com) 建立新專案
2. 在 Authentication > Providers 啟用 Email
3. 在 SQL Editor 執行 `supabase/schema.sql`
4. 複製 Project URL 和 API Keys 填入 `.env.local`

## 部署到 Vercel

```bash
vercel
```

記得在 Vercel 環境變數設定中加入三個環境變數。

## 題庫結構

```
data/
├── nodejs.ts    # 30 題（Node.js）
├── csharp.ts    # 30 題（C#）
├── english.ts   # 30 題（English）
└── web.ts       # 30 題（Web Dev）
```

每個分類各 10 beginner + 10 intermediate + 10 advanced。

## 資料庫 Schema

- `sessions` - 練習會話記錄
- `question_records` - 每題答題記錄
- `user_progress` - 各分類進度統計
