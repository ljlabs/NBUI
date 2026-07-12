import type { ReactNode } from "react";

export interface LayoutProps {
  /** Top navigation bar slot */
  topBar?: ReactNode;
  /** Bottom navigation bar slot (mobile) */
  bottomNav?: ReactNode;
  /** Page footer */
  footer?: ReactNode;
  /** Main page content */
  children: ReactNode;
  /** Page background color override */
  background?: string;
  /** Max width constraint */
  maxWidth?: string;
}
