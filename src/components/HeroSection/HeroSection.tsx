import { cn } from "../../utils/cn";
import { Badge } from "../Badge";
import type { HeroSectionProps } from "./HeroSection.types";

export function HeroSection({
  headline,
  description,
  label,
  primaryAction,
  secondaryAction,
  media,
  color,
  align = "left",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "mb-16 flex flex-col md:flex-row items-center justify-between gap-10",
        align === "center" && "text-center md:text-center",
      )}
      style={color ? { backgroundColor: color } : undefined}
    >
      <div className={cn("flex-1 space-y-4", align === "center" && "flex flex-col items-center")}>
        {label && (
          <div>
            <Badge color="secondary">{label}</Badge>
          </div>
        )}

        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--nb-on-surface)] leading-tight">
          {headline}
        </h1>

        {description && (
          <p className="text-lg text-[var(--nb-on-surface-variant)] max-w-xl">
            {description}
          </p>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-3 pt-4">
            {primaryAction}
            {secondaryAction}
          </div>
        )}
      </div>

      {media && (
        <div className="flex-1 flex justify-center relative">
          {media}
        </div>
      )}
    </section>
  );
}
