# Gaming RGB Software Website

A bilingual Next.js 15 marketing site for hardware, desktop utility, and product ecosystem websites.

## Stack

- Next.js 15 App Router
- React 19
- next-intl for i18n
- Tailwind CSS 4

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Environment variables

Copy values from .env.example and replace them for your own brand.

For template handoff, keep NEXT_PUBLIC_SITE_URL on the obvious placeholder value until a real production domain is available. The app will then fall back to http://localhost:3000 and keep robots and sitemap non-indexable.

- NEXT_PUBLIC_SITE_NAME
- NEXT_PUBLIC_SITE_SHORT_NAME
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_SITE_DESCRIPTION
- NEXT_PUBLIC_GITHUB_REPO
- NEXT_PUBLIC_DISCORD_INVITE
- NEXT_PUBLIC_DOWNLOAD_URL
- NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS
- NEXT_PUBLIC_DOWNLOAD_URL_MACOS
- NEXT_PUBLIC_DOWNLOAD_URL_LINUX
- NEXT_PUBLIC_LEGAL_LAST_UPDATED
- NEXT_PUBLIC_ANALYTICS_PROVIDER
- NEXT_PUBLIC_GA_MEASUREMENT_ID
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN
- NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL
- NEXT_PUBLIC_UMAMI_WEBSITE_ID
- NEXT_PUBLIC_UMAMI_SCRIPT_URL

Download URL resolution order:

- Platform-specific URL, if provided
- Generic NEXT_PUBLIC_DOWNLOAD_URL
- GitHub Releases latest URL derived from NEXT_PUBLIC_GITHUB_REPO

If no real download URL is configured, the download cards stay disabled and show a pending state instead of linking to a fake asset.

Current analytics handoff selection:

- GA4
- Set NEXT_PUBLIC_ANALYTICS_PROVIDER to ga4
- Set NEXT_PUBLIC_GA_MEASUREMENT_ID to your live Google Analytics Measurement ID
- If NEXT_PUBLIC_GA_MEASUREMENT_ID is present, the site will also fall back to GA4 automatically when provider is omitted

## Main customization points

- Global brand config: src/lib/constants.ts
- SEO and canonical metadata: src/app/[locale]/layout.tsx
- Sitemap routes: src/app/sitemap.ts
- English copy: messages/en.json
- Chinese copy: messages/zh.json
- Home sections: src/components/home/
- Product and legal pages: src/app/[locale]/

## Documentation

- Delivery handoff guide: 交付说明文档.md
- Developer guide: 开发文档.md
- Design guide: 设计文档.md

## Delivery checklist

- Replace site name, domain, and social links
- Treat all legal pages as template copy until they are reviewed and replaced for production launch
- Verify public image asset licensing
- Update download links to your own release pipeline, or leave them blank so the UI stays in its pending state
- Replace placeholder device catalog entries with maintained data

## Notes

- The project ships with English and Chinese routes.
- The project is structured for modular page editing instead of one large page file.
