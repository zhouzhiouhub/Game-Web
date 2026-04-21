import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";

export default function LocalizedNotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="pb-32 pt-32">
      <div className="content-shell">
        <Card className="mx-auto max-w-2xl text-center" variant="elevated" padding="lg">
          <p className="text-caption text-fg-muted">Error</p>
          <h1 className="mt-4 text-6xl font-bold rgb-full bg-clip-text text-transparent">404</h1>
          <p className="mt-6 text-body-lg text-fg-secondary">{t("description")}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="button-primary">
              {t("backHome")}
            </Link>
            <Link href="/contact" className="button-secondary">
              {t("contact")}
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
