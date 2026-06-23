"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

const whyItems = [
  { icon: "🚀", title: "Ship Velocity",      desc: "I've shipped 50+ production apps. I know the pitfalls, the safe shortcuts, and how to move fast without breaking things." },
  { icon: "🧠", title: "AI-First Thinking",  desc: "I don't just add AI features — I design products around AI capabilities, creating smarter systems and real competitive moats." },
  { icon: "💼", title: "Business Mindset",   desc: "I think in outcomes, not just outputs. Every technical decision is filtered through user value and business ROI." },
  { icon: "🔮", title: "Full Ownership",     desc: "Design, backend, frontend, DevOps, AI — I can own the entire stack. No coordination overhead, no blame games." },
  { icon: "💬", title: "Clear Communication",desc: "Daily async updates, weekly video calls, instant Slack replies. You'll always know exactly where your project stands." },
  { icon: "⚙️", title: "Production Quality", desc: "Code reviews, tests, documentation, monitoring — not just MVP-quality code but production-grade systems that last." },
];

export default function WhyMe() {
  return (
    <section id="why" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionLabel>Why Work With Me</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-3">The Sundaram Advantage</h2>
          <p className="text-slate-400 text-[1.05rem] max-w-lg">What sets me apart — and why founders and teams keep coming back.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {whyItems.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 0 60px rgba(255,157,102,0.15)" }}
              className="glass border hover:border-indigo-500/30 rounded-2xl p-8 transition-all"
            >
              <div className="text-3xl mb-4">{w.icon}</div>
              <h3 className="text-[1.05rem] font-bold mb-2">{w.title}</h3>
              <p className="text-slate-400 text-[0.875rem] leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24">
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border hover:border-indigo-500/30 rounded-2xl p-8 transition-all"
              >
                <div className="text-4xl text-brand-primary mb-4 leading-none">"</div>
                <p className="text-slate-400 text-[0.9rem] leading-relaxed italic mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center font-bold text-sm">{t.initials}</div>
                  <div>
                    <div className="text-[0.875rem] font-bold">{t.author}</div>
                    <div className="text-[0.75rem] text-slate-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

