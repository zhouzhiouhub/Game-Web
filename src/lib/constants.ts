export const siteConfig = {
  name: "Gaming RGB Software",
  url: "https://gaming-rgb-software.com",
  description: "Cross-platform RGB lighting control software. One Software. Every Light.",
  githubRepo: "https://github.com/gaming-rgb-software/app",
  discordInvite: "https://discord.gg/gaming-rgb",
} as const;

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
  { label: "Devices", href: "/devices" },
  { label: "Docs", href: "/docs" },
  { label: "Community", href: "/community" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Download", href: "/download" },
    { label: "Devices", href: "/devices" },
    { label: "Pricing", href: "/pricing" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs/api" },
    { label: "Plugins", href: "/docs/plugins" },
    { label: "Blog", href: "/blog" },
  ],
  community: [
    { label: "Discord", href: siteConfig.discordInvite },
    { label: "Marketplace", href: "/community/marketplace" },
    { label: "GitHub", href: siteConfig.githubRepo },
    { label: "Contributing", href: "/docs/contributing" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "License", href: "/license" },
  ],
} as const;

export const brandNames = [
  "Razer",
  "Corsair",
  "Logitech",
  "NZXT",
  "Asus",
  "HyperX",
  "SteelSeries",
] as const;
