"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { GlassCard } from "@/components/ui/GlassCard";

const tags = ["AI/ML Integration","SaaS Architecture","API Design","System Design","DevOps","UX Engineering"];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8" glow>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-4xl mb-6 shadow-[0_8px_30px_rgba(255,157,102,0.3)]">👨‍💻</div>
            <h3 className="text-xl font-bold mb-1">Sundaram Sharma</h3>
            <p className="text-brand-primary2 text-sm font-semibold mb-4">Full Stack &amp; AI Engineer</p>
            <p className="text-slate-400 text-sm leading-relaxed">Building at the intersection of AI and product — from zero-to-one SaaS products to intelligent automation systems that scale.</p>

          </GlassCard>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight mb-4 leading-tight">
            Turning complex ideas into{" "}
            <GradientText>elegant software</GradientText>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded mb-6" />
          <p className="text-slate-400 leading-relaxed mb-4 text-[0.975rem]">I'm a full-stack developer with 5+ years of experience building AI-powered products and scalable SaaS applications. I specialize in taking ideas from zero to production — fast, clean, and built to last.</p>
          <p className="text-slate-400 leading-relaxed mb-4 text-[0.975rem]">My expertise spans the entire stack: from crafting pixel-perfect UIs with React and Next.js, to architecting robust backends with Node.js and Python, to integrating cutting-edge AI/ML capabilities into real products.</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((t) => (
              <span key={t} className="glass2 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700 dark:text-slate-400">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
