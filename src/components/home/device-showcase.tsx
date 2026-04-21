"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

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
              className="group relative overflow-hidden rounded-[var(--card-radius)] border border-white/5 bg-bg-surface transition-colors hover:border-white/10"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
