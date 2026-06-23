# Core Developer 3D Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate a 3D WebGL hero section, add technical architecture badges to project cards, and add floating animation to TechStack icons.

**Architecture:** We use `@splinetool/react-spline` to embed a pre-built 3D scene into the Hero section, loaded lazily via `next/dynamic` with `ssr: false`. The existing project data model gets a new `techStack` field for architecture badges. TechStack icons get a subtle framer-motion float. All changes are isolated to individual components.

**Tech Stack:** Next.js 14, React 18, Framer Motion, @splinetool/react-spline, Tailwind CSS

---

### Task 1: Install @splinetool/react-spline

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install the Spline React package**

Run:
```bash
npm install @splinetool/react-spline @splinetool/runtime
```
Expected: `package.json` updated with `@splinetool/react-spline` and `@splinetool/runtime` in dependencies.

- [ ] **Step 2: Verify installation**

Run:
```bash
npx tsc --noEmit
```
Expected: No new type errors.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add @splinetool/react-spline dependency"
```

---

### Task 2: Create the 3D Hero Section

**Files:**
- Create: `components/sections/Hero3D.tsx`
- Modify: `components/sections/Hero.tsx:17-98` (replace section wrapper to include 3D canvas)

- [ ] **Step 1: Create Hero3D.tsx with lazy-loaded Spline scene**

Create `components/sections/Hero3D.tsx`:

```tsx
"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
      <Suspense fallback={null}>
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </Suspense>
    </div>
  );
}
```

Note: The Spline scene URL above is a public free 3D scene. Replace with a custom scene URL if you have one. A gradient abstract shape works well.

- [ ] **Step 2: Update Hero.tsx to integrate the 3D canvas as a background layer**

Replace the existing radial glow div (lines 19-22 of `components/sections/Hero.tsx`) with the Hero3D component import and placement. The Hero3D renders behind the text content via `z-0`, while the text content stays at `z-10`.

In `components/sections/Hero.tsx`, change:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTypingEffect } from "@/hooks/useTypingEffect";
```

to:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Hero3D from "./Hero3D";
```

Then replace the radial glow div:

```tsx
      {/* Radial glow */}
      <div className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(255,157,102,0.12) 0%,rgba(255,179,128,0.06) 40%,transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "pulse 4s ease-in-out infinite" }}
      />
```

with:

```tsx
      {/* 3D Background */}
      <Hero3D />
```

- [ ] **Step 3: Verify compilation**

Run:
```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Hero3D.tsx components/sections/Hero.tsx
git commit -m "feat: add 3D WebGL hero background with Spline"
```

---

### Task 3: Add floating animation to TechStack icons

**Files:**
- Modify: `components/sections/TechStack.tsx:18-31`

- [ ] **Step 1: Add a subtle floating animation to each tech card**

In `components/sections/TechStack.tsx`, update the `motion.div` for each tech card. Change this:

```tsx
              whileHover={{ y: -4 }}
              className="glass border hover:border-orange-500/30 rounded-xl p-5 text-center cursor-default relative overflow-hidden group transition-shadow hover:shadow-[0_12px_35px_rgba(255,157,102,0.2)]"
```

to:

```tsx
              animate={{ y: [0, -5, 0] }}
              transition={{ delay: i * 0.04, duration: 3 + (i % 3) * 0.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass border hover:border-orange-500/30 rounded-xl p-5 text-center cursor-default relative overflow-hidden group transition-shadow hover:shadow-[0_12px_35px_rgba(255,157,102,0.2)]"
```

This gives each card a gentle floating bob with staggered timing, and enhances the hover to include a slight scale.

- [ ] **Step 2: Verify compilation**

Run:
```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/sections/TechStack.tsx
git commit -m "feat: add floating animation to TechStack icons"
```

---

### Task 4: Add architecture badges to project cards

**Files:**
- Modify: `data/projects.ts` (add `techStack` field)
- Modify: `components/sections/Projects.tsx:43-61` (render tech badges)

- [ ] **Step 1: Add techStack field to project data**

In `data/projects.ts`, update the `Project` type and add `techStack` to each project:

Change the type definition:

```ts
export type Project = {
  icon: string;
  gradClass: string;
  featured: boolean;
  tags: { label: string; color: "ai" | "saas" | "web" | "auto" }[];
  title: string;
  desc: string;
  links: { label: string; href: string }[];
};
```

to:

```ts
export type Project = {
  icon: string;
  gradClass: string;
  featured: boolean;
  tags: { label: string; color: "ai" | "saas" | "web" | "auto" }[];
  title: string;
  desc: string;
  techStack: string[];
  links: { label: string; href: string }[];
};
```

Then add `techStack` arrays to each project object:

- NeuralDesk: `techStack: ["GPT-4", "RAG", "Next.js 14", "PostgreSQL", "Redis"]`
- DataFlow: `techStack: ["Python", "Apache Airflow", "BigQuery", "React"]`
- LaunchPad: `techStack: ["Next.js 14", "Stripe", "Prisma", "Tailwind CSS"]`
- SemanticSearch: `techStack: ["Pinecone", "OpenAI", "Node.js", "Docker"]`

- [ ] **Step 2: Render tech badges in project cards**

In `components/sections/Projects.tsx`, after the description paragraph (line 50), add the tech badges section. Change:

```tsx
                <p className="text-slate-400 text-[0.875rem] leading-relaxed mb-5">{p.desc}</p>
                <div className="flex gap-5">
```

to:

```tsx
                <p className="text-slate-400 text-[0.875rem] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techStack.map((tech) => (
                    <span key={tech} className="text-[0.6rem] font-mono font-bold bg-white/[0.04] dark:bg-white/[0.06] border border-white/10 dark:border-white/10 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-5">
```

- [ ] **Step 3: Verify compilation**

Run:
```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add data/projects.ts components/sections/Projects.tsx
git commit -m "feat: add architecture tech badges to project cards"
```

---

### Task 5: Final verification and build

- [ ] **Step 1: Run full TypeScript check**

Run:
```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 2: Run production build**

Run:
```bash
npx next build
```
Expected: All pages compile successfully.

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: core developer 3D portfolio redesign complete"
```
