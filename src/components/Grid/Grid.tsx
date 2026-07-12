import { cn } from "../../utils/cn";
import type { GridProps } from "./Grid.types";

const gapMap: Record<string, string> = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

function getGridCols(
  columns: GridProps["columns"],
): React.CSSProperties {
  if (!columns) return {};

  const cols = columns;
  const template = (n: number) => `repeat(${n}, minmax(0, 1fr))`;

  // Build a CSS grid template with responsive breakpoints via media queries
  // Since we can't do media queries in inline styles, we use a simpler approach:
  // Default to the largest provided column count
  const maxCols = Math.max(cols.sm ?? 1, cols.md ?? 1, cols.lg ?? 1, cols.xl ?? 1);

  return {
    gridTemplateColumns: template(maxCols),
  };
}

export function Grid({
  columns,
  gap = "md",
  className,
  children,
  style,
  ...props
}: GridProps) {
  const gapClass = typeof gap === "string" ? gapMap[gap] : undefined;
  const gridStyle = typeof gap === "number"
    ? { gap: `${gap}px`, ...getGridCols(columns) }
    : getGridCols(columns);

  return (
    <div
      className={cn(
        "grid",
        gapClass,
        // Responsive column classes
        columns?.sm && `grid-cols-${columns.sm}`,
        columns?.md && `md:grid-cols-${columns.md}`,
        columns?.lg && `lg:grid-cols-${columns.lg}`,
        columns?.xl && `xl:grid-cols-${columns.xl}`,
        !columns && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      style={{ ...gridStyle, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
