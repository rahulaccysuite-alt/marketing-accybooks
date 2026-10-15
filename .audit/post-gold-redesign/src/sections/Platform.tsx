import { useRef, useState, type KeyboardEvent } from "react";
import Icon from "../components/Icon";
import ProductPreview from "../components/ProductPreview";
import SectionHeading from "../components/SectionHeading";
import { showcase } from "../data/content";

export default function Platform() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStart = useRef<number | null>(null);
  const item = showcase[active];
  const count = showcase.length;

  function select(next: number, focus = false) {
    const index = (next + count) % count;
    setActive(index);
    if (focus) tabRefs.current[index]?.focus();
    tabRefs.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    const map: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: count - 1 };
    if (!(event.key in map)) return;
    event.preventDefault();
    select(map[event.key], true);
  }

  return (
    <section className="section platform" id="platform" aria-labelledby="platform-title">
      <div className="wrap">
        <SectionHeading kicker="The AccyBooks platform" title="See AccyBooks in Action" id="platform-title">
          <p>Move through daily client work with less friction. AccyBooks connects the records, workflows, and reporting that keep your practice moving.</p>
        </SectionHeading>

        <div className="tabs" role="tablist" aria-label="Platform features">
          {showcase.map((tab, i) => (
            <button
              type="button"
              key={tab.title}
              id={`product-tab-${i}`}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              aria-selected={i === active}
              aria-controls="platform-panel"
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "is-active" : ""}
              onClick={() => select(i)}
              onKeyDown={(e) => handleTabKey(e, i)}
            >
              <span className="tab-icon"><Icon name={tab.icon} size={17} /></span>
              {tab.tab}
            </button>
          ))}
        </div>

        <div
          className="showcase"
          id="platform-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${active}`}
          onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const distance = e.changedTouches[0].clientX - touchStart.current;
            touchStart.current = null;
            if (Math.abs(distance) > 50) select(active + (distance < 0 ? 1 : -1));
          }}
        >
          <div className="showcase-copy" key={active}>
            <span className="icon-tile"><Icon name={item.icon} size={22} /></span>
            <span className="eyebrow-text">Platform / {String(active + 1).padStart(2, "0")}</span>
            <h3>{item.tab}</h3>
            <p>{item.copy}</p>
            <ul className="check-list">
              {item.details.map((detail) => <li key={detail}><span className="check-badge"><Icon name="check" size={12} /></span>{detail}</li>)}
            </ul>
            <a className="card-link" href={item.href}>Explore {item.title} <Icon name="arrow" size={16} /></a>
            <div className="showcase-nav">
              <button type="button" className="round-btn round-btn-prev" aria-label="Previous platform view" onClick={() => select(active - 1)}><Icon name="arrow" size={18} /></button>
              <span aria-hidden="true">{String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
              <button type="button" className="round-btn" aria-label="Next platform view" onClick={() => select(active + 1)}><Icon name="arrow" size={18} /></button>
            </div>
          </div>
          <div className="showcase-screen">
            <ProductPreview focus={item.focus} priority sizes="(min-width: 1024px) 820px, 100vw" />
            <p className="showcase-caption">
              <Icon name={item.icon} size={16} />
              <span><b>{item.tab}</b> · {item.details.join(" · ")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
