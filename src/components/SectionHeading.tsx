import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  id?: string;
  as?: "h1" | "h2";
  children?: ReactNode;
  tone?: "light" | "dark";
};

export default function SectionHeading({ kicker, title, id, as: Heading = "h2", children, tone = "light" }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${tone === "dark" ? "on-dark" : ""}`}>
      <div>
        <span className="eyebrow-text">{kicker}</span>
        <Heading id={id}>{title}</Heading>
      </div>
      {children && <div className="section-heading-aside">{children}</div>}
    </div>
  );
}
