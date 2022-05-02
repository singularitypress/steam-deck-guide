import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

/**
 * @description Modified version of [Vercel's demo](https://raw.githubusercontent.com/vercel/next.js/canary/examples/blog-starter-typescript/lib/api.ts)
 */
export class MarkdownApi {
  markdownDirectory: string;
  constructor(dir: string[]) {
    this.markdownDirectory = join(process.cwd(), "markdown", ...dir);

    this.getAllPosts = this.getAllPosts.bind(this);
    this.getPostBySlug = this.getPostBySlug.bind(this);
    this.getPostSlugs = this.getPostSlugs.bind(this);
  }

  /**
   * @returns Returns an array of slugs based on the markdown files in the `markdownDirectory`.
   */
  getPostSlugs() {
    return fs.readdirSync(this.markdownDirectory);
  }

  /**
   *
   * @param slug - the name of the markdown file we want to pull from.
   * @param fields - the metadata fields we want to pull from the markdown file.
   * @returns {Items} Object containing the slug, the markdown content, and whatever properties in the markdown
   * document can be extracted by gray-matter
   */
  getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(this.markdownDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    type Items = {
      [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  }

  /**
   *
   * @param fields - the properties we want in each of the returned post objects
   * @returns all of the posts
   */
  getAllPosts(fields: string[] = []) {
    const slugs = this.getPostSlugs();
    const posts = slugs
      .map((slug) => this.getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.title > post2.title ? -1 : 1));
    return posts;
  }
}
