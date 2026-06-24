"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

const tagColors: Record<string, string> = {
  ai:   "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  saas: "bg-brand-primary/10 border-brand-primary/20 text-brand-primary2",
  web:  "bg-brand-accent/10 border-brand-accent/20 text-brand-accent3",
  auto: "bg-brand-accent/10 border-brand-accent/20 text-brand-accent3",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-3">Work That Speaks</h2>
          <p className="text-slate-600 dark:text-slate-400 text-[1.05rem] max-w-lg">A selection showcasing AI systems, SaaS platforms, and developer tools.</p>
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
              className="glass border hover:border-orange-500/40 rounded-2xl overflow-hidden transition-shadow hover:shadow-[0_20px_50px_rgba(255,157,102,0.15)] relative group"
            >
              {p.featured && (
                <span className="absolute top-4 right-4 z-10 bg-gradient-to-r from-brand-primary to-brand-accent text-white text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
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
                <p className="text-slate-600 dark:text-slate-400 text-[0.875rem] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techStack.map((tech) => (
                    <span key={tech} className="text-[0.6rem] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 dark:bg-white/[0.06] dark:border-white/10 dark:text-slate-400 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                  >
                    Read Case Study
                  </Link>
                  <div className="flex gap-3">
                    {p.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                      >
                        {link.label === "GitHub" ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
