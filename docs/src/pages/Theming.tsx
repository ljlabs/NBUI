import { Layout } from "../components/Layout";
import { CodeBlock } from "../components/CodeBlock";
import { LiveDemo } from "../components/LiveDemo";
import { Button, NeoThemeProvider } from "neo-brutalist-ui";

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

export function Theming() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Theming</h1>

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
        <h2 className="text-2xl font-bold mb-4">Live Example</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          Here's a button with a custom red theme applied:
        </p>
        <LiveDemo code={`<NeoThemeProvider theme={{ colors: { primary: '#FF6B6B' } }}>
  <Button variant="primary">Custom Red Button</Button>
</NeoThemeProvider>`}>
          <NeoThemeProvider theme={{ colors: { primary: '#FF6B6B' } }}>
            <Button variant="primary">Custom Red Button</Button>
          </NeoThemeProvider>
        </LiveDemo>
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
