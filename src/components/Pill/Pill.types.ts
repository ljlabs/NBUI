import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface PillProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Whether pill is selected */
  selected?: boolean;
  /** Color when selected */
  color?: string;
  /** Leading icon name (Material Symbol) */
  icon?: string;
  /** Pill label */
  children: ReactNode;
}
