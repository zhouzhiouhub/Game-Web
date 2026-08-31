import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { heroImage } from "@/lib/hero-image";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-40 lg:pb-32">
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

        <p className="text-body-sm mt-3 text-fg-secondary sm:mt-4">
          {t("platforms")}
        </p>

        <div className="relative mx-auto mt-10 content-limit-4xl sm:mt-14 lg:mt-16">
          <div className="absolute -inset-4 hidden rounded-2xl rgb-glow opacity-30 blur-3xl sm:block" />
          <picture>
            <source type="image/webp" srcSet={heroImage.srcSet} sizes={heroImage.sizes} />
            <img
              src={heroImage.fallbackSrc}
              alt={t("imageAlt")}
              width={heroImage.width}
              height={heroImage.height}
              sizes={heroImage.sizes}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="relative h-auto w-full rounded-2xl border border-white/10 shadow-2xl"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
