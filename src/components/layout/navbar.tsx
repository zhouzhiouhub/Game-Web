"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { buttonVariants } from "@/components/ui/button";

const navKeys = [
  { key: "features", href: "/features" },
  { key: "download", href: "/download" },
  { key: "devices", href: "/devices" },
  { key: "docs", href: "/docs" },
  { key: "community", href: "/community" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const mobileToggleLabel = mobileOpen ? t("closeMenu") : t("openMenu");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg-base/80 backdrop-blur-xl">
      <nav className="content-shell flex h-[var(--nav-height)] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={32}
            height={32}
            priority
          />
          <span className="font-bold text-lg rgb-full bg-clip-text text-transparent">
            {siteConfig.shortName}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navKeys.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="touch-target rounded-md px-3 py-2 text-sm text-fg-secondary hover:text-fg-primary"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {siteConfig.githubRepo ? (
            <a
              href={siteConfig.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
            >
              <Github className="h-4 w-4" />
              <span>{t("star")}</span>
            </a>
          ) : null}
          <LanguageSwitcher />
          <Link
            href="/download"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            {t("getStarted")}
          </Link>
        </div>

        <button
          type="button"
          className="touch-target md:hidden text-fg-secondary hover:text-fg-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileToggleLabel}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-white/5 bg-bg-base md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navKeys.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="touch-target block rounded-md px-3 py-2 text-fg-secondary hover:text-fg-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className="mt-3 border-t border-white/5 pt-3 flex items-center justify-between">
              <Link
                href="/download"
                className={buttonVariants({ variant: "primary", size: "md" })}
                onClick={() => setMobileOpen(false)}
              >
                {t("getStarted")}
              </Link>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
