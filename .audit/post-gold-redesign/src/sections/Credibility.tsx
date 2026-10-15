import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";

export default function Credibility() {
  return (
    <section className="section section-ivory credibility" id="integrations" aria-labelledby="credibility-title">
      <span className="anchor-target" id="about" />
      <div className="wrap">
        <SectionHeading kicker="Connected, without overclaiming" title="Built for dependable accounting operations." id="credibility-title">
          <p>AccyBooks is designed around structured records, clear workflow ownership, and deliberate connections. Integration availability is always identified honestly.</p>
        </SectionHeading>
        <div className="credibility-grid">
          <TiltCard className="panel-card">
            <div className="panel-label">
              <span className="icon-tile depth"><Icon name="sync" /></span>
              <span><span className="eyebrow-text">Integrations</span><h3>Connect the work around your practice</h3></span>
            </div>
            <ul className="integration-list">
              {[["Bank data connections", "Planned"], ["CSV / OFX workflows", "Product workflow"], ["Data import and export", "Availability to confirm"]].map(([name, status]) => (
                <li key={name}><span className="integration-mark">{name[0]}</span><b>{name}</b><span className="status-pill">{status}</span></li>
              ))}
            </ul>
            <a className="card-link" href="/contact">Request an integration <Icon name="arrow" size={16} /></a>
          </TiltCard>
          <TiltCard className="panel-card panel-card-tint">
            <div className="panel-label">
              <span className="icon-tile depth"><Icon name="shield" /></span>
              <span><span className="eyebrow-text">Security by design</span><h3>Clarity and control at every layer</h3></span>
            </div>
            <p>Role-aware workflows, organized client records, and visible review states help teams work with appropriate context and accountability.</p>
            <ul className="check-list">
              {["Clear workspace and role context", "Visible workflow ownership", "Structured review and exception states"].map((x) => <li key={x}><span className="check-badge"><Icon name="check" size={12} /></span>{x}</li>)}
            </ul>
            <a className="card-link" href="#demo">Discuss your requirements <Icon name="arrow" size={16} /></a>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
