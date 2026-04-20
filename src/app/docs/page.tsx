import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Get started with Gaming RGB Software. API reference, plugin development, and more.",
};

const docSections = [
  { title: "Getting Started", href: "/docs/getting-started", description: "Installation and first setup guide." },
  { title: "API Reference", href: "/docs/api", description: "Complete API documentation for developers." },
  { title: "Plugin Development", href: "/docs/plugins", description: "Build and publish your own plugins." },
];

export default function DocsPage() {
  return (
    <>
      <PageHeader
        title="Documentation"
        description="Everything you need to get started and go further."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {docSections.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className="group rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-6 transition-colors hover:border-white/10"
              >
                <h3 className="font-semibold group-hover:text-rgb-b transition-colors">
                  {doc.title}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{doc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
