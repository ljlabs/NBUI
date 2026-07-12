import type { CSSProperties } from "react";

export interface IconProps {
  /** Material Symbol name */
  name: string;
  /** Render filled variant */
  filled?: boolean;
  /** Size preset or custom pixel value */
  size?: "sm" | "md" | "lg" | "xl" | number;
  /** Color override (CSS color value) */
  color?: string;
  /** Additional CSS class */
  className?: string;
  /** Inline style overrides */
  style?: CSSProperties;
  /** Accessibility label for non-decorative icons */
  "aria-label"?: string;
}
