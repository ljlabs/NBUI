import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { HeroSection, Button, Icon } from "neo-brutalist-ui";

export function HeroSectionPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">HeroSection</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Large hero block with headline, description, label badge, and media slot.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ HeroSection }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<HeroSection
  headline="Give Your App Superpowers"
  description="Build beautiful interfaces with tactile interactions"
  label="NEW VERSION 2.0"
  primaryAction={<Button variant="primary">Get Started</Button>}
  secondaryAction={<Button variant="secondary">Learn More</Button>}
  media={<div className="w-64 h-48 bg-[var(--nb-tertiary)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] flex items-center justify-center">
    <Icon name="extension" size="xl" />
  </div>}
/>`}>
          <HeroSection
            headline="Give Your App Superpowers"
            description="Build beautiful interfaces with tactile interactions"
            label="NEW VERSION 2.0"
            primaryAction={<Button variant="primary">Get Started</Button>}
            secondaryAction={<Button variant="secondary">Learn More</Button>}
            media={<div className="w-64 h-48 bg-[var(--nb-tertiary)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] flex items-center justify-center">
              <Icon name="extension" size="xl" />
            </div>}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Center Aligned</h2>
        <LiveDemo code={`<HeroSection
  align="center"
  headline="Welcome to Neo Brutalist"
  description="A design system for tactile interfaces"
  label="BETA"
  primaryAction={<Button variant="primary">Start Building</Button>}
  media={<div className="w-64 h-48 bg-[var(--nb-secondary)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] flex items-center justify-center">
    <Icon name="palette" size="xl" />
  </div>}
/>`}>
          <HeroSection
            align="center"
            headline="Welcome to Neo Brutalist"
            description="A design system for tactile interfaces"
            label="BETA"
            primaryAction={<Button variant="primary">Start Building</Button>}
            media={<div className="w-64 h-48 bg-[var(--nb-secondary)] border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] flex items-center justify-center">
              <Icon name="palette" size="xl" />
            </div>}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "headline", type: "string", required: true, description: "Main headline text" },
          { name: "description", type: "string", description: "Supporting description" },
          { name: "label", type: "string", description: "Badge label above headline" },
          { name: "primaryAction", type: "ReactNode", description: "Primary CTA button" },
          { name: "secondaryAction", type: "ReactNode", description: "Secondary CTA button" },
          { name: "media", type: "ReactNode", description: "Right-side decorative content" },
          { name: "color", type: "string", description: "Background color override" },
          { name: "align", type: '"left" | "center"', default: '"left"', description: "Text alignment" },
        ]} />
      </section>
    </Layout>
  );
}