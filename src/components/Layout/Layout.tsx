import type { LayoutProps } from "./Layout.types";

export function Layout({
  topBar,
  bottomNav,
  footer,
  children,
  background,
  maxWidth = "1200px",
}: LayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: background ?? "var(--nb-surface)" }}
    >
      {topBar}
      <main
        className="flex-1 w-full mx-auto px-4 md:px-8 lg:px-12 py-8"
        style={{ maxWidth }}
      >
        {children}
      </main>
      {footer}
      {bottomNav}
    </div>
  );
}
