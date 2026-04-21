import type { Metadata } from "next";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { createPageMetadata } from "@/lib/seo/page-metadata";

type PricingPlan = {
  name: string;
  price: string;
  features: string[];
};

type PricingPageMessages = {
  pricingPage: {
    title: string;
    description: string;
    plans: PricingPlan[];
  };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });

  return createPageMetadata({
    locale,
    pathname: "/pricing",
    title: t("links.pricing"),
    description:
      locale === "zh"
        ? "适用于免费核心、订阅增值或分层授权产品的标准定价结构。"
        : "A pricing structure suited to free-core, subscription, or tiered-license products.",
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as PricingPageMessages;

  return <PricingContent messages={messages} />;
}

function PricingContent({ messages }: { messages: PricingPageMessages }) {
  const content = messages.pricingPage;

  return (
    <>
      <PageHeader title={content.title} description={content.description} />
      <section className="pb-32">
        <div className="content-shell grid gap-6 lg:grid-cols-3">
          {content.plans.map((plan) => (
            <Card key={plan.name} as="article" variant="surface" padding="lg">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-3 text-4xl font-bold">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-secondary">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}