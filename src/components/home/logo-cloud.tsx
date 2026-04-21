import { useTranslations } from "next-intl";
import { brandNames } from "@/lib/constants";

export function LogoCloud() {
  const t = useTranslations("logoCloud");

  return (
    <section className="border-y border-white/5 py-12">
      <div className="content-shell">
        <p className="text-center text-sm text-fg-muted mb-8">
          {t("title")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brandNames.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-fg-muted/60 transition-colors hover:text-fg-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
