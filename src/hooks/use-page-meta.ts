import { useEffect } from "react";

export const SITE_URL = "https://upgradnet.com";
const SITE_NAME = "Upgrade Net";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

type PageMeta = {
  title: string;
  description?: string;
  /** Route path, e.g. "/internet". Used for canonical and og:url. */
  path?: string;
  /** Optional JSON-LD object (only for content that is visible on the page). */
  jsonLd?: Record<string, unknown>;
  /** Optional Open Graph / Twitter title and description when they differ from the page's. */
  ogTitle?: string;
  ogDescription?: string;
  ogType?: "website" | "article";
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function usePageMeta({
  title,
  description,
  path,
  jsonLd,
  ogTitle,
  ogDescription,
  ogType = "website",
}: PageMeta) {
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;

    if (description) {
      setMeta("name", "description", description);
    }
    const shareDescription = ogDescription ?? description;
    if (shareDescription) {
      setMeta("property", "og:description", shareDescription);
      setMeta("name", "twitter:description", shareDescription);
    }
    setMeta("property", "og:title", ogTitle ?? title);
    setMeta("name", "twitter:title", ogTitle ?? title);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);

    if (path !== undefined) {
      const url = `${SITE_URL}${path === "/" ? "/" : path}`;
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
      setMeta("property", "og:url", url);
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLdText) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-jsonld", "true");
      script.textContent = jsonLdText;
      document.head.appendChild(script);
    }
    return () => {
      script?.remove();
    };
  }, [title, description, path, jsonLdText, ogTitle, ogDescription, ogType]);
}
