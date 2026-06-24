"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { posts } from "@/data/blog";

export default function BlogPreview() {
  return (
    <section id="blog" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionLabel>Writing</SectionLabel>
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-3">Latest Thoughts</h2>
              <p className="text-slate-600 dark:text-slate-400 text-[1.05rem] max-w-lg">Musings on AI, engineering, and building products.</p>
            </div>
            <Link href="/blog" className="text-brand-primary2 font-semibold hover:text-brand-primary3 transition-colors flex items-center gap-1">
              View all posts <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass border hover:border-orange-500/40 rounded-2xl overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(255,157,102,0.15)] flex flex-col"
            >
              <Link href={`/blog/${post.slug}`} className="p-6 flex flex-col h-full">
                <div className="flex gap-2 flex-wrap mb-4 text-[0.75rem] font-medium text-slate-700 dark:text-slate-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-[1.1rem] font-bold mb-3 tracking-tight group-hover:text-brand-primary2 transition-colors">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-[0.875rem] leading-relaxed mb-6 flex-grow">{post.excerpt}</p>
                <div className="text-[0.85rem] font-semibold text-brand-primary2 flex items-center gap-1 mt-auto">
                  Read Article <span aria-hidden="true">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
