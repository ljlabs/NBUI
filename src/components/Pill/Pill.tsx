import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import type { PillProps } from "./Pill.types";

export function Pill({
  selected = false,
  color,
  icon,
  children,
  className,
  ...props
}: PillProps) {
  return (
    <button
      className={cn(
        "nb-tactile",
        "px-3 py-1 rounded-full",
        "font-semibold text-sm",
        "border-2 border-[var(--nb-on-surface)]",
        "transition-all",
        selected
          ? cn("text-[var(--nb-on-primary)]", color ?? "bg-[var(--nb-primary)]")
          : "bg-[var(--nb-surface-container-lowest)] hover:bg-[var(--nb-primary-container)]",
        className,
      )}
      style={selected && color ? { backgroundColor: color } : undefined}
      {...props}
    >
      <span className="inline-flex items-center gap-1.5">
        {icon && <Icon name={icon} size="sm" />}
        {children}
      </span>
    </button>
  );
}
