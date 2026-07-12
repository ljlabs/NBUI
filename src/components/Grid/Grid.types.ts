import type { HTMLAttributes, ReactNode } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns at different breakpoints */
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /** Gap between items */
  gap?: "sm" | "md" | "lg" | number;
  /** Grid children */
  children: ReactNode;
}
