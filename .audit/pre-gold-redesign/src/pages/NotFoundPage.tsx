import Button from "../components/Button";
import { notFoundMeta } from "../data/routes";
import PageShell from "./PageShell";

export default function NotFoundPage() {
  return (
    <PageShell title={notFoundMeta.title} description={notFoundMeta.description} className="content-page">
      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Page not found</span></nav>
          <div className="page-hero-copy">
            <span className="eyebrow-text">404</span>
            <h1 id="page-title">We couldn't find that page.</h1>
            <p className="hero-lead">{notFoundMeta.description} Use the links below to keep exploring AccyBooks.</p>
            <div className="hero-actions">
              <Button href="/">Return home</Button>
              <Button variant="secondary" href="/platform">Explore the platform</Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
