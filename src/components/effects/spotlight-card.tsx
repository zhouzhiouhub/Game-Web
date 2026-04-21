"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMouseSpotlight } from "@/hooks/use-mouse-spotlight";
import { cardVariants } from "@/components/ui/card";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const reduced = useReducedMotion();
  const { ref, handleMouseMove } = useMouseSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        cardVariants({ variant: "interactive", padding: "md" }),
        "group relative overflow-hidden",
        className
      )}
    >
      {!reduced && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.1), transparent 40%)",
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
