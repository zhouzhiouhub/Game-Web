import { navItems } from "@/lib/constants";

export type NavItem = (typeof navItems)[number];

export interface NavigationGroup {
  label: string;
  href: string;
  children?: NavigationGroup[];
}

export const navigation: NavigationGroup[] = [
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "Effect Editor", href: "/features/editor" },
      { label: "Device Support", href: "/features/devices" },
      { label: "Game Sync", href: "/features/game-sync" },
      { label: "Cloud Sync", href: "/features/cloud-sync" },
    ],
  },
  { label: "Download", href: "/download" },
  { label: "Devices", href: "/devices" },
  {
    label: "Docs",
    href: "/docs",
    children: [
      { label: "Getting Started", href: "/docs/getting-started" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Plugin Development", href: "/docs/plugins" },
    ],
  },
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Marketplace", href: "/community/marketplace" },
      { label: "Discord", href: "/community/discord" },
    ],
  },
  { label: "Blog", href: "/blog" },
];
