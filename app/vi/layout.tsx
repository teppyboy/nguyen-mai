import '../global.css';
import type { ReactNode } from 'react';
import { createSiteMetadata, SiteRootLayout } from '@/components/site-root-layout';

export const metadata = createSiteMetadata('vi');

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteRootLayout locale="vi">{children}</SiteRootLayout>;
}
