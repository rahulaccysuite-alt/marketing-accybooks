import Button from "../components/Button";
import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";

const articles = [
  ["A practical guide to bank reconciliation", "Guide", 5, "/resources/bank-reconciliation-guide"],
  ["Organizing client financial records", "Operations", 6, "/resources/client-financial-records"],
  ["Understanding GST/HST filing workflows", "Compliance", 7, "/resources/gst-hst-workflows"],
] as const;

export default function Resources() {
  return (
    <section className="section section-ivory resources" id="resources" aria-labelledby="resources-title">
      <div className="wrap">
        <SectionHeading kicker="Practical thinking for modern practices" title="Workflows worth reading about." id="resources-title">
          <Button variant="secondary" href="/resources">View all resources</Button>
        </SectionHeading>
        <div className="resource-grid">
          <TiltCard className="featured-resource">
            <div className="resource-art" aria-hidden="true">
              <div className="art-window depth"><span /><span /><span /><b /><b /><b /></div>
            </div>
            <div className="featured-resource-body">
              <span className="eyebrow-text">Featured guide · 8 min read</span>
              <h3>How to improve accounting practice workflows</h3>
              <p>A practical framework for creating more visibility, consistency, and control across recurring client work.</p>
              <a className="card-link" href="/resources/improve-accounting-workflows">Read the guide <Icon name="arrow" size={16} /></a>
            </div>
          </TiltCard>
          <div className="resource-list">
            {articles.map(([title, type, minutes, href], i) => (
              <TiltCard className="resource-item" key={title}>
                <span className="card-index">0{i + 1}</span>
                <div>
                  <span className="eyebrow-text">{type} · {minutes} min read</span>
                  <h3>{title}</h3>
                  <a className="card-link" href={href}>Read article <Icon name="arrow" size={15} /></a>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
