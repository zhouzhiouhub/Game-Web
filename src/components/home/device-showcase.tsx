"use client";

import { useId, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RgbArtwork } from "@/components/shared/rgb-artwork";

const categoryKeys = ["keyboards", "mice", "fans", "lightStrips", "motherboards"] as const;

const sampleDevices = [
  { name: "Corsair K70 RGB", categoryKey: "keyboards" as const, artwork: "keyboards" as const },
  { name: "Razer Huntsman V2", categoryKey: "keyboards" as const, artwork: "keyboards" as const },
  { name: "Logitech G502 Hero", categoryKey: "mice" as const, artwork: "mice" as const },
  { name: "Razer DeathAdder V3", categoryKey: "mice" as const, artwork: "mice" as const },
  { name: "NZXT F120 RGB", categoryKey: "fans" as const, artwork: "fans" as const },
  { name: "Corsair QL120", categoryKey: "fans" as const, artwork: "fans" as const },
  { name: "NZXT HUE 2", categoryKey: "lightStrips" as const, artwork: "lightStrips" as const },
  { name: "Corsair iCUE LS100", categoryKey: "lightStrips" as const, artwork: "lightStrips" as const },
  { name: "ASUS ROG Strix Z790", categoryKey: "motherboards" as const, artwork: "motherboards" as const },
  { name: "MSI MPG Z790", categoryKey: "motherboards" as const, artwork: "motherboards" as const },
];

export function DeviceShowcase() {
  const instanceId = useId();
  const [active, setActive] = useState<string>(categoryKeys[0]);
  const t = useTranslations("devices");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const filtered = sampleDevices.filter((d) => d.categoryKey === active);
  const titleId = `${instanceId}-title`;
  const panelId = `${instanceId}-panel`;

  function focusCategory(nextIndex: number) {
    const nextKey = categoryKeys[nextIndex];
    setActive(nextKey);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleTabKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown": {
        event.preventDefault();
        focusCategory((currentIndex + 1) % categoryKeys.length);
        break;
      }
      case "ArrowLeft":
      case "ArrowUp": {
        event.preventDefault();
        focusCategory((currentIndex - 1 + categoryKeys.length) % categoryKeys.length);
        break;
      }
      case "Home": {
        event.preventDefault();
        focusCategory(0);
        break;
      }
      case "End": {
        event.preventDefault();
        focusCategory(categoryKeys.length - 1);
        break;
      }
    }
  }

  return (
    <section className="py-[var(--section-py)]" aria-labelledby={titleId}>
      <div className="content-shell">
        <h2 id={titleId} className="text-center text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-center text-fg-secondary">
          {t("subtitle")}
        </p>

        <div role="tablist" aria-label={t("title")} className="mt-10 flex flex-wrap justify-center gap-2">
          {categoryKeys.map((catKey) => (
            <button
              key={catKey}
              type="button"
              ref={(element) => {
                tabRefs.current[categoryKeys.indexOf(catKey)] = element;
              }}
              onClick={() => setActive(catKey)}
              onKeyDown={(event) => handleTabKeyDown(event, categoryKeys.indexOf(catKey))}
              role="tab"
              id={`${instanceId}-tab-${catKey}`}
              aria-selected={active === catKey}
              aria-controls={panelId}
              tabIndex={active === catKey ? 0 : -1}
              className={cn(
                buttonVariants({ variant: active === catKey ? "primary" : "secondary", size: "sm" }),
                active === catKey
                  ? ""
                  : "bg-bg-surface/80"
              )}
            >
              {t(`categories.${catKey}`)}
            </button>
          ))}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${instanceId}-tab-${active}`}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((device) => (
            <Card
              key={device.name}
              variant="interactive"
              padding="none"
              className="group relative overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <RgbArtwork
                  variant={device.artwork}
                  className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent" />
              </div>
              <div className="px-5 py-4">
                <p className="font-medium">{device.name}</p>
                <p className="mt-1 text-sm text-fg-muted">{t(`categories.${device.categoryKey}`)}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
