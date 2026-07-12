import { Icon } from "../Icon";
import type { FooterProps } from "./Footer.types";

export function Footer({
  logo,
  copyright,
  links = [],
}: FooterProps) {
  return (
    <footer
      className="w-full border-t-2 border-[var(--nb-on-surface)]"
      style={{
        backgroundColor: "var(--nb-surface-container-high)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {logo && <div className="flex items-center">{logo}</div>}

        {copyright && (
          <p className="text-sm text-[var(--nb-on-surface-variant)]">
            {copyright}
          </p>
        )}

        {links.length > 0 && (
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--nb-on-surface-variant)] hover:text-[var(--nb-on-surface)] transition-colors inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <Icon name={link.icon} size="sm" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
