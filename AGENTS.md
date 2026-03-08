# Project Structure

This repository is a fully static `Next.js + Fumadocs` site deployed to GitHub Pages on `https://nguyen-mai.tretrauit.me`.

## Main directories

- `app/`
  - `app/(en)/` contains all root-path English routes.
  - `app/vi/` contains all Vietnamese routes under `/vi`.
  - `app/(en)/(home)/` and `app/vi/(home)/` use `HomeLayout` for the landing page and blog.
  - `app/(en)/docs/` and `app/vi/docs/` use `DocsLayout` for documentation pages.
- `components/`
  - Shared page components live here (`home-page`, `blog-list-page`, `blog-post-page`, `docs-page`, `not-found-page`).
  - `site-root-layout.tsx` owns the root HTML shell, `RootProvider`, fonts, and footer.
- `content/`
  - `content/docs/en` and `content/docs/vi` are the documentation sources.
  - `content/blog/en` and `content/blog/vi` are the blog sources.
  - Each docs folder can use `meta.json` for sidebar ordering and folder titles.
- `lib/`
  - `lib/source.ts` wires Fumadocs loaders for docs and blog content.
  - `lib/i18n.ts` defines locale configuration.
  - `lib/dictionaries.ts` stores UI copy for English and Vietnamese.
  - `lib/layout.shared.tsx` defines shared Fumadocs layout options.
  - `lib/fumadocs-mdx-runtime.ts` is a compatibility shim used by generated `.source` files.
- `public/`
  - Static assets are served from here.
  - `public/CNAME` keeps the GitHub Pages custom domain.
  - `public/.nojekyll` prevents GitHub Pages from interfering with `_next/` output.
- `.github/workflows/deploy.yml`
  - Builds the site with Bun and deploys the static `out/` directory to GitHub Pages.

## Routing model

- English routes stay at the root: `/`, `/docs`, `/blog`, `/markdown-page`.
- Vietnamese routes live under `/vi`: `/vi`, `/vi/docs`, `/vi/blog`, `/vi/markdown-page`.
- Keep routes statically prerenderable. GitHub Pages is the priority, so do not add features that need a server, middleware, rewrites, cookies, or request-time logic.

## Content rules

- Docs and blog content should stay in MDX/Markdown under `content/`.
- Prefer adding page metadata in frontmatter (`title`, `description`, blog `date`, blog `authors`).
- For docs folders, use `meta.json` to control order and labels instead of app code.
- `Callout` and `DemoAlertButton` are available in MDX through `mdx-components.tsx`.

## Build and development

- Install dependencies with `bun install`.
- Start local development with `bun run dev`.
- Create the static export with `bun run build`.
- Preview the export with `bun run preview`.
- The scripts use Turbopack. Keep the `fumadocs-mdx` alias in `next.config.mjs` aligned with `lib/fumadocs-mdx-runtime.ts` so Fumadocs MDX content continues to build correctly.

## Guardrails for future changes

- Preserve static export compatibility in `next.config.mjs`.
- Keep search disabled unless you add a static-safe search implementation.
- If you add new locales, update `lib/i18n.ts`, `lib/dictionaries.ts`, and the mirrored route groups in `app/`.
- If you touch Fumadocs collection loading, verify both `bun run build` and direct page refreshes on nested routes.
