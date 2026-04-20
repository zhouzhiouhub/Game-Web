"use client";

import { useEffect, useState } from "react";

const channels = [
  { color: "#ef4444", channel: "R" as const },
  { color: "#22c55e", channel: "G" as const },
  { color: "#3b82f6", channel: "B" as const },
];

export function useRGBCycle(speed = 3000): { color: string; channel: "R" | "G" | "B" } {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % channels.length);
    }, speed);
    return () => clearInterval(timer);
  }, [speed]);

  return channels[index];
}
