import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Icon from "./Icon";
import { prefersReducedMotion } from "../lib/motion";

type FeatureCarouselProps = {
  id: string;
  label: string;
  slides: { key: string; label: string; content: ReactNode }[];
};

export default function FeatureCarousel({ id, label, slides }: FeatureCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const frame = useRef(0);
  const [stops, setStops] = useState<number[]>([0]);
  const [active, setActive] = useState(0);

  const nearestStop = useCallback((left: number, list: number[]) => {
    let best = 0;
    list.forEach((stop, i) => {
      if (Math.abs(stop - left) < Math.abs(list[best] - left)) best = i;
    });
    return best;
  }, []);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (!cards.length) return;
    const max = el.scrollWidth - el.clientWidth;
    const start = cards[0].offsetLeft;
    const next: number[] = [];
    for (const card of cards) {
      const left = Math.min(card.offsetLeft - start, max);
      if (!next.length || left - next[next.length - 1] > 4) next.push(left);
    }
    if (max > 0 && max - next[next.length - 1] > 4) next.push(max);
    setStops(next);
    setActive(nearestStop(el.scrollLeft, next));
  }, [nearestStop]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [measure]);

  function handleScroll() {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = track.current;
      if (el) setActive(nearestStop(el.scrollLeft, stops));
    });
  }

  function goTo(index: number) {
    const el = track.current;
    if (!el) return;
    const target = Math.max(0, Math.min(index, stops.length - 1));
    setActive(target);
    el.scrollTo({ left: stops[target], behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: stops.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    goTo(keys[event.key]);
  }

  const atStart = active === 0;
  const atEnd = active >= stops.length - 1;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label} onKeyDown={handleKeyDown}>
      <ul className="carousel-track" id={id} ref={track} onScroll={handleScroll} tabIndex={0} aria-label={`${label} — use arrow keys or swipe to browse`}>
        {slides.map((slide, i) => (
          <li className="carousel-slide" key={slide.key} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}: ${slide.label}`}>
            {slide.content}
          </li>
        ))}
      </ul>
      <div className="wrap carousel-controls">
        <div className="carousel-dots" role="group" aria-label="Choose carousel position">
          {stops.map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === active ? "is-active" : ""}
              aria-label={`Go to position ${i + 1} of ${stops.length}`}
              aria-current={i === active ? "true" : undefined}
              aria-controls={id}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="carousel-status" aria-live="polite">
          {pad(active + 1)} / {pad(stops.length)}
        </span>
        <div className="carousel-arrows">
          <button type="button" className="carousel-prev" aria-label="Previous features" aria-controls={id} disabled={atStart} onClick={() => goTo(active - 1)}>
            <Icon name="arrow" />
          </button>
          <button type="button" aria-label="Next features" aria-controls={id} disabled={atEnd} onClick={() => goTo(active + 1)}>
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
