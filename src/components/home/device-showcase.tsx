"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categoryKeys = ["keyboards", "mice", "fans", "lightStrips", "motherboards"] as const;

const sampleDevices = [
  { name: "Corsair K70 RGB", categoryKey: "keyboards" as const, image: "/images/devices/keyboard-rgb.jpg" },
  { name: "Razer Huntsman V2", categoryKey: "keyboards" as const, image: "/images/devices/keyboard-colorful.jpg" },
  { name: "Logitech G502 Hero", categoryKey: "mice" as const, image: "/images/devices/mouse-gaming.jpg" },
  { name: "Razer DeathAdder V3", categoryKey: "mice" as const, image: "/images/devices/mouse-rgb-closeup.jpg" },
  { name: "NZXT F120 RGB", categoryKey: "fans" as const, image: "/images/hero/rgb-fan-interior.jpg" },
  { name: "Corsair QL120", categoryKey: "fans" as const, image: "/images/hero/rgb-fan-interior.jpg" },
  { name: "NZXT HUE 2", categoryKey: "lightStrips" as const, image: "/images/devices/led-strip.jpg" },
  { name: "Corsair iCUE LS100", categoryKey: "lightStrips" as const, image: "/images/hero/rgb-light-strip.jpg" },
  { name: "ASUS ROG Strix Z790", categoryKey: "motherboards" as const, image: "/images/devices/motherboard-rgb.jpg" },
  { name: "MSI MPG Z790", categoryKey: "motherboards" as const, image: "/images/devices/motherboard-rgb.jpg" },
];

export function DeviceShowcase() {
  const instanceId = useId();
  const [active, setActive] = useState<string>(categoryKeys[0]);
  const t = useTranslations("devices");

  const filtered = sampleDevices.filter((d) => d.categoryKey === active);
  const titleId = `${instanceId}-title`;
  const panelId = `${instanceId}-panel-${active}`;

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
              onClick={() => setActive(catKey)}
              role="tab"
              id={`${instanceId}-tab-${catKey}`}
              aria-selected={active === catKey}
              aria-controls={active === catKey ? panelId : undefined}
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
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
