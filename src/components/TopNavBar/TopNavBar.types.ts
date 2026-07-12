import type { ReactNode } from "react";

export interface NavItem {
  key: string;
  label: string;
  icon?: string;
  href?: string;
}

export interface TopNavBarProps {
  /** Logo element */
  logo?: ReactNode;
  /** Navigation items */
  items: NavItem[];
  /** Currently active item key */
  activeKey?: string;
  /** Callback when nav item is clicked */
  onNavigate?: (key: string) => void;
  /** Right-side action (user menu, etc.) */
  actions?: ReactNode;
}
