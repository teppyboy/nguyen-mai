import type { SiteLocale } from '@/lib/i18n';
import { defaultLocale, locales } from '@/lib/i18n';

export const siteConfig = {
  name: 'Nguyen Mai',
  url: 'https://nguyen-mai.tretrauit.me',
  githubUrl: 'https://github.com/teppyboy/nguyen-mai',
} as const;

export function localePrefix(locale: SiteLocale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function withLocale(locale: SiteLocale, href: string): string {
  const normalized = href === '' ? '/' : href.startsWith('/') ? href : `/${href}`;

  if (locale === defaultLocale) return normalized;
  if (normalized === '/') return `/${locale}`;

  return `/${locale}${normalized}`;
}

type SwitchLocalePathOptions = {
  search?: string;
  hash?: string;
};

export function switchLocalePath(pathname: string, locale: SiteLocale, options: SwitchLocalePathOptions = {}): string {
  const segments = pathname.split('/').filter((segment) => segment.length > 0);

  if (segments[0] && locales.includes(segments[0] as SiteLocale)) {
    segments.shift();
  }

  const normalized = segments.length > 0 ? `/${segments.join('/')}` : '/';
  const search = options.search ? (options.search.startsWith('?') ? options.search : `?${options.search}`) : '';
  const hash = options.hash ? (options.hash.startsWith('#') ? options.hash : `#${options.hash}`) : '';

  return `${withLocale(locale, normalized)}${search}${hash}`;
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, siteConfig.url).toString();
}
