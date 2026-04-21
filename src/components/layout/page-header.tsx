import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("pt-32 pb-16", className)}>
      <div className="content-shell text-center">
        <h1 className="text-heading-1 mx-auto max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 mx-auto max-w-2xl text-body-lg text-fg-secondary">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
