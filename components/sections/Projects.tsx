"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

const tagColors: Record<string, string> = {
  ai:   "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  saas: "bg-brand-blue/10 border-brand-blue/20 text-brand-blue2",
  web:  "bg-brand-purple/10 border-brand-purple/20 text-brand-purple3",
  auto: "bg-brand-purple/10 border-brand-purple/20 text-brand-purple3",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-3">Work That Speaks</h2>
          <p className="text-slate-400 text-[1.05rem] max-w-lg">A selection showcasing AI systems, SaaS platforms, and developer tools.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass border border-white/8 hover:border-orange-500/40 rounded-2xl overflow-hidden transition-shadow hover:shadow-[0_20px_50px_rgba(255,157,102,0.15)] relative group"
            >
              {p.featured && (
                <span className="absolute top-4 right-4 z-10 bg-gradient-to-r from-brand-blue to-brand-purple text-white text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  Featured
                </span>
              )}
              <div className={`h-44 flex items-center justify-center text-5xl bg-gradient-to-br ${p.gradClass}`}>
                {p.icon}
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-4">
                  {p.tags.map((t) => (
                    <span key={t.label} className={`text-[0.7rem] font-semibold px-2.5 py-1 rounded-full border ${tagColors[t.color]}`}>{t.label}</span>
                  ))}
                </div>
                <h3 className="text-[1.1rem] font-bold mb-2 tracking-tight">{p.title}</h3>
                <p className="text-slate-400 text-[0.875rem] leading-relaxed mb-5">{p.desc}</p>
                <div className="flex gap-5">
                  {p.links.map((l) => (
                    <Link key={l.label} href={l.href} target="_blank"
                      className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-brand-blue2 hover:text-brand-blue3 transition-colors">
                      {l.label}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
