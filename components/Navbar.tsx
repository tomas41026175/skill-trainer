"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-slate-300 transition-colors">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            <span>Skill Trainer</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/history"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              History
            </Link>
            <button
              onClick={handleSignOut}
              className="ml-4 px-4 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm font-medium transition-colors"
            >
              登出
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-700 transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="切換選單"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-700">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium py-1"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/history"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium py-1"
              onClick={() => setIsOpen(false)}
            >
              History
            </Link>
            <button
              onClick={() => {
                setIsOpen(false);
                handleSignOut();
              }}
              className="text-left px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm font-medium transition-colors w-fit"
            >
              登出
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
