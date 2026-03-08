import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsSidebar } from '@/components/docs-sidebar';
import { getDictionary } from '@/lib/dictionaries';
import { serializePageTree } from '@/lib/docs-tree';
import { docsOptions } from '@/lib/layout.shared';
import { docsSource } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  const locale = 'vi';

  return (
    <DocsLayout
      {...docsOptions(locale)}
      tree={docsSource.getPageTree(locale)}
      sidebar={{
        component: <DocsSidebar dict={getDictionary(locale)} locale={locale} tree={serializePageTree(docsSource.getPageTree(locale))} />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
