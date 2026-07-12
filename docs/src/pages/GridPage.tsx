import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Grid, Card, CardBody } from "neo-brutalist-ui";

const basicCode = `<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
  <Card><CardBody>Item 1</CardBody></Card>
  <Card><CardBody>Item 2</CardBody></Card>
  <Card><CardBody>Item 3</CardBody></Card>
</Grid>`;

const gapsCode = `<Grid gap="sm">Small gap</Grid>
<Grid gap="md">Medium gap</Grid>
<Grid gap="lg">Large gap</Grid>`;

export function GridPage() {
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
            <Card><CardBody>Item 1</CardBody></Card>
            <Card><CardBody>Item 2</CardBody></Card>
            <Card><CardBody>Item 3</CardBody></Card>
            <Card><CardBody>Item 4</CardBody></Card>
          </Grid>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Gap Sizes</h2>
        <LiveDemo code={gapsCode}>
          <div className="space-y-6">
            <div>
              <div className="text-sm font-bold mb-2">gap="sm"</div>
              <Grid gap="sm">
                <Card><CardBody>1</CardBody></Card>
                <Card><CardBody>2</CardBody></Card>
              </Grid>
            </div>
            <div>
              <div className="text-sm font-bold mb-2">gap="md"</div>
              <Grid gap="md">
                <Card><CardBody>1</CardBody></Card>
                <Card><CardBody>2</CardBody></Card>
              </Grid>
            </div>
            <div>
              <div className="text-sm font-bold mb-2">gap="lg"</div>
              <Grid gap="lg">
                <Card><CardBody>1</CardBody></Card>
                <Card><CardBody>2</CardBody></Card>
              </Grid>
            </div>
          </div>
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