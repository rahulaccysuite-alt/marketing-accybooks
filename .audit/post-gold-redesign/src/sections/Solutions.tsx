import Button from "../components/Button";
import Icon, { type IconName } from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";

const items: [string, string, string, IconName, string][] = [
  ["Accounting firms", "See firm-wide work clearly", "Create consistency across client workflows, team coordination, and review.", "briefcase", "accounting-firms"],
  ["Bookkeepers", "Keep every transaction organized", "Move efficiently through records, reconciliations, and month-end work.", "book", "bookkeepers"],
  ["Finance teams", "Build confidence in reporting", "Bring account structure, financial statements, and review into focus.", "chart", "finance-teams"],
];

export default function Solutions() {
  return (
    <section className="section solutions" id="solutions" aria-labelledby="solutions-title">
      <div className="wrap">
        <SectionHeading kicker="Made for accounting work" title={<>Different roles.<br />One source of clarity.</>} id="solutions-title">
          <p>AccyBooks adapts to the way accounting professionals organize, review, and deliver work.</p>
          <Button variant="secondary" href="/solutions/accounting-firms">Explore solutions</Button>
        </SectionHeading>
        <div className="solution-list">
          {items.map(([label, title, copy, icon, slug], i) => (
            <TiltCard className="solution-card" key={label}>
              <div className="feature-top">
                <span className="icon-tile depth"><Icon name={icon} size={22} /></span>
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
