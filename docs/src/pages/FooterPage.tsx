import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Footer, Icon } from "neo-brutalist-ui";

export function FooterPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Footer</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Site footer with logo, copyright, and links.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Footer }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<Footer
  logo={<Icon name="extension" filled size="lg" />}
  copyright="© 2024 My App"
  links={[
    { label: "GitHub", href: "https://github.com" },
    { label: "Docs", href: "/docs" },
  ]}
/>`}>
          <Footer
            logo={<Icon name="extension" filled size="lg" />}
            copyright="© 2024 My App"
            links={[
              { label: "GitHub", href: "https://github.com" },
              { label: "Docs", href: "/docs" },
            ]}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "logo", type: "ReactNode", description: "Logo element" },
          { name: "copyright", type: "string", description: "Copyright text" },
          { name: "links", type: "FooterLink[]", description: "Array of link objects with label, href, icon" },
        ]} />
      </section>
    </Layout>
  );
}