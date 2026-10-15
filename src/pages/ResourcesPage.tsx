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
    ["Improving Accounting Practice Workflows", "Operations", "A practical framework for more visible, consistent, and reviewable recurring work.", "/resources/improve-accounting-workflows"],
    ["Bank Reconciliation Best Practices", "Reconciliation", "Build a clearer process for matching transactions, resolving exceptions, and review.", "/resources/bank-reconciliation-guide"],
    ["Organizing Client Financial Records", "Client work", "Keep supporting documents close to the accounting work they support.", "/resources/client-financial-records"],
    ["Understanding GST/HST Filing Workflows", "Compliance", "Structure GST/HST preparation and review without losing period context.", "/resources/gst-hst-workflows"],
    ["Improving Visibility Into Accounting Operations", "Operations", "Make current status and ownership easier to understand.", "/resources/accounting-operations-visibility"],
  ];
  const filtered = articles.filter(([title, type]) => (category === "All" || category === type) && title.toLowerCase().includes(query.toLowerCase()));
  const icons: IconName[] = ["report", "sync", "people", "shield", "chart"];

  return (
    <PageShell {...staticPageMeta["/resources"]} className="directory-page">
      <div className="wrap">
        <DirectoryHeader icon="book" crumb="Resources" eyebrow="Resource centre" title="Practical guides for modern accounting practices." copy="Straightforward guidance on reconciliation, client records, compliance, and day-to-day practice workflows." />
        <DirectoryTools query={query} setQuery={setQuery} placeholder="Search resources" categories={["All", "Operations", "Reconciliation", "Client work", "Compliance"]} category={category} setCategory={setCategory} />
        <section className="card-grid" aria-label="Articles">
          {filtered.map(([title, type, copy, href]) => {
            const i = articles.findIndex((a) => a[0] === title);
            return (
              <TiltCard className="directory-card article-card" intensity={5} key={title}>
                <div className={`article-visual visual-${i % 2}`} aria-hidden="true"><span className="depth"><Icon name={icons[i]} size={28} /></span></div>
                <span className="eyebrow-text">{type} · Practice guide</span>
                <h2>{title}</h2>
                <p>{copy}</p>
                <a className="card-link" href={href}>Read article <Icon name="arrow" size={16} /></a>
              </TiltCard>
            );
          })}
          {!filtered.length && <EmptyState>No resources match your search.</EmptyState>}
        </section>
        <section className="cta-band cta-band-navy" aria-labelledby="newsletter-title">
          <div><span className="eyebrow-text">Resource updates</span><h2 id="newsletter-title">New guides, straight to your inbox.</h2><p>Our newsletter is launching soon. Sign-up is not active yet, so no email is submitted or stored.</p></div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Work email address</label>
            <input id="newsletter-email" type="email" required placeholder="Work email address" />
            <button type="submit" className="btn btn-primary"><span>Coming soon</span></button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
