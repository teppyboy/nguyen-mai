'use client';

import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { SiteLocale } from '@/lib/i18n';
import { switchLocalePath } from '@/lib/site';
import { provider } from '@/lib/ui-i18n';

type SiteProviderProps = {
  children: ReactNode;
  locale: SiteLocale;
};

export function SiteProvider({ children, locale }: SiteProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <RootProvider
      i18n={{
        ...provider(locale),
        onLocaleChange(value) {
          if (value !== 'en' && value !== 'vi') return;

          const search = typeof window === 'undefined' ? '' : window.location.search;
          const hash = typeof window === 'undefined' ? '' : window.location.hash;

          router.push(
            switchLocalePath(pathname ?? '/', value, {
              search,
              hash,
            }),
          );
        },
      }}
      search={{ enabled: false }}
    >
      {children}
    </RootProvider>
  );
}
