import { CONTENT } from "./article-content";
import { ARTICLES_META } from "./articles-meta";
import type { Article, ArticlePath } from "./article-types";

export type { Article, ArticlePath, Block } from "./article-types";

export const ARTICLES: readonly Article[] = ARTICLES_META.map((meta) => ({
  ...meta,
  ...CONTENT[meta.path],
}));

export const getArticle = (path: ArticlePath) => ARTICLES.find((a) => a.path === path);
