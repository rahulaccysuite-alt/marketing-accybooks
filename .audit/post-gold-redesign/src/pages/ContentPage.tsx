import Button from "../components/Button";
import Icon from "../components/Icon";
import ProductPreview from "../components/ProductPreview";
import TiltCard from "../components/TiltCard";
import type { PageConfig } from "../data/content";
import PageShell from "./PageShell";

export default function ContentPage({ config }: { config: PageConfig }) {
  return (
    <PageShell title={config.seoTitle ?? config.eyebrow} description={config.description} className="content-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">{config.eyebrow}</span></nav>
          <div className="page-hero-grid">
            <div className="page-hero-copy">
              <span className="eyebrow"><span className="eyebrow-icon"><Icon name={config.icon} size={14} /></span>{config.eyebrow}</span>
              <h1 id="page-title">{config.title}</h1>
              <p className="hero-lead">{config.description}</p>
              <div className="hero-actions">
                <Button href="/book-a-demo">Book a demo</Button>
                <Button variant="secondary" href="/platform">Explore the platform</Button>
              </div>
            </div>
            {config.focus !== undefined ? (
              <div className="page-product">
                <ProductPreview focus={config.focus} priority sizes="(min-width: 1024px) 640px, 100vw" />
              </div>
            ) : (
              <div className="page-note">
                <span className="icon-tile icon-tile-dark"><Icon name={config.icon} size={24} /></span>
                <span className="eyebrow-text">AccyBooks</span>
                <h2>Clear workflows. Connected context.</h2>
                <p>Designed for modern accounting operations without unverified claims or unnecessary complexity.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section-ivory page-pillars" aria-label="Key benefits">
        <div className="wrap pillar-grid">
          {config.pillars.map(([title, copy], i) => (
            <TiltCard className="pillar-card" key={title}>
              <span className="card-index">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="section page-faq" aria-labelledby="page-faq-title">
        <div className="wrap split-grid">
          <div>
            <span className="eyebrow-text">Common questions</span>
            <h2 id="page-faq-title">Clear answers before your walkthrough.</h2>
          </div>
          <div className="details-list">
            <details><summary>Is this workflow available for a live product review?</summary><p>A tailored demo can focus on the currently available product areas most relevant to your practice.</p></details>
            <details><summary>Does AccyBooks replace professional review?</summary><p>No. AccyBooks is designed to organize context and workflow status while preserving professional judgment and review.</p></details>
            <details><summary>Can we discuss our specific process?</summary><p>Yes. The demo request includes space to describe your current workflow and the areas you want to improve.</p></details>
          </div>
        </div>
      </section>

      <section className="section section-ivory page-links" aria-labelledby="page-links-title">
        <div className="wrap split-grid">
          <div>
            <span className="eyebrow-text">Keep exploring</span>
            <h2 id="page-links-title">Find the next useful view.</h2>
          </div>
          <ul className="link-list">
            {config.links.map(([label, href]) => <li key={label}><a href={href}>{label}<Icon name="arrow" size={17} /></a></li>)}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
