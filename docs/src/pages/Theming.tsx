import { Layout } from "../components/Layout";
import { CodeBlock } from "../components/CodeBlock";
import { LiveDemo } from "../components/LiveDemo";
import { Button, Card, CardBody, Badge, Pill, NeoThemeProvider } from "neo-brutalist-ui";
import { useState } from "react";

const themeOverrideCode = `import { NeoThemeProvider } from 'neo-brutalist-ui';

function App() {
  return (
    <NeoThemeProvider theme={{
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        tertiary: '#FFE66D',
      },
      typography: {
        displayFont: '"Fredoka", sans-serif',
      },
    }}>
      <YourApp />
    </NeoThemeProvider>
  );
}`;

const cssVarCode = `/* Override CSS variables directly */
:root {
  --nb-primary: #FF6B6B;
  --nb-secondary: #4ECDC4;
  --nb-tertiary: #FFE66D;
  --nb-shadow: 4px 4px 0px 0px #000000;
}`;

const useThemeCode = `import { useTheme } from 'neo-brutalist-ui';

function MyComponent() {
  const theme = useTheme();

  return (
    <div style={{ color: theme.colors.primary }}>
      Primary color: {theme.colors.primary}
    </div>
  );
}`;

const themePresets = [
  {
    name: "Default",
    theme: {},
    colors: { primary: "#FFD54F", secondary: "#E9D5FF", tertiary: "#A7F3D0" },
  },
  {
    name: "Ocean",
    theme: {
      colors: {
        primary: "#0077B6",
        secondary: "#90E0EF",
        tertiary: "#CAF0F8",
      },
    },
    colors: { primary: "#0077B6", secondary: "#90E0EF", tertiary: "#CAF0F8" },
  },
  {
    name: "Sunset",
    theme: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#FFA07A",
        tertiary: "#FFE66D",
      },
    },
    colors: { primary: "#FF6B6B", secondary: "#FFA07A", tertiary: "#FFE66D" },
  },
  {
    name: "Forest",
    theme: {
      colors: {
        primary: "#2D6A4F",
        secondary: "#95D5B2",
        tertiary: "#D8F3DC",
      },
    },
    colors: { primary: "#2D6A4F", secondary: "#95D5B2", tertiary: "#D8F3DC" },
  },
];

