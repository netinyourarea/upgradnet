export type Block =
  | { k: "p"; v: string }
  | { k: "h3"; v: string }
  | { k: "q"; v: string }
  | { k: "ul"; v: readonly string[] }
  | { k: "ol"; v: readonly string[] }
  | { k: "table"; head: readonly string[]; rows: readonly (readonly string[])[] };

export type ArticlePath =
  | "/internet-service-assistance"
  | "/broadband-connection-assistance"
  | "/wifi-setup-troubleshooting"
  | "/cable-tv-services"
  | "/internet-troubleshooting"
  | "/router-setup-assistance"
  | "/home-internet-plans-guide"
  | "/network-troubleshooting";

/** Page-level data: URL, SEO metadata and card copy. */
export type ArticleMeta = {
  path: ArticlePath;
  category: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  summary: string;
  image: string;
  alt: string;
};

/** Body text, generated verbatim from the source Google Doc (see article-content.ts). */
export type ArticleContent = {
  intro: readonly string[];
  sections: readonly { id: string; heading: string; blocks: readonly Block[] }[];
  faqHeading: string;
  faqs: readonly { q: string; a: string }[];
  closing?: { heading: string; text: readonly string[] };
};

export type Article = ArticleMeta & ArticleContent;
