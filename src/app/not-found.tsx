import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-bg-base text-fg-primary font-sans antialiased">
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="surface-card-elevated w-full max-w-2xl p-10 text-center">
            <p className="text-caption text-fg-muted">Error</p>
            <h1 className="mt-4 text-6xl font-bold rgb-full bg-clip-text text-transparent">404</h1>
            <p className="mt-6 text-lg text-fg-secondary">Page not found. The light may have gone out here.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/" className="button-primary">
                Back to Home
              </Link>
              <Link href="/en/contact" className="button-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
