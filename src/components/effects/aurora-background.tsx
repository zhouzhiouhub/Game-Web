"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora gradient layer */}
      {!reduced && (
        <div
          className="absolute inset-0 animate-aurora rgb-aurora opacity-60"
          aria-hidden="true"
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
