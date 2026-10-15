import type { ReactNode } from "react";
import Icon from "./Icon";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost-light";
  size?: "md" | "sm";
  className?: string;
};

export default function Button({ children, href = "#demo", variant = "primary", size = "md", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`}>
      <span>{children}</span>
      <Icon name="arrow" size={size === "sm" ? 15 : 17} />
    </a>
  );
}
