import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference",
  description: "Complete API documentation for Gaming RGB Software.",
};

export default function APIPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">API Reference</h1>
      <p className="mt-4 text-fg-secondary">API documentation coming soon.</p>
    </article>
  );
}
