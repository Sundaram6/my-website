import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}