export function Theming() {
  const [activePreset, setActivePreset] = useState(0);
  const currentPreset = themePresets[activePreset]!;

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Theming</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Theme Presets</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          Click a preset to see how the entire UI responds to theme changes.
        </p>
        <LiveDemo code={`<NeoThemeProvider theme={{
  colors: { primary: '${currentPreset.colors.primary}' }
}}>
  <Button variant="primary">Themed Button</Button>
</NeoThemeProvider>`}>
          <div className="w-full p-4">
            <div className="flex flex-wrap gap-2 mb-6">
              {themePresets.map((preset, i) => (
                <button
                  key={preset.name}
                  onClick={() => setActivePreset(i)}
                  className={`px-4 py-2 rounded-[var(--nb-radius)] border-2 border-[var(--nb-on-surface)] font-bold text-sm transition-all ${
                    activePreset === i
                      ? "shadow-[var(--nb-shadow)] -translate-y-0.5"
                      : "shadow-none hover:shadow-[var(--nb-shadow-sm)]"
                  }`}
                  style={{ backgroundColor: preset.colors.primary }}
                >
                  {preset.name}
                </button>
              ))}
            </div>
            <NeoThemeProvider theme={currentPreset.theme}>
              <Card>
                <CardBody className="p-6">
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--nb-on-surface-variant)] mb-2 block">Buttons</span>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--nb-on-surface-variant)] mb-2 block">Badges</span>
                      <div className="flex flex-wrap gap-2">
                        <Badge color="primary">Primary</Badge>
                        <Badge color="secondary">Secondary</Badge>
                        <Badge color="tertiary">Tertiary</Badge>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--nb-on-surface-variant)] mb-2 block">Pills</span>
                      <div className="flex flex-wrap gap-2">
                        <Pill selected color={currentPreset.colors.primary}>Selected</Pill>
                        <Pill>Default</Pill>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--nb-on-surface-variant)] mb-2 block">Color Palette</span>
                      <div className="flex gap-3">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-[var(--nb-radius)] border-2 border-[var(--nb-on-surface)] shadow-[var(--nb-shadow-sm)]" style={{ backgroundColor: currentPreset.colors.primary }} />
                          <span className="text-xs mt-1 block font-bold">Primary</span>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-[var(--nb-radius)] border-2 border-[var(--nb-on-surface)] shadow-[var(--nb-shadow-sm)]" style={{ backgroundColor: currentPreset.colors.secondary }} />
                          <span className="text-xs mt-1 block font-bold">Secondary</span>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-[var(--nb-radius)] border-2 border-[var(--nb-on-surface)] shadow-[var(--nb-shadow-sm)]" style={{ backgroundColor: currentPreset.colors.tertiary }} />
                          <span className="text-xs mt-1 block font-bold">Tertiary</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </NeoThemeProvider>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">ThemeProvider</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          The <code>NeoThemeProvider</code> component accepts a <code>theme</code> prop with partial overrides.
          It deep-merges your overrides with the default theme and injects CSS custom properties.
        </p>
        <CodeBlock code={themeOverrideCode} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CSS Variables</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          You can also override theme tokens directly via CSS custom properties. All tokens use the <code>--nb-</code> prefix.
        </p>
        <CodeBlock code={cssVarCode} language="css" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">useTheme Hook</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          Access the current theme object programmatically with the <code>useTheme</code> hook.
        </p>
        <CodeBlock code={useThemeCode} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Available Tokens</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)]">
            <thead>
              <tr className="bg-[var(--nb-surface-container)] border-b-2 border-[var(--nb-on-surface)]">
                <th className="px-4 py-3 text-sm font-bold">Category</th>
                <th className="px-4 py-3 text-sm font-bold">Token</th>
                <th className="px-4 py-3 text-sm font-bold">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--nb-outline-variant)]">
                <td className="px-4 py-3 text-sm font-bold">Colors</td>
                <td className="px-4 py-3"><code className="text-xs">primary</code></td>
                <td className="px-4 py-3"><code className="text-xs">#FFD54F</code></td>
              </tr>
              <tr className="border-b border-[var(--nb-outline-variant)]">
                <td className="px-4 py-3 text-sm font-bold">Colors</td>
                <td className="px-4 py-3"><code className="text-xs">secondary</code></td>
                <td className="px-4 py-3"><code className="text-xs">#E9D5FF</code></td>
              </tr>
              <tr className="border-b border-[var(--nb-outline-variant)]">
                <td className="px-4 py-3 text-sm font-bold">Colors</td>
                <td className="px-4 py-3"><code className="text-xs">tertiary</code></td>
                <td className="px-4 py-3"><code className="text-xs">#A7F3D0</code></td>
              </tr>
              <tr className="border-b border-[var(--nb-outline-variant)]">
                <td className="px-4 py-3 text-sm font-bold">Shadows</td>
                <td className="px-4 py-3"><code className="text-xs">md</code></td>
                <td className="px-4 py-3"><code className="text-xs">4px 4px 0px 0px rgba(26,26,26,1)</code></td>
              </tr>
              <tr className="border-b border-[var(--nb-outline-variant)]">
                <td className="px-4 py-3 text-sm font-bold">Radii</td>
                <td className="px-4 py-3"><code className="text-xs">md</code></td>
                <td className="px-4 py-3"><code className="text-xs">0.75rem</code></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-bold">Typography</td>
                <td className="px-4 py-3"><code className="text-xs">displayFont</code></td>
                <td className="px-4 py-3"><code className="text-xs">"Fredoka", sans-serif</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
