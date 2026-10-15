import { featureDestinations, features, focusForFeature, pageRoutes, signInPage } from "./data/content";
import { getRouteMeta, normalizePath, staticPageMeta } from "./data/routes";
import ArticlePage from "./pages/ArticlePage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import IntegrationsPage from "./pages/IntegrationsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PageShell from "./pages/PageShell";
import ResourcesPage from "./pages/ResourcesPage";
import Demo from "./sections/Demo";
import Pricing from "./sections/Pricing";

export default function App() {
  const path = normalizePath(window.location.pathname);

  if (!getRouteMeta(path)) return <NotFoundPage />;
  if (path === "/pricing") {
    return (
      <PageShell {...staticPageMeta["/pricing"]}>
        <Pricing standalone />
      </PageShell>
    );
  }
  if (path === "/book-a-demo") {
    return (
      <PageShell {...staticPageMeta["/book-a-demo"]}>
        <Demo standalone />
      </PageShell>
    );
  }
  if (path === "/integrations") return <IntegrationsPage />;
  if (path === "/resources") return <ResourcesPage />;
  if (path.startsWith("/resources/")) return <ArticlePage path={path} />;
  if (pageRoutes[path]) return <ContentPage config={pageRoutes[path]} />;

  const featureIndex = featureDestinations.indexOf(path);
  if (featureIndex >= 0) {
    const [icon, title, description] = features[featureIndex];
    return (
      <ContentPage
        config={{
          eyebrow: "AccyBooks capability",
          seoTitle: title,
          title,
          description,
          icon,
          focus: focusForFeature[featureIndex],
          pillars: [["Keep context connected", "Bring the relevant records and current work into one focused workflow."], ["Review with clarity", "Keep exceptions and next steps visible for professional review."], ["Explore your workflow", "Request a walkthrough to confirm how this capability fits your practice."]],
          links: [["Explore all features", "/#features"], ["See the platform", "/#platform"], ["Request a demo", "/book-a-demo"]],
        }}
      />
    );
  }
  if (path === "/sign-in") return <ContentPage config={signInPage} />;
  return <HomePage />;
}
