import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("pt-32 pb-16", className)}>
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-fg-secondary max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
