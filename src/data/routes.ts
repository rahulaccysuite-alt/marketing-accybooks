import { articleAliases, articlesMap } from "./articles";
import { featureDestinations, features, pageRoutes, signInPage } from "./content";

export const siteUrl = "https://accybooks.com";

export type RouteMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  indexable: boolean;
};

export const staticPageMeta = {
  "/": { title: "Accounting Practice Management", description: "Manage clients, bookkeeping, reconciliation, compliance, and reporting from one connected AccyBooks workspace." },
  "/pricing": { title: "Pricing", description: "Compare editable AccyBooks plan placeholders, capabilities, and common pricing questions." },
  "/book-a-demo": { title: "Book a Demo", description: "Request a tailored walkthrough of the AccyBooks accounting practice management platform." },
  "/integrations": { title: "Integrations", description: "Explore confirmed product workflows and planned AccyBooks integration categories." },
  "/resources": { title: "Resources", description: "Practical AccyBooks guides for clearer accounting workflows, reconciliation, compliance, and client operations." },
} satisfies Record<string, { title: string; description: string }>;

export const notFoundMeta = { title: "Page not found", description: "The page you are looking for does not exist or has moved." };

export const formatTitle = (title: string) => `${title} | AccyBooks`;

export const normalizePath = (pathname: string) => pathname.replace(/\/$/, "") || "/";

/** Resolves a pathname with the same precedence as App; null means the route does not exist. */
export function getRouteMeta(pathname: string): RouteMeta | null {
  const path = normalizePath(pathname);
  const page = (staticPageMeta as Record<string, { title: string; description: string }>)[path];
  if (page) return { ...page, canonicalPath: path, indexable: true };

  if (path.startsWith("/resources/")) {
    const target = articleAliases[path] ?? path;
    const article = articlesMap[target];
    return article ? { title: article.title, description: article.description, canonicalPath: target, indexable: true } : null;
  }

  const config = pageRoutes[path];
  if (config) return { title: config.eyebrow, description: config.description, canonicalPath: path, indexable: true };

  const featureIndex = featureDestinations.indexOf(path);
  if (featureIndex >= 0) {
    const [, title, description] = features[featureIndex];
    return { title, description, canonicalPath: path, indexable: true };
  }

  if (path === "/sign-in") return { title: signInPage.eyebrow, description: signInPage.description, canonicalPath: path, indexable: false };
  return null;
}

export const appRoutes = [...new Set([...Object.keys(staticPageMeta), ...Object.keys(articlesMap), ...Object.keys(articleAliases), ...Object.keys(pageRoutes), ...featureDestinations, "/sign-in"])];
