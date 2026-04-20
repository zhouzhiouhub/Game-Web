"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const categoryKeys = ["keyboards", "mice", "fans", "lightStrips", "motherboards"] as const;

const sampleDevices = [
  { name: "Corsair K70 RGB", categoryKey: "keyboards" as const },
  { name: "Razer Huntsman V2", categoryKey: "keyboards" as const },
  { name: "Logitech G502 Hero", categoryKey: "mice" as const },
  { name: "Razer DeathAdder V3", categoryKey: "mice" as const },
  { name: "NZXT F120 RGB", categoryKey: "fans" as const },
  { name: "Corsair QL120", categoryKey: "fans" as const },
  { name: "NZXT HUE 2", categoryKey: "lightStrips" as const },
  { name: "Corsair iCUE LS100", categoryKey: "lightStrips" as const },
  { name: "ASUS ROG Strix Z790", categoryKey: "motherboards" as const },
  { name: "MSI MPG Z790", categoryKey: "motherboards" as const },
];

export function DeviceShowcase() {
  const [active, setActive] = useState<string>(categoryKeys[0]);
  const t = useTranslations("devices");

  const filtered = sampleDevices.filter((d) => d.categoryKey === active);

  return (
    <section className="py-[var(--section-py)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-center text-fg-secondary">
          {t("subtitle")}
        </p>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categoryKeys.map((catKey) => (
            <button
              key={catKey}
              onClick={() => setActive(catKey)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active === catKey
                  ? "rgb-full text-white"
                  : "bg-bg-surface text-fg-secondary hover:text-fg-primary"
              )}
            >
              {t(`categories.${catKey}`)}
            </button>
          ))}
        </div>

        {/* Device Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((device) => (
            <div
              key={device.name}
              className="group rounded-[var(--card-radius)] border border-white/5 bg-bg-surface px-5 py-4 transition-colors hover:border-white/10"
            >
              <p className="font-medium">{device.name}</p>
              <p className="mt-1 text-sm text-fg-muted">{t(`categories.${device.categoryKey}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
