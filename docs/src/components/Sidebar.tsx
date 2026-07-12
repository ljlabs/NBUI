import { NavLink } from "react-router-dom";

interface NavGroup {
  title: string;
  items: { label: string; path: string }[];
}

const navGroups: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Home", path: "/" },
      { label: "Installation", path: "/installation" },
      { label: "Theming", path: "/theming" },
    ],
  },
  {
    title: "Foundation",
    items: [
      { label: "Button", path: "/components/button" },
      { label: "IconButton", path: "/components/icon-button" },
      { label: "Badge", path: "/components/badge" },
      { label: "Pill", path: "/components/pill" },
      { label: "Icon", path: "/components/icon" },
      { label: "Grid", path: "/components/grid" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "TopNavBar", path: "/components/top-navbar" },
      { label: "BottomNav", path: "/components/bottom-nav" },
      { label: "TabNav", path: "/components/tab-nav" },
      { label: "Footer", path: "/components/footer" },
      { label: "Layout", path: "/components/layout" },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Card", path: "/components/card" },
      { label: "SearchBar", path: "/components/search-bar" },
      { label: "Modal", path: "/components/modal" },
      { label: "HeroSection", path: "/components/hero-section" },
      { label: "Toast", path: "/components/toast" },
      { label: "FilterSidebar", path: "/components/filter-sidebar" },
    ],
  },
];

export function Sidebar() {
  return (
    <nav className="w-64 shrink-0 border-r-2 border-[var(--nb-on-surface)] bg-[var(--nb-surface-container-low)] h-screen sticky top-0 overflow-y-auto p-4">
      <h1 className="text-lg font-bold mb-6 px-2">
        <span className="nb-text-shadow-hard">Neo Brutalist</span>
      </h1>
      {navGroups.map((group) => (
        <div key={group.title} className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--nb-on-surface-variant)] px-2 mb-2">
            {group.title}
          </h2>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-1.5 rounded-[var(--nb-radius-sm)] text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[var(--nb-primary)] text-[var(--nb-on-primary)]"
                        : "text-[var(--nb-on-surface-variant)] hover:bg-[var(--nb-surface-container)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
