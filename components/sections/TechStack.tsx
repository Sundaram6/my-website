"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { techs } from "@/data/techs";

export default function TechStack() {
  return (
    <section id="stack" className="py-28 px-6" style={{ background: "linear-gradient(180deg,transparent,rgba(255,157,102,0.02),transparent)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-3">Tools I Build With</h2>
          <p className="text-slate-600 dark:text-slate-400 text-[1.05rem] max-w-lg">A curated set of battle-tested technologies I use to ship fast, scalable, and beautiful products.</p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4 mt-12">
          {techs.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -5, 0] }}
              transition={{ delay: i * 0.04, duration: 3 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass border hover:border-orange-500/30 rounded-xl p-5 text-center cursor-default relative overflow-hidden group transition-shadow hover:shadow-[0_12px_35px_rgba(255,157,102,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold text-white mb-2 relative mx-auto" style={{ backgroundColor: t.color }}>{t.icon}</div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 relative">{t.name}</div>
              <div className="text-[0.65rem] text-slate-700 dark:text-slate-500 dark:text-slate-400 mt-0.5 relative">{t.cat}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}