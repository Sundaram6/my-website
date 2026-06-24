export type Project = {
  slug: string;
  icon: string;
  gradClass: string;
  featured: boolean;
  tags: { label: string; color: "ai" | "saas" | "web" | "auto" }[];
  title: string;
  desc: string;
  challenge: string;
  technicalApproach: string;
  roi: string;
  role: string;
  timeline: string;
  techStack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "ai-saas-platform",
    icon: "🤖",
    gradClass: "from-[#0f2443] to-[#1a0f35]",
    featured: true,
    tags: [{ label: "AI", color: "ai" }, { label: "SaaS", color: "saas" }],
    title: "NeuralDesk — AI Customer Support",
    desc: "Autonomous customer support platform using GPT-4 + RAG. Handles 80% of tickets without human intervention. Deployed at 3 enterprise clients.",
    challenge: "The client needed a scalable way to process natural language queries into structured data without overwhelming their limited database resources.",
    technicalApproach: "Built a microservices architecture using Next.js for the frontend and Python fastAPI for the AI worker queue. Integrated caching via Redis to reduce API costs by 40%.",
    roi: "Increased processing throughput by 3x and enabled the client to onboard 50 new enterprise customers seamlessly.",
    role: "Lead Full Stack Engineer",
    timeline: "3 Months",
    techStack: ["GPT-4", "RAG", "Next.js 14", "PostgreSQL", "Redis"],
    links: [{ label: "Live Demo", href: "/#projects" }, { label: "Case Study", href: "/#projects" }],
  },
  {
    slug: "dataflow-etl-automation",
    icon: "📊",
    gradClass: "from-[#0a1f1a] to-[#0f1f35]",
    featured: false,
    tags: [{ label: "AI", color: "ai" }, { label: "Automation", color: "auto" }],
    title: "DataFlow — ETL Automation Suite",
    desc: "No-code data pipeline builder with AI-assisted schema mapping. Processes 10M+ records daily for mid-market SaaS companies.",
    challenge: "Existing ETL tools were too complex for non-technical users, causing data team bottlenecks.",
    technicalApproach: "Created an intuitive drag-and-drop UI with React and automated the backend pipeline generation using Python and Apache Airflow.",
    roi: "Reduced time to create new data pipelines from 2 weeks to 4 hours.",
    role: "Senior Data Engineer",
    timeline: "4 Months",
    techStack: ["Python", "Apache Airflow", "BigQuery", "React"],
    links: [{ label: "GitHub", href: "https://github.com/Sundaram6" }, { label: "Docs", href: "/#projects" }],
  },
  {
    slug: "launchpad-saas-boilerplate",
    icon: "🎯",
    gradClass: "from-[#1a0f0f] to-[#0f1a35]",
    featured: true,
    tags: [{ label: "SaaS", color: "saas" }, { label: "Web", color: "web" }],
    title: "LaunchPad — SaaS Boilerplate",
    desc: "Production-ready Next.js SaaS starter with auth, billing, teams, and AI features baked in. Used by 500+ developers worldwide.",
    challenge: "Developers were spending weeks setting up the same boilerplate code for authentication, billing, and basic features for every new project.",
    technicalApproach: "Engineered a robust Next.js boilerplate integrating Stripe for payments, Prisma for ORM, and Tailwind for styling. Focused on developer experience and extensibility.",
    roi: "Saved developers over 200 hours per project setup. Generated $10k+ in sales in the first month.",
    role: "Creator & Maintainer",
    timeline: "6 Months",
    techStack: ["Next.js 14", "Stripe", "Prisma", "Tailwind CSS"],
    links: [{ label: "Live Demo", href: "/#projects" }, { label: "GitHub", href: "https://github.com/Sundaram6" }],
  },
  {
    slug: "semantic-search-api",
    icon: "🔍",
    gradClass: "from-[#0f0f35] to-[#1a0f2a]",
    featured: false,
    tags: [{ label: "AI", color: "ai" }, { label: "API", color: "auto" }],
    title: "SemanticSearch — Vector Search API",
    desc: "High-performance semantic search API built on Pinecone + OpenAI embeddings. Sub-100ms queries. Available as open-source.",
    challenge: "Traditional keyword search was failing to return relevant results for complex user queries involving nuance or synonyms.",
    technicalApproach: "Implemented vector embeddings using OpenAI and integrated Pinecone for high-speed similarity search. Optimized API latency with Node.js and Dockerized the service.",
    roi: "Improved search relevance score by 65% and reduced query latency to under 100ms.",
    role: "Backend Engineer",
    timeline: "2 Months",
    techStack: ["Pinecone", "OpenAI", "Node.js", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/Sundaram6" }, { label: "Docs", href: "/#projects" }],
  },
];
