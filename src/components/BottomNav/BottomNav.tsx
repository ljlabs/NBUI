import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import type { BottomNavProps } from "./BottomNav.types";

export function BottomNav({
  items,
  activeKey,
  onNavigate,
  elevated = true,
}: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 border-t-2 border-[var(--nb-on-surface)] md:hidden"
      style={{
        backgroundColor: "var(--nb-surface)",
        boxShadow: elevated ? "var(--nb-shadow-sm)" : "none",
      }}
    >
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const isActive = activeKey === item.key;
          return (
            <button
              key={item.key}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-[var(--nb-radius)]",
                "border-2 transition-all text-xs font-bold",
                isActive
                  ? "bg-[var(--nb-primary-container)] text-[var(--nb-on-primary-container)] border-[var(--nb-on-surface)]"
                  : "border-transparent text-[var(--nb-on-surface-variant)]",
              )}
              onClick={() => onNavigate(item.key)}
            >
              <Icon
                name={item.icon ?? "circle"}
                size="lg"
                filled={isActive}
              />
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
