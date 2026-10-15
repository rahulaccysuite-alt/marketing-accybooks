import type { CSSProperties } from "react";

export type PreviewFocus = "dashboard" | "clients" | "reconciliation" | "compliance" | "reporting";

/**
 * Regions are percentages of the real 1920×862 firm-console screenshot.
 * `origin` is the zoom anchor; `box` outlines the panel that matches the selected workflow.
 */
const focusRegions: Record<PreviewFocus, { origin: [number, number]; zoom: number; box?: [number, number, number, number]; label: string }> = {
  dashboard: { origin: [50, 50], zoom: 1, label: "Firm console overview" },
  clients: { origin: [0, 24], zoom: 1.75, box: [0.8, 14.5, 35.4, 39.4], label: "Clients and active firm clients" },
  reconciliation: { origin: [62, 44], zoom: 1.6, box: [42.6, 20.8, 76.9, 78.6], label: "Pending reconciliations and categorization" },
  compliance: { origin: [97, 58], zoom: 1.75, box: [70.4, 40.6, 97.9, 78.6], label: "Compliance progress" },
  reporting: { origin: [0, 100], zoom: 1.6, box: [0.6, 40.6, 42.4, 97.4], label: "Firm cash flow and reports" },
};

type ProductPreviewProps = {
  focus?: PreviewFocus;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function ProductPreview({ focus = "dashboard", priority = true, sizes = "(min-width: 1024px) 720px, 100vw", className = "" }: ProductPreviewProps) {
  const region = focusRegions[focus];
  const zoomStyle = {
    transformOrigin: `${region.origin[0]}% ${region.origin[1]}%`,
    "--zoom": region.zoom,
  } as CSSProperties;

  return (
    <figure className={`product-frame ${className}`} data-focus={focus}>
      <div className="product-frame-bar" aria-hidden="true">
        <span className="frame-dots"><i /><i /><i /></span>
        <span className="frame-title">AccyBooks · Firm Console</span>
      </div>
      <div className="product-frame-viewport">
        <div className="product-frame-zoom" style={zoomStyle}>
          <picture>
            <source type="image/webp" srcSet="/accybooks-dashboard-768.webp 768w, /accybooks-dashboard-1280.webp 1280w, /accybooks-dashboard.webp 1920w" sizes={sizes} />
            <img
              src="/accybooks-dashboard-reference.png"
              width={1920}
              height={862}
              alt={`AccyBooks firm console screenshot — ${region.label}`}
              loading="eager"
              decoding="auto"
              fetchPriority={priority ? "high" : "auto"}
            />
          </picture>
          {region.box && (
            <span
              className="product-frame-focus"
              aria-hidden="true"
              style={{
                left: `${region.box[0]}%`,
                top: `${region.box[1]}%`,
                width: `${region.box[2] - region.box[0]}%`,
                height: `${region.box[3] - region.box[1]}%`,
              }}
            />
          )}
        </div>
      </div>
    </figure>
  );
}
