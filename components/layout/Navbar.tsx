"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FlappyDev } from "@/components/ui/FlappyDev";

const links = ["about", "stack", "projects", "process", "blog", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-navy/85 backdrop-blur-xl border-b border-slate-200 dark:border-white/10"
            : "border-b border-transparent"
        }`}
      >
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm pixel-grid" />
          Sundaram Sharma
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={l === 'blog' ? '/blog' : `/#${l}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors relative group"
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsGameOpen(true)}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors focus:outline-none"
            title="Play Flappy Dev"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
          </button>
          <ThemeToggle />
          <Link
            href="/resume"
            className="text-slate-900 dark:text-white text-sm font-semibold hover:text-brand-primary2 transition-colors px-2"
          >
            Resume
          </Link>
          <Link
            href="/#contact"
            className="bg-gradient-to-r from-brand-primary to-brand-accent text-white text-sm font-bold uppercase px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-orange-500/20"
          >
            HIRE ME
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-5.5 h-0.5 bg-slate-900 dark:bg-white rounded-full block" />
          ))}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-navy/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-2xl text-white"
            >
              ✕
            </button>
            {links.map((l) => (
              <Link
                key={l}
                href={l === 'blog' ? '/blog' : `/#${l}`}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-white hover:gradient-text transition-colors"
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </Link>
            ))}
            <div className="mt-4 flex flex-col items-center gap-4">
              <Link
                href="/resume"
                onClick={() => setMobileOpen(false)}
                className="text-white text-lg font-bold hover:text-brand-primary2 transition-colors"
              >
                Resume
              </Link>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isGameOpen && <FlappyDev onClose={() => setIsGameOpen(false)} />}
    </>
  );
}
