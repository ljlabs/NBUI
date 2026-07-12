import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Toast, Button, Grid } from "neo-brutalist-ui";
import { useState } from "react";

export function ToastPage() {
  const [toasts, setToasts] = useState<Record<string, { variant: "success" | "error" | "info" }>>({});

  const showToast = (variant: "success" | "error" | "info") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => ({ ...prev, [id]: { variant } }));
    setTimeout(() => {
      setToasts((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }, 3000);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Toast</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Feedback notifications with auto-dismiss and animation variants.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Toast }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Variants</h2>
        <LiveDemo code={`<Toast open variant="success">Saved!</Toast>
<Toast open variant="error">Error occurred</Toast>
<Toast open variant="info">Information</Toast>`}>
          <Grid columns={{ sm: 1, md: 3 }} gap="md">
            <Toast open variant="success" onClose={() => {}}>Saved!</Toast>
            <Toast open variant="error" onClose={() => {}}>Error occurred</Toast>
            <Toast open variant="info" onClose={() => {}}>Information</Toast>
          </Grid>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Demo</h2>
        <LiveDemo code={`const [toasts, setToasts] = useState({});

function show(variant) {
  const id = Date.now().toString();
  setToasts(prev => ({ ...prev, [id]: { variant } }));
  setTimeout(() => setToasts(prev => {
    const next = { ...prev };
    delete next[id];
    return next;
  }), 3000);
}

return (
  <>
    <Button variant="primary" onClick={() => show("success")}>Show Success</Button>
    <Button variant="danger" onClick={() => show("error")}>Show Error</Button>
    <Button variant="secondary" onClick={() => show("info")}>Show Info</Button>
    {Object.entries(toasts).map(([id, { variant }]) => (
      <Toast key={id} open variant={variant} onClose={() => {
        setToasts(prev => { const next = { ...prev }; delete next[id]; return next; });
      }}>
        {variant === "success" && "Operation successful!"}
        {variant === "error" && "Something went wrong"}
        {variant === "info" && "Here's some information"}
      </Toast>
    ))}
  </>
)`}>
          <div className="flex gap-3 mb-6">
            <Button variant="primary" onClick={() => showToast("success")}>Show Success</Button>
            <Button variant="danger" onClick={() => showToast("error")}>Show Error</Button>
            <Button variant="secondary" onClick={() => showToast("info")}>Show Info</Button>
          </div>
          <Grid columns={{ sm: 1, md: 3 }} gap="md" style={{ position: "fixed", bottom: "1rem", right: "1rem", zIndex: 50 }}>
            {Object.entries(toasts).map(([id, { variant }]) => (
              <Toast key={id} open variant={variant} onClose={() => setToasts(prev => { const next = { ...prev }; delete next[id]; return next; })}>
                {variant === "success" && "Operation successful!"}
                {variant === "error" && "Something went wrong"}
                {variant === "info" && "Here's some information"}
              </Toast>
            ))}
          </Grid>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "open", type: "boolean", required: true, description: "Whether toast is visible" },
          { name: "onClose", type: "() => void", required: true, description: "Dismiss callback" },
          { name: "variant", type: '"success" | "error" | "info"', default: '"info"', description: "Visual variant" },
          { name: "autoDismiss", type: "number", default: "5000", description: "Auto-dismiss delay in ms (0 = disabled)" },
          { name: "children", type: "ReactNode", required: true, description: "Toast message" },
        ]} />
      </section>
    </Layout>
  );
}