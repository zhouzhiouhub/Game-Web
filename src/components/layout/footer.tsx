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
] as const;

const communityLinks = [
  { key: "discord", href: siteConfig.discordInvite },
  { key: "github", href: siteConfig.githubRepo },
  { key: "contributing", href: "/docs/contributing" },
] as const;

const legalLinks = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
  { key: "license", href: "/license" },
] as const;

export function Footer() {
  const t = useTranslations("footer");

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
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={28}
                height={28}
              />
              <span className="text-lg font-bold rgb-full bg-clip-text text-transparent">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="text-body-sm mt-3 text-fg-muted">
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
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-body-sm text-fg-muted hover:text-fg-primary">
                        {t(`links.${link.key}`)}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-body-sm text-fg-muted hover:text-fg-primary">
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
          <p className="text-body-sm text-fg-muted">
            {t("copyright", { year: new Date().getFullYear(), name: siteConfig.name })}
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.githubRepo} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={siteConfig.discordInvite} target="_blank" rel="noopener noreferrer" className="text-body-sm text-fg-muted hover:text-fg-primary">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
