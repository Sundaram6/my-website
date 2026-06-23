import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0d0d0d",
          2: "#1a1a1a",
          3: "#2a2a2a",
        },
        brand: {
          blue: "#ff9d66",
          blue2: "#ffb380",
          blue3: "#ffc699",
          purple: "#ff9d66",
          purple2: "#ffb380",
          purple3: "#ffc699",
          cyan: "#ff9d66",
          cyan2: "#ffb380",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #ff9d66 0%, #ffb380 50%, #ffc699 100%)",
        "gradient-brand-text":
          "linear-gradient(135deg, #ffb380 0%, #ffc699 50%, #ff9d66 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,157,102,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,157,102,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        blink: "blink 1.5s infinite",
        "blink-cursor": "blink-cursor 0.7s steps(1) infinite",
        "scroll-line": "scrollLine 1.5s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease both",
        "fade-in-down": "fadeInDown 0.8s ease both",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        "blink-cursor": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        brand: "0 0 60px rgba(255,157,102,0.15)",
        "brand-lg": "0 8px 35px rgba(255,157,102,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;