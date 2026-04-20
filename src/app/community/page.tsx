import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Gaming RGB Software community. Discord, marketplace, and more.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title="Community"
        description="Join thousands of RGB enthusiasts."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Community hub coming soon.</p>
        </div>
      </section>
    </>
  );
}
