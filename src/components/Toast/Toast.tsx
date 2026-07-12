import { useEffect } from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";
import type { ToastProps } from "./Toast.types";

const variantConfig = {
  success: {
    bg: "bg-[var(--nb-tertiary-container)]",
    border: "border-[var(--nb-tertiary)]",
    text: "text-[var(--nb-on-tertiary-container)]",
    icon: "check_circle",
    animation: "nb-success-flash",
  },
  error: {
    bg: "bg-[var(--nb-error-container)]",
    border: "border-[var(--nb-error)]",
    text: "text-[var(--nb-on-error-container)]",
    icon: "error",
    animation: "nb-error-flash",
  },
  info: {
    bg: "bg-[var(--nb-secondary-container)]",
    border: "border-[var(--nb-secondary)]",
    text: "text-[var(--nb-on-secondary-container)]",
    icon: "info",
    animation: "",
  },
} as const;

export function Toast({
  open,
  onClose,
  variant = "info",
  children,
  autoDismiss = 5000,
}: ToastProps) {
  useEffect(() => {
    if (!open || autoDismiss <= 0) return;
    const timer = setTimeout(onClose, autoDismiss);
    return () => clearTimeout(timer);
  }, [open, autoDismiss, onClose]);

  if (!open) return null;

  const config = variantConfig[variant];

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 max-w-sm",
        "border-2 border-[var(--nb-on-surface)]",
        "rounded-[var(--nb-radius)]",
        "shadow-[var(--nb-shadow)]",
        "px-4 py-3 flex items-center gap-3",
        "font-semibold text-sm",
        config.bg,
        config.text,
        config.animation,
        "nb-slide-up",
      )}
      role="alert"
      aria-live="assertive"
    >
      <Icon name={config.icon} size="md" />
      <span className="flex-1">{children}</span>
      <IconButton
        icon="close"
        size="sm"
        aria-label="Dismiss"
        onClick={onClose}
      />
    </div>
  );
}
