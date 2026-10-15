import { useRef, type PointerEvent } from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { hasFinePointer, prefersReducedMotion } from "../lib/motion";

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const el = stage.current;
    if (!el || event.pointerType !== "mouse" || !hasFinePointer() || prefersReducedMotion()) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--stage-rx", `${(-y * 5).toFixed(2)}deg`);
      el.style.setProperty("--stage-ry", `${(x * 7).toFixed(2)}deg`);
      el.style.setProperty("--float-x", `${(x * 14).toFixed(1)}px`);
      el.style.setProperty("--float-y", `${(y * 10).toFixed(1)}px`);
    });
  }

  function handleLeave() {
    cancelAnimationFrame(frame.current);
    ["--stage-rx", "--stage-ry", "--float-x", "--float-y"].forEach((prop) => stage.current?.style.removeProperty(prop));
  }

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-icon"><Icon name="spark" size={14} /></span>Accounting practice management</span>
          <h1 id="hero-title">Run Your Practice With <em>Clarity</em> and Control.</h1>
          <p className="hero-lead">Manage clients, streamline bookkeeping, reconcile transactions, and stay on top of compliance from one connected workspace.</p>
          <div className="hero-actions">
            <Button href="#demo">Book a demo</Button>
            <Button href="#platform" variant="secondary">Explore the platform</Button>
          </div>
          <ul className="hero-benefits">
            {["One connected workspace", "Better visibility", "Compliance-ready workflows"].map((item) => (
              <li key={item}><span className="check-badge"><Icon name="check" size={12} /></span>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-stage" ref={stage} onPointerMove={handleMove} onPointerLeave={handleLeave}>
          <div className="hero-stage-inner">
            <figure className="product-frame hero-frame hero-photo">
              <img src="/hero-analytics.png" width={544} height={306} alt="Financial analytics dashboards with charts and performance metrics" loading="eager" fetchPriority="high" />
            </figure>
          </div>
          <div className="float-card float-recon" aria-hidden="true">
            <span className="progress-dial"><span /></span>
            <div>
              <small>Bank reconciliation</small>
              <b>Operating account</b>
              <span className="float-meta"><i className="status-dot ok" />Matches reviewed · Exceptions in view</span>
            </div>
          </div>
          <div className="float-card float-compliance" aria-hidden="true">
            <span className="icon-tile icon-tile-sm"><Icon name="shield" size={17} /></span>
            <div>
              <small>Tax &amp; compliance</small>
              <b>GST/HST filing</b>
              <span className="float-meta"><i className="status-dot review" />Ready for review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
