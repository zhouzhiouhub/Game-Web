import { cn } from "@/lib/utils";

interface DeviceCardProps {
  name: string;
  brand: string;
  type: string;
  className?: string;
}

export function DeviceCard({ name, brand, type, className }: DeviceCardProps) {
  return (
    <div
      className={cn(
        "group rounded-[var(--card-radius)] border border-white/5 bg-bg-surface p-5 transition-colors hover:border-white/10",
        className
      )}
    >
      <p className="font-medium">{name}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-xs text-fg-muted">{brand}</span>
        <span className="text-xs text-fg-muted">·</span>
        <span className="text-xs text-fg-muted">{type}</span>
      </div>
    </div>
  );
}
