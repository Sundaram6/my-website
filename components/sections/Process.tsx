"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="process" className="py-28 px-6" style={{ background: "linear-gradient(180deg,transparent,rgba(139,92,246,0.02),transparent)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionLabel>Development Process</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-3">How I Work</h2>
          <p className="text-slate-400 text-[1.05rem] max-w-lg">A proven, structured approach that ensures every project ships on time, on budget, and exceeds expectations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass border border-white/8 hover:border-orange-500/30 rounded-2xl p-8 relative overflow-hidden transition-all group"
            >
              <span className="absolute -top-4 right-5 font-mono font-black text-[5rem] leading-none text-brand-blue/[0.06] pointer-events-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 border border-orange-500/20 flex items-center justify-center text-2xl mb-5">{s.icon}</div>
              <h3 className="text-[1.05rem] font-bold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-[0.875rem] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
