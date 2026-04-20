import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* RGB gradient bg */}
      <div className="absolute inset-0 rgb-glow opacity-50" />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to light up your setup?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-fg-secondary">
          Download now and take control of every light in your room.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/download"
            className="rgb-full rounded-xl px-8 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Download Now
          </Link>
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 px-8 py-3.5 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
