import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { withLocale } from '@/lib/site';

type NotFoundPageProps = {
  locale: SiteLocale;
};

export function NotFoundPage({ locale }: NotFoundPageProps) {
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fd-muted-foreground">404</p>
      <h1 className="text-4xl font-semibold tracking-tight">{dict.notFound.title}</h1>
      <p className="text-base leading-7 text-fd-muted-foreground">{dict.notFound.description}</p>
      <div>
        <Link
          href={withLocale(locale, '/')}
          className="inline-flex items-center justify-center rounded-full bg-fd-primary px-5 py-3 text-sm font-semibold text-fd-primary-foreground"
        >
          {dict.notFound.cta}
        </Link>
      </div>
    </main>
  );
}
