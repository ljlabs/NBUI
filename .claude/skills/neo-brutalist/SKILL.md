---
name: neo-brutalist-ui
description: Use when working with the neo-brutalist-ui React component library, or when building neo-brutalist style UIs with tactile buttons, hard shadows, 2px borders, and Material Symbols icons
---

# Neo Brutalist UI

A React component library with neo-brutalist design: tactile interactions, hard offset shadows (no blur), 2px solid borders, bold typography, and Material Symbols Outlined icons. Built with React 19, TypeScript, and Vite.

## When to Use

- Building or modifying UIs that use the `neo-brutalist-ui` package
- Creating components with hard shadows, 2px borders, or tactile button feel
- Referencing the component API, props, or theme tokens
- Writing code examples or recipes for neo-brutalist styled apps

## Package

```
npm install neo-brutalist-ui
```

Import components from `neo-brutalist-ui` and styles from `neo-brutalist-ui/styles.css`:

```tsx
import { NeoThemeProvider, Button, Card } from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';
```

## Full Component List

### Layout
- `Layout` -- Page shell with slots for top bar, bottom nav, footer, and content
- `Grid` -- Responsive CSS grid with configurable columns per breakpoint
- `HeroSection` -- Hero banner with headline, description, CTAs, and media slot

### Navigation
- `TopNavBar` -- Horizontal top navigation bar with logo, items, and actions
- `BottomNav` -- Fixed bottom navigation for mobile with icon+label items
- `TabNav` -- Horizontal tab bar with icons and badge counts
- `Footer` -- Page footer with logo, links, and copyright
- `SearchBar` -- Search input with icon, optional button, and controlled state

### Feedback
- `Toast` -- Slide-in notification with success/error/info variants and auto-dismiss
- `Modal` -- Dialog overlay with backdrop, escape key, and size presets
- `Badge` -- Inline status indicator with filled/outlined/soft variants and dot mode
- `Pill` -- Toggleable pill button with icon support for filters and tags
- `FilterSidebar` -- Sidebar with pill/checkbox/radio filter groups and clear-all

### Surface
- `Card` -- Content container with Header/Body/Actions compound components
- `Button` -- Primary action with primary/secondary/ghost/danger variants and tactile feel
- `IconButton` -- Icon-only button with required aria-label for accessibility
- `Icon` -- Material Symbols Outlined icon with size presets and filled variant

### Theme
- `NeoThemeProvider` -- Context provider that injects CSS variables from a theme object
- `useTheme` -- Hook to access the current `NeoTheme` from context
- `useTactile` -- Hook for tactile hover/press state management

## Setup Pattern

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

## Quick Reference

| Need | Component |
|---|---|
| Page structure | `Layout` |
| Grid layout | `Grid` |
| Top navigation | `TopNavBar` |
| Bottom mobile nav | `BottomNav` |
| Tab switching | `TabNav` |
| Search input | `SearchBar` |
| Content card | `Card`, `CardHeader`, `CardBody`, `CardActions` |
| Primary action | `Button` (variant="primary") |
| Icon button | `IconButton` |
| Status badge | `Badge` |
| Filter toggle | `Pill` |
| Filter panel | `FilterSidebar` |
| Dialog | `Modal` |
| Notification | `Toast` |
| Icon | `Icon` |
| Hero section | `HeroSection` |
| Page footer | `Footer` |

## Related Skill Files

- [components.md](./components.md) -- Full API reference for all 17 components
- [theming.md](./theming.md) -- Theme provider, CSS variables, and Tailwind integration
- [examples.md](./examples.md) -- Common usage recipes (dashboard, form, hero, mobile, etc.)
