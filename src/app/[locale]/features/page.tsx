import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
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
              <Card
                key={feature.key}
                as="article"
                variant="surface"
                padding="lg"
              >
                <Badge className="w-fit" variant="subtle">
                  {content.sectionLabel}
                </Badge>
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
                  className={`${buttonVariants({ variant: "secondary", size: "sm" })} mt-8`}
                >
                  {content.cta}
                </Link>
              </Card>
            ))}
          </div>

          <Card className="mt-10" variant="surface" padding="lg">
            <h2 className="text-2xl font-semibold">{content.summaryTitle}</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              {content.summaryDescription}
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
