import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section className={cn("pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16", className)}>
      <div className="content-shell text-center">
        <h1 className="text-heading-1 mx-auto content-limit-4xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-3 content-limit-2xl text-body-lg text-fg-secondary sm:mt-4">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
