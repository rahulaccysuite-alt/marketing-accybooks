import { useEffect } from "react";
import { formatTitle, getRouteMeta, siteUrl } from "../data/routes";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    const fullTitle = formatTitle(title);
    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");

    const route = getRouteMeta(window.location.pathname);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!route) {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
      upsertMeta("name", "robots", "noindex");
      return;
    }

    const url = `${siteUrl}${route.canonicalPath}`;
    upsertMeta("property", "og:url", url);
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    if (!route.indexable) upsertMeta("name", "robots", "noindex");
  }, [title, description]);
  return null;
}
