"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [showMonitor, setShowMonitor] = useState(true);

  useEffect(() => {
    // Total animation duration: 4.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 4.2 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-40 animate-pulse" />

      {/* CRT Monitor - Centered */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-96 h-full max-h-96"
      >
        {/* Monitor Bezel - Heavy 8-bit style */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-8 border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 60px rgba(255,157,102,0.3), inset 0 0 20px rgba(0,0,0,0.8), inset -8px -8px 0 rgba(0,0,0,0.5), inset 8px 8px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Top bezel detail */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-700 to-gray-800 border-b border-gray-600 flex items-center justify-center">
            <div className="text-sm font-bold tracking-widest text-gray-500">
              CRT MONITOR
            </div>
          </div>

          {/* Screen area */}
          <div
            className="absolute top-10 left-4 right-4 bottom-16 bg-black rounded overflow-hidden border-2 border-gray-900"
            style={{
              boxShadow:
                "inset 0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,157,102,0.2)",
            }}
          >
            {/* CRT Scanlines - horizontal lines */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(255,157,102,0.1) 25%, rgba(255,157,102,0.1) 26%, transparent 27%, transparent 74%, rgba(255,157,102,0.1) 75%, rgba(255,157,102,0.1) 76%, transparent 77%, transparent)",
                backgroundSize: "100% 4px",
              }}
            />

            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent opacity-60" />

            {/* Terminal content */}
            <div className="relative z-10 p-8 font-mono text-base leading-relaxed h-full overflow-hidden">
              {/* Initial prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-orange-400 mb-4"
              >
                <span className="text-green-400">$</span>{" "}
                <span className="text-gray-300">sundaram init</span>
              </motion.div>

              {/* Output lines with animation */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-green-400"
                >
                  <span className="text-orange-400">&gt;</span> Initializing...
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-green-400"
                >
                  <span className="text-cyan-400">✓</span> Loading portfolio
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-green-400"
                >
                  <span className="text-cyan-400">✓</span> Compiling assets
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-green-400"
                >
                  <span className="text-cyan-400">✓</span> Building
                  components
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="text-yellow-400"
                >
                  <span className="text-orange-400">⚡</span> Rendering UI...
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0 }}
                  className="text-lime-400 font-bold"
                >
                  <span className="text-green-400">✔</span> Ready to explore
                </motion.div>

                {/* Blinking cursor */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                  className="mt-4 text-green-400"
                >
                  <span className="text-gray-300">$ </span>
                  <span className="w-2 h-6 bg-green-400 inline-block animate-pulse" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom bezel controls */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-600 flex items-center justify-center gap-12 px-4">
            {/* Power light */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
              />
              <div className="text-xs text-gray-500">POWER</div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
              />
              <div className="text-xs text-gray-500">EXEC</div>
            </div>
          </div>
        </div>

        {/* Monitor stand */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-gradient-to-b from-gray-700 to-gray-900 border-4 border-gray-800 rounded-b-lg shadow-xl" />

        {/* Monitor base */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-4 bg-gradient-to-b from-gray-600 to-gray-800 border-4 border-gray-900 rounded-b-lg shadow-2xl" />
      </motion.div>
    </motion.div>
  );
}
