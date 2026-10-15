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
    ["Bank data connections", "Banking", "Planned", "Direct bank connections are planned. Supported institutions will be listed here once they are live.", "bank"],
    ["CSV / OFX import", "Data transfer", "Product workflow", "Import CSV and OFX transaction files directly into the AccyBooks review workflow.", "document"],
    ["Accounting data exchange", "Accounting data", "Under evaluation", "We're evaluating structured ways to move accounting data into and out of AccyBooks.", "book"],
    ["Email and calendar", "Productivity", "Planned", "A planned category. Specific providers will be named here once connections are live.", "briefcase"],
    ["Document signing", "Documents", "Planned", "A planned category for keeping engagement letters and client documents close to the work.", "document"],
    ["Reporting export", "Data transfer", "Under evaluation", "Supported export formats will be documented here once confirmed.", "report"],
  ];
  const filtered = items.filter(([name, type]) => (category === "All" || type === category) && name.toLowerCase().includes(query.toLowerCase()));

  return (
    <PageShell {...staticPageMeta["/integrations"]} className="directory-page">
      <div className="wrap">
        <DirectoryHeader icon="sync" crumb="Integrations" eyebrow="Integrations directory" title="Connect the work around your practice." copy="See which connections are available today and which are on the roadmap. Every item is clearly labeled, so you know exactly what to expect." />
        <DirectoryTools query={query} setQuery={setQuery} placeholder="Search integration categories" categories={categories} category={category} setCategory={setCategory} />
        <section className="card-grid" aria-label="Integration categories">
          {filtered.map(([name, type, status, copy, icon]) => (
            <TiltCard className="directory-card" intensity={5} key={name}>
              <div className="directory-card-top"><span className="icon-tile icon-tile-aqua depth"><Icon name={icon} /></span><span className="status-pill">{status}</span></div>
              <h2>{name}</h2>
              <span className="eyebrow-text">{type}</span>
              <p>{copy}</p>
              <a className="card-link" href="/contact">Request details <Icon name="arrow" size={16} /></a>
            </TiltCard>
          ))}
          {!filtered.length && <EmptyState>No integration categories match your search.</EmptyState>}
        </section>
        <section className="cta-band" aria-labelledby="integration-cta-title">
          <div><span className="eyebrow-text">Need another connection?</span><h2 id="integration-cta-title">Tell us what your practice needs.</h2><p>Tell us which system you use and how you need data to move. Your request helps us prioritize what we build next.</p></div>
          <Button href="/contact">Request an integration</Button>
        </section>
      </div>
    </PageShell>
  );
}
