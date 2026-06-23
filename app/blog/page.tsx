import { posts } from "@/data/blog";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10">
      <SectionLabel>All Posts</SectionLabel>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12">Writing</h1>
      
      <div className="flex flex-col gap-8">
        {[...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group block p-6 -mx-6 rounded-2xl hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex gap-2 flex-wrap mb-3 text-sm font-medium text-slate-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-brand-primary2 transition-colors">{post.title}</h2>
            <p className="text-slate-400 leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
