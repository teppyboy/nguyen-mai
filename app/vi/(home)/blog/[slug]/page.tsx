import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostPage } from '@/components/blog-post-page';
import { absoluteUrl } from '@/lib/site';
import { blogSource } from '@/lib/source';

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: BlogPageProps) {
  const { slug } = await params;

  return <BlogPostPage locale="vi" slug={slug} />;
}

export function generateStaticParams() {
  return blogSource.getPages('vi').map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = blogSource.getPage([slug], 'vi');

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: absoluteUrl(page.url),
    },
  };
}
