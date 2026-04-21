import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const inputVariants = cva(
  "input-shell w-full disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      inputSize: {
        sm: "min-h-[var(--button-height-sm)] px-3.5 text-sm",
        md: "px-4 text-sm",
      },
      invalid: {
        true: "border-rgb-r/40 focus-visible:shadow-[0_0_0_4px_rgba(239,68,68,0.24)]",
        false: "",
      },
    },
    defaultVariants: {
      inputSize: "md",
      invalid: false,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ inputSize, invalid }), className)}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";