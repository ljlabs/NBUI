import type { ReactNode } from "react";

export interface HeroSectionProps {
  /** Main headline */
  headline: string;
  /** Supporting text */
  description?: string;
  /** Badge/label above headline */
  label?: string;
  /** Primary CTA */
  primaryAction?: ReactNode;
  /** Secondary CTA */
  secondaryAction?: ReactNode;
  /** Decorative content (right side on desktop) */
  media?: ReactNode;
  /** Background color */
  color?: string;
  /** Layout alignment */
  align?: "left" | "center";
}
