import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Aurora background placeholder */}
      <div className="absolute inset-0 rgb-aurora opacity-60" />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {t("line1")}
          <br />
          <span className="rgb-full bg-clip-text text-transparent">
            {t("line2")}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-fg-secondary">
          {t("description")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/download"
            className="rgb-full rounded-xl px-8 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            {t("downloadWindows")}
          </Link>
          <Link
            href="/features"
            className="rounded-xl border border-white/10 px-8 py-3.5 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
          >
            {t("exploreFeatures")}
          </Link>
        </div>

        <p className="mt-4 text-sm text-fg-muted">
          {t("platforms")}
        </p>
      </div>
    </section>
  );
}
