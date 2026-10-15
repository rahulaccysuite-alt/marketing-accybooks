import Credibility from "../sections/Credibility";
import Demo from "../sections/Demo";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import IntegrationStrip from "../sections/IntegrationStrip";
import Platform from "../sections/Platform";
import Pricing from "../sections/Pricing";
import Resources from "../sections/Resources";
import Solutions from "../sections/Solutions";
import Workflow from "../sections/Workflow";
import { staticPageMeta } from "../data/routes";
import PageShell from "./PageShell";

export default function HomePage() {
  return (
    <PageShell {...staticPageMeta["/"]}>
      <Hero />
      <IntegrationStrip />
      <Features />
      <Platform />
      <Workflow />
      <Solutions />
      <Credibility />
      <Pricing />
      <Resources />
      <Demo />
    </PageShell>
  );
}
