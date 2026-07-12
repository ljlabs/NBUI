import type { ReactNode } from "react";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  /** Group title */
  title: string;
  /** Display mode */
  mode: "pill" | "checkbox" | "radio";
  /** Available options */
  options: FilterOption[];
}

export interface FilterSidebarProps {
  /** Filter groups */
  groups: FilterGroup[];
  /** Currently selected values keyed by group title */
  selected: Record<string, string[]>;
  /** Callback when a filter value is toggled */
  onChange: (groupTitle: string, value: string) => void;
  /** Callback when "Clear All" is clicked */
  onClearAll: () => void;
  /** Title shown above all groups */
  title?: string;
  /** Extra content below the groups (e.g. a custom filter) */
  children?: ReactNode;
}
