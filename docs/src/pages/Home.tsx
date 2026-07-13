import { Link } from "react-router-dom";
import { Button, HeroSection, Card, CardBody, Grid } from "neo-brutalist-ui";
import { Layout } from "../components/Layout";
import { CodeBlock } from "../components/CodeBlock";

const installCode = `npm install https://github.com/ljlabs/NBUI`;

const quickStartCode = `import { NeoThemeProvider, Button, Card } from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';

function App() {
  return (
    <NeoThemeProvider>
      <Card>
        <h2>Welcome to Neo Brutalist</h2>
        <Button variant="primary">Get Started</Button>
      </Card>
    </NeoThemeProvider>
  );
}`;

const pastelColors = [
  "#FFD54F", // primary yellow
  "#E9D5FF", // secondary lavender
  "#A7F3D0", // tertiary mint
  "#FFDAB9", // peach
  "#B0E0E6", // powder blue
  "#DDA0DD", // plum
  "#F0E68C", // khaki
  "#98FB98", // pale green
  "#FFB6C1", // light pink
  "#ADD8E6", // light blue
  "#FFE4B5", // moccasin
  "#D3FFCE", // honeydew
  "#E6E6FA", // lavender
  "#F5DEB3", // wheat
  "#B0C4DE", // light steel blue
  "#C8A2C8", // lilac
];

const components = [
  { name: "Button", description: "Tactile buttons with hover lift and active press", path: "/components/button" },
  { name: "Card", description: "Flexible card container with compound components", path: "/components/card" },
  { name: "Badge", description: "Status indicators with multiple variants", path: "/components/badge" },
  { name: "Pill", description: "Selectable filter chips with tactile interaction", path: "/components/pill" },
  { name: "Modal", description: "Overlay dialogs with backdrop and keyboard support", path: "/components/modal" },
  { name: "SearchBar", description: "Input with icon and optional action button", path: "/components/search-bar" },
  { name: "TopNavBar", description: "Fixed navigation bar with mobile menu", path: "/components/top-navbar" },
  { name: "BottomNav", description: "Fixed bottom navigation for mobile", path: "/components/bottom-nav" },
  { name: "TabNav", description: "Horizontal tab strip with active indicator", path: "/components/tab-nav" },
  { name: "Icon", description: "Material Symbols wrapper with size presets", path: "/components/icon" },
  { name: "Grid", description: "Responsive grid container with breakpoint support", path: "/components/grid" },
  { name: "HeroSection", description: "Large hero block with headline and media", path: "/components/hero-section" },
  { name: "Toast", description: "Feedback notifications with auto-dismiss", path: "/components/toast" },
  { name: "FilterSidebar", description: "Vertical filter panel with pill/checkbox groups", path: "/components/filter-sidebar" },
  { name: "Footer", description: "Site footer with links and copyright", path: "/components/footer" },
  { name: "Layout", description: "Page shell with topBar, content, footer slots", path: "/components/layout" },
];

export function Home() {
  return (
    <Layout>
      <HeroSection
        headline="Neo Brutalist UI"
        description="A React component library with tactile interactions, hard shadows, and bold design. Built for modern web applications."
        label="v0.1.0"
        primaryAction={
          <Link to="/installation">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
        }
        secondaryAction={
          <Button variant="secondary" size="lg" onClick={() => window.open("https://github.com/ljlabs/NBUI")}>
            View on GitHub
          </Button>
        }
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Quick Install</h2>
        <CodeBlock code={installCode} language="bash" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <CodeBlock code={quickStartCode} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Components</h2>
        <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
          {components.map((comp, i) => (
            <Link key={comp.name} to={comp.path}>
              <Card interactive className="h-full">
                <CardBody>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-[var(--nb-on-surface)]"
                      style={{ backgroundColor: pastelColors[i % pastelColors.length] }}
                    />
                    <h3 className="font-bold text-lg">{comp.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--nb-on-surface-variant)]">{comp.description}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </Grid>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Design Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] p-4 shadow-[var(--nb-shadow-sm)]">
            <div className="w-full h-12 bg-[var(--nb-primary)] rounded-[var(--nb-radius-sm)] mb-2 border-2 border-[var(--nb-on-surface)]"></div>
            <span className="text-sm font-bold">Primary</span>
            <span className="text-xs block text-[var(--nb-on-surface-variant)]">#FFD54F</span>
          </div>
          <div className="border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] p-4 shadow-[var(--nb-shadow-sm)]">
            <div className="w-full h-12 bg-[var(--nb-secondary)] rounded-[var(--nb-radius-sm)] mb-2 border-2 border-[var(--nb-on-surface)]"></div>
            <span className="text-sm font-bold">Secondary</span>
            <span className="text-xs block text-[var(--nb-on-surface-variant)]">#E9D5FF</span>
          </div>
          <div className="border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] p-4 shadow-[var(--nb-shadow-sm)]">
            <div className="w-full h-12 bg-[var(--nb-tertiary)] rounded-[var(--nb-radius-sm)] mb-2 border-2 border-[var(--nb-on-surface)]"></div>
            <span className="text-sm font-bold">Tertiary</span>
            <span className="text-xs block text-[var(--nb-on-surface-variant)]">#A7F3D0</span>
          </div>
          <div className="border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] p-4 shadow-[var(--nb-shadow-sm)]">
            <div className="w-full h-12 bg-[var(--nb-error)] rounded-[var(--nb-radius-sm)] mb-2 border-2 border-[var(--nb-on-surface)]"></div>
            <span className="text-sm font-bold">Error</span>
            <span className="text-xs block text-[var(--nb-on-surface-variant)]">#ba1a1a</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
