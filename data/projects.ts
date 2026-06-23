export type Project = {
  icon: string;
  gradClass: string;
  featured: boolean;
  tags: { label: string; color: "ai" | "saas" | "web" | "auto" }[];
  title: string;
  desc: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    icon: "🤖",
    gradClass: "from-[#0f2443] to-[#1a0f35]",
    featured: true,
    tags: [{ label: "AI", color: "ai" }, { label: "SaaS", color: "saas" }],
    title: "NeuralDesk — AI Customer Support",
    desc: "Autonomous customer support platform using GPT-4 + RAG. Handles 80% of tickets without human intervention. Deployed at 3 enterprise clients.",
    links: [{ label: "Live Demo", href: "/#projects" }, { label: "Case Study", href: "/#projects" }],
  },
  {
    icon: "📊",
    gradClass: "from-[#0a1f1a] to-[#0f1f35]",
    featured: false,
    tags: [{ label: "AI", color: "ai" }, { label: "Automation", color: "auto" }],
    title: "DataFlow — ETL Automation Suite",
    desc: "No-code data pipeline builder with AI-assisted schema mapping. Processes 10M+ records daily for mid-market SaaS companies.",
    links: [{ label: "GitHub", href: "https://github.com/Sundaram6" }, { label: "Docs", href: "/#projects" }],
  },
  {
    icon: "🎯",
    gradClass: "from-[#1a0f0f] to-[#0f1a35]",
    featured: true,
    tags: [{ label: "SaaS", color: "saas" }, { label: "Web", color: "web" }],
    title: "LaunchPad — SaaS Boilerplate",
    desc: "Production-ready Next.js SaaS starter with auth, billing, teams, and AI features baked in. Used by 500+ developers worldwide.",
    links: [{ label: "Live Demo", href: "/#projects" }, { label: "GitHub", href: "https://github.com/Sundaram6" }],
  },
  {
    icon: "🔍",
    gradClass: "from-[#0f0f35] to-[#1a0f2a]",
    featured: false,
    tags: [{ label: "AI", color: "ai" }, { label: "API", color: "auto" }],
    title: "SemanticSearch — Vector Search API",
    desc: "High-performance semantic search API built on Pinecone + OpenAI embeddings. Sub-100ms queries. Available as open-source.",
    links: [{ label: "GitHub", href: "https://github.com/Sundaram6" }, { label: "Docs", href: "/#projects" }],
  },
];
