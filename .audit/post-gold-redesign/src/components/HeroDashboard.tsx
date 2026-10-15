import Icon, { type IconName } from "./Icon";

const sidebar: [IconName, string][] = [
  ["grid", "Dashboard"],
  ["people", "Clients"],
  ["bank", "Transactions"],
  ["sync", "Reconcile"],
  ["shield", "Compliance"],
  ["report", "Reports"],
];

const kpis: [IconName, string, string, string][] = [
  ["people", "Total clients", "148", "+6 this month"],
  ["briefcase", "Open tasks", "37", "12 due this week"],
  ["document", "Upcoming deadlines", "9", "Next: GST/HST · Oct 31"],
];

const completion = [62, 74, 58, 81, 69, 88, 92];
const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

const accounts: [string, string, "ok" | "review" | "alert"][] = [
  ["Operating account", "Reconciled", "ok"],
  ["Payroll account", "3 exceptions", "alert"],
  ["Savings account", "In review", "review"],
];

/** Illustrative firm-console mockup with sample data, announced to assistive tech as a single image. */
export default function HeroDashboard() {
  return (
    <figure className="dash" role="img" aria-label="AccyBooks firm console showing total clients, open tasks, upcoming deadlines, task completion, compliance status, and bank reconciliation">
      <div className="dash-bar" aria-hidden="true">
        <span className="frame-dots"><i /><i /><i /></span>
        <span className="frame-title">AccyBooks · Firm Console</span>
        <span className="dash-sample">Sample data</span>
      </div>
      <div className="dash-body" aria-hidden="true">
        <aside className="dash-side">
          <span className="dash-brand"><img src="/accybooks-logo-lockup-light.png" alt="" width={574} height={119} /></span>
          <ul>
            {sidebar.map(([icon, label], i) => (
              <li key={label} className={i === 0 ? "is-active" : ""}><Icon name={icon} size={14} /><span>{label}</span></li>
            ))}
          </ul>
          <span className="dash-period"><i className="status-dot ok" /><span>Active period</span></span>
        </aside>

        <div className="dash-main">
          <div className="dash-head">
            <div>
              <b>Practice overview</b>
              <small>Accysuite Practice Firm · Q4</small>
            </div>
            <span className="dash-chip">This month</span>
          </div>

          <div className="dash-kpis">
            {kpis.map(([icon, label, value, meta]) => (
              <div className="dash-card dash-kpi" key={label}>
                <span className="dash-kpi-label"><Icon name={icon} size={12} />{label}</span>
                <b>{value}</b>
                <small>{meta}</small>
              </div>
            ))}
          </div>

          <div className="dash-row">
            <div className="dash-card dash-chart">
              <div className="dash-card-head"><b>Task completion</b><span className="dash-up">92%</span></div>
              <div className="dash-bars">
                {completion.map((value, i) => (
                  <span key={i}><i style={{ height: `${value}%` }} /><em>{weekdays[i]}</em></span>
                ))}
              </div>
            </div>
            <div className="dash-card dash-compliance">
              <div className="dash-card-head"><b>Compliance status</b></div>
              <div className="dash-donut-wrap">
                <span className="dash-donut"><span><b>78%</b><small>on track</small></span></span>
                <ul className="dash-legend">
                  <li><i className="lg-filed" />Filed</li>
                  <li><i className="lg-review" />In review</li>
                  <li><i className="lg-due" />Due soon</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dash-card dash-recon">
            <div className="dash-card-head"><b>Bank reconciliation</b><span className="dash-muted">3 accounts</span></div>
            {accounts.map(([name, state, tone]) => (
              <div className="dash-recon-row" key={name}>
                <Icon name="bank" size={13} />
                <span>{name}</span>
                <span className={`dash-state ${tone}`}><i className={`status-dot ${tone}`} />{state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
