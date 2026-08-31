import { Palette, Gamepad2, Cloud, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/card";
import { RgbArtwork } from "@/components/shared/rgb-artwork";

const featureKeys = [
  { key: "editor", href: "/features/editor", icon: Palette, accent: "R" as const, artwork: "editor" as const },
  { key: "gameSync", href: "/features/game-sync", icon: Gamepad2, accent: "G" as const, artwork: "gameSync" as const },
  { key: "cloudSync", href: "/features/cloud-sync", icon: Cloud, accent: "B" as const, artwork: "cloudSync" as const },
  { key: "plugin", href: "/docs/plugins", icon: Puzzle, accent: "R" as const, artwork: "plugin" as const },
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
            <Link key={feature.key} href={feature.href} className="block h-full">
              <Card
                variant="interactive"
                padding="md"
                className="group relative overflow-hidden lg:p-8"
              >
                <RgbArtwork
                  variant={feature.artwork}
                  className="absolute inset-0 opacity-75 transition-opacity duration-300 group-hover:opacity-90"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accentColors[feature.accent]} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div className="relative">
                  <feature.icon className={`h-8 w-8 ${iconColors[feature.accent]}`} />
                  <h3 className="mt-4 text-xl font-semibold">{t(`features.${feature.key}.title`)}</h3>
                  <p className="mt-2 text-fg-secondary">{t(`features.${feature.key}.description`)}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
