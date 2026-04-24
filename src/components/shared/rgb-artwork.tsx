import { cn } from "@/lib/utils";

type ArtworkVariant =
  | "ambient"
  | "hero"
  | "cta"
  | "editor"
  | "gameSync"
  | "cloudSync"
  | "plugin"
  | "keyboards"
  | "mice"
  | "fans"
  | "lightStrips"
  | "motherboards";

const artworkStyles: Record<
  ArtworkVariant,
  {
    background: string;
    glowA: string;
    glowB: string;
    glowC: string;
    showPanel: boolean;
    gridOpacity: string;
  }
> = {
  ambient: {
    background: "bg-[linear-gradient(135deg,#05060a_0%,#07111f_36%,#120814_100%)]",
    glowA: "bg-rgb-b/30",
    glowB: "bg-rgb-g/25",
    glowC: "bg-rgb-r/20",
    showPanel: false,
    gridOpacity: "opacity-20",
  },
  hero: {
    background: "bg-[linear-gradient(135deg,#0a1022_0%,#05060a_48%,#1a0c18_100%)]",
    glowA: "bg-rgb-b/35",
    glowB: "bg-rgb-g/25",
    glowC: "bg-rgb-r/25",
    showPanel: true,
    gridOpacity: "opacity-15",
  },
  cta: {
    background: "bg-[linear-gradient(135deg,#0f0a18_0%,#05060a_45%,#071626_100%)]",
    glowA: "bg-rgb-r/30",
    glowB: "bg-rgb-b/25",
    glowC: "bg-rgb-g/20",
    showPanel: false,
    gridOpacity: "opacity-10",
  },
  editor: {
    background: "bg-[linear-gradient(135deg,#120a16_0%,#05060a_52%,#09111f_100%)]",
    glowA: "bg-rgb-r/30",
    glowB: "bg-rgb-b/25",
    glowC: "bg-rgb-g/20",
    showPanel: true,
    gridOpacity: "opacity-15",
  },
  gameSync: {
    background: "bg-[linear-gradient(135deg,#07131d_0%,#05060a_50%,#160b18_100%)]",
    glowA: "bg-rgb-g/30",
    glowB: "bg-rgb-r/25",
    glowC: "bg-rgb-b/20",
    showPanel: true,
    gridOpacity: "opacity-15",
  },
  cloudSync: {
    background: "bg-[linear-gradient(135deg,#081223_0%,#05060a_55%,#0d1322_100%)]",
    glowA: "bg-rgb-b/35",
    glowB: "bg-rgb-g/20",
    glowC: "bg-rgb-r/15",
    showPanel: true,
    gridOpacity: "opacity-15",
  },
  plugin: {
    background: "bg-[linear-gradient(135deg,#13101c_0%,#05060a_55%,#0d1a17_100%)]",
    glowA: "bg-rgb-r/25",
    glowB: "bg-rgb-g/25",
    glowC: "bg-rgb-b/20",
    showPanel: true,
    gridOpacity: "opacity-15",
  },
  keyboards: {
    background: "bg-[linear-gradient(135deg,#0b1220_0%,#05060a_54%,#170d12_100%)]",
    glowA: "bg-rgb-b/30",
    glowB: "bg-rgb-r/25",
    glowC: "bg-rgb-g/20",
    showPanel: true,
    gridOpacity: "opacity-10",
  },
  mice: {
    background: "bg-[linear-gradient(135deg,#0c1518_0%,#05060a_54%,#170d14_100%)]",
    glowA: "bg-rgb-g/25",
    glowB: "bg-rgb-r/25",
    glowC: "bg-rgb-b/20",
    showPanel: true,
    gridOpacity: "opacity-10",
  },
  fans: {
    background: "bg-[linear-gradient(135deg,#0d1020_0%,#05060a_54%,#111b12_100%)]",
    glowA: "bg-rgb-b/25",
    glowB: "bg-rgb-g/25",
    glowC: "bg-rgb-r/15",
    showPanel: true,
    gridOpacity: "opacity-10",
  },
  lightStrips: {
    background: "bg-[linear-gradient(135deg,#11111d_0%,#05060a_54%,#071720_100%)]",
    glowA: "bg-rgb-r/25",
    glowB: "bg-rgb-b/25",
    glowC: "bg-rgb-g/20",
    showPanel: true,
    gridOpacity: "opacity-10",
  },
  motherboards: {
    background: "bg-[linear-gradient(135deg,#07111f_0%,#05060a_50%,#130b17_100%)]",
    glowA: "bg-rgb-b/30",
    glowB: "bg-rgb-r/20",
    glowC: "bg-rgb-g/20",
    showPanel: true,
    gridOpacity: "opacity-10",
  },
};

