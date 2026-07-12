import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { BottomNav } from "neo-brutalist-ui";
import { useState } from "react";

const navItems = [
  { key: "home", label: "Home", icon: "home" },
  { key: "search", label: "Search", icon: "search" },
  { key: "notifications", label: "Alerts", icon: "notifications" },
  { key: "profile", label: "Profile", icon: "person" },
];

export function BottomNavPage() {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">BottomNav</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Fixed bottom navigation for mobile. Hidden on desktop (md+).
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ BottomNav }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<BottomNav
  items={[{ key: "home", label: "Home", icon: "home" }, ...]}
  activeKey="home"
  onNavigate={setActiveKey}
/>`}>
          <div className="relative w-full h-80 border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] overflow-hidden bg-white" style={{ willChange: "transform" }}>
            <div className="p-8 pb-20 text-center text-[var(--nb-on-surface-variant)]">
              <p className="font-bold text-lg">Mobile viewport simulation</p>
              <p className="text-sm mt-2">BottomNav renders at the bottom of the screen</p>
              <p className="text-sm mt-1">Active: <strong>{activeKey}</strong></p>
            </div>
            <BottomNav
              items={navItems}
              activeKey={activeKey}
              onNavigate={setActiveKey}
            />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "items", type: "NavItem[]", required: true, description: "Navigation items with key, label, icon" },
          { name: "activeKey", type: "string", required: true, description: "Currently active item key" },
          { name: "onNavigate", type: "(key: string) => void", required: true, description: "Navigation callback" },
          { name: "elevated", type: "boolean", default: "true", description: "Show top shadow" },
        ]} />
      </section>
    </Layout>
  );
}
