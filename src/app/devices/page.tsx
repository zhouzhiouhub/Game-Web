import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Devices",
  description: "500+ devices supported. Find your hardware in our compatibility database.",
};

export default function DevicesPage() {
  return (
    <>
      <PageHeader
        title="Device Compatibility"
        description="500+ devices. Search and find your hardware."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Device database coming soon.</p>
        </div>
      </section>
    </>
  );
}
