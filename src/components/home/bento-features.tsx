import { Palette, Gamepad2, Cloud, Puzzle } from "lucide-react";
import { useTranslations } from "next-intl";

const featureKeys = [
  { key: "editor", icon: Palette, accent: "R" as const },
  { key: "gameSync", icon: Gamepad2, accent: "G" as const },
  { key: "cloudSync", icon: Cloud, accent: "B" as const },
  { key: "plugin", icon: Puzzle, accent: "R" as const },
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
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          {t("title", { highlight: t("titleHighlight") })}
        </h2>

        <div className="mt-16 grid gap-[var(--grid-gap)] md:grid-cols-2">
          {featureKeys.map((feature) => (
            <div
              key={feature.key}
              className="group relative overflow-hidden rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-[var(--card-padding)] lg:p-8 transition-colors hover:border-white/10"
            >
              {/* Glow accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accentColors[feature.accent]} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <feature.icon className={`h-8 w-8 ${iconColors[feature.accent]}`} />
                <h3 className="mt-4 text-xl font-semibold">{t(`features.${feature.key}.title`)}</h3>
                <p className="mt-2 text-fg-secondary">{t(`features.${feature.key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
