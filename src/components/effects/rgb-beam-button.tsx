"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface RGBBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function RGBBeamButton({ children, className, ...props }: RGBBeamButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant: "primary", size: "lg" }),
        "group relative overflow-hidden",
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
