import Link from 'next/link';
import { BookOpenText, Globe2, NotebookPen } from 'lucide-react';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { withLocale } from '@/lib/site';

type HomePageProps = {
  locale: SiteLocale;
};

export function HomePage({ locale }: HomePageProps) {
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto flex w-full max-w-[88rem] flex-col gap-10 px-4 py-12 md:py-16">
      <section className="grid gap-8 rounded-[2rem] border border-fd-border bg-fd-card/60 p-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:p-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fd-muted-foreground">
            {dict.home.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            {dict.home.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-fd-muted-foreground md:text-lg">
            {dict.home.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={withLocale(locale, '/docs/intro')}
              className="inline-flex items-center justify-center rounded-full bg-fd-primary px-5 py-3 text-sm font-semibold text-fd-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {dict.home.primaryCta}
            </Link>
            <Link
              href={withLocale(locale, '/blog')}
              className="inline-flex items-center justify-center rounded-full border border-fd-border px-5 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              {dict.home.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="rounded-2xl border border-fd-border bg-fd-background p-5">
            <BookOpenText className="mb-4 size-5 text-fd-muted-foreground" />
            <h2 className="mb-2 text-lg font-semibold">{dict.nav.docs}</h2>
            <p className="text-sm leading-6 text-fd-muted-foreground">{dict.home.docsSummary}</p>
          </article>
          <article className="rounded-2xl border border-fd-border bg-fd-background p-5">
            <NotebookPen className="mb-4 size-5 text-fd-muted-foreground" />
            <h2 className="mb-2 text-lg font-semibold">{dict.nav.blog}</h2>
            <p className="text-sm leading-6 text-fd-muted-foreground">{dict.home.blogSummary}</p>
          </article>
          <article className="rounded-2xl border border-fd-border bg-fd-background p-5">
            <Globe2 className="mb-4 size-5 text-fd-muted-foreground" />
            <h2 className="mb-2 text-lg font-semibold">{dict.localeSwitcherLabel}</h2>
            <p className="text-sm leading-6 text-fd-muted-foreground">{dict.home.localeSummary}</p>
          </article>
        </div>
      </section>
    </main>
  );
}
