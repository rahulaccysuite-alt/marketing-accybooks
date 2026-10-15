import Icon, { type IconName } from "../components/Icon";

const items: [string, string, IconName][] = [
  ["Banking", "Planned", "bank"],
  ["CSV / OFX", "Product workflow", "document"],
  ["Accounting data", "Availability to confirm", "book"],
  ["Email & productivity", "Planned", "briefcase"],
  ["Data export", "Availability to confirm", "report"],
];

export default function IntegrationStrip() {
  return (
    <section className="integration-strip" aria-label="Integration categories">
      <div className="wrap strip-inner">
        <div className="strip-intro">
          <span className="eyebrow-text">Connect your work</span>
          <b>Integration availability, clearly labeled.</b>
        </div>
        <ul className="strip-items">
          {items.map(([name, status, icon]) => (
            <li key={name}>
              <a href="/integrations">
                <span className="icon-tile icon-tile-sm"><Icon name={icon} size={17} /></span>
                <span><b>{name}</b><small>{status}</small></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
