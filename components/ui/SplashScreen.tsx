"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const matrixChars = "0123456789ABCDEF!@#$%^&*()_+-=[]{}|;':,.<>?/`~";
function getRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
  }
  return result;
}

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Populate initial lines
    const initial = Array.from({ length: 30 }, () => `[SYS] ${getRandomString(40)}`);
    setLines(initial);

    // Total animation duration: 2.0 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const newLines = [...prev, `[SYS] ${getRandomString(40)}`, `[OK] ${getRandomString(20)}`];
        return newLines.slice(-40); // keep last 40 lines
      });
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer backdrop-blur-sm bg-slate-50/60 dark:bg-black/60"
      onClick={() => setIsVisible(false)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl aspect-[4/3] sm:aspect-video mx-4"
      >
        {/* Monitor Bezel */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-8 border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 60px rgba(0,255,65,0.15), inset 0 0 20px rgba(0,0,0,0.8), inset -8px -8px 0 rgba(0,0,0,0.5), inset 8px 8px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Top bezel detail */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-700 to-gray-800 border-b border-gray-600 flex items-center justify-center">
            <div className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400">
              TERMINAL // MAIN_OVERRIDE
            </div>
          </div>

          {/* Screen area */}
          <div
            className="absolute top-10 left-4 right-4 bottom-16 bg-black rounded overflow-hidden border-2 border-gray-900"
            style={{
              boxShadow: "inset 0 0 30px rgba(0,0,0,1), 0 0 40px rgba(0,255,65,0.1)",
            }}
          >
            {/* CRT Scanlines */}
            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(0,255,65,0.3) 25%, rgba(0,255,65,0.3) 26%, transparent 27%, transparent 74%, rgba(0,255,65,0.3) 75%, rgba(0,255,65,0.3) 76%, transparent 77%, transparent)",
                backgroundSize: "100% 4px",
              }}
            />

            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-radial from-[#00ff41]/20 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

            {/* Matrix Terminal Content */}
            <div 
              className="relative z-0 p-4 font-mono text-[0.55rem] sm:text-xs leading-tight text-[#00ff41] opacity-70 h-full overflow-hidden break-all" 
              ref={scrollRef}
            >
              {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">{line}</div>
              ))}
            </div>

            {/* Foreground Loading Sequence */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <div className="bg-black/90 border border-[#00ff41]/40 p-6 sm:p-8 rounded shadow-[0_0_30px_rgba(0,255,65,0.2)] backdrop-blur-md">
                <div className="space-y-4 font-mono text-sm sm:text-base">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#00ff41]"
                  >
                    <span className="text-white opacity-50">&gt;</span> Accessing mainframe...
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#00ff41]"
                  >
                    <span className="text-white opacity-50">&gt;</span> Bypassing security...
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-[#00ff41]"
                  >
                    <span className="text-white opacity-50">&gt;</span> Compiling assets...
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-white font-bold"
                  >
                    <span className="text-[#00ff41] mr-2">✔</span> SYSTEM READY
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-4"
                  >
                    <span className="w-2.5 h-5 bg-[#00ff41] inline-block animate-pulse shadow-[0_0_8px_#00ff41]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bezel controls */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-600 flex items-center justify-center gap-12 px-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
              />
              <div className="text-[0.65rem] text-gray-500 font-bold tracking-widest">PWR</div>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2, 0.8, 0.2, 0.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-3 h-3 bg-[#00ff41] rounded-full shadow-[0_0_10px_rgba(0,255,65,0.8)]"
              />
              <div className="text-[0.65rem] text-gray-500 font-bold tracking-widest">HDD</div>
            </div>
          </div>
        </div>

        {/* Monitor base */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-800 rounded-b-lg shadow-xl" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-4 bg-gradient-to-b from-gray-600 to-gray-800 border-4 border-gray-900 rounded-b-lg shadow-2xl" />
      </motion.div>
    </motion.div>
  );
}
