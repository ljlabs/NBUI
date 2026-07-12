import { Layout } from "../components/Layout";
import { LiveDemo } from "../components/LiveDemo";
import { PropsTable } from "../components/PropsTable";
import { Modal, Button } from "neo-brutalist-ui";
import { useState } from "react";

const basicCode = `<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <p>Modal content here</p>
</Modal>`;

const withActionsCode = `<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Delete"
  actions={
    <>
      <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="danger" onClick={handleConfirm}>Delete</Button>
    </>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>`;

const sizesCode = `<Modal size="sm" open onClose={close} title="Small">Content</Modal>
<Modal size="md" open onClose={close} title="Medium">Content</Modal>
<Modal size="lg" open onClose={close} title="Large">Content</Modal>`;

export function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWithActions, setIsOpenWithActions] = useState(false);
  const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | null>(null);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-2">Modal</h1>
      <p className="text-[var(--nb-on-surface-variant)] mb-6">
        Overlay dialogs with backdrop, focus trap, and keyboard support.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <code className="block bg-[var(--nb-surface-container)] p-3 rounded-[var(--nb-radius)] text-sm mb-4">
          import {"{ Modal }"} from 'neo-brutalist-ui';
        </code>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <LiveDemo code={basicCode}>
          <div>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <p>Modal content here</p>
            </Modal>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">With Actions</h2>
        <LiveDemo code={withActionsCode}>
          <div>
            <Button onClick={() => setIsOpenWithActions(true)}>Open Modal</Button>
            <Modal
              open={isOpenWithActions}
              onClose={() => setIsOpenWithActions(false)}
              title="Confirm Delete"
              actions={
                <>
                  <Button variant="secondary" onClick={() => setIsOpenWithActions(false)}>Cancel</Button>
                  <Button variant="danger" onClick={() => setIsOpenWithActions(false)}>Delete</Button>
                </>
              }
            >
              <p className="text-[var(--nb-on-surface-variant)]">Are you sure you want to delete this item? This action cannot be undone.</p>
            </Modal>
          </div>
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sizes</h2>
        <LiveDemo code={sizesCode}>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => setOpenSize("sm")}>Open Small</Button>
            <Button size="md" onClick={() => setOpenSize("md")}>Open Medium</Button>
            <Button size="lg" onClick={() => setOpenSize("lg")}>Open Large</Button>
          </div>
          {openSize && (
            <Modal
              size={openSize}
              open={true}
              onClose={() => setOpenSize(null)}
              title={`${openSize.charAt(0).toUpperCase() + openSize.slice(1)} Modal`}
              actions={
                <>
                  <Button variant="secondary" size="sm" onClick={() => setOpenSize(null)}>Cancel</Button>
                  <Button variant="primary" size="sm" onClick={() => setOpenSize(null)}>OK</Button>
                </>
              }
            >
              <p className="text-[var(--nb-on-surface-variant)]">
                This is a <strong>{openSize}</strong> modal. It uses <code>size="{openSize}"</code> to control the width.
              </p>
            </Modal>
          )}
        </LiveDemo>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <PropsTable props={[
          { name: "open", type: "boolean", required: true, description: "Whether modal is visible" },
          { name: "onClose", type: "() => void", required: true, description: "Close callback" },
          { name: "title", type: "string", description: "Modal title" },
          { name: "size", type: '"sm" | "md" | "lg" | "full"', default: '"md"', description: "Modal width" },
          { name: "closeOnBackdrop", type: "boolean", default: "true", description: "Close on backdrop click" },
          { name: "closeOnEscape", type: "boolean", default: "true", description: "Close on Escape key" },
          { name: "actions", type: "ReactNode", description: "Footer action buttons" },
        ]} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
        <ul className="list-disc list-inside space-y-1 text-[var(--nb-on-surface-variant)]">
          <li>Focus is trapped within the modal</li>
          <li>Press Escape to close</li>
          <li>ARIA roles and labels applied</li>
          <li>Backdrop click closes (configurable)</li>
        </ul>
      </section>
    </Layout>
  );
}
