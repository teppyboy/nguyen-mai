import Link from 'next/link';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { siteConfig, withLocale } from '@/lib/site';

type SiteFooterProps = {
  locale: SiteLocale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-fd-border bg-fd-background/90">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-4 px-4 py-6 text-sm text-fd-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-fd-foreground">{dict.siteTitle}</p>
          <p>{dict.footer.copyright}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={withLocale(locale, '/docs')}>{dict.footer.docs}</Link>
          <Link href={withLocale(locale, '/blog')}>{dict.footer.blog}</Link>
          <a href={siteConfig.githubUrl} rel="noreferrer noopener" target="_blank">
            {dict.footer.github}
          </a>
        </div>
      </div>
    </footer>
  );
}
