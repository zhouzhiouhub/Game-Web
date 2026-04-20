"use client";

import { cn } from "@/lib/utils";

interface RGBBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function RGBBeamButton({ children, className, ...props }: RGBBeamButtonProps) {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-xl px-8 py-3.5 font-semibold text-white",
        "rgb-full hover:opacity-90 transition-opacity",
        className
      )}
      {...props}
    >
      {/* Beam sweep overlay */}
      <span className="absolute inset-0 rgb-beam opacity-0 group-hover:opacity-100 transition-opacity animate-beam" aria-hidden="true" />
      <span className="relative">{children}</span>
    </button>
  );
}
