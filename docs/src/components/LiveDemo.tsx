import { useState } from "react";
import { CodeBlock } from "./CodeBlock";

interface LiveDemoProps {
  code: string;
  children: React.ReactNode;
}

export function LiveDemo({ code, children }: LiveDemoProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius-lg)] overflow-hidden my-6">
      {/* Demo preview */}
      <div className="p-6 bg-white border-b-2 border-[var(--nb-on-surface)]">
        <div className="flex flex-wrap items-center gap-4">
          {children}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setShowCode(!showCode)}
        className="w-full px-4 py-2 bg-[var(--nb-surface-container)] text-sm font-bold text-[var(--nb-on-surface-variant)] border-b-2 border-[var(--nb-on-surface)] hover:bg-[var(--nb-surface-container-high)] transition-colors flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-sm">
          {showCode ? "visibility_off" : "code"}
        </span>
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {/* Code view */}
      {showCode && (
        <div className="border-t-2 border-[var(--nb-on-surface)]">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
}
