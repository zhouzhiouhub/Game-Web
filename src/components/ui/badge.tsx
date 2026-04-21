import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        subtle: "border-white/10 bg-white/4 text-fg-secondary",
        accent: "border-transparent rgb-full text-white shadow-[0_12px_32px_rgba(59,130,246,0.2)]",
        outline: "border-white/12 bg-transparent text-fg-secondary",
      },
      size: {
        sm: "min-h-7 px-3 text-xs uppercase tracking-[0.16em]",
        md: "min-h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "subtle",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

const chipVariants = cva(
  "inline-flex items-center gap-2 rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        neutral: "border-white/10 bg-white/4 text-fg-secondary",
        active: "border-white/16 bg-white/8 text-fg-primary",
      },
      size: {
        sm: "min-h-8 px-3 text-sm",
        md: "min-h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
);

type ChipElement = "button" | "div" | "span";

export interface ChipProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof chipVariants> {
  as?: ChipElement;
}

export function Chip({ as, className, variant, size, ...props }: ChipProps) {
  const Component = as ?? "span";

  return <Component className={cn(chipVariants({ variant, size }), className)} {...props} />;
}