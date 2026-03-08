import type { ReactNode } from 'react';
import type { Folder, Item, Node, Root, Separator } from 'fumadocs-core/page-tree';

export type SidebarTreeNode = SidebarTreePageNode | SidebarTreeFolderNode | SidebarTreeSeparatorNode;

export type SidebarTreePageNode = {
  type: 'page';
  name: string;
  url: string;
  external?: boolean;
};

export type SidebarTreeFolderNode = {
  type: 'folder';
  name: string;
  url?: string;
  external?: boolean;
  children: SidebarTreeNode[];
};

export type SidebarTreeSeparatorNode = {
  type: 'separator';
  name?: string;
};

function label(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  return '';
}

function serializeItem(node: Item): SidebarTreePageNode {
  return {
    type: 'page',
    name: label(node.name),
    url: node.url,
    external: node.external,
  };
}

function serializeSeparator(node: Separator): SidebarTreeSeparatorNode {
  return {
    type: 'separator',
    name: node.name ? label(node.name) : undefined,
  };
}

function serializeFolder(node: Folder): SidebarTreeFolderNode {
  return {
    type: 'folder',
    name: label(node.name),
    url: node.index?.url,
    external: node.index?.external,
    children: node.children.map(serializeNode),
  };
}

function serializeNode(node: Node): SidebarTreeNode {
  switch (node.type) {
    case 'page':
      return serializeItem(node);
    case 'separator':
      return serializeSeparator(node);
    case 'folder':
      return serializeFolder(node);
  }
}

export function serializePageTree(tree: Root): SidebarTreeNode[] {
  return tree.children.map(serializeNode);
}
