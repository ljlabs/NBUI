import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Visual variant */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** Icon to render before children */
  startIcon?: ReactNode;
  /** Icon to render after children */
  endIcon?: ReactNode;
  /** Show loading spinner, disables button */
  loading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Override the border radius */
  rounded?: "sm" | "md" | "lg" | "full";
  /** Children content */
  children: ReactNode;
}
