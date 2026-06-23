import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AIAssistant } from "@/components/ui/AIAssistant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sundaramsharma.dev"),
  title: "Sundaram Sharma — Full Stack AI Developer",
  description:
    "Full Stack Developer specializing in AI applications, automation systems, SaaS products, and modern web development.",
  openGraph: {
    title: "Sundaram Sharma — Full Stack AI Developer",
    description:
      "Building intelligent systems, scalable SaaS, and beautiful web experiences.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sundaram Sharma — Full Stack AI Developer",
    description: "Building intelligent systems, scalable SaaS, and beautiful web experiences.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-slate-50 text-slate-900 dark:bg-navy dark:text-white antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}