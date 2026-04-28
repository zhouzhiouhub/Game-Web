import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "docs" });
  return createPageMetadata({
    locale,
    pathname: "/docs",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DocsContent />;
}

function DocsContent() {
  const t = useTranslations("docs");

  const docSections = [
    { title: t("sections.gettingStarted.title"), href: "/docs/getting-started", description: t("sections.gettingStarted.description") },
    { title: t("sections.apiReference.title"), href: "/docs/api", description: t("sections.apiReference.description") },
    { title: t("sections.pluginDev.title"), href: "/docs/plugins", description: t("sections.pluginDev.description") },
  ];

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <PageContentCard>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {docSections.map((doc) => (
              <Link
                key={doc.href}
                href={doc.href}
                className={`${insetPanelClass} group transition-colors hover:border-white/20`}
              >
                <h3 className="font-semibold group-hover:text-rgb-b transition-colors">
                  {doc.title}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{doc.description}</p>
              </Link>
            ))}
          </div>
      </PageContentCard>
    </>
  );
}
