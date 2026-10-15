import Button from "../components/Button";
import Icon, { type IconName } from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";

const items: [string, string, string, IconName, string][] = [
  ["Accounting firms", "See firm-wide work at a glance", "Standardize client workflows, coordinate your team, and keep partner review focused where it matters.", "briefcase", "accounting-firms"],
  ["Bookkeepers", "Keep every client's books current", "Move efficiently through transactions, reconciliations, and month-end close for every client.", "book", "bookkeepers"],
  ["Finance teams", "Report with confidence", "Bring account structure, financial statements, and review into one clear process.", "chart", "finance-teams"],
];

export default function Solutions() {
  return (
    <section className="section section-navy solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="wrap">
        <SectionHeading kicker="Who it's for" title={<>Different roles.<br />One source of clarity.</>} id="solutions-title" tone="dark">
          <p>Whether you lead a multi-partner firm or run an independent bookkeeping practice, AccyBooks fits the way you organize, review, and deliver client work.</p>
          <Button variant="ghost-light" href="/solutions/accounting-firms">Explore solutions</Button>
        </SectionHeading>
        <div className="solution-list">
          {items.map(([label, title, copy, icon, slug], i) => (
            <TiltCard className="solution-card" tone="dark" key={label}>
              <div className="feature-top">
                <span className="icon-tile icon-tile-dark depth"><Icon name={icon} size={22} /></span>
                <span className="card-index">0{i + 1}</span>
              </div>
              <span className="eyebrow-text">{label}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a className="card-link" href={`/solutions/${slug}`}>Explore for {label.toLowerCase()} <Icon name="arrow" size={16} /></a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
