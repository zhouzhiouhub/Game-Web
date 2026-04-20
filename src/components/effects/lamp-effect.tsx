"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface LampEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function LampEffect({ children, className }: LampEffectProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!reduced && (
        <div
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[600px] rounded-full bg-rgb-g/10 blur-[100px]"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
