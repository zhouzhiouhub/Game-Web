import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type FeatureCard = {
  key: "editor" | "gameSync" | "cloudSync" | "plugin";
  href: string;
  bullets: string[];
};

type FeaturesPageContent = {
  featuresPage: {
    content: {
      sectionLabel: string;
      cta: string;
      summaryTitle: string;
      summaryDescription: string;
      cards: FeatureCard[];
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "featuresPage" });
  return createPageMetadata({
    locale,
    pathname: "/features",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as FeaturesPageContent;

  return <FeaturesContent messages={messages} />;
}

function FeaturesContent({ messages }: { messages: FeaturesPageContent }) {
  const t = useTranslations("featuresPage");
  const bento = useTranslations("bento");
  const content = messages.featuresPage.content;

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="content-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {content.cards.map((feature) => (
              <article
                key={feature.key}
                className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-6 sm:p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fg-muted">
                  {content.sectionLabel}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                  {bento(`features.${feature.key}.title`)}
                </h2>
                <p className="mt-3 text-fg-secondary">
                  {bento(`features.${feature.key}.description`)}
                </p>
                <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-muted">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <Link
                  href={feature.href}
                  className="mt-8 inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:border-white/20 hover:text-fg-primary"
                >
                  {content.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">{content.summaryTitle}</h2>
            <p className="mt-4 content-limit-3xl text-fg-secondary">
              {content.summaryDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
