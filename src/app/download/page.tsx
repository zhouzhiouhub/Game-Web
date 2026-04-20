import type { Metadata } from "next";
import Link from "next/link";
import { Download, Apple, Terminal } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Gaming RGB Software for Windows, macOS, and Linux. Free and open source.",
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        title="Download"
        description="Available for Windows, macOS, and Linux. Free and open source."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-lg px-6">
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl rgb-full px-6 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <Download className="h-5 w-5" />
              Download for Windows
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
            >
              <Apple className="h-5 w-5" />
              Download for macOS
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 px-6 py-4 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
            >
              <Terminal className="h-5 w-5" />
              Download for Linux
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-white/5 bg-bg-surface p-6">
            <h3 className="text-sm font-semibold text-fg-primary">System Requirements</h3>
            <ul className="mt-3 space-y-1 text-sm text-fg-muted">
              <li>Windows 10+ / macOS 12+ / Ubuntu 20.04+</li>
              <li>4 GB RAM minimum</li>
              <li>100 MB disk space</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
