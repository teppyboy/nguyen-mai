import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { blogSource, type BlogPageData, type LoadedPage } from '@/lib/source';

type BlogListPageProps = {
  locale: SiteLocale;
};

function sortPosts(locale: SiteLocale) {
  return [...(blogSource.getPages(locale) as unknown as Array<LoadedPage<BlogPageData>>)].sort(
    (left, right) => new Date(right.data.date).getTime() - new Date(left.data.date).getTime(),
  );
}

export function BlogListPage({ locale }: BlogListPageProps) {
  const dict = getDictionary(locale);
  const posts = sortPosts(locale);

  return (
    <main className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-4 py-12 md:py-16">
      <section className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fd-muted-foreground">
          {dict.nav.blog}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">{dict.blog.title}</h1>
        <p className="text-base leading-7 text-fd-muted-foreground">{dict.blog.description}</p>
      </section>

      {posts.length === 0 ? (
        <p className="text-sm text-fd-muted-foreground">{dict.blog.empty}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="flex h-full flex-col gap-4 rounded-3xl border border-fd-border bg-fd-card/60 p-6 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fd-muted-foreground">
                  {new Date(post.data.date).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-xl font-semibold tracking-tight">{post.data.title}</h2>
                {post.data.description ? (
                  <p className="text-sm leading-6 text-fd-muted-foreground">{post.data.description}</p>
                ) : null}
              </div>
              {post.data.authors.length > 0 ? (
                <p className="mt-auto text-sm text-fd-muted-foreground">{post.data.authors.join(', ')}</p>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
