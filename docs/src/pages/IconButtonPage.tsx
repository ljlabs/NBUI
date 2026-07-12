import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { IconButton } from "neo-brutalist-ui";

export function IconButtonPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">IconButton</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Square button with Material Symbol icon. Required aria-label for accessibility.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ IconButton }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<IconButton icon="star" aria-label="Favorite" />`}>
          <IconButton icon="star" aria-label="Favorite" />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <LiveDemo code={`<IconButton icon="home" aria-label="Home" size="sm" />
<IconButton icon="home" aria-label="Home" size="md" />
<IconButton icon="home" aria-label="Home" size="lg" />`}>
          <div className="flex items-center gap-3">
            <IconButton icon="home" aria-label="Home" size="sm" />
            <IconButton icon="home" aria-label="Home" size="md" />
            <IconButton icon="home" aria-label="Home" size="lg" />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Filled Icon</h2>
        <LiveDemo code={`<IconButton icon="favorite" filled aria-label="Like" filled />`}>
          <IconButton icon="favorite" aria-label="Like" filled />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "icon", type: "string", required: true, description: "Material Symbol name" },
          { name: "aria-label", type: "string", required: true, description: "Accessibility label" },
          { name: "filled", type: "boolean", default: "false", description: "Render filled icon variant" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
        ]} />
      </section>
    </Layout>
  );
}