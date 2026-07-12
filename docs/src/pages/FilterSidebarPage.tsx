import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { FilterSidebar } from "neo-brutalist-ui";
import type { FilterGroup } from "neo-brutalist-ui";
import { useState } from "react";

const groups: FilterGroup[] = [
  {
    title: "Category",
    mode: "pill",
    options: [
      { label: "Buttons", value: "buttons" },
      { label: "Cards", value: "cards" },
      { label: "Navigation", value: "navigation" },
      { label: "Forms", value: "forms" },
    ],
  },
  {
    title: "Framework",
    mode: "checkbox",
    options: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  },
];

export function FilterSidebarPage() {
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const handleChange = (groupTitle: string, value: string) => {
    setSelected((prev) => {
      const current = prev[groupTitle] ?? [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [groupTitle]: updated };
    });
  };

  const handleClearAll = () => {
    setSelected({});
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">FilterSidebar</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Vertical filter panel with pill, checkbox, and radio filter groups.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ FilterSidebar }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<FilterSidebar
  groups={groups}
  selected={selected}
  onChange={handleChange}
  onClearAll={handleClearAll}
/>`}>
          <div className="w-full max-w-xs">
            <FilterSidebar
              groups={groups}
              selected={selected}
              onChange={handleChange}
              onClearAll={handleClearAll}
            />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "groups", type: "FilterGroup[]", required: true, description: "Array of filter groups with title, mode, and options" },
          { name: "selected", type: "Record<string, string[]>", required: true, description: "Currently selected values keyed by group title" },
          { name: "onChange", type: "(groupTitle: string, value: string) => void", required: true, description: "Called when a filter value is toggled" },
          { name: "onClearAll", type: "() => void", required: true, description: "Called when Clear All is clicked" },
          { name: "title", type: "string", default: '"Filters"', description: "Title shown above all groups" },
        ]} />
      </section>
    </Layout>
  );
}
