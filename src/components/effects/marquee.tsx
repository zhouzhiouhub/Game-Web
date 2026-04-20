"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 30 }: MarqueeProps) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex gap-8"
        style={{
          animation: reduced ? "none" : `marquee ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
