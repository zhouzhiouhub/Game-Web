"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Github, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/constants";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

const navKeys = [
  { key: "features", href: "/features" },
  { key: "download", href: "/download" },
  { key: "devices", href: "/devices" },
  { key: "docs", href: "/docs" },
  { key: "community", href: "/community" },
  { key: "blog", href: "/blog" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg-base/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[var(--container-max)] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Gaming RGB Software"
            width={32}
            height={32}
            priority
          />
          <span className="font-bold text-lg rgb-full bg-clip-text text-transparent">
            Gaming RGB
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navKeys.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-fg-secondary hover:text-fg-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>{t("star")}</span>
          </a>
          <LanguageSwitcher />
          <Link
            href="/download"
            className="rgb-full rounded-lg px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            {t("getStarted")}
          </Link>
        </div>

        <button
          className="md:hidden text-fg-secondary hover:text-fg-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-bg-base md:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navKeys.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-fg-secondary hover:text-fg-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className="mt-3 border-t border-white/5 pt-3 flex items-center justify-between">
              <Link
                href="/download"
                className="block rounded-lg rgb-full px-4 py-2.5 text-center text-sm font-medium text-white"
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
