import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/page-header";

const plans = [
  {
    name: "Free Core",
    price: "$0",
    features: [
      "Unified RGB control for core device categories",
      "Profile switching and local presets",
      "Community docs and public plugin support",
    ],
  },
  {
    name: "Pro Sync",
    price: "$6/mo",
    features: [
      "Cloud backup and multi-device sync",
      "Shared team profiles and private packs",
      "Priority compatibility requests",
    ],
  },
  {
    name: "Studio",
    price: "$15/mo",
    features: [
      "Marketplace publishing tools",
      "Advanced automation and API limits",
      "Commercial deployment rights for branded setups",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Pricing | Gaming RGB Software",
  description: "Example pricing page for the Gaming RGB Software website template.",
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHeader
        title={locale === "zh" ? "定价" : "Pricing"}
        description={
          locale === "zh"
            ? "展示免费核心 + 增值订阅的标准官网定价结构。"
            : "A practical pricing layout for free core plus premium subscription products."
        }
      />
      <section className="pb-32">
        <div className="mx-auto grid max-w-[var(--container-max)] gap-6 px-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-3 text-4xl font-bold">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm leading-6 text-fg-secondary">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}