import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-32">
      {/* Aurora background placeholder */}
      <div className="absolute inset-0 rgb-aurora opacity-60" />

      <div className="content-shell relative text-center">
        <h1 className="text-display mx-auto content-limit-5xl">
          {t("line1")}
          <br />
          <span className="rgb-full bg-clip-text text-transparent">
            {t("line2")}
          </span>
        </h1>

        <p className="text-body-lg mx-auto mt-5 content-limit-xl text-fg-secondary sm:mt-6">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
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

        <p className="text-body-sm mt-3 sm:mt-4 text-fg-muted">
          {t("platforms")}
        </p>

        {/* Hero image showcase */}
        <div className="relative mx-auto mt-10 content-limit-4xl sm:mt-14 lg:mt-16">
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
