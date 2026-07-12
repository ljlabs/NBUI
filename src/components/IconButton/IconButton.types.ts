import type { ButtonHTMLAttributes } from "react";

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Material Symbol icon name */
  icon: string;
  /** Whether icon is filled */
  filled?: boolean;
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** Aria label for accessibility (required) */
  "aria-label": string;
}
