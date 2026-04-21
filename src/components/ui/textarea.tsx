import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldVariants, type FieldVariantProps } from "@/components/ui/field";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    FieldVariantProps {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, fieldSize, invalid, rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          fieldVariants({ fieldSize, invalid }),
          "min-h-32 resize-y py-3",
          className
        )}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";