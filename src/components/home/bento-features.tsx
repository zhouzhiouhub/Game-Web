import { Palette, Gamepad2, Cloud, Puzzle } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Effect Editor",
    description: "Drag-and-drop visual effect editor. Create stunning lighting without coding.",
    accent: "R" as const,
  },
  {
    icon: Gamepad2,
    title: "Game Sync",
    description: "Real-time game event triggers. Your lights react to in-game action.",
    accent: "G" as const,
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Your configs everywhere. Seamless sync across all your devices.",
    accent: "B" as const,
  },
  {
    icon: Puzzle,
    title: "Plugin Ecosystem",
    description: "Infinite possibilities. Extend with community-built plugins.",
    accent: "R" as const,
  },
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
  return (
    <section className="py-[var(--section-py)]">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Everything you need to{" "}
          <span className="rgb-full bg-clip-text text-transparent">light up</span>
        </h2>

        <div className="mt-16 grid gap-[var(--grid-gap)] md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-[var(--card-padding)] lg:p-8 transition-colors hover:border-white/10"
            >
              {/* Glow accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${accentColors[feature.accent]} opacity-0 transition-opacity group-hover:opacity-100`}
              />
              <div className="relative">
                <feature.icon className={`h-8 w-8 ${iconColors[feature.accent]}`} />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-fg-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
