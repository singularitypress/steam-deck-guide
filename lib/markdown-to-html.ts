import { remark } from "remark";
import html from "remark-html";

/**
 * @description modified version of this: [Vercel's demo](https://raw.githubusercontent.com/vercel/next.js/canary/examples/blog-starter-typescript/lib/markdownToHtml.ts)
 * @param markdown the text content of the markdown document
 * @returns stringified HTML
 */
export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};
