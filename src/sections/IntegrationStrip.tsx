import Icon, { type IconName } from "../components/Icon";

const items: [string, string, IconName][] = [
  ["Banking", "Planned", "bank"],
  ["CSV / OFX", "Product workflow", "document"],
  ["Accounting data", "Under evaluation", "book"],
  ["Email & productivity", "Planned", "briefcase"],
  ["Data export", "Under evaluation", "report"],
];

export default function IntegrationStrip() {
  return (
    <section className="integration-strip" aria-label="Integration categories">
      <div className="wrap strip-inner">
        <div className="strip-intro">
          <span className="eyebrow-text">Integrations</span>
          <b>See what's live and what's next.</b>
        </div>
        <ul className="strip-items">
          {items.map(([name, status, icon]) => (
            <li key={name}>
              <a href="/integrations">
                <span className="icon-tile icon-tile-sm icon-tile-aqua"><Icon name={icon} size={17} /></span>
                <span><b>{name}</b><small>{status}</small></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
