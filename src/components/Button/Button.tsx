import { cn } from "../../utils/cn";
import type { ButtonProps } from "./Button.types";

const variantClasses: Record<string, string> = {
  primary: "bg-[var(--nb-primary)] text-[var(--nb-on-primary)]",
  secondary: "bg-white text-[var(--nb-on-surface)]",
  ghost: "bg-transparent text-[var(--nb-on-surface)]",
  danger: "bg-[var(--nb-error)] text-[var(--nb-on-error)]",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const radiusClasses: Record<string, string> = {
  sm: "rounded-[var(--nb-radius-sm)]",
  md: "rounded-[var(--nb-radius)]",
  lg: "rounded-[var(--nb-radius-lg)]",
  full: "rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  loading = false,
  fullWidth = false,
  rounded = "md",
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "nb-tactile",
        "inline-flex items-center justify-center gap-2",
        "font-bold whitespace-nowrap",
        "transition-all",
        variantClasses[variant],
        sizeClasses[size],
        radiusClasses[rounded],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-50 cursor-not-allowed pointer-events-none",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        startIcon
      )}
      {children}
      {endIcon}
    </button>
  );
}
