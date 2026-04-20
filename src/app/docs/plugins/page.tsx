import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plugin Development",
  description: "Build and publish your own plugins for Gaming RGB Software.",
};

export default function PluginsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Plugin Development</h1>
      <p className="mt-4 text-fg-secondary">Plugin development guide coming soon.</p>
    </article>
  );
}
