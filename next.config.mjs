import path from 'node:path';
import { createMDX } from 'fumadocs-mdx/next';

const fumadocsRuntimeAbsoluteAlias = path.resolve('./lib/fumadocs-mdx-runtime.ts');
const fumadocsRuntimeRelativeAlias = './lib/fumadocs-mdx-runtime.ts';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      'fumadocs-mdx': fumadocsRuntimeRelativeAlias,
    },
  },
  webpack(config) {
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias['fumadocs-mdx$'] = fumadocsRuntimeAbsoluteAlias;

    return config;
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
