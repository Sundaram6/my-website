"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-700 dark:text-white dark:bg-white/[0.05] dark:border-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/[0.1] transition-colors"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
