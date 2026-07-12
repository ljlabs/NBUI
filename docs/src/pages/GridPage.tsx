import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Grid, Pill } from "neo-brutalist-ui";
import { useState } from "react";

const pastelColors = [
  "#FFD54F", // primary yellow
  "#E9D5FF", // secondary lavender
  "#A7F3D0", // tertiary mint
  "#FFDAB9", // peach
  "#B0E0E6", // powder blue
  "#DDA0DD", // plum
  "#F0E68C", // khaki
  "#98FB98", // pale green
];

const basicCode = `<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
  <Pill>Item 1</Pill>
  <Pill>Item 2</Pill>
  <Pill>Item 3</Pill>
</Grid>`;

const gapsCode = `<Grid columns={{ sm: 2, md: 3 }} gap="sm">...</Grid>
<Grid columns={{ sm: 2, md: 3 }} gap="md">...</Grid>
<Grid columns={{ sm: 2, md: 3 }} gap="lg">...</Grid>`;

export function GridPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const togglePill = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Grid</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Responsive grid container with breakpoint-based columns and configurable gaps.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Grid }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
            {["Overview", "Features", "Pricing", "Contact"].map((label, i) => (
              <Pill
                key={label}
                selected={selected.includes(label)}
                color={pastelColors[i % pastelColors.length]}
                onClick={() => togglePill(label)}
              >
                {label}
              </Pill>
            ))}
          </Grid>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Gap Sizes</h2>
        <LiveDemo code={gapsCode}>
          <div className="w-full space-y-6">
            <div>
              <div className="text-sm font-bold mb-2">gap="sm"</div>
              <Grid columns={{ sm: 2, md: 3 }} gap="sm">
                {["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta"].map((label, i) => (
                  <Pill
                    key={label}
                    selected={selected.includes(label)}
                    color={pastelColors[i % pastelColors.length]}
                    onClick={() => togglePill(label)}
                  >
                    {label}
                  </Pill>
                ))}
              </Grid>
            </div>
            <div>
              <div className="text-sm font-bold mb-2">gap="md"</div>
              <Grid columns={{ sm: 2, md: 3 }} gap="md">
                {["Red", "Green", "Blue", "Yellow", "Cyan", "Magenta"].map((label, i) => (
                  <Pill
                    key={label}
                    selected={selected.includes(label)}
                    color={pastelColors[(i + 2) % pastelColors.length]}
                    onClick={() => togglePill(label)}
                  >
                    {label}
                  </Pill>
                ))}
              </Grid>
            </div>
            <div>
              <div className="text-sm font-bold mb-2">gap="lg"</div>
              <Grid columns={{ sm: 2, md: 3 }} gap="lg">
                {["One", "Two", "Three", "Four", "Five", "Six"].map((label, i) => (
                  <Pill
                    key={label}
                    selected={selected.includes(label)}
                    color={pastelColors[(i + 4) % pastelColors.length]}
                    onClick={() => togglePill(label)}
                  >
                    {label}
                  </Pill>
                ))}
              </Grid>
            </div>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Responsive Columns</h2>
        <LiveDemo code={`<Grid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="md">
  <Card><CardBody>Item</CardBody></Card>
</Grid>`}>
          <Grid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="md">
            {["A", "B", "C", "D", "E", "F"].map((label, i) => (
              <Pill
                key={label}
                selected={selected.includes(label)}
                color={pastelColors[(i + 1) % pastelColors.length]}
                onClick={() => togglePill(label)}
              >
                {label}
              </Pill>
            ))}
          </Grid>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "columns", type: "{ sm?: number; md?: number; lg?: number; xl?: number }", description: "Columns per breakpoint" },
          { name: "gap", type: '"sm" | "md" | "lg" | number', default: '"md"', description: "Gap between items" },
        ]} />
      </section>
    </Layout>
  );
}
