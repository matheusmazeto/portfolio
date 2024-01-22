// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    abstract: { type: "string", required: true },
    publishedOn: { type: "string", required: true }
    // author: { type: 'string', required: false },
    // brief: { type: 'string', required: false },
    // heroImage: { type: 'string', required: false },
    // readTimeInMinutes: { type: 'number', required: false },
    // createdAt: { type: 'date', required: false },
    // updatedAt: { type: 'date', required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split("/");
        return parts[parts.length - 1];
      }
    },
    url: {
      type: "string",
      resolve: (post) => {
        const parts = post._raw.flattenedPath.split("/");
        const slug = parts[parts.length - 1];
        return `/blog/${slug}`;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // [
      //   rehypePrettyCode,
      //   {
      //     theme: "github-dark",
      //     onVisitLine(node) {
      //       // Prevent lines from collapsing in `display: grid` mode, and allow empty
      //       // lines to be copy/pasted
      //       if (node.children.length === 0) {
      //         node.children = [{ type: "text", value: " " }]
      //       }
      //     },
      //     onVisitHighlightedLine(node) {
      //       node.properties.className.push("line--highlighted")
      //     },
      //     onVisitHighlightedWord(node) {
      //       node.properties.className = ["word--highlighted"]
      //     },
      //   },
      // ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BOADTXCF.mjs.map
