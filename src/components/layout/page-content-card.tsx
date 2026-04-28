import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PageContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContentCard({ children, className }: PageContentCardProps) {
  return (
    <section className="pb-32">
      <div className="content-shell">
        <Card
          as="article"
          variant="elevated"
          padding="lg"
          className={cn("mx-auto content-limit-4xl", className)}
        >
          {children}
        </Card>
      </div>
    </section>
  );
}

export const insetPanelClass =
  "rounded-lg border border-white/10 bg-white/[0.025] p-4 sm:p-5";
