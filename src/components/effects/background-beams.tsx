"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[200%] w-[1px] rgb-beam opacity-20 animate-beam" />
    </div>
  );
}
