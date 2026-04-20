import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Cloud Sync",
  description: "Your configs everywhere. Seamless sync across all your devices.",
};

export default function CloudSyncPage() {
  return (
    <>
      <PageHeader title="Cloud Sync" description="Your configs everywhere. Seamless sync across all your devices." />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Coming soon.</p>
        </div>
      </section>
    </>
  );
}
