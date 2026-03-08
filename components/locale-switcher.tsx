'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { SiteLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { locales } from '@/lib/i18n';
import { switchLocalePath } from '@/lib/site';

type LocaleSwitcherProps = {
  locale: SiteLocale;
  className?: string;
};

export function LocaleSwitcher({ locale, className }: LocaleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      aria-label={getDictionary(locale).localeSwitcherLabel}
      className={`inline-flex items-center gap-1 rounded-full border border-fd-border bg-fd-card/80 p-1 text-xs ${className ?? ''}`.trim()}
      role="group"
    >
      {locales.map((targetLocale) => {
        const active = targetLocale === locale;

        return (
          <button
            key={targetLocale}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
              active
                ? 'bg-fd-primary text-fd-primary-foreground'
                : 'text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground'
            }`}
            onClick={() => {
              if (targetLocale === locale) return;

              router.push(
                switchLocalePath(pathname ?? '/', targetLocale, {
                  search: window.location.search,
                  hash: window.location.hash,
                }),
              );
            }}
            type="button"
          >
            {targetLocale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
