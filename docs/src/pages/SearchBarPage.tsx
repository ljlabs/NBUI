import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { SearchBar } from "neo-brutalist-ui";
import { useState } from "react";

export function SearchBarPage() {
  const [, setQuery] = useState("");

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">SearchBar</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Input with search icon, optional action button, and controlled/uncontrolled modes.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ SearchBar }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={`<SearchBar
  placeholder="Search skills..."
  onSearch={handleSearch}
  onChange={handleChange}
/>`}>
          <SearchBar
            placeholder="Search skills..."
            onSearch={(q) => alert("Search: " + q)}
            onChange={(q) => setQuery(q)}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Action Button (lg size)</h2>
        <LiveDemo code={`<SearchBar
  size="lg"
  showButton
  buttonLabel="Search"
  placeholder="Search for tools..."
  onSearch={handleSearch}
/>`}>
          <SearchBar
            size="lg"
            showButton
            buttonLabel="Search"
            placeholder="Search for tools..."
            onSearch={(q) => alert("Search: " + q)}
          />
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <LiveDemo code={`<SearchBar size="sm" placeholder="Small" />
<SearchBar size="md" placeholder="Medium" />
<SearchBar size="lg" placeholder="Large" />`}>
          <div className="space-y-4">
            <SearchBar size="sm" placeholder="Small" />
            <SearchBar size="md" placeholder="Medium" />
            <SearchBar size="lg" placeholder="Large" />
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "placeholder", type: "string", default: '"Search..."', description: "Placeholder text" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input size" },
          { name: "showButton", type: "boolean", default: "false", description: "Show action button (lg only)" },
          { name: "buttonLabel", type: "string", default: '"Search"', description: "Button text" },
          { name: "value", type: "string", description: "Controlled value" },
          { name: "onSearch", type: "(query: string) => void", description: "Called on Enter or button click" },
          { name: "onChange", type: "(query: string) => void", description: "Called on every keystroke" },
          { name: "icon", type: "string", default: '"search"', description: "Material Symbol name" },
        ]} />
      </section>
    </Layout>
  );
}