import { useState } from "react";
import Button from "../components/Button";
import Icon, { type IconName } from "../components/Icon";
import TiltCard from "../components/TiltCard";
import { staticPageMeta } from "../data/routes";
import { DirectoryHeader, DirectoryTools, EmptyState } from "./directory";
import PageShell from "./PageShell";

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const articles = [
    ["Improving Accounting Practice Workflows", "Operations", "A practical framework for more visible, consistent recurring work.", "/resources/improve-accounting-workflows"],
    ["Bank Reconciliation Best Practices", "Reconciliation", "Build a clearer process for matches, exceptions, and review.", "/resources/bank-reconciliation-guide"],
    ["Organizing Client Financial Records", "Client work", "Keep supporting records close to the work they inform.", "/resources/client-financial-records"],
    ["Understanding GST/HST Filing Workflows", "Compliance", "Structure preparation and review without losing context.", "/resources/gst-hst-workflows"],
    ["Improving Visibility Into Accounting Operations", "Operations", "Make current status and ownership easier to understand.", "/resources/accounting-operations-visibility"],
  ];
  const filtered = articles.filter(([title, type]) => (category === "All" || category === type) && title.toLowerCase().includes(query.toLowerCase()));
  const icons: IconName[] = ["report", "sync", "people", "shield", "chart"];

  return (
    <PageShell {...staticPageMeta["/resources"]} className="directory-page">
      <div className="wrap">
        <DirectoryHeader icon="book" crumb="Resources" eyebrow="Resource centre" title="Practical thinking for modern accounting practices." copy="Explore clear, useful guidance without fabricated authors, statistics, or performance claims." />
        <DirectoryTools query={query} setQuery={setQuery} placeholder="Search resources" categories={["All", "Operations", "Reconciliation", "Client work", "Compliance"]} category={category} setCategory={setCategory} />
        <section className="card-grid" aria-label="Articles">
          {filtered.map(([title, type, copy, href]) => {
            const i = articles.findIndex((a) => a[0] === title);
            return (
              <TiltCard className="directory-card article-card" key={title}>
                <div className={`article-visual visual-${i % 2}`} aria-hidden="true"><span className="depth"><Icon name={icons[i]} size={28} /></span></div>
                <span className="eyebrow-text">{type} · Reading time placeholder</span>
                <h2>{title}</h2>
                <p>{copy}</p>
                <a className="card-link" href={href}>Read article <Icon name="arrow" size={16} /></a>
              </TiltCard>
            );
          })}
          {!filtered.length && <EmptyState>No resources match your search.</EmptyState>}
        </section>
        <section className="cta-band cta-band-navy" aria-labelledby="newsletter-title">
          <div><span className="eyebrow-text">Resource updates</span><h2 id="newsletter-title">Useful guidance, when it is ready.</h2><p>Newsletter UI placeholder. No subscription is submitted or stored.</p></div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Work email address</label>
            <input id="newsletter-email" type="email" required placeholder="Work email address" />
            <button type="submit" className="btn btn-primary"><span>Preview subscription</span></button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
