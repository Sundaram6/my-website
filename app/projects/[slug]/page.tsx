import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className={`w-full py-20 ${project.gradClass}`}>
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="text-6xl mb-4">{project.icon}</div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">{project.desc}</p>
        </div>
      </div>

      {/* Body Content */}
      <div className="container mx-auto px-8 max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Narrative */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.challenge}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technical Approach</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.technicalApproach}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The ROI</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.roi}</p>
          </section>
        </div>

        {/* Right Metadata Sidebar */}
        <div className="space-y-8">
          <div className="glass p-6 rounded-2xl border-l-4 border-l-brand-primary">
            <h3 className="text-sm font-bold uppercase text-slate-400 mb-2">Role</h3>
            <p className="text-slate-900 dark:text-white font-medium">{project.role}</p>
          </div>
          
          <div className="glass p-6 rounded-2xl border-l-4 border-l-brand-accent">
            <h3 className="text-sm font-bold uppercase text-slate-400 mb-2">Timeline</h3>
            <p className="text-slate-900 dark:text-white font-medium">{project.timeline}</p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <h3 className="text-sm font-bold uppercase text-slate-400 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 px-4 rounded-xl font-bold text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
