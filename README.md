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

- NEXT_PUBLIC_SITE_NAME
- NEXT_PUBLIC_SITE_SHORT_NAME
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_SITE_DESCRIPTION
- NEXT_PUBLIC_GITHUB_REPO
- NEXT_PUBLIC_DISCORD_INVITE

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
- Review all legal pages before production launch
- Verify public image asset licensing
- Update download links to your own release pipeline
- Replace placeholder device catalog entries with maintained data

## Notes

- The project ships with English and Chinese routes.
- The project is structured for modular page editing instead of one large page file.
