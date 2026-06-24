"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const fullText = "> ANTIGRAVITY_AI v1.0\n> Analyzing portfolio layout...\n> Optimizing asset delivery...\n> All systems optimal.\n> Looking for a 10x Developer?\n> You're in the right place.";

  useEffect(() => {
    if (!isOpen) {
      setText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-72 bg-slate-900/95 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_0_40px_rgba(255,157,102,0.2)] overflow-hidden pointer-events-auto"
          >
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-[0.65rem] font-bold tracking-[0.2em] text-slate-600 dark:text-slate-400">AI_TERMINAL</span>
            </div>
            <div className="font-mono text-xs text-[#00ff41] leading-relaxed min-h-[120px] whitespace-pre-wrap">
              {text}
              <span className="animate-pulse font-black shadow-[0_0_8px_#00ff41]">_</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-primary to-brand-accent shadow-[0_0_20px_rgba(255,157,102,0.5)] flex items-center justify-center relative group outline-none pointer-events-auto hover:scale-105 transition-transform"
        title="Toggle AI Assistant"
      >
        {/* Glow rings */}
        <span className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:animate-ping" />
        <span className="absolute inset-1 rounded-full bg-black/20" />
        {/* Core */}
        <span className="relative z-10 text-white font-black text-lg tracking-tighter drop-shadow-md">AI</span>
      </button>
    </div>
  );
}
