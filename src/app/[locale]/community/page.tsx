import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "community" });
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CommunityContent />;
}

function CommunityContent() {
  const t = useTranslations("community");
  const channels = [
    {
      title: "Discord",
      description: "Real-time setup help, release feedback and effect sharing.",
      href: siteConfig.discordInvite,
      external: true,
    },
    {
      title: "Marketplace",
      description: "Curated effects, themes and plugins from the community.",
      href: "/community/marketplace",
      external: false,
    },
    {
      title: "GitHub",
      description: "Track issues, submit fixes and review the public roadmap.",
      href: siteConfig.githubRepo,
      external: true,
    },
  ];

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <section className="pb-32">
        <div className="mx-auto max-w-[var(--container-max)] px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {channels.map((channel) =>
              channel.external ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8 transition-colors hover:border-white/10"
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </a>
              ) : (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8 transition-colors hover:border-white/10"
                >
                  <h2 className="text-2xl font-semibold">{channel.title}</h2>
                  <p className="mt-3 text-fg-secondary">{channel.description}</p>
                </Link>
              )
            )}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">What to include on a community hub</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-fg-muted">
                <li>• Clear path to live chat, issue tracking and contribution docs.</li>
                <li>• Highlighted setup galleries or effect showcases.</li>
                <li>• Marketplace or resource destination for reusable assets.</li>
              </ul>
            </article>
            <article className="rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-8">
              <h2 className="text-2xl font-semibold">Template note</h2>
              <p className="mt-4 text-sm leading-6 text-fg-muted">
                This page now works as a reusable community landing page. You can swap the
                invite link, resource cards and contributor path without changing layout.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
