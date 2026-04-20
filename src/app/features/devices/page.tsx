import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Device Support",
  description: "500+ devices supported. Find your hardware in our compatibility database.",
};

export default function DevicesFeaturePage() {
  return (
    <>
      <PageHeader title="Device Support" description="500+ devices. One software." />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Coming soon.</p>
        </div>
      </section>
    </>
  );
}
