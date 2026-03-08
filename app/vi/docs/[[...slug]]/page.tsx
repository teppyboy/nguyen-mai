import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DocsContentPage } from '@/components/docs-page';
import { absoluteUrl } from '@/lib/site';
import { docsSource } from '@/lib/source';

type DocsPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: DocsPageProps) {
  const { slug } = await params;

  return <DocsContentPage locale="vi" slug={slug} />;
}

export function generateStaticParams() {
  return docsSource.getPages('vi').map((page) => ({
    slug: page.slugs,
  }));
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = docsSource.getPage(slug, 'vi');

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: absoluteUrl(page.url),
    },
  };
}
