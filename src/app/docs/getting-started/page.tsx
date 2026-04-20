import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Install and set up Gaming RGB Software in minutes.",
};

export default function GettingStartedPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Getting Started</h1>
      <p className="mt-4 text-fg-secondary">Installation and setup guide coming soon.</p>
    </article>
  );
}
