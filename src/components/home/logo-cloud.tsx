import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { brandNames } from "@/lib/constants";

export function LogoCloud() {
  const t = useTranslations("logoCloud");

  return (
    <section className="border-y border-white/5 py-12">
      <div className="content-shell">
        <p className="text-center text-sm text-fg-secondary mb-8">
          {t("title")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brandNames.map((name) => (
            <Link
              key={name}
              href="/devices"
              className="text-lg font-semibold text-fg-muted transition-colors hover:text-fg-primary"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
