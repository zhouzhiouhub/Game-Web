import Image from "next/image";
import { Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";

const productLinks = [
  { key: "features", href: "/features" },
  { key: "download", href: "/download" },
  { key: "devices", href: "/devices" },
] as const;

const resourceLinks = [
  { key: "documentation", href: "/docs" },
  { key: "apiReference", href: "/docs/api" },
  { key: "plugins", href: "/docs/plugins" },
  { key: "blog", href: "/blog" },
] as const;

const legalLinks = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
  { key: "license", href: "/license" },
] as const;

const footerCopyClass = "text-body-sm text-fg-secondary";
const footerLinkClass =
  "text-body-sm text-fg-secondary transition-colors hover:text-fg-primary";

export function Footer() {
  const t = useTranslations("footer");
  const communityLinks = [
    { key: "contact", href: "/contact" },
    ...(siteConfig.discordInvite ? [{ key: "discord", href: siteConfig.discordInvite }] : []),
    ...(siteConfig.githubRepo ? [{ key: "github", href: siteConfig.githubRepo }] : []),
    { key: "contributing", href: "/docs/contributing" },
  ];
  const socialLinks = [
    ...(siteConfig.githubRepo ? [{ key: "github", href: siteConfig.githubRepo }] : []),
    ...(siteConfig.discordInvite ? [{ key: "discord", href: siteConfig.discordInvite }] : []),
  ];

  const columns = [
    { title: t("columns.product"), links: productLinks },
    { title: t("columns.resources"), links: resourceLinks },
    { title: t("columns.community"), links: communityLinks },
    { title: t("columns.legal"), links: legalLinks },
  ];

  return (
    <footer className="border-t border-white/5 bg-bg-base">
      <div className="content-shell py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo-wordmark.svg"
                alt={siteConfig.name}
                width={117}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className={`${footerCopyClass} mt-3`}>
              {t("brand")}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-body-sm font-semibold text-fg-primary">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.key}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={footerLinkClass}>
                        {t(`links.${link.key}`)}
                      </a>
                    ) : (
                      <Link href={link.href} className={footerLinkClass}>
                        {t(`links.${link.key}`)}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className={footerCopyClass}>
            {t("copyright", { year: new Date().getFullYear(), name: siteConfig.name })}
          </p>
          {socialLinks.length > 0 ? (
            <div className="flex items-center gap-4">
              {siteConfig.githubRepo ? (
                <a
                  href={siteConfig.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
              ) : null}
              {siteConfig.discordInvite ? (
                <a
                  href={siteConfig.discordInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  Discord
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
