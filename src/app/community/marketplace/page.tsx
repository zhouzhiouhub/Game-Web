import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Browse and download community-created lighting effects and plugins.",
};

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        title="Marketplace"
        description="Browse community-created effects and plugins."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Marketplace coming soon.</p>
        </div>
      </section>
    </>
  );
}
