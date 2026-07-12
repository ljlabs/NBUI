import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Icon } from "neo-brutalist-ui";

const basicCode = `<Icon name="star" />`;

const filledCode = `<Icon name="star" filled />`;

const sizesCode = `<Icon name="star" size="sm" />
<Icon name="star" size="md" />
<Icon name="star" size="lg" />
<Icon name="star" size="xl" />`;

const colorsCode = `<Icon name="star" color="var(--nb-primary)" />
<Icon name="star" color="var(--nb-error)" />
<Icon name="star" color="var(--nb-tertiary)" />`;

export function IconPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Icon</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Thin wrapper around Material Symbols Outlined with size presets and filled variant.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Icon }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <Icon name="star" />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Filled Variant</h2>
        <LiveDemo code={filledCode}>
          <Icon name="star" filled />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <LiveDemo code={sizesCode}>
          <div className="flex items-center gap-4">
            <Icon name="star" size="sm" />
            <Icon name="star" size="md" />
            <Icon name="star" size="lg" />
            <Icon name="star" size="xl" />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Custom Colors</h2>
        <LiveDemo code={colorsCode}>
          <div className="flex items-center gap-4">
            <Icon name="star" color="var(--nb-primary)" />
            <Icon name="star" color="var(--nb-error)" />
            <Icon name="star" color="var(--nb-tertiary)" />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "name", type: "string", required: true, description: "Material Symbol name" },
          { name: "filled", type: "boolean", default: "false", description: "Render filled variant" },
          { name: "size", type: '"sm" | "md" | "lg" | "xl" | number', default: '"md"', description: "Icon size" },
          { name: "color", type: "string", description: "CSS color value" },
          { name: "aria-label", type: "string", description: "Accessibility label (required for non-decorative icons)" },
        ]} />
      </section>
    </Layout>
  );
}