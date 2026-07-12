interface Prop {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="my-6 border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[var(--nb-surface-container)] border-b-2 border-[var(--nb-on-surface)]">
            <th className="px-4 py-3 text-sm font-bold">Prop</th>
            <th className="px-4 py-3 text-sm font-bold">Type</th>
            <th className="px-4 py-3 text-sm font-bold">Default</th>
            <th className="px-4 py-3 text-sm font-bold">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-[var(--nb-outline-variant)] last:border-b-0">
              <td className="px-4 py-3">
                <code className="text-sm font-bold text-[var(--nb-primary)]">
                  {prop.name}
                  {prop.required && <span className="text-[var(--nb-error)]">*</span>}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs bg-[var(--nb-surface-container)] px-2 py-0.5 rounded">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs text-[var(--nb-on-surface-variant)]">
                  {prop.default ?? "—"}
                </code>
              </td>
              <td className="px-4 py-3 text-sm text-[var(--nb-on-surface-variant)]">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
