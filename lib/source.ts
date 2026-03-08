import type { ComponentType } from 'react';
import { loader } from 'fumadocs-core/source';
import { blog, docs } from '../source-generated/server';
import { i18n } from '@/lib/i18n';
import { localePrefix } from '@/lib/site';

export type DocsPageData = {
  title: string;
  description?: string;
  body: ComponentType<any>;
  toc: Array<{ title: string; url: string; depth: number }>;
  full?: boolean;
};

export type BlogPageData = DocsPageData & {
  authors: string[];
  date: string;
  tags: string[];
};

export type LoadedPage<TData> = {
  url: string;
  slugs: string[];
  path?: string;
  data: TData;
};

const docsCollection = docs as unknown as {
  toFumadocsSource: () => unknown;
};

const blogCollection = blog as unknown as Array<{
  info: {
    path: string;
    fullPath: string;
  };
}>;

export const docsSource = loader({
  i18n,
  source: docsCollection.toFumadocsSource(),
  url(slugs: string[], locale?: string) {
    const prefix = localePrefix((locale ?? 'en') as 'en' | 'vi');
    const suffix = slugs.length > 0 ? `/${slugs.join('/')}` : '';

    return `${prefix}/docs${suffix}`;
  },
} as never);

export const blogSource = loader({
  i18n,
  source: {
    files: blogCollection.map((entry) => ({
      type: 'page' as const,
      path: entry.info.path,
      absolutePath: entry.info.fullPath,
      data: entry,
    })),
  },
  url(slugs: string[], locale?: string) {
    const prefix = localePrefix((locale ?? 'en') as 'en' | 'vi');
    const suffix = slugs.length > 0 ? `/${slugs.join('/')}` : '';

    return `${prefix}/blog${suffix}`;
  },
} as never);
