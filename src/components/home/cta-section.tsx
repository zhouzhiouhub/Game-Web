import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background image */}
      <Image
        src="/images/hero/rgb-keyboard-dark.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      {/* RGB gradient bg */}
      <div className="absolute inset-0 rgb-glow opacity-50" />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-fg-secondary">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/download"
            className="rgb-full rounded-xl px-8 py-3.5 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            {t("downloadNow")}
          </Link>
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 px-8 py-3.5 text-base font-medium text-fg-secondary hover:text-fg-primary hover:border-white/20 transition-colors"
          >
            {t("viewGithub")}
          </a>
        </div>
      </div>
    </section>
  );
}
