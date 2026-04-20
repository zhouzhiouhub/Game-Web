"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Keyboards", "Mice", "Fans", "Light Strips", "Motherboards"] as const;

const sampleDevices = [
  { name: "Corsair K70 RGB", category: "Keyboards" },
  { name: "Razer Huntsman V2", category: "Keyboards" },
  { name: "Logitech G502 Hero", category: "Mice" },
  { name: "Razer DeathAdder V3", category: "Mice" },
  { name: "NZXT F120 RGB", category: "Fans" },
  { name: "Corsair QL120", category: "Fans" },
  { name: "NZXT HUE 2", category: "Light Strips" },
  { name: "Corsair iCUE LS100", category: "Light Strips" },
  { name: "ASUS ROG Strix Z790", category: "Motherboards" },
  { name: "MSI MPG Z790", category: "Motherboards" },
];

export function DeviceShowcase() {
  const [active, setActive] = useState<string>(categories[0]);

  const filtered = sampleDevices.filter((d) => d.category === active);

  return (
    <section className="py-[var(--section-py)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          500+ Devices Supported
        </h2>
        <p className="mt-4 text-center text-fg-secondary">
          Your hardware, unified.
        </p>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "rgb-full text-white"
                  : "bg-bg-surface text-fg-secondary hover:text-fg-primary"
              )}
            >
              {cat}
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
              <p className="mt-1 text-sm text-fg-muted">{device.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
