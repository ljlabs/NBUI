export interface TabItem {
  key: string;
  label: string;
  icon?: string;
  badge?: number;
}

export interface TabNavProps {
  /** Tab items */
  tabs: TabItem[];
  /** Active tab key */
  activeKey: string;
  /** Tab change callback */
  onChange: (key: string) => void;
  /** Size */
  size?: "sm" | "md" | "lg";
  /** Fill available width */
  fullWidth?: boolean;
}
