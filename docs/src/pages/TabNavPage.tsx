import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { TabNav } from "neo-brutalist-ui";
import { useState } from "react";

const basicCode = `<TabNav
  tabs={[
    { key: "overview", label: "Overview" },
    { key: "code", label: "Code" },
    { key: "settings", label: "Settings" },
  ]}
  activeKey={activeTab}
  onChange={setActiveTab}
/>`;

const withIconsCode = `<TabNav
  tabs={[
    { key: "home", label: "Home", icon: "home" },
    { key: "search", label: "Search", icon: "search" },
    { key: "settings", label: "Settings", icon: "settings" },
  ]}
  activeKey={activeTab}
  onChange={setActiveTab}
/>`;

const withBadgesCode = `<TabNav
  tabs={[
    { key: "all", label: "All", badge: 42 },
    { key: "active", label: "Active", badge: 5 },
    { key: "archived", label: "Archived" },
  ]}
  activeKey={activeTab}
  onChange={setActiveTab}
/>`;

export function TabNavPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">TabNav</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Horizontal tab strip with animated active indicator. Supports icons and badge counts.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ TabNav }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <TabNav
            tabs={[
              { key: "overview", label: "Overview" },
              { key: "code", label: "Code" },
              { key: "settings", label: "Settings" },
            ]}
            activeKey={activeTab}
            onChange={setActiveTab}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <LiveDemo code={withIconsCode}>
          <TabNav
            tabs={[
              { key: "home", label: "Home", icon: "home" },
              { key: "search", label: "Search", icon: "search" },
              { key: "settings", label: "Settings", icon: "settings" },
            ]}
            activeKey={activeTab}
            onChange={setActiveTab}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Badges</h2>
        <LiveDemo code={withBadgesCode}>
          <TabNav
            tabs={[
              { key: "all", label: "All", badge: 42 },
              { key: "active", label: "Active", badge: 5 },
              { key: "archived", label: "Archived" },
            ]}
            activeKey={activeTab}
            onChange={setActiveTab}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "tabs", type: "TabItem[]", required: true, description: "Array of tab items" },
          { name: "activeKey", type: "string", required: true, description: "Currently active tab key" },
          { name: "onChange", type: "(key: string) => void", required: true, description: "Tab change callback" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Tab size" },
          { name: "fullWidth", type: "boolean", default: "false", description: "Tabs fill available width" },
        ]} />
      </section>
    </Layout>
  );
}