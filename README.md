# Neo Brutalist UI

A React component library with tactile interactions, hard shadows, and bold neo-brutalist design. Built with React 19, TypeScript, and Tailwind CSS.

## Features

- 17 production-ready components
- Tactile button interactions (hover lift, active press)
- Hard offset shadows (no blur) at 2px, 4px, 6px depths
- 2px solid dark borders on all components
- CSS variable theming (`--nb-` prefix)
- TypeScript types included
- Tree-shakeable ESM + CJS output
- Material Symbols Outlined icons
- Zero-runtime styling (no CSS-in-JS)

## Installation

```bash
npm install neo-brutalist-ui
```

Only the compiled `dist/` folder ships -- `docs/` and `.claude/` are excluded from the package.

## Quick Start

```tsx
import { NeoThemeProvider, Button, Card } from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';

function App() {
  return (
    <NeoThemeProvider>
      <Card variant="elevated">
        <h2>Welcome</h2>
        <Button variant="primary">Get Started</Button>
      </Card>
    </NeoThemeProvider>
  );
}
```

## Components

### Layout

| Component | Description |
|---|---|
| `Layout` | Page shell with slots for top bar, bottom nav, footer, and content area |
| `Grid` | Responsive CSS grid with configurable column counts per breakpoint |
| `HeroSection` | Hero banner with headline, description, CTAs, and media slot |

### Navigation

| Component | Description |
|---|---|
| `TopNavBar` | Horizontal top navigation bar with logo, nav items, and action slot |
| `BottomNav` | Fixed bottom navigation for mobile with icon+label items |
| `TabNav` | Horizontal tab bar with icons and badge counts |
| `Footer` | Page footer with logo, links, and copyright text |
| `SearchBar` | Search input with icon, optional button, and controlled state |

### Feedback

| Component | Description |
|---|---|
| `Toast` | Slide-in notification with success/error/info variants and auto-dismiss |
| `Modal` | Dialog overlay with backdrop, escape key, and multiple size presets |
| `Badge` | Inline status indicator with filled/outlined/soft variants and dot mode |
| `Pill` | Toggleable pill button with icon support for filters and tags |
| `FilterSidebar` | Sidebar with pill/checkbox/radio filter groups and clear-all action |

### Surface

| Component | Description |
|---|---|
| `Card` | Content container with Header/Body/Actions compound components |
| `Button` | Primary action with primary/secondary/ghost/danger variants and tactile feel |
| `IconButton` | Icon-only button with required aria-label for accessibility |
| `Icon` | Material Symbols Outlined icon with size presets and filled variant |

### Theming

| Component | Description |
|---|---|
| `NeoThemeProvider` | Context provider that injects CSS variables from a theme object |
| `useTheme` | Hook to access the current `NeoTheme` from context |

## Theming

### Provider

Wrap your app with `NeoThemeProvider` to inject theme CSS variables:

```tsx
import { NeoThemeProvider } from 'neo-brutalist-ui';

function App() {
  return (
    <NeoThemeProvider theme={{ colors: { primary: '#FF6B6B' } }}>
      <MyApp />
    </NeoThemeProvider>
  );
}
```

### CSS Variable Override

Override any `--nb-*` CSS variable directly on a parent element:

```css
:root {
  --nb-primary: #FF6B6B;
  --nb-shadow-color: rgba(0, 0, 0, 0.8);
  --nb-font-display: "Inter", sans-serif;
}
```

### Custom Palette

```tsx
const customTheme: ThemeOverrides = {
  colors: {
    primary: '#6C63FF',
    onPrimary: '#ffffff',
    primaryContainer: '#E8E5FF',
    secondary: '#FF6B6B',
    surface: '#FAFAFA',
    onSurface: '#1A1A1A',
  },
};

<NeoThemeProvider theme={customTheme}>
  <App />
</NeoThemeProvider>
```

### Tailwind Integration

The `--nb-*` CSS variables are available as standard Tailwind utilities. Use the `theme()` function in your Tailwind config or reference them directly:

```html
<!-- Use Tailwind's arbitrary value syntax -->
<div class="bg-[var(--nb-primary)] text-[var(--nb-on-primary)]">
  Styled with theme vars
</div>

<!-- Or extend your Tailwind config -->
<button class="bg-primary text-on-primary shadow-md hover:shadow-lg">
  Themed button
</button>
```

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--nb-primary)',
        'on-primary': 'var(--nb-on-primary)',
        secondary: 'var(--nb-secondary)',
        surface: 'var(--nb-surface)',
        'on-surface': 'var(--nb-on-surface)',
        error: 'var(--nb-error)',
      },
      boxShadow: {
        'nb-sm': 'var(--nb-shadow-sm)',
        'nb': 'var(--nb-shadow)',
        'nb-lg': 'var(--nb-shadow-lg)',
        'nb-inset': 'var(--nb-shadow-inset)',
      },
      borderRadius: {
        'nb-sm': 'var(--nb-radius-sm)',
        'nb': 'var(--nb-radius)',
        'nb-lg': 'var(--nb-radius-lg)',
        'nb-full': 'var(--nb-radius-full)',
      },
      fontFamily: {
        display: 'var(--nb-font-display)',
        body: 'var(--nb-font-body)',
        label: 'var(--nb-font-label)',
      },
    },
  },
};
```

### Available CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--nb-primary` | `#FFD54F` | Primary brand color (yellow) |
| `--nb-secondary` | `#E9D5FF` | Secondary color (lavender) |
| `--nb-tertiary` | `#A7F3D0` | Tertiary color (mint) |
| `--nb-error` | `#ba1a1a` | Error color |
| `--nb-surface` | `#fcf8f7` | Base surface color |
| `--nb-on-surface` | `#1c1b1b` | Text on surface |
| `--nb-shadow-color` | `rgba(26,26,26,1)` | Shadow base color |
| `--nb-shadow-sm` | `2px 2px 0 0 ...` | Small shadow |
| `--nb-shadow` | `4px 4px 0 0 ...` | Default shadow |
| `--nb-shadow-lg` | `6px 6px 0 0 ...` | Large shadow |
| `--nb-border-width` | `2px` | Border width |
| `--nb-border-color` | `#1c1b1b` | Border color |
| `--nb-radius` | `0.75rem` | Default border radius |
| `--nb-font-display` | Fredoka, Quicksand | Display font |
| `--nb-font-body` | Quicksand | Body font |
| `--nb-transition` | `0.1s ease` | Default transition |

## License

MIT
