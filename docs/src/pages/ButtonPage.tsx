import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Button, Icon } from "neo-brutalist-ui";

const variantsCode = `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`;

const sizesCode = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const iconsCode = `<Button startIcon={<Icon name="download" />}>Download</Button>
<Button endIcon={<Icon name="arrow_forward" />}>Next</Button>`;

const statesCode = `<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>`;

const shadowCode = `<Button variant="primary" size="lg">Hard Shadow</Button>
<Button variant="secondary" size="lg">Hard Shadow</Button>
<Button variant="danger" size="lg">Hard Shadow</Button>`;

export function ButtonPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Button</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Tactile buttons with hover-lift and active-press interactions. The signature neo brutalist component.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Button }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Signature Hard Shadow</h2>
        <p className="text-[var(--nb-on-surface-variant)] mb-4">
          The defining feature of neo brutalism — hard offset shadows with no blur.
          Default state shows the full shadow. Hover to see it pull in partially.
          Click to see it press fully flat.
        </p>
        <LiveDemo code={shadowCode}>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 text-base font-bold bg-[var(--nb-primary)] text-[var(--nb-on-primary)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[var(--nb-shadow-sm)] active:translate-y-1 active:shadow-none">
              Primary
            </button>
            <button className="px-8 py-4 text-base font-bold bg-white text-[var(--nb-on-surface)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[var(--nb-shadow-sm)] active:translate-y-1 active:shadow-none">
              Secondary
            </button>
            <button className="px-8 py-4 text-base font-bold bg-[var(--nb-error)] text-[var(--nb-on-error)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[var(--nb-shadow-sm)] active:translate-y-1 active:shadow-none">
              Danger
            </button>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <LiveDemo code={variantsCode}>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <LiveDemo code={sizesCode}>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <LiveDemo code={iconsCode}>
          <div className="flex flex-wrap gap-3">
            <Button startIcon={<Icon name="download" />}>Download</Button>
            <Button endIcon={<Icon name="arrow_forward" />}>Next</Button>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">States</h2>
        <LiveDemo code={statesCode}>
          <div className="flex flex-wrap items-center gap-3">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <div className="w-48">
              <Button fullWidth>Full Width</Button>
            </div>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "variant", type: '"primary" | "secondary" | "ghost" | "danger"', default: '"primary"', description: "Visual style of the button" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size preset" },
          { name: "startIcon", type: "ReactNode", description: "Icon rendered before children" },
          { name: "endIcon", type: "ReactNode", description: "Icon rendered after children" },
          { name: "loading", type: "boolean", default: "false", description: "Shows spinner, disables button" },
          { name: "fullWidth", type: "boolean", default: "false", description: "Stretches button to container width" },
          { name: "rounded", type: '"sm" | "md" | "lg" | "full"', default: '"md"', description: "Border radius override" },
          { name: "onClick", type: "() => void", description: "Click handler" },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the button" },
        ]} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-1 text-[var(--nb-on-surface-variant)]">
          <li>Renders a native <code>&lt;button&gt;</code> element</li>
          <li>Responds to keyboard (Enter, Space)</li>
          <li>Disabled state is properly announced</li>
          <li>Loading state prevents interaction</li>
        </ul>
      </section>
    </Layout>
  );
}
