import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { blogSource, type BlogPageData, type LoadedPage } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { withLocale } from '@/lib/site';

type BlogPostPageProps = {
  locale: SiteLocale;
  slug: string;
};

export function BlogPostPage({ locale, slug }: BlogPostPageProps) {
  const dict = getDictionary(locale);
  const page = blogSource.getPage([slug], locale) as unknown as LoadedPage<BlogPageData> | undefined;

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-12 md:py-16">
      <div className="space-y-3">
        <Link href={withLocale(locale, '/blog')} className="text-sm font-medium text-fd-muted-foreground hover:text-fd-foreground">
          {dict.blog.back}
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-balance">{page.data.title}</h1>
        {page.data.description ? (
          <p className="max-w-3xl text-base leading-7 text-fd-muted-foreground">{page.data.description}</p>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-6 text-sm text-fd-muted-foreground">
        {page.data.authors.length > 0 ? (
          <div>
            <p className="mb-1 font-medium text-fd-foreground">{dict.blog.by}</p>
            <p>{page.data.authors.join(', ')}</p>
          </div>
        ) : null}
        <div>
          <p className="mb-1 font-medium text-fd-foreground">{dict.blog.published}</p>
          <p>
            {new Date(page.data.date).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {page.data.toc.length > 0 ? <InlineTOC items={page.data.toc} /> : null}

      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </main>
  );
}
