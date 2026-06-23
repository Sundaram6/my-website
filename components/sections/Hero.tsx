"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Hero3D from "./Hero3D";

const phrases = ["with AI.", "for Scale.", "that Matters.", "at Speed."];
const stats = [
  { num: "50+", label: "Projects Shipped" },
  { num: "30+", label: "Happy Clients" },
  { num: "5yr",  label: "Experience" },
  { num: "99%", label: "Satisfaction" },
];

export default function Hero() {
  const typed = useTypingEffect(phrases);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-32 pb-20">
      {/* 3D Background */}
      <Hero3D />

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass2 border border-orange-500/30 px-5 py-2 rounded-full text-xs font-semibold text-brand-primary3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-[blink_1.5s_infinite]" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.8rem,7vw,6rem)] font-black leading-[1.05] tracking-tight mb-6"
        >
          <span className="block">Building the Future</span>
          <span className="gradient-text">
            {typed}
            <span className="inline-block w-[3px] h-[0.85em] bg-brand-primary2 ml-0.5 align-text-bottom animate-[blink-cursor_0.7s_steps(1)_infinite]" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.25rem)] text-slate-400 max-w-xl mx-auto leading-relaxed mb-12"
        >
          Full Stack Developer crafting AI-powered applications, scalable SaaS
          platforms, and beautiful digital experiences that drive real business results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link href="#projects"
            className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-9 py-3.5 rounded-xl font-semibold text-[0.95rem] hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(255,157,102,0.45)] transition-all">
            View My Work
          </Link>
          <Link href="#contact"
            className="glass2 text-slate-900 dark:text-white px-9 py-3.5 rounded-xl font-semibold text-[0.95rem] backdrop-blur-xl hover:border-orange-500/30 hover:-translate-y-0.5 transition-all">
            Let's Talk
          </Link>
          <Link href="/resume"
            className="glass2 text-slate-900 dark:text-white px-9 py-3.5 rounded-xl font-semibold text-[0.95rem] backdrop-blur-xl hover:border-orange-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2">
            Resume <span aria-hidden="true">↓</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex gap-12 justify-center mt-20 flex-wrap"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[2.2rem] font-extrabold gradient-text tracking-tight">{s.num}</div>
              <div className="text-[0.75rem] text-slate-500 uppercase tracking-[0.08em] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-primary to-transparent animate-[scrollLine_1.5s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}

