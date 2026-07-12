import type { ReactNode } from "react";

export interface ModalProps {
  /** Whether modal is open */
  open: boolean;
  /** Close callback */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal size */
  size?: "sm" | "md" | "lg" | "full";
  /** Close on backdrop click */
  closeOnBackdrop?: boolean;
  /** Close on Escape key */
  closeOnEscape?: boolean;
  /** Footer actions */
  actions?: ReactNode;
  /** Children content */
  children: ReactNode;
}
