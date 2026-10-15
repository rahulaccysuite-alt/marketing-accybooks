import { useState } from "react";
import Button from "../components/Button";
import Icon, { type IconName } from "../components/Icon";
import TiltCard from "../components/TiltCard";
import { staticPageMeta } from "../data/routes";
import { DirectoryHeader, DirectoryTools, EmptyState } from "./directory";
import PageShell from "./PageShell";

export default function IntegrationsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", "Banking", "Accounting data", "Productivity", "Documents", "Data transfer"];
  const items: [string, string, string, string, IconName][] = [
    ["Bank data connections", "Banking", "Planned", "Connections will be listed only after availability is confirmed.", "bank"],
    ["CSV / OFX import", "Data transfer", "Product workflow", "Bring structured transaction files into the AccyBooks review workflow.", "document"],
    ["Accounting data exchange", "Accounting data", "Availability to confirm", "Structured accounting data workflows are being evaluated.", "book"],
    ["Email and calendar", "Productivity", "Planned", "Planned workflow category; specific providers are not yet represented as live.", "briefcase"],
    ["Document signing", "Documents", "Planned", "A planned category for keeping document workflows close to client work.", "document"],
    ["Reporting export", "Data transfer", "Availability to confirm", "Export availability and formats will be documented before launch.", "report"],
  ];
  const filtered = items.filter(([name, type]) => (category === "All" || type === category) && name.toLowerCase().includes(query.toLowerCase()));

  return (
    <PageShell {...staticPageMeta["/integrations"]} className="directory-page">
      <div className="wrap">
        <DirectoryHeader icon="sync" crumb="Integrations" eyebrow="Integrations directory" title="Connect the work around your practice." copy="Explore product workflows and planned connection categories. Availability is labeled clearly so planned items are never presented as operational." />
        <DirectoryTools query={query} setQuery={setQuery} placeholder="Search integration categories" categories={categories} category={category} setCategory={setCategory} />
        <section className="card-grid" aria-label="Integration categories">
          {filtered.map(([name, type, status, copy, icon]) => (
            <TiltCard className="directory-card" key={name}>
              <div className="directory-card-top"><span className="icon-tile depth"><Icon name={icon} /></span><span className="status-pill">{status}</span></div>
              <h2>{name}</h2>
              <span className="eyebrow-text">{type}</span>
              <p>{copy}</p>
              <a className="card-link" href="/contact">Request details <Icon name="arrow" size={16} /></a>
            </TiltCard>
          ))}
          {!filtered.length && <EmptyState>No integration categories match your search.</EmptyState>}
        </section>
        <section className="cta-band" aria-labelledby="integration-cta-title">
          <div><span className="eyebrow-text">Need another connection?</span><h2 id="integration-cta-title">Tell us what your practice needs.</h2><p>Share the workflow, provider, and context behind your request.</p></div>
          <Button href="/contact">Request an integration</Button>
        </section>
      </div>
    </PageShell>
  );
}
