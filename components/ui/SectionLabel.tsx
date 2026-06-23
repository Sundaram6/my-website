import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-blue2 mb-4">
      <span className="w-6 h-px bg-brand-blue" />
      {children}
    </div>
  );
}