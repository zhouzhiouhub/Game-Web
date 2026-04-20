import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-[var(--grid-gap)] md:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}
