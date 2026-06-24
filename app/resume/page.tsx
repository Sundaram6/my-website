"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20 px-6 font-sans">
      {/* Resume Document Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[800px] mx-auto bg-white sm:shadow-2xl sm:border border-slate-200 sm:p-12 print:shadow-none print:border-none print:p-0"
      >
        {/* Header */}
        <header className="border-b border-slate-200 pb-6 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-slate-900">Sundaram Sharma</h1>
          <h2 className="text-xl font-medium text-brand-primary mb-4">Senior AI / Full Stack Engineer</h2>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <a href="mailto:sundramsharma6@gmail.com" className="flex items-center gap-1 hover:text-brand-primary transition-colors">
              <span aria-hidden="true">✉</span> sundramsharma6@gmail.com
            </a>
            <a href="https://github.com/Sundaram6" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-brand-primary transition-colors">
              <span aria-hidden="true">🐙</span> github.com/Sundaram6
            </a>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">📍</span> Remote / Global
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-brand-primary"></span>
            Summary
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Highly qualified Full Stack Engineer with 5+ years of experience architecting scalable web platforms and 2+ years specializing in applied AI solutions. Proven track record of leading complex technical initiatives from zero-to-one, optimizing system performance, and integrating advanced Large Language Models (LLMs) to automate critical business workflows. Passionate about writing clean, maintainable TypeScript and building highly performant applications using Next.js.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-brand-primary"></span>
            Professional Experience
          </h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold text-slate-900">Lead AI Integration Engineer</h4>
              <span className="text-sm font-semibold text-slate-500">2024 — Present</span>
            </div>
            <div className="text-brand-primary font-medium mb-3">TechNova Solutions</div>
            <ul className="list-disc list-outside ml-4 text-slate-700 space-y-2 text-[0.95rem]">
              <li>Architected and deployed a multi-agent LLM reasoning pipeline using LangChain and OpenAI, automating complex customer support triaging and reducing response times by 85%.</li>
              <li>Engineered a scalable Retrieval-Augmented Generation (RAG) system with Pinecone and Postgres, supporting over 10M vectors for semantic document search.</li>
              <li>Led a team of 4 engineers in migrating a legacy monolithic application to a highly optimized Next.js 14 App Router architecture, improving Core Web Vitals by 40%.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold text-slate-900">Senior Full Stack Developer</h4>
              <span className="text-sm font-semibold text-slate-500">2021 — 2024</span>
            </div>
            <div className="text-brand-primary font-medium mb-3">Quantum Logistics</div>
            <ul className="list-disc list-outside ml-4 text-slate-700 space-y-2 text-[0.95rem]">
              <li>Designed and built a real-time logistics dashboard using React, WebSockets, and Node.js, tracking over 50,000 active shipments globally.</li>
              <li>Implemented a robust payment processing and subscription billing system using Stripe and Prisma ORM, processing $2M+ in monthly transaction volume.</li>
              <li>Optimized complex PostgreSQL queries and introduced Redis caching, reducing average API endpoint latency from 1.2s to 150ms.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="text-lg font-bold text-slate-900">Full Stack Engineer</h4>
              <span className="text-sm font-semibold text-slate-500">2019 — 2021</span>
            </div>
            <div className="text-brand-primary font-medium mb-3">StartupX</div>
            <ul className="list-disc list-outside ml-4 text-slate-700 space-y-2 text-[0.95rem]">
              <li>Developed and maintained multiple B2B SaaS frontend applications using React and Redux.</li>
              <li>Built RESTful microservices in Node.js and Express, containerized with Docker, and deployed via AWS ECS.</li>
              <li>Set up CI/CD pipelines using GitHub Actions to automate testing and zero-downtime deployments.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-5 h-[2px] bg-brand-primary"></span>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[0.95rem]">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Frontend Engineering</span>
              <span className="text-slate-700">Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, Redux</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Backend & Database</span>
              <span className="text-slate-700">Node.js, Python, PostgreSQL, Redis, Prisma, GraphQL, REST APIs</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">AI & Machine Learning</span>
              <span className="text-slate-700">OpenAI API, Prompt Engineering, LangChain, RAG Systems, Vector Databases</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Cloud & DevOps</span>
              <span className="text-slate-700">AWS (EC2, S3, ECS), Vercel, Docker, GitHub Actions, CI/CD</span>
            </div>
          </div>
        </section>

      </motion.div>
    </div>
  );
}
