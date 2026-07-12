import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import type { IconButtonProps } from "./IconButton.types";

const sizeClasses: Record<string, string> = {
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
};

const iconSizes: Record<string, "sm" | "md" | "lg"> = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

export function IconButton({
  icon,
  filled = false,
  size = "md",
  className,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "nb-tactile",
        "inline-flex items-center justify-center",
        "bg-[var(--nb-surface-container-high)]",
        "rounded-[var(--nb-radius)]",
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      <Icon name={icon} filled={filled} size={iconSizes[size]} />
    </button>
  );
}
