"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

const socials = [
  { icon: "📧", label: "alex@example.com",              href: "mailto:alex@example.com" },
  { icon: "🐙", label: "github.com/alexcarter",         href: "https://github.com" },
  { icon: "💼", label: "linkedin.com/in/alexcarter",    href: "https://linkedin.com" },
  { icon: "✖",  label: "@alexcarter_dev",               href: "https://twitter.com" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"loading"|"sent">("idle");

  const handleSubmit = () => {
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 1500);
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-10">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">
            Let's Build Something <GradientText>Extraordinary</GradientText>
          </h2>
          <p className="text-slate-400 text-[1.05rem]">Have a project in mind? I'd love to hear about it. Response time: under 24 hours.</p>
          <div className="inline-flex items-center gap-2 mt-5 bg-green-500/10 border border-green-500/25 text-green-400 px-4 py-2 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-[blink_2s_infinite]" />
            Currently accepting new clients
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-10">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">Ready to start?</h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-[0.975rem]">Whether you need a complete product built from scratch, an AI integration, or a performance overhaul — I've got you covered.</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <Link key={s.label} href={s.href} target="_blank"
                  className="flex items-center gap-4 glass border border-white/8 hover:border-orange-500/30 rounded-xl px-5 py-4 text-slate-400 hover:text-white hover:translate-x-1 transition-all group">
                  <span className="w-9 h-9 bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 rounded-lg flex items-center justify-center text-base">{s.icon}</span>
                  <span className="text-[0.875rem] font-medium">{s.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <GlassCard className="p-8" glow>
              {(["Your Name|text|John Smith","Email Address|email|john@company.com"] as string[]).map((f) => {
                const [label, type, ph] = f.split("|");
                return (
                  <div key={label} className="mb-5">
                    <label className="block text-[0.75rem] font-semibold text-slate-400 uppercase tracking-widest mb-2">{label}</label>
                    <input type={type} placeholder={ph}
                      className="w-full bg-white/[0.04] border border-white/8 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(255,157,102,0.1)] rounded-lg px-4 py-3.5 text-[0.9rem] text-white outline-none transition-all placeholder:text-slate-600" />
                  </div>
                );
              })}
              <div className="mb-5">
                <label className="block text-[0.75rem] font-semibold text-slate-400 uppercase tracking-widest mb-2">Project Type</label>
                <select className="w-full bg-[#1a1a1a] border border-white/8 focus:border-brand-blue rounded-lg px-4 py-3.5 text-[0.9rem] text-white outline-none transition-all">
                  {["Select a service…","AI Application","SaaS Product","Web Development","Automation System","Consulting"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-[0.75rem] font-semibold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} placeholder="Describe your project, goals, and timeline…"
                  className="w-full bg-white/[0.04] border border-white/8 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(255,157,102,0.1)] rounded-lg px-4 py-3.5 text-[0.9rem] text-white outline-none transition-all resize-y placeholder:text-slate-600" />
              </div>
              <button
                onClick={handleSubmit}
                disabled={status !== "idle"}
                className={`w-full py-4 rounded-xl font-bold text-[0.95rem] tracking-wide transition-all ${
                  status === "sent"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : "bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,157,102,0.35)]"
                } text-white disabled:cursor-not-allowed`}
              >
                {status === "idle" && "Send Message →"}
                {status === "loading" && "Sending…"}
                {status === "sent" && "✓ Message Sent!"}
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}