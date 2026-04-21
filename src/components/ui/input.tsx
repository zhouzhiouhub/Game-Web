import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldVariants, type FieldVariantProps } from "@/components/ui/field";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FieldVariantProps {
  inputSize?: FieldVariantProps["fieldSize"];
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(fieldVariants({ fieldSize: inputSize, invalid }), className)}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";