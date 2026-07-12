import type { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterProps {
  /** Logo element */
  logo?: ReactNode;
  /** Copyright text */
  copyright?: string;
  /** Footer links */
  links?: FooterLink[];
}
