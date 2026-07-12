import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Pill } from "neo-brutalist-ui";

const basicCode = `<Pill>Filter</Pill>`;

const selectedCode = `<Pill selected>Selected</Pill>
<Pill>Unselected</Pill>`;

const withIconCode = `<Pill icon="star">Starred</Pill>
<Pill selected icon="check">Approved</Pill>`;

const customColorCode = `<Pill selected color="#FF6B6B">Red Selected</Pill>
<Pill selected color="#4ECDC4">Teal Selected</Pill>`;

export function PillPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Pill</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Selectable filter chips with tactile press interaction.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Pill }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <Pill>Filter</Pill>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Selected State</h2>
        <LiveDemo code={selectedCode}>
          <div className="flex gap-3">
            <Pill selected>Selected</Pill>
            <Pill>Unselected</Pill>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Icons</h2>
        <LiveDemo code={withIconCode}>
          <div className="flex gap-3">
            <Pill icon="star">Starred</Pill>
            <Pill selected icon="check">Approved</Pill>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Custom Selected Color</h2>
        <LiveDemo code={customColorCode}>
          <div className="flex gap-3">
            <Pill selected color="#FF6B6B">Red Selected</Pill>
            <Pill selected color="#4ECDC4">Teal Selected</Pill>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "selected", type: "boolean", default: "false", description: "Whether pill is in selected state" },
          { name: "color", type: "string", description: "Background color when selected" },
          { name: "icon", type: "string", description: "Material Symbol name for leading icon" },
          { name: "onClick", type: "() => void", description: "Click handler" },
        ]} />
      </section>
    </Layout>
  );
}