import { useState } from "react";
import { cn } from "../../utils/cn";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";
import type { TopNavBarProps } from "./TopNavBar.types";

export function TopNavBar({
  logo,
  items,
  activeKey,
  onNavigate,
  actions,
}: TopNavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b-2 border-[var(--nb-on-surface)]"
      style={{
        backgroundColor: "var(--nb-surface)",
        boxShadow: "4px 4px 0px 0px rgba(26,26,26,1)",
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 max-w-[1200px] mx-auto">
        {logo && <div className="flex items-center">{logo}</div>}

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <button
              key={item.key}
              className={cn(
                "font-bold text-sm pb-1 border-b-4 transition-all hover:-translate-y-0.5",
                activeKey === item.key
                  ? "text-[var(--nb-on-surface)] border-[var(--nb-primary)]"
                  : "text-[var(--nb-on-surface-variant)] border-transparent",
              )}
              onClick={() => onNavigate?.(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {actions && <div className="hidden md:flex items-center gap-3">{actions}</div>}
          <IconButton
            icon="menu"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t-2 border-[var(--nb-on-surface)] px-4 py-4 space-y-2 nb-slide-up">
          {items.map((item) => (
            <button
              key={item.key}
              className={cn(
                "w-full text-left px-4 py-3 rounded-[var(--nb-radius)] font-bold text-sm",
                "border-2 border-[var(--nb-on-surface)] transition-all",
                activeKey === item.key
                  ? "bg-[var(--nb-primary)] text-[var(--nb-on-primary)]"
                  : "bg-white hover:bg-[var(--nb-primary-container)]",
              )}
              onClick={() => {
                onNavigate?.(item.key);
                setMobileOpen(false);
              }}
            >
              <span className="flex items-center gap-2">
                {item.icon && <Icon name={item.icon} size="sm" />}
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
