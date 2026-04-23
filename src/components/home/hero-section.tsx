import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Aurora background placeholder */}
      <div className="absolute inset-0 rgb-aurora opacity-60" />

      <div className="content-shell relative text-center">
        <h1 className="text-display mx-auto max-w-5xl">
          {t("line1")}
          <br />
          <span className="rgb-full bg-clip-text text-transparent">
            {t("line2")}
          </span>
        </h1>

        <p className="text-body-lg mx-auto mt-6 max-w-xl text-fg-secondary">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/download"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {t("downloadWindows")}
          </Link>
          <Link
            href="/features"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            {t("exploreFeatures")}
          </Link>
        </div>

        <p className="text-body-sm mt-4 text-fg-muted">
          {t("platforms")}
        </p>

        {/* Hero image showcase */}
        <div className="mt-16 relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 rgb-glow opacity-30 blur-3xl rounded-2xl" />
          <Image
            src="/images/hero/gaming-setup-wide.jpg"
            alt="RGB gaming setup"
            width={1200}
            height={675}
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="relative rounded-2xl border border-white/10 shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
