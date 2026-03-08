import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { siteConfig, withLocale } from '@/lib/site';
import { LocaleSwitcher } from '@/components/locale-switcher';

function commonOptions(locale: SiteLocale): BaseLayoutProps {
  const dict = getDictionary(locale);

  return {
    searchToggle: {
      enabled: false,
    },
    githubUrl: siteConfig.githubUrl,
    nav: {
      title: dict.siteTitle,
      url: withLocale(locale, '/'),
    },
  };
}

export function homeOptions(locale: SiteLocale): BaseLayoutProps {
  const dict = getDictionary(locale);

  return {
    ...commonOptions(locale),
    links: [
      {
        text: dict.nav.docs,
        url: withLocale(locale, '/docs'),
        active: 'nested-url',
      },
      {
        text: dict.nav.blog,
        url: withLocale(locale, '/blog'),
        active: 'nested-url',
      },
      {
        type: 'custom',
        on: 'all',
        secondary: true,
        children: <LocaleSwitcher locale={locale} />,
      },
    ],
  };
}

export function docsOptions(locale: SiteLocale): BaseLayoutProps {
  return {
    ...commonOptions(locale),
    nav: {
      ...commonOptions(locale).nav,
      children: <LocaleSwitcher locale={locale} />,
    },
    links: [
      {
        text: getDictionary(locale).nav.docs,
        url: withLocale(locale, '/docs'),
        active: 'nested-url',
      },
      {
        text: getDictionary(locale).nav.blog,
        url: withLocale(locale, '/blog'),
        active: 'nested-url',
      },
    ],
  };
}
