import { useEffect, useCallback } from "react";
import { cn } from "../../utils/cn";
import { IconButton } from "../IconButton";
import type { ModalProps } from "./Modal.types";

const sizeClasses: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  full: "max-w-4xl",
};

export function Modal({
  open,
  onClose,
  title,
  size = "md",
  closeOnBackdrop = true,
  closeOnEscape = true,
  actions,
  children,
}: ModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) onClose();
    },
    [closeOnEscape, onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, handleEscape]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 nb-fade-in"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Dialog */}
      <div
        className={cn(
          "relative w-full bg-white",
          sizeClasses[size],
          "border-2 border-[var(--nb-on-surface)]",
          "rounded-[var(--nb-radius-lg)]",
          "shadow-[var(--nb-shadow-lg)]",
          "nb-slide-up",
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[var(--nb-on-surface)]">
            <h2 className="font-bold text-lg text-[var(--nb-on-surface)]">
              {title}
            </h2>
            <IconButton
              icon="close"
              size="sm"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">{children}</div>

        {/* Footer */}
        {actions && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t-2 border-[var(--nb-outline-variant)]">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
