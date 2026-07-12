import { Layout } from "../components/Layout";
import { CodeBlock } from "../components/CodeBlock";

const npmCode = `npm install https://github.com/user/Neo_Brutalist`;
const yarnCode = `yarn add https://github.com/user/Neo_Brutalist`;
const pnpmCode = `pnpm add https://github.com/user/Neo_Brutalist`;

const importCode = `// In your app entry point (e.g., main.tsx or App.tsx)
import 'neo-brutalist-ui/styles.css';`;

const providerCode = `import { NeoThemeProvider } from 'neo-brutalist-ui';

function App() {
  return (
    <NeoThemeProvider>
      <YourApp />
    </NeoThemeProvider>
  );
}`;

const tailwindCode = `// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        'nb-surface': 'var(--nb-surface)',
        'nb-primary': 'var(--nb-primary)',
        'nb-secondary': 'var(--nb-secondary)',
        'nb-tertiary': 'var(--nb-tertiary)',
        'nb-on-surface': 'var(--nb-on-surface)',
        'nb-error': 'var(--nb-error)',
      },
      boxShadow: {
        'nb': 'var(--nb-shadow)',
        'nb-sm': 'var(--nb-shadow-sm)',
        'nb-lg': 'var(--nb-shadow-lg)',
        'nb-inset': 'var(--nb-shadow-inset)',
      },
      borderRadius: {
        'nb': 'var(--nb-radius)',
        'nb-lg': 'var(--nb-radius-lg)',
      },
    },
  },
};`;

export function Installation() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Installation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Package Managers</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold mb-2">npm</h3>
            <CodeBlock code={npmCode} language="bash" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">yarn</h3>
            <CodeBlock code={yarnCode} language="bash" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">pnpm</h3>
            <CodeBlock code={pnpmCode} language="bash" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Setup</h2>

        <h3 className="text-lg font-bold mb-2">1. Import Styles</h3>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          Import the base CSS file in your app's entry point to load all design tokens and utility classes.
        </p>
        <CodeBlock code={importCode} />

        <h3 className="text-lg font-bold mb-2 mt-6">2. Wrap with ThemeProvider</h3>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          Wrap your app with <code>NeoThemeProvider</code> to enable theme customization.
        </p>
        <CodeBlock code={providerCode} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Tailwind Integration</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          Add these extensions to your Tailwind config to use Neo Brutalist tokens directly in utility classes.
        </p>
        <CodeBlock code={tailwindCode} language="javascript" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">CDN</h2>
        <p className="mb-4 text-[var(--nb-on-surface-variant)]">
          For quick prototyping, you can include the CSS directly via a link tag. Download the CSS from the dist folder or use a CDN service.
        </p>
        <CodeBlock code={`<link rel="stylesheet" href="https://cdn.example.com/neo-brutalist-ui/styles.css" />`} language="html" />
      </section>
    </Layout>
  );
}
