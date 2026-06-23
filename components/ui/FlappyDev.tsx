"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FlappyDev({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<"start" | "playing" | "gameover">("start");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Physics & Game Constants
    const GRAVITY = 0.5;
    const JUMP = -8.5;
    const PIPE_SPEED = 4;
    const PIPE_WIDTH = 80;
    const GAP_SIZE = 170;
    
    let bird = { x: 150, y: 300, velocity: gameState === "playing" ? JUMP : 0, size: 30 };
    let pipes: { x: number, topHeight: number, label: string, color: string, passed: boolean }[] = [];
    let currentScore = 0;
    let frame = 0;

    const AI_ENEMIES = [
      { label: "GPT-5", color: "#10a37f" },
      { label: "Claude 3.5", color: "#d97757" },
      { label: "Gemini", color: "#1a73e8" },
      { label: "Llama 3", color: "#4285F4" }
    ];

    function spawnPipe() {
      const minHeight = 50;
      const maxHeight = canvas!.height - GAP_SIZE - minHeight;
      const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      const enemy = AI_ENEMIES[Math.floor(Math.random() * AI_ENEMIES.length)];
      
      pipes.push({
        x: canvas!.width,
        topHeight,
        label: enemy.label,
        color: enemy.color,
        passed: false
      });
    }

    function reset() {
      bird = { x: 150, y: 300, velocity: 0, size: 30 };
      pipes = [];
      currentScore = 0;
      setScore(0);
      frame = 0;
    }

    let lastTime = 0;

    function draw(time: number) {
      if (!ctx || !canvas) return;

      if (time - lastTime < 16) {
        if (gameState === "playing" || gameState === "start") {
          animationFrameId = requestAnimationFrame(draw);
        }
        return;
      }
      lastTime = time;

      // Clear
      ctx.fillStyle = "#0f172a"; // dark slate background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid (Cyber aesthetic)
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }

      if (gameState === "playing") {
        bird.velocity += GRAVITY;
        bird.y += bird.velocity;

        // Spawn pipes
        if (frame % 100 === 0) spawnPipe();

        // Update and draw pipes
        for (let i = pipes.length - 1; i >= 0; i--) {
          const p = pipes[i];
          p.x -= PIPE_SPEED;

          // Draw Top Pipe
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, 0, PIPE_WIDTH, p.topHeight);
          // Draw Bottom Pipe
          ctx.fillRect(p.x, p.topHeight + GAP_SIZE, PIPE_WIDTH, canvas.height - p.topHeight - GAP_SIZE);
          
          // Draw Label
          ctx.fillStyle = "white";
          ctx.font = "bold 14px monospace";
          ctx.textAlign = "center";
          ctx.fillText(p.label, p.x + PIPE_WIDTH/2, p.topHeight - 10);
          ctx.fillText(p.label, p.x + PIPE_WIDTH/2, p.topHeight + GAP_SIZE + 20);

          // Collision Detection
          const birdBox = { left: bird.x - bird.size/2, right: bird.x + bird.size/2, top: bird.y - bird.size/2, bottom: bird.y + bird.size/2 };
          const topPipeBox = { left: p.x, right: p.x + PIPE_WIDTH, top: 0, bottom: p.topHeight };
          const bottomPipeBox = { left: p.x, right: p.x + PIPE_WIDTH, top: p.topHeight + GAP_SIZE, bottom: canvas.height };

          if (
            (birdBox.right > topPipeBox.left && birdBox.left < topPipeBox.right && birdBox.top < topPipeBox.bottom) ||
            (birdBox.right > bottomPipeBox.left && birdBox.left < bottomPipeBox.right && birdBox.bottom > bottomPipeBox.top) ||
            bird.y > canvas.height || bird.y < 0
          ) {
            setGameState("gameover");
          }

          // Score
          if (p.x + PIPE_WIDTH < bird.x && !p.passed) {
            p.passed = true;
            currentScore++;
            setScore(currentScore);
          }

          // Remove offscreen pipes
          if (p.x + PIPE_WIDTH < 0) {
            pipes.splice(i, 1);
          }
        }
        frame++;
      } else {
        // Draw static pipes if start or gameover
        for (const p of pipes) {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, 0, PIPE_WIDTH, p.topHeight);
          ctx.fillRect(p.x, p.topHeight + GAP_SIZE, PIPE_WIDTH, canvas.height - p.topHeight - GAP_SIZE);
        }
      }

      // Draw Bird
      ctx.font = `${bird.size * 1.5}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("👨‍💻", bird.x, bird.y);

      if (gameState === "playing" || gameState === "start") {
        animationFrameId = requestAnimationFrame(draw);
      }
    }

    draw(performance.now());

    const handleInput = (e: KeyboardEvent | MouseEvent | TouchEvent) => {
      if (e.type === "keydown" && (e as KeyboardEvent).code !== "Space") return;
      if (e.type === "keydown") e.preventDefault(); // prevent scrolling
      
      setGameState((prev) => {
        if (prev === "start") {
          reset();
          return "playing";
        } else if (prev === "playing") {
          bird.velocity = JUMP;
          return "playing";
        } else if (prev === "gameover") {
          reset();
          return "playing";
        }
        return prev;
      });
    };

    window.addEventListener("keydown", handleInput);
    window.addEventListener("mousedown", handleInput);
    window.addEventListener("touchstart", handleInput, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleInput);
      window.removeEventListener("mousedown", handleInput);
      window.removeEventListener("touchstart", handleInput);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameState]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      >
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-6 right-8 z-[110] text-white/50 hover:text-white transition-colors p-2"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            className="w-full h-full cursor-pointer"
          />

          {gameState === "start" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 pointer-events-none">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg text-center">FLAPPY DEV</h2>
              <p className="text-xl text-slate-300 font-mono mb-8 text-center">Dodge the AI Models!</p>
              <p className="text-brand-primary font-bold animate-pulse text-center">Press SPACE or CLICK to start</p>
            </div>
          )}

          {gameState === "gameover" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 backdrop-blur-sm pointer-events-none">
              <h2 className="text-5xl font-black text-white mb-2 tracking-tight drop-shadow-lg text-center">REPLACED BY AI</h2>
              <p className="text-2xl text-slate-200 mb-8 font-mono text-center">Score: {score}</p>
              <p className="text-white font-bold animate-pulse text-center">Press SPACE or CLICK to restart</p>
            </div>
          )}

          {gameState === "playing" && (
            <div className="absolute top-6 right-8 pointer-events-none text-4xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              {score}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
