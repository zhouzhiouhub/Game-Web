"use client";

import { cn } from "@/lib/utils";

interface RGBGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RGBGradientText({ children, className }: RGBGradientTextProps) {
  return (
    <span
      className={cn(
        "rgb-full bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]",
        className
      )}
    >
      {children}
    </span>
  );
}
