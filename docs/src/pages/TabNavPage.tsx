import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { TabNav, Card, CardBody } from "neo-brutalist-ui";
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

const tabContent: Record<string, string> = {
  overview: "This is the overview tab content. It shows a summary of the current state.",
  code: "Here you can view and edit the source code. Use the editor below to make changes.",
  settings: "Adjust your preferences here. Changes are saved automatically.",
  home: "Welcome home! This is your dashboard with recent activity.",
  search: "Search across all your documents and resources.",
  settings2: "Manage your account settings and preferences.",
  all: "Showing all 42 items across every category.",
  active: "5 items are currently active and in progress.",
  archived: "Archived items are stored here for reference.",
};

export function TabNavPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeTabIcons, setActiveTabIcons] = useState("home");
  const [activeTabBadges, setActiveTabBadges] = useState("all");

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
          <div className="w-full">
            <TabNav
              tabs={[
                { key: "overview", label: "Overview" },
                { key: "code", label: "Code" },
                { key: "settings", label: "Settings" },
              ]}
              activeKey={activeTab}
              onChange={setActiveTab}
            />
            <Card className="mt-4">
              <CardBody className="px-4 py-3">
                <p className="text-sm text-[var(--nb-on-surface-variant)]">
                  {tabContent[activeTab]}
                </p>
              </CardBody>
            </Card>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <LiveDemo code={withIconsCode}>
          <div className="w-full">
            <TabNav
              tabs={[
                { key: "home", label: "Home", icon: "home" },
                { key: "search", label: "Search", icon: "search" },
                { key: "settings2", label: "Settings", icon: "settings" },
              ]}
              activeKey={activeTabIcons}
              onChange={setActiveTabIcons}
            />
            <Card className="mt-4">
              <CardBody className="px-4 py-3">
                <p className="text-sm text-[var(--nb-on-surface-variant)]">
                  {tabContent[activeTabIcons]}
                </p>
              </CardBody>
            </Card>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Badges</h2>
        <LiveDemo code={withBadgesCode}>
          <div className="w-full">
            <TabNav
              tabs={[
                { key: "all", label: "All", badge: 42 },
                { key: "active", label: "Active", badge: 5 },
                { key: "archived", label: "Archived" },
              ]}
              activeKey={activeTabBadges}
              onChange={setActiveTabBadges}
            />
            <Card className="mt-4">
              <CardBody className="px-4 py-3">
                <p className="text-sm text-[var(--nb-on-surface-variant)]">
                  {tabContent[activeTabBadges]}
                </p>
              </CardBody>
            </Card>
          </div>
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
