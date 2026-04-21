import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";

const featureDetails = [
  {
    key: "editor",
    href: "/features/editor",
    bullets: [
      "Visual timeline with layered effects and reusable presets",
      "Profile-based workflows for gaming, streaming and focus modes",
      "No-code editing path for non-technical users",
    ],
  },
  {
    key: "gameSync",
    href: "/features/game-sync",
    bullets: [
      "Reactive lighting tied to health, cooldowns and match states",
      "Low-latency triggers tuned for desktop immersion",
      "Profiles that can fall back safely when integrations fail",
    ],
  },
  {
    key: "cloudSync",
    href: "/features/cloud-sync",
    bullets: [
      "Sign in once and carry profiles across machines",
      "Restore setup states after OS reinstalls or hardware swaps",
      "Share curated presets with teams and communities",
    ],
  },
  {
    key: "plugin",
    href: "/docs/plugins",
    bullets: [
      "Extend device support without forking the main app",
      "Hook external triggers, APIs and automation workflows",
      "Publish community add-ons through a curated marketplace path",
    ],
  },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "featuresPage" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FeaturesContent />;
}

function FeaturesContent() {
  const t = useTranslations("featuresPage");
  const bento = useTranslations("bento");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {featureDetails.map((feature) => (
              <article
                key={feature.key}
                className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-fg-muted">
                  Product pillar
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
                  Learn more
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
            <h2 className="text-2xl font-semibold">Why this works as a website template</h2>
            <p className="mt-4 max-w-3xl text-fg-secondary">
              The features area now behaves like a real product hub instead of a dead-end
              placeholder. Each section supports top-level storytelling, detail pages and
              downstream conversion into downloads, docs and community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
