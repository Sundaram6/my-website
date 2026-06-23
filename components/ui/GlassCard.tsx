import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        glow && "glow-border",
        className
      )}
    >
      {children}
    </div>
  );
}
