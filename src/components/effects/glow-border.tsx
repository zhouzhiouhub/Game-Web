"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cardVariants } from "@/components/ui/card";

interface GlowBorderProps {
  children: React.ReactNode;
  color?: "r" | "g" | "b";
  className?: string;
}

const glowMap = {
  r: "hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:border-rgb-r/30",
  g: "hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:border-rgb-g/30",
  b: "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-rgb-b/30",
};

export function GlowBorder({ children, color = "r", className }: GlowBorderProps) {
  const reduced = useReducedMotion();

  return (
    <div
      className={cn(
        cardVariants({ variant: "surface", padding: "md" }),
        "transition-all",
        !reduced && glowMap[color],
        className
      )}
    >
      {children}
    </div>
  );
}
