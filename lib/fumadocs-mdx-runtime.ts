import fs from 'node:fs';

type RuntimeInfo = {
  path: string;
  absolutePath: string;
};

type RuntimeFile = {
  info: RuntimeInfo;
  data: Record<string, any>;
};

function createDocEntry(file: RuntimeFile) {
  const { default: body, frontmatter = {}, ...exports } = file.data;

  return {
    body,
    ...exports,
    ...frontmatter,
    info: {
      path: file.info.path,
      fullPath: file.info.absolutePath,
    },
    _file: file.info,
    _exports: file.data,
    get content() {
      return fs.readFileSync(file.info.absolutePath, 'utf8');
    },
  };
}

function createMetaEntry(file: RuntimeFile) {
  return {
    ...file.data,
    info: {
      path: file.info.path,
      fullPath: file.info.absolutePath,
    },
    _file: file.info,
  };
}

function toFumadocsSource(docs: ReturnType<typeof createDocEntry>[], meta: ReturnType<typeof createMetaEntry>[]) {
  return {
    files: [
      ...docs.map((entry) => ({
        type: 'page' as const,
        path: entry._file.path,
        absolutePath: entry._file.absolutePath,
        data: entry,
      })),
      ...meta.map((entry) => ({
        type: 'meta' as const,
        path: entry._file.path,
        absolutePath: entry._file.absolutePath,
        data: entry,
      })),
    ],
  };
}

export const _runtime = {
  doc<T extends RuntimeFile>(files: T[]) {
    return files.map((file) => createDocEntry(file));
  },
  docs<TDoc extends RuntimeFile, TMeta extends RuntimeFile>(docs: TDoc[], meta: TMeta[] = []) {
    const parsedDocs = docs.map((file) => createDocEntry(file));
    const parsedMeta = meta.map((file) => createMetaEntry(file));

    return {
      docs: parsedDocs,
      meta: parsedMeta,
      toFumadocsSource() {
        return toFumadocsSource(parsedDocs, parsedMeta);
      },
    };
  },
};
