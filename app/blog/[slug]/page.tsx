import { posts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto relative z-10">
      
      <div className="flex gap-2 flex-wrap mb-4 text-sm font-medium text-slate-500">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">{post.title}</h1>
      
      <div className="prose prose-invert prose-brand max-w-none prose-p:leading-relaxed prose-p:text-slate-300 prose-headings:font-bold prose-a:text-brand-primary2">
        <div style={{ whiteSpace: "pre-wrap" }}>{post.content}</div>
      </div>
    </article>
  );
}