function renderPattern(variant: ArtworkVariant) {
  switch (variant) {
    case "ambient":
      return (
        <>
          <div className="absolute inset-x-[8%] top-[14%] h-px rgb-beam opacity-60" />
          <div className="absolute left-[8%] top-[22%] h-20 w-[36%] rounded-full border border-white/10 bg-white/5 blur-sm" />
          <div className="absolute right-[10%] top-[28%] h-28 w-[26%] rounded-[28px] border border-white/10 bg-black/25 backdrop-blur-sm" />
          <div className="absolute left-[15%] bottom-[18%] h-32 w-32 rounded-full border border-white/10 bg-white/5" />
          <div className="absolute left-[17.5%] bottom-[20.5%] h-23 w-23 rounded-full border border-rgb-g/30" />
          <div className="absolute right-[12%] bottom-[16%] h-24 w-[40%] rounded-[32px] border border-white/10 bg-black/20 backdrop-blur-sm" />
        </>
      );
    case "hero":
      return (
        <div className="absolute inset-6 grid gap-4 md:grid-cols-[1.45fr,0.85fr]">
          <div className="rounded-[20px] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
            <div className="flex gap-2">
              <div className="h-2.5 w-12 rounded-full bg-rgb-r/70" />
              <div className="h-2.5 w-20 rounded-full bg-rgb-g/60" />
              <div className="h-2.5 w-16 rounded-full bg-rgb-b/70" />
            </div>
            <div className="mt-5 grid h-28 grid-cols-12 items-end gap-2">
              <div className="h-10 rounded-full bg-rgb-r/55" />
              <div className="h-14 rounded-full bg-rgb-r/65" />
              <div className="h-8 rounded-full bg-rgb-g/60" />
              <div className="h-18 rounded-full bg-rgb-b/70" />
              <div className="h-24 rounded-full bg-rgb-b/80" />
              <div className="h-16 rounded-full bg-rgb-g/65" />
              <div className="h-12 rounded-full bg-rgb-r/60" />
              <div className="h-20 rounded-full bg-rgb-b/75" />
              <div className="h-26 rounded-full bg-rgb-g/75" />
              <div className="h-12 rounded-full bg-rgb-r/60" />
              <div className="h-18 rounded-full bg-rgb-b/65" />
              <div className="h-9 rounded-full bg-rgb-g/60" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2 w-16 rounded-full bg-white/40" />
                <div className="mt-3 h-12 rounded-xl rgb-glow opacity-70" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2 w-12 rounded-full bg-white/40" />
                <div className="mt-3 flex gap-2">
                  <div className="h-10 flex-1 rounded-xl bg-rgb-g/30" />
                  <div className="h-10 flex-1 rounded-xl bg-rgb-b/30" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="h-2 w-14 rounded-full bg-white/40" />
                <div className="mt-3 h-3 w-full rounded-full bg-white/10" />
                <div className="mt-2 h-3 w-3/4 rounded-full rgb-full opacity-80" />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[20px] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <div className="h-2 w-16 rounded-full bg-white/40" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-18 rounded-2xl bg-rgb-b/20" />
                <div className="h-18 rounded-2xl bg-rgb-r/20" />
              </div>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <div className="h-2 w-12 rounded-full bg-white/40" />
              <div className="mt-4 space-y-3">
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-4/5 rounded-full bg-rgb-g/60" />
                <div className="h-3 w-3/5 rounded-full bg-rgb-b/60" />
              </div>
            </div>
          </div>
        </div>
      );
    case "cta":
      return (
        <>
          <div className="absolute inset-x-0 top-[24%] h-px rgb-beam opacity-60" />
          <div className="absolute inset-x-0 top-[48%] h-px rgb-beam opacity-40" />
          <div className="absolute inset-x-[12%] top-[28%] h-16 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <div className="absolute left-[18%] bottom-[22%] h-24 w-24 rounded-full border border-rgb-r/25 bg-rgb-r/10" />
          <div className="absolute right-[16%] bottom-[18%] h-28 w-28 rounded-full border border-rgb-b/25 bg-rgb-b/10" />
          <div className="absolute left-1/2 top-1/2 h-24 w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-black/20 backdrop-blur-sm" />
        </>
      );
    case "editor":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
          <div className="flex gap-2">
            <div className="h-2 w-10 rounded-full bg-rgb-r/70" />
            <div className="h-2 w-20 rounded-full bg-white/30" />
          </div>
          <div className="mt-4 grid grid-cols-12 items-end gap-1.5">
            <div className="col-span-2 h-12 rounded-lg bg-rgb-r/50" />
            <div className="col-span-2 h-18 rounded-lg bg-rgb-b/55" />
            <div className="col-span-2 h-24 rounded-lg bg-rgb-g/55" />
            <div className="col-span-2 h-16 rounded-lg bg-rgb-r/45" />
            <div className="col-span-2 h-20 rounded-lg bg-rgb-b/60" />
            <div className="col-span-2 h-10 rounded-lg bg-rgb-g/50" />
          </div>
          <div className="mt-4 h-12 rounded-2xl border border-white/10 bg-white/5" />
        </div>
      );
    case "gameSync":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
          <div className="h-3 w-24 rounded-full bg-rgb-g/70" />
          <div className="mt-4 space-y-3">
            <div className="h-12 rounded-2xl bg-[linear-gradient(90deg,rgba(239,68,68,0.3),rgba(34,197,94,0.35),rgba(59,130,246,0.4))]" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded-xl bg-rgb-r/25" />
              <div className="h-10 rounded-xl bg-rgb-g/25" />
              <div className="h-10 rounded-xl bg-rgb-b/25" />
            </div>
          </div>
        </div>
      );
    case "cloudSync":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 bg-white/15" />
          <div className="absolute left-1/2 top-1/2 h-28 w-px -translate-y-1/2 bg-white/15" />
          <div className="absolute left-[18%] top-[22%] h-12 w-12 rounded-2xl bg-rgb-b/25" />
          <div className="absolute right-[18%] top-[22%] h-12 w-12 rounded-2xl bg-rgb-g/25" />
          <div className="absolute left-[18%] bottom-[18%] h-12 w-12 rounded-2xl bg-rgb-r/25" />
          <div className="absolute right-[18%] bottom-[18%] h-12 w-12 rounded-2xl bg-white/10" />
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl rgb-full opacity-80" />
        </div>
      );
    case "plugin":
      return (
        <div className="absolute inset-4 grid grid-cols-2 gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
          <div className="rounded-2xl border border-white/10 bg-rgb-r/15" />
          <div className="rounded-2xl border border-white/10 bg-rgb-b/15" />
          <div className="rounded-2xl border border-white/10 bg-rgb-g/15" />
          <div className="rounded-2xl border border-white/10 bg-white/8" />
        </div>
      );
    case "keyboards":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
          <div className="space-y-2">
            {[10, 9, 8, 7].map((count) => (
              <div key={count} className="flex gap-1.5">
                {Array.from({ length: count }).map((_, index) => (
                  <div
                    key={`${count}-${index}`}
                    className={cn(
                      "h-5 flex-1 rounded-md",
                      index % 3 === 0 ? "bg-rgb-r/35" : index % 3 === 1 ? "bg-rgb-g/30" : "bg-rgb-b/35",
                    )}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    case "mice":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 h-20 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-white/10 bg-white/8" />
          <div className="absolute left-[34%] top-[30%] h-8 w-9 rounded-t-[999px] rounded-b-xl bg-rgb-r/35" />
          <div className="absolute right-[34%] top-[30%] h-8 w-9 rounded-t-[999px] rounded-b-xl bg-rgb-b/35" />
          <div className="absolute left-1/2 top-[43%] h-8 w-2 -translate-x-1/2 rounded-full bg-rgb-g/55" />
          <div className="absolute left-1/2 top-[62%] h-px w-16 -translate-x-1/2 rgb-beam opacity-70" />
        </div>
      );
    case "fans":
      return (
        <div className="absolute inset-4 flex items-center justify-center gap-4 rounded-[18px] border border-white/10 bg-black/20 backdrop-blur-sm">
          {["r", "b"].map((accent) => (
            <div key={accent} className="relative h-16 w-16 rounded-full border border-white/10 bg-white/5">
              <div className={cn("absolute inset-2 rounded-full", accent === "r" ? "bg-rgb-r/20" : "bg-rgb-b/20")} />
              <div className={cn("absolute inset-4 rounded-full", accent === "r" ? "bg-rgb-g/25" : "bg-rgb-r/20")} />
              <div className="absolute inset-6 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      );
    case "lightStrips":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="absolute left-[8%] top-[18%] h-5 w-[84%] rotate-[12deg] rounded-full rgb-full opacity-80" />
          <div className="absolute left-[4%] top-[44%] h-5 w-[92%] -rotate-[10deg] rounded-full bg-[linear-gradient(90deg,rgba(239,68,68,0.75),rgba(59,130,246,0.7),rgba(34,197,94,0.7))]" />
          <div className="absolute left-[12%] top-[68%] h-5 w-[76%] rotate-[8deg] rounded-full bg-[linear-gradient(90deg,rgba(59,130,246,0.75),rgba(34,197,94,0.7),rgba(239,68,68,0.7))]" />
        </div>
      );
    case "motherboards":
      return (
        <div className="absolute inset-4 rounded-[18px] border border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="absolute left-[18%] top-[18%] h-14 w-14 rounded-2xl border border-white/10 bg-rgb-b/20" />
          <div className="absolute right-[18%] top-[22%] h-10 w-20 rounded-xl border border-white/10 bg-rgb-r/20" />
          <div className="absolute left-[22%] bottom-[20%] h-10 w-24 rounded-xl border border-white/10 bg-rgb-g/20" />
          <div className="absolute left-[34%] top-[25%] h-px w-[38%] bg-white/15" />
          <div className="absolute left-[28%] top-[32%] h-[34%] w-px bg-white/15" />
          <div className="absolute left-[50%] top-[28%] h-[38%] w-px bg-white/15" />
          <div className="absolute left-[28%] bottom-[28%] h-px w-[26%] rgb-beam opacity-60" />
        </div>
      );
  }
}

interface RgbArtworkProps {
  variant: ArtworkVariant;
  className?: string;
}

export function RgbArtwork({ variant, className }: RgbArtworkProps) {
  const artwork = artworkStyles[variant];

  return (
    <div
      aria-hidden="true"
      className={cn("relative isolate overflow-hidden bg-[#05060a]", className)}
    >
      <div className={cn("absolute inset-0", artwork.background)} />
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]",
          artwork.gridOpacity,
        )}
      />
      <div className={cn("absolute -left-12 top-0 h-40 w-40 rounded-full blur-3xl", artwork.glowA)} />
      <div className={cn("absolute right-0 top-1/3 h-48 w-48 rounded-full blur-3xl", artwork.glowB)} />
      <div className={cn("absolute bottom-0 left-1/3 h-40 w-40 rounded-full blur-3xl", artwork.glowC)} />
      {artwork.showPanel ? (
        <div className="absolute inset-[6%] rounded-[22px] border border-white/6 bg-black/15" />
      ) : null}
      {renderPattern(variant)}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)] opacity-60" />
    </div>
  );
}