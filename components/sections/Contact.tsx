"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

const socials = [
  { icon: "📧", label: "sundramsharma6@gmail.com",          href: "mailto:sundramsharma6@gmail.com" },
  { icon: "🐙", label: "github.com/Sundaram6",                href: "https://github.com/Sundaram6" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"loading"|"sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Client-side Honeypot Check: silently trick the bot
    if (data._honeypot) {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      // Send directly from the client browser to avoid Vercel datacenter IP blocks (Cloudflare captchas)
      const response = await fetch("https://formsubmit.co/ajax/sundramsharma6@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      let result;
      try {
        result = await response.json();
      } catch (err) {
        result = { success: "false", message: "Failed to parse FormSubmit response." };
      }

      if (response.ok && result.success !== "false" && result.success !== false) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("idle");
        // FormSubmit's activation notice or other errors will be surfaced here
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-xl mx-auto mb-10">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">
            Let's Build Something <GradientText>Extraordinary</GradientText>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-[1.05rem]">Have a project in mind? I'd love to hear about it. Response time: under 24 hours.</p>
          <div className="inline-flex items-center gap-2 mt-5 bg-green-500/10 border border-green-500/25 text-green-400 px-4 py-2 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-[blink_2s_infinite]" />
            Currently accepting new clients
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-10">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-6 p-4 glass border border-orange-500/20 rounded-2xl w-fit shadow-[0_4px_20px_rgba(255,157,102,0.1)]">
              <Image src="/sundaram-profile.jpg" width={56} height={56} className="rounded-full border-2 border-brand-primary shadow-[0_0_15px_rgba(255,157,102,0.3)] object-cover" alt="Sundaram Sharma" />
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  Sundaram is Online
                </div>
                <div className="text-[0.75rem] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Typically replies in &lt; 2 hours</div>
              </div>
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">Ready to start?</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-[0.975rem]">Whether you need a complete product built from scratch, an AI integration, or a performance overhaul — I've got you covered.</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <Link key={s.label} href={s.href} target="_blank"
                  className="flex items-center gap-4 glass border hover:border-orange-500/30 rounded-xl px-5 py-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:translate-x-1 transition-all group">
                  <span className="w-9 h-9 bg-gradient-to-br from-brand-primary/15 to-brand-accent/15 rounded-lg flex items-center justify-center text-base">{s.icon}</span>
                  <span className="text-[0.875rem] font-medium">{s.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <GlassCard className="p-8" glow>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {(["Your Name|text|John Smith|name","Email Address|email|john@company.com|email"] as string[]).map((f) => {
                const [label, type, ph, name] = f.split("|");
                return (
                  <div key={label} className="mb-5">
                    <label className="block text-[0.75rem] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-2">{label}</label>
                    <input type={type} placeholder={ph} name={name} required
                      className="w-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(255,157,102,0.1)] rounded-lg px-4 py-3.5 text-[0.9rem] text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-600 dark:text-slate-400 dark:placeholder:text-slate-600" />
                  </div>
                );
              })}
              <div className="mb-5">
                <label className="block text-[0.75rem] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-2">Project Type</label>
                <select name="projectType" className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10 focus:border-brand-primary rounded-lg px-4 py-3.5 text-[0.9rem] text-slate-900 dark:text-white outline-none transition-all">
                  {["Select a service…","AI Application","SaaS Product","Web Development","Automation System","Consulting"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-[0.75rem] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} name="message" required placeholder="Describe your project, goals, and timeline…"
                  className="w-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(255,157,102,0.1)] rounded-lg px-4 py-3.5 text-[0.9rem] text-slate-900 dark:text-white outline-none transition-all resize-y placeholder:text-slate-600 dark:text-slate-400 dark:placeholder:text-slate-600" />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-4 rounded-xl font-bold text-[0.95rem] tracking-wide transition-all ${
                  status === "sent"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                    : "bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,157,102,0.35)]"
                } text-white disabled:cursor-not-allowed`}
              >
                {status === "idle" && "Send Message →"}
                {status === "loading" && "Sending…"}
                {status === "sent" && "✓ Message Sent!"}
              </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}