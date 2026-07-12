import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Badge } from "neo-brutalist-ui";

const basicCode = `<Badge>v2.0</Badge>`;

const variantsCode = `<Badge variant="filled" color="primary">Filled</Badge>
<Badge variant="outlined" color="primary">Outlined</Badge>
<Badge variant="soft" color="primary">Soft</Badge>`;

const colorsCode = `<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="tertiary">Tertiary</Badge>
<Badge color="error">Error</Badge>
<Badge color="neutral">Neutral</Badge>`;

const dotCode = `<Badge dot color="tertiary" />`;

const sizesCode = `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>`;

export function BadgePage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Badge</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Inline status indicators with filled, outlined, and soft variants.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Badge }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <Badge>v2.0</Badge>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <LiveDemo code={variantsCode}>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="filled" color="primary">Filled</Badge>
            <Badge variant="outlined" color="primary">Outlined</Badge>
            <Badge variant="soft" color="primary">Soft</Badge>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <LiveDemo code={colorsCode}>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="tertiary">Tertiary</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="neutral">Neutral</Badge>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Dot Indicator</h2>
        <LiveDemo code={dotCode}>
          <span className="flex items-center gap-3">
            <span>Online</span>
            <Badge dot color="tertiary" />
          </span>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <LiveDemo code={sizesCode}>
          <div className="flex items-center gap-3">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "variant", type: '"filled" | "outlined" | "soft"', default: '"soft"', description: "Visual style" },
          { name: "color", type: '"primary" | "secondary" | "tertiary" | "error" | "neutral"', default: '"neutral"', description: "Color scheme" },
          { name: "size", type: '"sm" | "md"', default: '"md"', description: "Size preset" },
          { name: "dot", type: "boolean", default: "false", description: "Render as dot without text" },
        ]} />
      </section>
    </Layout>
  );
}