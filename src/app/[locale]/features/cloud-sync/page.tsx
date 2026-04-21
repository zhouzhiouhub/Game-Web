import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type FeaturePageCard = {
  title: string;
  description: string;
};

type FeaturePagesMessages = {
  featurePages: {
    cloudSync: {
      cards: FeaturePageCard[];
    };
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bento" });
  return createPageMetadata({
    locale,
    pathname: "/features/cloud-sync",
    title: t("features.cloudSync.title"),
    description: t("features.cloudSync.description"),
  });
}

export default async function CloudSyncPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as FeaturePagesMessages;

  return <CloudSyncContent messages={messages} />;
}

function CloudSyncContent({ messages }: { messages: FeaturePagesMessages }) {
  const t = useTranslations("bento");
  const cards = messages.featurePages.cloudSync.cards;

  return (
    <>
      <PageHeader
        title={t("features.cloudSync.title")}
        description={t("features.cloudSync.description")}
      />
      <section className="pb-32">
        <div className="content-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {cards.map((card) => (
              <Card key={card.title} as="article" variant="surface" padding="lg">
                <h2 className="text-2xl font-semibold">{card.title}</h2>
                <p className="mt-4 text-fg-secondary">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
