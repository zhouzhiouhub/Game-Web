import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest news, tutorials, and updates from Gaming RGB Software.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Latest news, tutorials, and updates."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Blog posts coming soon.</p>
        </div>
      </section>
    </>
  );
}
