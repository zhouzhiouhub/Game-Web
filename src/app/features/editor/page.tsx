import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Effect Editor",
  description: "Drag-and-drop visual effect editor. Create stunning lighting without coding.",
};

export default function EditorPage() {
  return (
    <>
      <PageHeader
        title="Effect Editor"
        description="Create stunning lighting effects with our visual drag-and-drop editor."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <p className="text-fg-muted text-center">Coming soon.</p>
        </div>
      </section>
    </>
  );
}
