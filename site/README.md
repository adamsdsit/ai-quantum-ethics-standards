# Docs Site (Astro Starlight)

This folder contains a docs UI built with **Astro Starlight** that renders the standards corpus in this repository.

## Why Starlight (vs plain Astro)

- **Starlight** is purpose-built for documentation: sidebars, search, multi-section nav, and clean typography.
- **Astro** is better when you want a fully custom app UI. You can still add custom pages/components inside Starlight later.

## Local (non-Docker)

```bash
cd site
npm install
npm run dev
```

## Local (Docker)

From the repo root:

```bash
docker compose up site-dev
```

Build the static site into `site/dist`:

```bash
docker compose run --rm site-build
```

## Cloudflare Pages

Recommended: **Git Integration** (Workers & Pages → Create → Pages → Connect to Git).

Suggested settings:

- Root directory: `site`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` (or current LTS)

Direct deploy (optional):

```bash
cd site
npm install
npm run build
npx wrangler pages deploy dist --project-name ai-quantum-ethics-standards
```

## How content gets into the site

The standards corpus remains canonical at the repo root (e.g., `00_foundations/`, `02_ai_standards/`).

The site build runs `scripts/sync_docs.mjs` to copy/transform those Markdown files into Starlight’s content directory:

- destination: `site/src/content/docs/`
- assets: `diagrams/rendered/*.svg` → `site/public/diagrams/`

