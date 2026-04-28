import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RootPage() {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <title>Gaming RGB Software</title>
        <meta httpEquiv="refresh" content="2;url=./en" />
      </head>
      <body className="bg-bg-base text-fg-primary font-sans antialiased">
        <main className="flex min-h-screen items-center justify-center px-6 py-16">
          <section className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-fg-muted">Gaming RGB Software</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg-primary">
              Choose your language
            </h1>
            <p className="mt-4 text-base leading-7 text-fg-secondary">
              The English site opens automatically in 2 seconds. You can also choose manually below.
            </p>
            <p className="mt-2 text-sm leading-6 text-fg-muted">
              静态托管不会执行语言中间件，因此这里保留手动入口。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/en" className={buttonVariants({ size: "lg" })}>
                Enter English Site
              </Link>
              <Link
                href="/zh"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "border border-white/10",
                )}
              >
                进入中文站点
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}