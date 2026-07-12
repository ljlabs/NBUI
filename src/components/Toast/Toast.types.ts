import type { ReactNode } from "react";

export interface ToastProps {
  /** Whether the toast is visible */
  open: boolean;
  /** Callback to dismiss */
  onClose: () => void;
  /** Visual variant */
  variant?: "success" | "error" | "info";
  /** Toast message */
  children: ReactNode;
  /** Auto-dismiss after N ms (0 = no auto-dismiss) */
  autoDismiss?: number;
}
