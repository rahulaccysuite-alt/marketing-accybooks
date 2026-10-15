import { useEffect, useRef, type HTMLAttributes, type PointerEvent, type ReactNode } from "react";
import { hasFinePointer, prefersReducedMotion } from "../lib/motion";

type TiltCardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "li";
  /** Maximum rotation in degrees at the card edges. */
  intensity?: number;
  tone?: "light" | "dark";
  children: ReactNode;
};

export default function TiltCard({ as: Tag = "article", intensity = 6, tone = "light", className = "", children, ...rest }: TiltCardProps) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function handleMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || !hasFinePointer() || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--tilt-x", `${((0.5 - y) * intensity).toFixed(2)}deg`);
      el.style.setProperty("--tilt-y", `${((x - 0.5) * intensity).toFixed(2)}deg`);
      el.style.setProperty("--glare-x", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-y", `${(y * 100).toFixed(1)}%`);
      el.style.setProperty("--shadow-x", `${((0.5 - x) * 18).toFixed(1)}px`);
      el.dataset.tilting = "";
    });
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    ["--tilt-x", "--tilt-y", "--glare-x", "--glare-y", "--shadow-x"].forEach((prop) => el.style.removeProperty(prop));
    delete el.dataset.tilting;
  }

  return (
    <Tag
      ref={ref as never}
      className={`tilt-card tilt-${tone} ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onPointerCancel={handleLeave}
      {...rest}
    >
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </Tag>
  );
}
