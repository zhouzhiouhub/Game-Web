import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { RgbArtwork } from "@/components/shared/rgb-artwork";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden py-24">
      <RgbArtwork variant="cta" className="absolute inset-0 opacity-50" />
      {/* RGB gradient bg */}
      <div className="absolute inset-0 rgb-glow opacity-50" />

      <div className="content-shell relative text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-fg-secondary">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/download"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {t("downloadNow")}
          </Link>
          {siteConfig.githubRepo ? (
            <a
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              {t("viewGithub")}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
