import type { NavItem } from "../TopNavBar/TopNavBar.types";

export interface BottomNavProps {
  /** Navigation items */
  items: NavItem[];
  /** Currently active item key */
  activeKey: string;
  /** Callback when item is clicked */
  onNavigate: (key: string) => void;
  /** Show shadow at top */
  elevated?: boolean;
}
