import { defineI18n } from 'fumadocs-core/i18n';

export const locales = ['en', 'vi'] as const;

export type SiteLocale = (typeof locales)[number];

export const defaultLocale: SiteLocale = 'en';

export const i18n = defineI18n({
  defaultLanguage: defaultLocale,
  languages: [...locales],
  hideLocale: 'default-locale',
  parser: 'dir',
});
