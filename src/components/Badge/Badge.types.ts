import type { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant */
  variant?: "filled" | "outlined" | "soft";
  /** Color scheme */
  color?: "primary" | "secondary" | "tertiary" | "error" | "neutral";
  /** Size */
  size?: "sm" | "md";
  /** Render as dot indicator without text */
  dot?: boolean;
  /** Badge content */
  children?: ReactNode;
}
