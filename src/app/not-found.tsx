import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-bg-base text-fg-primary font-sans antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6">
          <h1 className="text-6xl font-bold rgb-full bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-fg-secondary text-lg">
            Page not found. The light may have gone out here.
          </p>
          <Link
            href="/"
            className="rounded-lg bg-fg-primary px-6 py-3 text-bg-base font-medium hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
