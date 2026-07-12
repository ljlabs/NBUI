import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { Button } from "../Button";
import type { SearchBarProps } from "./SearchBar.types";

const sizeConfig = {
  sm: {
    wrapper: "h-10",
    input: "pl-9 pr-3 text-sm",
    iconSize: "sm" as const,
    iconClass: "left-2.5",
    border: "border-2",
    rounding: "rounded-[var(--nb-radius)]",
    shadow: "shadow-[var(--nb-shadow-sm)]",
  },
  md: {
    wrapper: "h-12",
    input: "pl-10 pr-4 text-sm",
    iconSize: "md" as const,
    iconClass: "left-3",
    border: "border-2",
    rounding: "rounded-[var(--nb-radius)]",
    shadow: "shadow-[var(--nb-shadow-sm)]",
  },
  lg: {
    wrapper: "h-16",
    input: "pl-14 pr-4 text-base",
    iconSize: "lg" as const,
    iconClass: "left-4",
    border: "border-4",
    rounding: "rounded-[var(--nb-radius-lg)]",
    shadow: "shadow-[var(--nb-shadow)]",
  },
};

export function SearchBar({
  placeholder = "Search...",
  size = "md",
  showButton = false,
  buttonLabel = "Search",
  value: controlledValue,
  onSearch,
  onChange,
  icon = "search",
}: SearchBarProps) {
  const [query, setQuery] = useState(controlledValue ?? "");

  useEffect(() => {
    if (controlledValue !== undefined) {
      setQuery(controlledValue);
    }
  }, [controlledValue]);

  const s = sizeConfig[size];

  return (
    <div className="relative w-full">
      <span
        className={cn(
          "material-symbols-outlined absolute top-1/2 -translate-y-1/2 pointer-events-none text-[var(--nb-on-surface)]",
          s.iconClass,
        )}
        style={{ fontSize: s.iconSize === "sm" ? "18px" : s.iconSize === "lg" ? "32px" : "24px" }}
      >
        {icon}
      </span>
      <div className="flex items-center">
        <input
          className={cn(
            "w-full bg-white",
            s.border,
            "border-[var(--nb-on-surface)]",
            s.rounding,
            s.wrapper,
            s.input,
            "font-semibold text-[var(--nb-on-surface)]",
            "outline-none focus:border-[var(--nb-on-surface)]",
            "transition-all",
            s.shadow,
            showButton && size === "lg" && "rounded-r-none border-r-0",
          )}
          placeholder={placeholder}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange?.(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch?.(query);
          }}
        />
        {showButton && size === "lg" && (
          <Button
            variant="primary"
            size="md"
            className="rounded-l-none h-full flex-shrink-0"
            onClick={() => onSearch?.(query)}
          >
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
