import type { HTMLAttributes, ReactNode } from "react";

type TiltCardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "li";
  tone?: "light" | "dark";
  children: ReactNode;
};

export default function TiltCard({ as: Tag = "article", tone = "light", className = "", children, ...rest }: TiltCardProps) {
  return (
    <Tag className={`tilt-card tilt-${tone} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
