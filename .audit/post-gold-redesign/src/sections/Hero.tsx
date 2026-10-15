import Button from "../components/Button";
import HeroDashboard from "../components/HeroDashboard";
import Icon from "../components/Icon";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Accounting practice management</span>
          <h1 id="hero-title">Run Your Practice With <em>Clarity</em> and Control.</h1>
          <p className="hero-lead">Manage clients, streamline bookkeeping, reconcile transactions, and stay on top of compliance from one connected workspace.</p>
          <div className="hero-actions">
            <Button href="#demo">Book a demo</Button>
            <Button href="#platform" variant="secondary">Explore the platform</Button>
          </div>
          <ul className="hero-benefits">
            {["One connected workspace", "Better visibility", "Compliance-ready workflows", "Save time with automation"].map((item) => (
              <li key={item}><span className="check-badge"><Icon name="check" size={12} /></span>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-stage">
          <HeroDashboard />
          <div className="float-card float-compliance" aria-hidden="true">
            <span className="icon-tile icon-tile-sm"><Icon name="shield" size={17} /></span>
            <div>
              <small>Tax &amp; compliance</small>
              <b>GST/HST filing</b>
              <span className="float-meta"><i className="status-dot review" />Ready for review</span>
            </div>
          </div>
          <div className="float-card float-recon" aria-hidden="true">
            <span className="progress-dial"><span /></span>
            <div>
              <small>Bank reconciliation</small>
              <b>Operating account</b>
              <span className="float-meta"><i className="status-dot ok" />Matches reviewed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
