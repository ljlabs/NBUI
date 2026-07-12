import { cn } from "../../utils/cn";
import type { IconProps } from "./Icon.types";

const sizeMap = {
  sm: "18px",
  md: "24px",
  lg: "32px",
  xl: "48px",
};

export function Icon({
  name,
  filled = false,
  size = "md",
  color,
  className,
  style,
  "aria-label": ariaLabel,
}: IconProps) {
  const fontSize = typeof size === "number" ? `${size}px` : sizeMap[size];

  const variationSettings = filled
    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24";

  return (
    <span
      className={cn("material-symbols-outlined", className)}
      style={{
        fontSize,
        fontVariationSettings: variationSettings,
        color,
        lineHeight: 1,
        verticalAlign: "middle",
        ...style,
      }}
      aria-hidden={ariaLabel ? undefined : "true"}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      {name}
    </span>
  );
}
