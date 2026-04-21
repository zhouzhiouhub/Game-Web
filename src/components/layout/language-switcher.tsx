"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const locales = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={buttonVariants({ variant: "secondary", size: "sm" })}
        aria-label="Switch language"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{locale === "en" ? "EN" : "中"}</span>
      </button>

      {open && (
        <Card
          className="absolute right-0 top-full z-50 mt-2 min-w-[120px] py-1"
          padding="none"
          variant="elevated"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
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
