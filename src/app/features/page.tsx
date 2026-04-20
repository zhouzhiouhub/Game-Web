import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the powerful features of Gaming RGB Software — visual effect editor, game sync, cloud sync, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Features"
        description="Everything you need to control your RGB lighting."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">
            Feature details coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
