import { cn } from "../../utils/cn";
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardActionsProps,
} from "./Card.types";

const shadowMap: Record<string, string> = {
  sm: "var(--nb-shadow-sm)",
  md: "var(--nb-shadow)",
  lg: "var(--nb-shadow-lg)",
};

const variantBg: Record<string, string> = {
  elevated: "bg-white",
  outlined: "bg-white",
  filled: "bg-[var(--nb-surface-container)]",
};

export function Card({
  interactive = false,
  variant = "elevated",
  shadow = "md",
  onClick,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)]",
        "transition-all",
        variantBg[variant],
        variant === "elevated" && shadowMap[shadow] && `shadow-[${shadowMap[shadow]}]`,
        interactive && "cursor-pointer hover:-translate-y-1 hover:shadow-[var(--nb-shadow-lg)]",
        className,
      )}
      style={{
        boxShadow:
          variant === "elevated"
            ? shadowMap[shadow]
            : undefined,
      }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  icon,
  title,
  subtitle,
  action,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-6 py-4",
        "border-b-2 border-[var(--nb-outline-variant)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-[var(--nb-radius)] bg-[var(--nb-primary-container)] border-2 border-[var(--nb-on-surface)] flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-bold text-base text-[var(--nb-on-surface)]">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-[var(--nb-on-surface-variant)]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardActions({
  align = "left",
  className,
  children,
  ...props
}: CardActionsProps) {
  const alignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-6 py-4",
        "border-t-2 border-[var(--nb-outline-variant)]",
        alignClasses[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
