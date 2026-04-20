import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Game Sync",
  description: "Real-time game event triggers. Your lights react to in-game action.",
};

export default function GameSyncPage() {
  return (
    <>
      <PageHeader title="Game Sync" description="Your lights react to in-game action in real time." />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Coming soon.</p>
        </div>
      </section>
    </>
  );
}
