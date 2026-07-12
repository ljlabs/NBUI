import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { Badge } from "../Badge";
import type { TabNavProps } from "./TabNav.types";

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function TabNav({
  tabs,
  activeKey,
  onChange,
  size = "md",
  fullWidth = false,
}: TabNavProps) {
  return (
    <nav
      className="flex gap-1 border-b-2 border-[var(--nb-on-surface)]"
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = activeKey === tab.key;
        return (
          <button
            key={tab.key}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "inline-flex items-center gap-2 font-bold",
              "border-t-2 border-l-2 border-r-2 border-transparent rounded-t-[var(--nb-radius)]",
              "transition-all",
              sizeClasses[size],
              fullWidth && "flex-1 justify-center",
              isActive
                ? "bg-white border-[var(--nb-on-surface)] translate-y-[2px]"
                : "text-[var(--nb-on-surface-variant)] hover:text-[var(--nb-on-surface)]",
            )}
            onClick={() => onChange(tab.key)}
          >
            {tab.icon && <Icon name={tab.icon} size="sm" />}
            {tab.label}
            {tab.badge !== undefined && (
              <Badge size="sm" color="neutral">
                {tab.badge}
              </Badge>
            )}
          </button>
        );
      })}
    </nav>
  );
}
