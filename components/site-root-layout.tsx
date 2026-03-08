import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getDictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { monoFont, sansFont } from '@/lib/fonts';
import { siteConfig } from '@/lib/site';
import { SiteProvider } from '@/components/site-provider';
import { SiteFooter } from '@/components/site-footer';

type SiteRootLayoutProps = {
  children: ReactNode;
  locale: SiteLocale;
};

export function createSiteMetadata(locale: SiteLocale): Metadata {
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.siteTitle,
      template: `%s | ${dict.siteTitle}`,
    },
    description: dict.siteTagline,
    openGraph: {
      title: dict.siteTitle,
      description: dict.siteTagline,
      siteName: dict.siteTitle,
      type: 'website',
      url: locale === 'en' ? siteConfig.url : `${siteConfig.url}/${locale}`,
      images: ['/img/126090215_p0.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.siteTitle,
      description: dict.siteTagline,
      images: ['/img/126090215_p0.png'],
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export function SiteRootLayout({ children, locale }: SiteRootLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sansFont.className} ${sansFont.variable} ${monoFont.variable} flex min-h-screen flex-col bg-fd-background text-fd-foreground antialiased`}
      >
        <SiteProvider locale={locale}>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <SiteFooter locale={locale} />
          </div>
        </SiteProvider>
      </body>
    </html>
  );
}
