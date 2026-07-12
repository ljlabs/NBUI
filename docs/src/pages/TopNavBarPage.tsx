import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { TopNavBar, Icon, Button } from "neo-brutalist-ui";
import { useState } from "react";

const navItems = [
  { key: "home", label: "Home", icon: "home" },
  { key: "library", label: "Library", icon: "library_books" },
  { key: "docs", label: "Docs", icon: "description" },
];

export function TopNavBarPage() {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">TopNavBar</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Fixed top navigation bar with logo, nav links, mobile hamburger menu, and actions.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ TopNavBar }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<TopNavBar
  logo={<Icon name="extension" filled size="lg" />}
  items={[{ key: "home", label: "Home" }, { key: "library", label: "Library" }]}
  activeKey="home"
  onNavigate={setActiveKey}
/>`}>
          <div style={{ height: "60px" }}>
            <TopNavBar
              logo={<Icon name="extension" filled size="lg" />}
              items={navItems}
              activeKey={activeKey}
              onNavigate={setActiveKey}
            />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Actions</h2>
        <LiveDemo code={`<TopNavBar
  items={navItems}
  actions={<Button variant="primary">Get Started</Button>}
/>`}>
          <div style={{ height: "60px" }}>
            <TopNavBar
              items={navItems}
              activeKey={activeKey}
              onNavigate={setActiveKey}
              actions={<Button variant="primary" size="sm">Get Started</Button>}
            />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "logo", type: "ReactNode", description: "Logo element" },
          { name: "items", type: "NavItem[]", required: true, description: "Navigation items" },
          { name: "activeKey", type: "string", description: "Active item key" },
          { name: "onNavigate", type: "(key: string) => void", description: "Navigation callback" },
          { name: "actions", type: "ReactNode", description: "Right-side actions" },
        ]} />
      </section>
    </Layout>
  );
}