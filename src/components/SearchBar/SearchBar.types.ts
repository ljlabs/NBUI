export interface SearchBarProps {
  /** Placeholder text */
  placeholder?: string;
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** Show action button */
  showButton?: boolean;
  /** Button label (when showButton is true) */
  buttonLabel?: string;
  /** Controlled value */
  value?: string;
  /** Search callback (on Enter or button click) */
  onSearch?: (query: string) => void;
  /** Change callback (on every keystroke) */
  onChange?: (query: string) => void;
  /** Icon name override (default: "search") */
  icon?: string;
}
