import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';

type MarkdownPageProps = {
  locale: SiteLocale;
};

export function MarkdownPage({ locale }: MarkdownPageProps) {
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-12 md:py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{dict.markdownPage.title}</h1>
      <p className="text-base leading-7 text-fd-muted-foreground">{dict.markdownPage.description}</p>
    </main>
  );
}
