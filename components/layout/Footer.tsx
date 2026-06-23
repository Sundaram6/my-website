export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 py-12 text-center">
      <p className="text-slate-500 text-sm">
        Designed &amp; built by{" "}
        <span className="gradient-text font-semibold">Sundaram Sharma</span> ·
        Full Stack AI Developer · © {new Date().getFullYear()}
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Made with precision, caffeine, and a lot of console.log() 🚀
      </p>
    </footer>
  );
}