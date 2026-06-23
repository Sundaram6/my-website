"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = ["about", "stack", "projects", "process", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-navy/85 backdrop-blur-xl border-b border-white/8"
            : "border-b border-transparent"
        }`}
      >
        <Link
          href="#"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          Sundaram Sharma
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l}>
              <Link
                href={`#${l}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-brand-blue to-brand-purple group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md:inline-flex bg-gradient-to-r from-brand-blue to-brand-purple text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-orange-500/20"
        >
          Hire Me
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-5.5 h-0.5 bg-white rounded-full block" />
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
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-2xl text-white"
            >
              ✕
            </button>
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l}`}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-white hover:gradient-text transition-colors"
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
