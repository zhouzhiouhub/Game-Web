"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-fg-secondary hover:text-fg-primary transition-colors"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{locale === "en" ? "EN" : "中"}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 rounded-xl border border-white/10 bg-bg-elevated py-1 shadow-lg min-w-[120px] z-50">
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
        </div>
      )}
    </div>
  );
}
