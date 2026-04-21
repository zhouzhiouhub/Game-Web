import { cva, type VariantProps } from "class-variance-authority";

export const fieldVariants = cva(
  "w-full border border-white/8 bg-[rgba(24,24,27,0.72)] text-fg-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-fg-muted/80 focus-visible:border-white/16 focus-visible:shadow-[0_0_0_4px_var(--color-focus-ring)]",
  {
    variants: {
      fieldSize: {
        sm: "min-h-[var(--button-height-sm)] rounded-[0.875rem] px-3.5 text-sm",
        md: "min-h-[var(--input-height)] rounded-[0.875rem] px-4 text-sm",
      },
      invalid: {
        true: "border-rgb-r/40 focus-visible:shadow-[0_0_0_4px_rgba(239,68,68,0.24)]",
        false: "",
      },
    },
    defaultVariants: {
      fieldSize: "md",
      invalid: false,
    },
  }
);

export type FieldVariantProps = VariantProps<typeof fieldVariants>;