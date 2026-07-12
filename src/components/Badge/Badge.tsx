import { cn } from "../../utils/cn";
import type { BadgeProps } from "./Badge.types";

type ColorVariant = { filled: string; outlined: string; soft: string };

const colorMap: Record<NonNullable<BadgeProps["color"]>, ColorVariant> = {
  primary: {
    filled: "bg-[var(--nb-primary)] text-[var(--nb-on-primary)]",
    outlined: "bg-transparent border-[var(--nb-primary)] text-[var(--nb-primary)]",
    soft: "bg-[var(--nb-primary-container)] text-[var(--nb-on-primary-container)]",
  },
  secondary: {
    filled: "bg-[var(--nb-secondary)] text-[var(--nb-on-secondary)]",
    outlined: "bg-transparent border-[var(--nb-secondary)] text-[var(--nb-secondary)]",
    soft: "bg-[var(--nb-secondary-container)] text-[var(--nb-on-secondary-container)]",
  },
  tertiary: {
    filled: "bg-[var(--nb-tertiary)] text-[var(--nb-on-tertiary)]",
    outlined: "bg-transparent border-[var(--nb-tertiary)] text-[var(--nb-tertiary)]",
    soft: "bg-[var(--nb-tertiary-container)] text-[var(--nb-on-tertiary-container)]",
  },
  error: {
    filled: "bg-[var(--nb-error)] text-[var(--nb-on-error)]",
    outlined: "bg-transparent border-[var(--nb-error)] text-[var(--nb-error)]",
    soft: "bg-[var(--nb-error-container)] text-[var(--nb-on-error-container)]",
  },
  neutral: {
    filled: "bg-[var(--nb-on-surface)] text-[var(--nb-surface)]",
    outlined: "bg-transparent border-[var(--nb-on-surface)] text-[var(--nb-on-surface)]",
    soft: "bg-[var(--nb-surface-container)] text-[var(--nb-on-surface)]",
  },
};

const sizeClasses = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
};

export function Badge({
  variant = "soft",
  color = "neutral",
  size = "md",
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) {
  const colorClasses = colorMap[color][variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--nb-radius-sm)] font-semibold leading-none",
        "border-2 border-[var(--nb-on-surface)]",
        sizeClasses[size],
        colorClasses,
        className,
      )}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  );
}
