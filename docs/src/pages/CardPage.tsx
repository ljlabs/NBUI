import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Card, CardHeader, CardBody, CardActions, Button, Badge } from "neo-brutalist-ui";

const basicCode = `<Card>
  <CardBody>Simple card content</CardBody>
</Card>`;

const compoundCode = `<Card interactive>
  <CardHeader
    icon={<Icon name="star" />}
    title="My Skill"
    subtitle="v2.0"
    action={<Badge color="primary">New</Badge>}
  />
  <CardBody>
    <p>Description goes here...</p>
  </CardBody>
  <CardActions align="right">
    <Button size="sm">View</Button>
  </CardActions>
</Card>`;

const variantsCode = `<Card variant="elevated">Elevated</Card>
<Card variant="outlined">Outlined</Card>
<Card variant="filled">Filled</Card>`;

export function CardPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Card</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Flexible card container with compound sub-components for building rich layouts.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Card, CardHeader, CardBody, CardActions }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <Card><CardBody>Simple card content</CardBody></Card>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Compound Component</h2>
        <LiveDemo code={compoundCode}>
          <div className="w-80">
            <Card interactive>
              <CardHeader
                icon={<span className="material-symbols-outlined">star</span>}
                title="My Skill"
                subtitle="v2.0"
                action={<Badge color="primary">New</Badge>}
              />
              <CardBody>
                <p>A skill card with header, body, and actions.</p>
              </CardBody>
              <CardActions align="right">
                <Button size="sm">View</Button>
              </CardActions>
            </Card>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <LiveDemo code={variantsCode}>
          <Card variant="elevated"><CardBody>Elevated</CardBody></Card>
          <Card variant="outlined"><CardBody>Outlined</CardBody></Card>
          <Card variant="filled"><CardBody>Filled</CardBody></Card>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Card Props</h2>
        <PropsTable props={[
          { name: "interactive", type: "boolean", default: "false", description: "Enables hover lift and click handling" },
          { name: "variant", type: '"elevated" | "outlined" | "filled"', default: '"elevated"', description: "Card background style" },
          { name: "shadow", type: '"sm" | "md" | "lg"', default: '"md"', description: "Shadow depth (elevated only)" },
          { name: "onClick", type: "() => void", description: "Click handler (makes card interactive)" },
        ]} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CardHeader Props</h2>
        <PropsTable props={[
          { name: "icon", type: "ReactNode", description: "Leading icon or avatar" },
          { name: "title", type: "string", required: true, description: "Header title" },
          { name: "subtitle", type: "string", description: "Header subtitle" },
          { name: "action", type: "ReactNode", description: "Trailing action (badge, button)" },
        ]} />
      </section>
    </Layout>
  );
}