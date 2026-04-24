import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const cardVariants = cva("rounded-[var(--card-radius)] border", {
  variants: {
    variant: {
      surface: "surface-card",
      interactive: "surface-card interactive-card hover:interactive-card-hover",
      elevated: "surface-card-elevated",
    },
    padding: {
      none: "p-0",
      sm: "p-5",
      md: "p-6",
      lg: "p-6 sm:p-8",
    },
  },
  defaultVariants: {
    variant: "surface",
    padding: "md",
  },
});

type CardElement = "div" | "article" | "section" | "li" | "aside";

export interface CardProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {
  as?: CardElement;
}

export function Card({
  as,
  className,
  variant,
  padding,
  ...props
}: CardProps) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  );
}