export interface NavigationGroup {
  labelKey: string;
  href: string;
  children?: NavigationGroup[];
}

export const navigation: NavigationGroup[] = [
  {
    labelKey: "features",
    href: "/features",
    children: [
      { labelKey: "editor", href: "/features/editor" },
      { labelKey: "devices", href: "/features/devices" },
      { labelKey: "gameSync", href: "/features/game-sync" },
      { labelKey: "cloudSync", href: "/features/cloud-sync" },
    ],
  },
  { labelKey: "download", href: "/download" },
  { labelKey: "devices", href: "/devices" },
  {
    labelKey: "docs",
    href: "/docs",
    children: [
      { labelKey: "gettingStarted", href: "/docs/getting-started" },
      { labelKey: "apiReference", href: "/docs/api" },
      { labelKey: "pluginDev", href: "/docs/plugins" },
    ],
  },
  {
    labelKey: "community",
    href: "/community",
    children: [
      { labelKey: "marketplace", href: "/community/marketplace" },
      { labelKey: "discord", href: "/community/discord" },
    ],
  },
  { labelKey: "blog", href: "/blog" },
];
