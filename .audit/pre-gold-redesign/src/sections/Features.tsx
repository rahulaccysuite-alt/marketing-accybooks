import FeatureCarousel from "../components/FeatureCarousel";
import Icon, { type IconName } from "../components/Icon";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { carouselFeatures, featureDestinations, featurePreviews, features } from "../data/content";

function FeaturePreview({ index, icon }: { index: number; icon: IconName }) {
  const [heading, ...rows] = featurePreviews[index];
  let body;
  if (index === 6) {
    body = <div className="preview-chart">{[35, 55, 42, 70, 58, 88, 76].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>;
  } else if (index === 3) {
    body = (
      <div className="preview-reconcile">
        <span className="progress-dial"><span /></span>
        <div><b>Account review</b><small>Matches · Exceptions</small></div>
        <Icon name="check" size={17} />
      </div>
    );
  } else {
    body = rows.map((row, i) => (
      <div className="preview-row" key={row}>
        <i className={`preview-dot dot-${i}`} />
        <span>{row}</span>
        {index === 7 || index === 8
          ? <span className="preview-state">{["Preparation", "Review", "In view"][i]}</span>
          : <span className="preview-track"><i style={{ width: `${85 - i * 22}%` }} /></span>}
      </div>
    ));
  }
  return (
    <div className="feature-preview depth" aria-hidden="true">
      <div className="preview-head"><Icon name={icon} size={14} /><strong>{heading}</strong><span>Sample</span></div>
      {body}
    </div>
  );
}

export default function Features() {
  const slides = carouselFeatures.map(({ index, title }, i) => {
    const [icon, , copy] = features[index];
    return {
      key: title,
      label: title,
      content: (
        <TiltCard className="feature-card" tone="dark">
          <div className="feature-top">
            <span className="icon-tile icon-tile-dark depth"><Icon name={icon} size={22} /></span>
            <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3>{title}</h3>
          <p>{copy}</p>
          <FeaturePreview index={index} icon={icon} />
          <a className="card-link" href={featureDestinations[index]} aria-label={`Explore feature: ${title}`}>
            Explore Feature <Icon name="arrow" size={16} />
          </a>
        </TiltCard>
      ),
    };
  });

  return (
    <section className="section section-dark feature-section" id="features" aria-labelledby="features-title">
      <div className="wrap">
        <SectionHeading kicker="Capabilities that work together" title="Everything Your Accounting Practice Needs" id="features-title" tone="dark">
          <p>Manage clients, bookkeeping, reconciliation, compliance, and reporting from one connected workspace.</p>
        </SectionHeading>
      </div>
      <FeatureCarousel id="feature-track" label="AccyBooks features" slides={slides} />
    </section>
  );
}
