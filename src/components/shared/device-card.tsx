import Image from "next/image";
import { cn } from "@/lib/utils";

interface DeviceCardProps {
  name: string;
  brand: string;
  type: string;
  image?: string;
  className?: string;
}

export function DeviceCard({ name, brand, type, image, className }: DeviceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--card-radius)] border border-white/5 bg-bg-surface transition-colors hover:border-white/10",
        className
      )}
    >
      {image && (
        <div className="relative h-36 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent" />
        </div>
      )}
      <div className="p-5">
        <p className="font-medium">{name}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-fg-muted">{brand}</span>
          <span className="text-xs text-fg-muted">·</span>
          <span className="text-xs text-fg-muted">{type}</span>
        </div>
      </div>
    </div>
  );
}
