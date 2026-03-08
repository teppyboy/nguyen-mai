import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import type { SiteLocale } from '@/lib/i18n';
import { docsSource, type DocsPageData, type LoadedPage } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';

type DocsContentPageProps = {
  locale: SiteLocale;
  slug?: string[];
};

export function DocsContentPage({ locale, slug }: DocsContentPageProps) {
  const page = docsSource.getPage(slug, locale) as unknown as LoadedPage<DocsPageData> | undefined;

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage tableOfContentPopover={{ enabled: false }} toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description ? <DocsDescription>{page.data.description}</DocsDescription> : null}
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(docsSource, page as never),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}
