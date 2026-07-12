import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Layout as LayoutComp, TopNavBar, BottomNav, Footer, Icon } from "neo-brutalist-ui";

export function LayoutPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Layout</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Page shell component with slots for top navigation, bottom navigation, and footer.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Layout }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Full Page Example</h2>
        <LiveDemo code={`<Layout
  topBar={<TopNavBar logo={<Icon name="extension" filled size="lg" />} />}
  bottomNav={<BottomNav items={navItems} activeKey="home" onNavigate={() => {}} />}
  footer={<Footer copyright="© 2024 My App" />}
>
  <main>Page content goes here</main>
</Layout>`}>
          <div className="border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] h-80 overflow-hidden">
            <LayoutComp
              topBar={<TopNavBar logo={<Icon name="extension" filled size="lg" />} items={[{ key: "home", label: "Home" }]} />}
              bottomNav={<BottomNav items={[{ key: "home", label: "Home", icon: "home" }]} activeKey="home" onNavigate={() => {}} />}
              footer={<Footer copyright="© 2024 Demo" />}
            >
              <div className="p-8 text-center">
                <p>Page content inside Layout shell</p>
              </div>
            </LayoutComp>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "topBar", type: "ReactNode", description: "Top navigation bar (e.g., TopNavBar)" },
          { name: "bottomNav", type: "ReactNode", description: "Bottom navigation (e.g., BottomNav)" },
          { name: "footer", type: "ReactNode", description: "Page footer" },
          { name: "children", type: "ReactNode", required: true, description: "Main page content" },
          { name: "background", type: "string", description: "Page background color override" },
          { name: "maxWidth", type: "string", default: '"1200px"', description: "Content max width" },
        ]} />
      </section>
    </Layout>
  );
}