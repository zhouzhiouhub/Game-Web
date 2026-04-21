import Image from "next/image";
import { Palette, Gamepad2, Cloud, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";

const featureKeys = [
  { key: "editor", icon: Palette, accent: "R" as const, image: "/images/features/keyboard-collection.jpg" },
  { key: "gameSync", icon: Gamepad2, accent: "G" as const, image: "/images/features/mouse-neon-glow.jpg" },
  { key: "cloudSync", icon: Cloud, accent: "B" as const, image: "/images/features/gaming-setup-ambient.jpg" },
  { key: "plugin", icon: Puzzle, accent: "R" as const, image: "/images/features/gaming-station.jpg" },
];

const accentColors: Record<string, string> = {
  R: "from-rgb-r/20 to-transparent",
  G: "from-rgb-g/20 to-transparent",
  B: "from-rgb-b/20 to-transparent",
};

const iconColors: Record<string, string> = {
  R: "text-rgb-r",
  G: "text-rgb-g",
  B: "text-rgb-b",
};

export function BentoFeatures() {
  const t = useTranslations("bento");

  return (
    <section className="py-[var(--section-py)]">
      <div className="content-shell">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {t("title", { highlight: t("titleHighlight") })}
        </h2>

        <div className="mt-16 grid gap-[var(--grid-gap)] md:grid-cols-2">
          {featureKeys.map((feature) => (
            <Card
              key={feature.key}
              variant="interactive"
              padding="md"
              className="group relative overflow-hidden lg:p-8"
            >
              {/* Background image */}
              <Image
                src={feature.image}
                alt={t(`features.${feature.key}.title`)}
                fill
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Glow accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accentColors[feature.accent]} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <feature.icon className={`h-8 w-8 ${iconColors[feature.accent]}`} />
                <h3 className="mt-4 text-xl font-semibold">{t(`features.${feature.key}.title`)}</h3>
                <p className="mt-2 text-fg-secondary">{t(`features.${feature.key}.description`)}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
