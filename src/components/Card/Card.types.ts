import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Enable hover lift effect */
  interactive?: boolean;
  /** Card variant */
  variant?: "elevated" | "outlined" | "filled";
  /** Shadow size */
  shadow?: "sm" | "md" | "lg";
  /** Click handler (makes card interactive) */
  onClick?: () => void;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Leading icon or avatar */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Subtitle */
  subtitle?: string;
  /** Trailing action (badge, button) */
  action?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  /** Align actions */
  align?: "left" | "center" | "right" | "between";
}
