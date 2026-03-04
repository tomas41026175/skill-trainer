import Link from "next/link";
import { CATEGORIES } from "@/types";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            掌握技術，<br className="sm:hidden" />
            <span className="text-indigo-400">從練習開始</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            透過精選題庫強化你的技術能力，支援 Node.js、C#、英文閱讀與 Web Dev。
            隨時練習，追蹤進度，持續成長。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-base transition-colors shadow-lg"
            >
              開始練習
            </Link>
            <Link
              href="/login"
              className="inline-block px-8 py-3.5 rounded-full border border-slate-500 hover:border-slate-300 hover:bg-slate-700 text-slate-200 font-semibold text-base transition-colors"
            >
              登入帳號
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-4">
            四大技能領域
          </h2>
          <p className="text-slate-500 text-center mb-12 text-sm md:text-base">
            選擇你想加強的領域，從初級到進階循序漸進
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden flex items-stretch"
              >
                <div className={`w-2 flex-shrink-0 ${category.color}`} />
                <div className="p-5 md:p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl" aria-hidden="true">{category.icon}</span>
                    <h3 className="text-lg font-semibold text-slate-800">{category.label}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            準備好了嗎？
          </h2>
          <p className="text-indigo-200 mb-8 text-sm md:text-base">
            立即開始免費練習，無需信用卡
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-10 py-4 rounded-full bg-white text-indigo-600 font-bold text-base hover:bg-indigo-50 transition-colors shadow-md"
          >
            開始免費練習
          </Link>
        </div>
      </section>
    </div>
  );
}
