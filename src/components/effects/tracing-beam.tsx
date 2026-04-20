"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TracingBeamProps {
  className?: string;
}

export function TracingBeam({ className }: TracingBeamProps) {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-full w-1 bg-gradient-to-b from-rgb-r via-rgb-g to-rgb-b opacity-20",
        className
      )}
      aria-hidden="true"
    />
  );
}
