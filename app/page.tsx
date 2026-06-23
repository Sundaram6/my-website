"use client";

import { SplashScreen } from "@/components/ui/SplashScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import WhyMe from "@/components/sections/WhyMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SplashScreen />
      
      {/* Fixed grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="gradient-line" />
        <About />
        <div className="gradient-line" />
        <TechStack />
        <div className="gradient-line" />
        <Projects />
        <div className="gradient-line" />
        <Process />
        <div className="gradient-line" />
        <WhyMe />
        <div className="gradient-line" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}