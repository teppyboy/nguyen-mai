# Nguyen Mai

This website is a fully static `Next.js + Fumadocs` site built for GitHub Pages and deployed on the custom domain `https://nguyen-mai.tretrauit.me`.

## Stack

- Next.js App Router
- Fumadocs UI default theme
- Fumadocs MDX collections for docs and blog content
- Bun for package management and scripts

## Local development

```bash
bun install
bun run dev
```

The dev server and production build use Turbopack. `next.config.mjs` aliases `fumadocs-mdx` to `lib/fumadocs-mdx-runtime.ts` so the Fumadocs MDX pipeline still works with the static export.

## Build

```bash
bun run build
```

This exports a static site into `out/`.

## Preview the export

```bash
bun run preview
```

## Content locations

- English docs: `content/docs/en`
- Vietnamese docs: `content/docs/vi`
- English blog: `content/blog/en`
- Vietnamese blog: `content/blog/vi`

## Deployment

GitHub Actions builds the static export and uploads `out/` to GitHub Pages. The custom domain is stored in `public/CNAME`.
