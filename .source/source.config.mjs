// source.config.ts
import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs"
});
var blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    authors: z.array(z.string()).default([]),
    date: z.string(),
    tags: z.array(z.string()).default([])
  })
});
var source_config_default = defineConfig();
export {
  blog,
  source_config_default as default,
  docs
};
