'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Dictionary } from '@/lib/dictionaries';
import type { SiteLocale } from '@/lib/i18n';
import { siteConfig, withLocale } from '@/lib/site';
import type { SidebarTreeNode } from '@/lib/docs-tree';
import { LocaleSwitcher } from '@/components/locale-switcher';

type DocsSidebarProps = {
  locale: SiteLocale;
  dict: Dictionary;
  tree: SidebarTreeNode[];
};

type SidebarTreeProps = {
  nodes: SidebarTreeNode[];
  pathname: string;
  depth?: number;
};

function normalize(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

function isActive(pathname: string, href: string): boolean {
  const normalizedPathname = normalize(pathname);
  const normalizedHref = normalize(href);

  return normalizedPathname === normalizedHref || normalizedPathname.startsWith(`${normalizedHref}/`);
}

function sidebarPadding(depth: number): string {
  return `calc(${depth * 1.25}rem + 0.75rem)`;
}

function SidebarTree({ nodes, pathname, depth = 0 }: SidebarTreeProps) {
  return (
    <div className="flex flex-col gap-1">
      {nodes.map((node, index) => {
        if (node.type === 'separator') {
          return (
            <p
              key={`${depth}-separator-${index}`}
              className="mb-1 mt-6 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-fd-muted-foreground first:mt-0"
            >
              {node.name}
            </p>
          );
        }

        if (node.type === 'page') {
          const active = isActive(pathname, node.url);
          const className = `rounded-lg px-3 py-2 text-sm transition-colors ${active ? 'bg-fd-primary/10 font-medium text-fd-primary' : 'text-fd-muted-foreground hover:bg-fd-accent/60 hover:text-fd-accent-foreground'}`;

          return node.external ? (
            <a
              key={node.url}
              className={className}
              href={node.url}
              rel="noreferrer noopener"
              style={{ paddingInlineStart: sidebarPadding(depth) }}
              target="_blank"
            >
              {node.name}
            </a>
          ) : (
            <Link key={node.url} className={className} href={node.url} style={{ paddingInlineStart: sidebarPadding(depth) }}>
              {node.name}
            </Link>
          );
        }

        const folderActive = node.url ? isActive(pathname, node.url) : false;

        return (
          <div key={`${node.url ?? node.name}-${depth}-${index}`} className="flex flex-col gap-1">
            {node.url ? (
              node.external ? (
                <a
                  className={`rounded-lg px-3 py-2 text-sm ${folderActive ? 'font-semibold text-fd-foreground' : 'font-medium text-fd-foreground/90 hover:text-fd-foreground'}`}
                  href={node.url}
                  rel="noreferrer noopener"
                  style={{ paddingInlineStart: sidebarPadding(depth) }}
                  target="_blank"
                >
                  {node.name}
                </a>
              ) : (
                <Link
                  className={`rounded-lg px-3 py-2 text-sm ${folderActive ? 'font-semibold text-fd-foreground' : 'font-medium text-fd-foreground/90 hover:text-fd-foreground'}`}
                  href={node.url}
                  style={{ paddingInlineStart: sidebarPadding(depth) }}
                >
                  {node.name}
                </Link>
              )
            ) : (
              <div
                className={`rounded-lg px-3 py-2 text-sm ${folderActive ? 'font-semibold text-fd-foreground' : 'font-medium text-fd-foreground/90'}`}
                style={{ paddingInlineStart: sidebarPadding(depth) }}
              >
                {node.name}
              </div>
            )}
            {node.children.length > 0 ? <SidebarTree depth={depth + 1} nodes={node.children} pathname={pathname} /> : null}
          </div>
        );
      })}
    </div>
  );
}

export function DocsSidebar({ locale, dict, tree }: DocsSidebarProps) {
  const pathname = usePathname() ?? withLocale(locale, '/docs');

  return (
    <aside className="hidden border-e bg-fd-card text-sm xl:sticky xl:top-(--fd-docs-row-1) xl:flex xl:h-[calc(100dvh-var(--fd-docs-row-1))] xl:flex-col xl:[grid-area:sidebar] xl:w-[268px]">
      <div className="flex flex-col gap-3 border-b p-4 pb-3">
        <div className="flex items-center gap-3">
          <Link className="text-[0.9375rem] font-semibold text-fd-foreground" href={withLocale(locale, '/')}>
            {dict.siteTitle}
          </Link>
          <div className="ms-auto">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-fd-muted-foreground">
          <Link className="transition-colors hover:text-fd-foreground" href={withLocale(locale, '/docs')}>
            {dict.nav.docs}
          </Link>
          <Link className="transition-colors hover:text-fd-foreground" href={withLocale(locale, '/blog')}>
            {dict.nav.blog}
          </Link>
          <a className="transition-colors hover:text-fd-foreground" href={siteConfig.githubUrl} rel="noreferrer noopener" target="_blank">
            {dict.nav.github}
          </a>
        </div>
      </div>
      <nav aria-label={dict.docs.title} className="min-h-0 flex-1 overflow-y-auto p-4">
        <SidebarTree nodes={tree} pathname={pathname} />
      </nav>
    </aside>
  );
}
