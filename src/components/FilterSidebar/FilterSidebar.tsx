import { cn } from "../../utils/cn";
import { Button } from "../Button";
import { Pill } from "../Pill";
import { Card, CardBody } from "../Card";
import type { FilterSidebarProps } from "./FilterSidebar.types";

export function FilterSidebar({
  groups,
  selected,
  onChange,
  onClearAll,
  title = "Filters",
  children,
}: FilterSidebarProps) {
  return (
    <Card className="w-full md:w-64 lg:w-72 shrink-0 h-fit sticky top-32" shadow="md">
      <CardBody className="space-y-6">
        <h3 className="font-bold text-lg text-[var(--nb-on-surface)]">{title}</h3>

        {groups.map((group) => (
          <div key={group.title}>
            <span className="font-bold text-sm block mb-3 text-[var(--nb-on-surface)]">
              {group.title}
            </span>

            {group.mode === "pill" && (
              <div className="flex flex-wrap gap-2">
                {group.options.map((opt) => (
                  <Pill
                    key={opt.value}
                    selected={selected[group.title]?.includes(opt.value) ?? false}
                    onClick={() => onChange(group.title, opt.value)}
                  >
                    {opt.label}
                  </Pill>
                ))}
              </div>
            )}

            {group.mode === "checkbox" && (
              <div className="flex flex-col gap-2">
                {group.options.map((opt) => {
                  const isChecked = selected[group.title]?.includes(opt.value) ?? false;
                  return (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2 cursor-pointer text-sm font-semibold"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onChange(group.title, opt.value)}
                        className="w-4 h-4 rounded border-2 border-[var(--nb-on-surface)] accent-[var(--nb-tertiary)]"
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            )}

            {group.mode === "radio" && (
              <div className="flex flex-wrap gap-2">
                {group.options.map((opt) => {
                  const isSelected = selected[group.title]?.includes(opt.value) ?? false;
                  return (
                    <button
                      key={opt.value}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-semibold",
                        "border-2 border-[var(--nb-on-surface)] transition-all",
                        isSelected
                          ? "bg-[var(--nb-primary)] text-[var(--nb-on-primary)]"
                          : "bg-[var(--nb-surface-container-lowest)] hover:bg-[var(--nb-primary-container)]",
                      )}
                      onClick={() => onChange(group.title, opt.value)}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {children}

        <Button
          variant="primary"
          fullWidth
          onClick={onClearAll}
        >
          Clear All
        </Button>
      </CardBody>
    </Card>
  );
}
