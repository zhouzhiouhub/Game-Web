"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect, useId, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const locales = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("languageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuId = `${useId()}-menu`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const activeIndex = Math.max(
      locales.findIndex((entry) => entry.code === locale),
      0,
    );
    itemRefs.current[activeIndex]?.focus();
  }, [locale, open]);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function focusMenuItem(nextIndex: number) {
    itemRefs.current[nextIndex]?.focus();
  }

  function handleMenuKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight": {
        event.preventDefault();
        focusMenuItem((currentIndex + 1) % locales.length);
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        event.preventDefault();
        focusMenuItem((currentIndex - 1 + locales.length) % locales.length);
        break;
      }
      case "Home": {
        event.preventDefault();
        focusMenuItem(0);
        break;
      }
      case "End": {
        event.preventDefault();
        focusMenuItem(locales.length - 1);
        break;
      }
      case "Escape": {
        event.preventDefault();
        closeMenu();
        break;
      }
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        className={buttonVariants({ variant: "secondary", size: "sm" })}
        aria-label={t("toggleLabel")}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{locale === "en" ? "EN" : "中"}</span>
      </button>

      {open && (
        <Card
          id={menuId}
          role="menu"
          aria-label={t("menuLabel")}
          className="absolute right-0 top-full z-50 mt-2 min-w-[120px] py-1"
          padding="none"
          variant="elevated"
        >
          {locales.map((l, index) => (
            <button
              type="button"
              key={l.code}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              onClick={() => switchLocale(l.code)}
              onKeyDown={(event) => handleMenuKeyDown(event, index)}
              role="menuitemradio"
              aria-checked={locale === l.code}
              tabIndex={locale === l.code ? 0 : -1}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                locale === l.code
                  ? "text-rgb-b font-medium"
                  : "text-fg-secondary hover:text-fg-primary"
              }`}
            >
              {l.label}
            </button>
          ))}
        </Card>
      )}
    </div>
  );
}
