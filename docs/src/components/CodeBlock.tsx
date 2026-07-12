import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconButton } from "neo-brutalist-ui";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative border-2 border-[var(--nb-on-surface)] rounded-[var(--nb-radius)] overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--nb-inverse-surface)] border-b-2 border-[var(--nb-on-surface)]">
        <span className="text-xs font-bold text-[var(--nb-inverse-on-surface)] uppercase">
          {language}
        </span>
        <IconButton
          icon={copied ? "check" : "content_copy"}
          size="sm"
          aria-label="Copy code"
          onClick={handleCopy}
          className="!bg-transparent !text-[var(--nb-inverse-on-surface)] !border-0 hover:!bg-[var(--nb-surface-container)]"
        />
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          border: "none",
          background: "#1a1b1b",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
