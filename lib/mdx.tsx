import "server-only";

import { evaluate } from "@mdx-js/mdx";
import type { Root as MdastRoot } from "mdast";
import type { Element, Root as HastRoot } from "hast";
import * as runtime from "react/jsx-runtime";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { mdxComponents } from "@/components/mdx";

export type TocItem = { id: string; text: string };

/** ```mermaid fences become <Mermaid chart="..."/> so diagrams are plain text in the post. */
function remarkMermaid() {
  return (tree: MdastRoot) => {
    visit(tree, "code", (node, index, parent) => {
      if (node.lang !== "mermaid" || !parent || index === undefined) return;
      parent.children[index] = {
        type: "mdxJsxFlowElement",
        name: "Mermaid",
        attributes: [{ type: "mdxJsxAttribute", name: "chart", value: node.value }],
        children: [],
      } as unknown as MdastRoot["children"][number];
    });
  };
}

function textOf(node: Element): string {
  return node.children
    .map((child) => (child.type === "text" ? child.value : child.type === "element" ? textOf(child) : ""))
    .join("");
}

/** Collects h2 headings (after rehype-slug assigns ids) for the table of contents. */
function rehypeCollectToc(toc: TocItem[]) {
  return () => (tree: HastRoot) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "h2" && typeof node.properties?.id === "string") {
        toc.push({ id: node.properties.id, text: textOf(node).trim() });
      }
    });
  };
}

export async function renderMdx(source: string) {
  const toc: TocItem[] = [];
  const { default: Content } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm, remarkMermaid],
    rehypePlugins: [
      rehypeUnwrapImages,
      rehypeSlug,
      rehypeCollectToc(toc),
      [rehypeAutolinkHeadings, { behavior: "append", properties: { className: ["heading-anchor"], ariaLabel: "Link to this section" }, content: { type: "text", value: "#" } }],
      [rehypePrettyCode, { theme: "github-dark-default", keepBackground: true, defaultLang: { block: "plaintext" } }],
    ],
  });

  return { content: <Content components={mdxComponents} />, toc };
}
