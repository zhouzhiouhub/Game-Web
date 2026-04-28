import type { Metadata } from "next";
import { Mail, MessagesSquare, BriefcaseBusiness, LifeBuoy } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { insetPanelClass, PageContentCard } from "@/components/layout/page-content-card";
import { PageHeader } from "@/components/layout/page-header";
import { createPageMetadata } from "@/lib/seo/page-metadata";
import { siteConfig } from "@/lib/constants";

type ContactCard = {
  key: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
  icon: typeof Mail;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return createPageMetadata({
    locale,
    pathname: "/contact",
    title: t("metadata.title"),
    description: t("metadata.description"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  const cards: ContactCard[] = [
    ...(siteConfig.supportEmail
      ? [
          {
            key: "support-email",
            title: t("cards.supportEmail.title"),
            description: t("cards.supportEmail.description"),
            href: `mailto:${siteConfig.supportEmail}`,
            cta: siteConfig.supportEmail,
            icon: LifeBuoy,
          },
        ]
      : []),
    ...(siteConfig.businessEmail
      ? [
          {
            key: "business-email",
            title: t("cards.businessEmail.title"),
            description: t("cards.businessEmail.description"),
            href: `mailto:${siteConfig.businessEmail}`,
            cta: siteConfig.businessEmail,
            icon: BriefcaseBusiness,
          },
        ]
      : []),
    ...(siteConfig.supportUrl
      ? [
          {
            key: "support-portal",
            title: t("cards.portal.title"),
            description: t("cards.portal.description"),
            href: siteConfig.supportUrl,
            cta: t("cards.portal.cta"),
            external: true,
            icon: Mail,
          },
        ]
      : []),
    ...(siteConfig.discordInvite
      ? [
          {
            key: "discord",
            title: t("cards.discord.title"),
            description: t("cards.discord.description"),
            href: siteConfig.discordInvite,
            cta: t("cards.discord.cta"),
            external: true,
            icon: MessagesSquare,
          },
        ]
      : []),
    ...(siteConfig.githubRepo
      ? [
          {
            key: "issues",
            title: t("cards.issues.title"),
            description: t("cards.issues.description"),
            href: `${siteConfig.githubRepo}/issues`,
            cta: t("cards.issues.cta"),
            external: true,
            icon: Mail,
          },
        ]
      : []),
  ];

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />
      <PageContentCard className="content-limit-5xl">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.9fr)] xl:grid-cols-[1.4fr_0.6fr]">
          <div className="grid gap-4 xl:grid-cols-2">
            {cards.length > 0 ? (
              cards.map((card) => (
                <article key={card.key} className={`${insetPanelClass} transition-colors hover:border-white/20`}>
                  <card.icon className="h-6 w-6 text-fg-primary" />
                  <h2 className="mt-5 text-xl font-semibold sm:text-2xl">{card.title}</h2>
                  <p className="mt-3 text-fg-secondary">{card.description}</p>
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center text-sm font-medium text-fg-primary hover:text-white"
                  >
                    {card.cta}
                  </a>
                </article>
              ))
            ) : (
              <article className={`xl:col-span-2 ${insetPanelClass}`}>
                <h2 className="text-xl font-semibold sm:text-2xl">{t("title")}</h2>
                <p className="mt-4 text-fg-secondary">{t("panel.missingContact")}</p>
              </article>
            )}
          </div>

          <aside className={`${insetPanelClass} md:self-start`}>
            <h2 className="text-xl font-semibold sm:text-2xl">{t("panel.title")}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-fg-secondary">
              <li>{t("panel.items.support")}</li>
              <li>{t("panel.items.business")}</li>
              <li>{t("panel.items.response")}</li>
            </ul>
            {(!siteConfig.supportEmail || !siteConfig.businessEmail) && (
              <p className="mt-6 rounded-lg border border-amber-400/20 bg-amber-400/8 px-4 py-3 text-sm leading-6 text-amber-100">
                {t("panel.missingContact")}
              </p>
            )}
          </aside>
        </div>
      </PageContentCard>
    </>
  );
}
