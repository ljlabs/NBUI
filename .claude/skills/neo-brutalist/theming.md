# Theming Guide

Neo Brutalist UI uses CSS custom properties (`--nb-*` prefix) for all design tokens. Theme values flow through `NeoThemeProvider`, which injects CSS variables as inline styles on a wrapper div.

---

## ThemeProvider

```tsx
import { NeoThemeProvider } from 'neo-brutalist-ui';

function App() {
  return (
    <NeoThemeProvider>
      <MyApp />
    </NeoThemeProvider>
  );
}
```

### Partial Overrides

Pass a `ThemeOverrides` object to override only the tokens you need. The provider deep-merges with the default theme:

```tsx
<NeoThemeProvider theme={{ colors: { primary: '#FF6B6B' } }}>
  <App />
</NeoThemeProvider>
```

### Theme Object Shape

```ts
interface NeoTheme {
  colors: {
    surface: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    onSurface: string;
    onSurfaceVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    background: string;
    onBackground: string;
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    outline: string;
    outlineVariant: string;
  };
  shadows: {
    sm: string;   // default: "2px 2px 0px 0px rgba(26,26,26,1)"
    md: string;   // default: "4px 4px 0px 0px rgba(26,26,26,1)"
    lg: string;   // default: "6px 6px 0px 0px rgba(26,26,26,1)"
    inset: string; // default: "inset 2px 2px 0px 0px rgba(26,26,26,1)"
  };
  borders: {
    width: number;  // default: 2
    color: string;  // default: "#1c1b1b"
  };
  radii: {
    sm: string;    // default: "0.5rem"
    md: string;    // default: "0.75rem"
    lg: string;    // default: "1.25rem"
    full: string;  // default: "9999px"
  };
  typography: {
    displayFont: string; // default: '"Fredoka", "Quicksand", sans-serif'
    bodyFont: string;    // default: '"Quicksand", sans-serif'
    labelFont: string;   // default: '"Work Sans", "Quicksand", sans-serif'
  };
  motion: {
    duration: string; // default: "0.1s"
    easing: string;   // default: "ease"
  };
}
```

### useTheme Hook

Read the current merged theme from context:

```tsx
import { useTheme } from 'neo-brutalist-ui';

function ThemedComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.colors.onSurface }}>Hello</div>;
}
```

---

## CSS Variable Override

Override any `--nb-*` variable on a parent element. Variables cascade to all children:

```css
/* Global override */
:root {
  --nb-primary: #6C63FF;
  --nb-secondary: #FF6B6B;
  --nb-shadow-color: rgba(0, 0, 0, 0.6);
  --nb-font-display: "Inter", sans-serif;
  --nb-font-body: "Inter", sans-serif;
  --nb-border-width: 3px;
}

/* Section-specific override */
.dark-section {
  --nb-surface: #1a1a2e;
  --nb-on-surface: #e0e0e0;
  --nb-background: #16213e;
}
```

---

## Full Variable Reference

### Colors

| CSS Variable | Theme Key | Default |
|---|---|---|
| `--nb-primary` | `colors.primary` | `#FFD54F` |
| `--nb-on-primary` | `colors.onPrimary` | `#1c1b1b` |
| `--nb-primary-container` | `colors.primaryContainer` | `#fff8d6` |
| `--nb-on-primary-container` | `colors.onPrimaryContainer` | `#464745` |
| `--nb-secondary` | `colors.secondary` | `#E9D5FF` |
| `--nb-on-secondary` | `colors.onSecondary` | `#1c1b1b` |
| `--nb-secondary-container` | `colors.secondaryContainer` | `#f3eaff` |
| `--nb-on-secondary-container` | `colors.onSecondaryContainer` | `#464745` |
| `--nb-tertiary` | `colors.tertiary` | `#A7F3D0` |
| `--nb-on-tertiary` | `colors.onTertiary` | `#1c1b1b` |
| `--nb-tertiary-container` | `colors.tertiaryContainer` | `#d1fce6` |
| `--nb-on-tertiary-container` | `colors.onTertiaryContainer` | `#464745` |
| `--nb-error` | `colors.error` | `#ba1a1a` |
| `--nb-on-error` | `colors.onError` | `#ffffff` |
| `--nb-error-container` | `colors.errorContainer` | `#ffdad6` |
| `--nb-on-error-container` | `colors.onErrorContainer` | `#93000a` |
| `--nb-surface` | `colors.surface` | `#fcf8f7` |
| `--nb-surface-dim` | `colors.surfaceDim` | `#ddd9d8` |
| `--nb-surface-bright` | `colors.surfaceBright` | `#fcf8f7` |
| `--nb-surface-container-lowest` | `colors.surfaceContainerLowest` | `#ffffff` |
| `--nb-surface-container-low` | `colors.surfaceContainerLow` | `#f7f3f2` |
| `--nb-surface-container` | `colors.surfaceContainer` | `#f1edec` |
| `--nb-surface-container-high` | `colors.surfaceContainerHigh` | `#ebe7e6` |
| `--nb-surface-container-highest` | `colors.surfaceContainerHighest` | `#e5e2e1` |
| `--nb-on-surface` | `colors.onSurface` | `#1c1b1b` |
| `--nb-on-surface-variant` | `colors.onSurfaceVariant` | `#444844` |
| `--nb-inverse-surface` | `colors.inverseSurface` | `#313030` |
| `--nb-inverse-on-surface` | `colors.inverseOnSurface` | `#f4f0ef` |
| `--nb-background` | `colors.background` | `#fcf8f7` |
| `--nb-on-background` | `colors.onBackground` | `#1c1b1b` |
| `--nb-outline` | `colors.outline` | `#757874` |
| `--nb-outline-variant` | `colors.outlineVariant` | `#c5c7c3` |

### Shadows

| CSS Variable | Theme Key | Default |
|---|---|---|
| `--nb-shadow-color` | -- | `rgba(26, 26, 26, 1)` |
| `--nb-shadow-sm` | `shadows.sm` | `2px 2px 0px 0px var(--nb-shadow-color)` |
| `--nb-shadow` | `shadows.md` | `4px 4px 0px 0px var(--nb-shadow-color)` |
| `--nb-shadow-lg` | `shadows.lg` | `6px 6px 0px 0px var(--nb-shadow-color)` |
| `--nb-shadow-inset` | `shadows.inset` | `inset 2px 2px 0px 0px var(--nb-shadow-color)` |

### Borders

| CSS Variable | Theme Key | Default |
|---|---|---|
| `--nb-border-width` | `borders.width` | `2px` |
| `--nb-border-color` | `borders.color` | `var(--nb-on-surface)` |
| `--nb-border` | -- | `var(--nb-border-width) solid var(--nb-border-color)` |

### Radii

| CSS Variable | Theme Key | Default |
|---|---|---|
| `--nb-radius-sm` | `radii.sm` | `0.5rem` |
| `--nb-radius` | `radii.md` | `0.75rem` |
| `--nb-radius-lg` | `radii.lg` | `1.25rem` |
| `--nb-radius-full` | `radii.full` | `9999px` |

### Typography

| CSS Variable | Theme Key | Default |
|---|---|---|
| `--nb-font-display` | `typography.displayFont` | `"Fredoka", "Quicksand", sans-serif` |
| `--nb-font-body` | `typography.bodyFont` | `"Quicksand", sans-serif` |
| `--nb-font-label` | `typography.labelFont` | `"Work Sans", "Quicksand", sans-serif` |

### Motion

| CSS Variable | Theme Key | Default |
|---|---|---|
| `--nb-transition` | -- | `0.1s ease` |

---

## Tailwind Integration

Extend your Tailwind config to reference the CSS variables. This gives you `bg-primary`, `shadow-nb`, `font-display`, etc. in your utility classes:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--nb-primary)',
        'on-primary': 'var(--nb-on-primary)',
        'primary-container': 'var(--nb-primary-container)',
        secondary: 'var(--nb-secondary)',
        'on-secondary': 'var(--nb-on-secondary)',
        tertiary: 'var(--nb-tertiary)',
        surface: 'var(--nb-surface)',
        'surface-dim': 'var(--nb-surface-dim)',
        'on-surface': 'var(--nb-on-surface)',
        'on-surface-variant': 'var(--nb-on-surface-variant)',
        error: 'var(--nb-error)',
        'on-error': 'var(--nb-on-error)',
        outline: 'var(--nb-outline)',
        background: 'var(--nb-background)',
        'on-background': 'var(--nb-on-background)',
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
      borderWidth: {
        'nb': 'var(--nb-border-width)',
      },
      borderColor: {
        'nb': 'var(--nb-border-color)',
      },
      transitionDuration: {
        'nb': 'var(--nb-transition)',
      },
    },
  },
};
```

Then use in JSX:

```tsx
<div className="bg-primary text-on-primary shadow-nb rounded-nb border-nb font-body">
  Themed content
</div>
```

Or use arbitrary values directly:

```tsx
<div className="bg-[var(--nb-primary)] text-[var(--nb-on-primary)]">
  Direct CSS var reference
</div>
```

---

## Dark Mode Pattern

Create a dark theme by overriding surface and text colors. The `--nb-shadow-color` variable controls all shadow colors, so you can lighten them for dark backgrounds:

```tsx
const darkTheme: ThemeOverrides = {
  colors: {
    surface: '#1a1a2e',
    surfaceDim: '#16213e',
    surfaceBright: '#1a1a2e',
    surfaceContainerLowest: '#0f0f23',
    surfaceContainerLow: '#1a1a2e',
    surfaceContainer: '#16213e',
    surfaceContainerHigh: '#1a1a2e',
    surfaceContainerHighest: '#2a2a3e',
    onSurface: '#e0e0e0',
    onSurfaceVariant: '#b0b0b0',
    inverseSurface: '#e0e0e0',
    inverseOnSurface: '#1a1a2e',
    background: '#0f0f23',
    onBackground: '#e0e0e0',
    primary: '#FFD54F',
    onPrimary: '#1a1a2e',
    error: '#ff6b6b',
    onError: '#ffffff',
    outline: '#888899',
    outlineVariant: '#555566',
  },
};

<NeoThemeProvider theme={darkTheme}>
  <App />
</NeoThemeProvider>
```

For a pure CSS approach (no provider):

```css
@media (prefers-color-scheme: dark) {
  :root {
    --nb-surface: #1a1a2e;
    --nb-on-surface: #e0e0e0;
    --nb-background: #0f0f23;
    --nb-on-background: #e0e0e0;
    --nb-shadow-color: rgba(255, 255, 255, 0.15);
    --nb-border-color: #e0e0e0;
  }
}
```

---

## Custom Palette Examples

### Red/Black Brutalist

```tsx
<NeoThemeProvider theme={{
  colors: {
    primary: '#FF0000',
    onPrimary: '#ffffff',
    primaryContainer: '#FFE0E0',
    secondary: '#000000',
    onSecondary: '#ffffff',
    surface: '#FFFFFF',
    onSurface: '#000000',
    background: '#FFFFFF',
    onBackground: '#000000',
  },
  shadows: {
    sm: '2px 2px 0px 0px #000000',
    md: '4px 4px 0px 0px #000000',
    lg: '6px 6px 0px 0px #000000',
    inset: 'inset 2px 2px 0px 0px #000000',
  },
}}>
  <App />
</NeoThemeProvider>
```

### Earthy/Terracotta

```tsx
<NeoThemeProvider theme={{
  colors: {
    primary: '#C85A2B',
    onPrimary: '#ffffff',
    primaryContainer: '#FFE0CC',
    secondary: '#8B6F47',
    onSecondary: '#ffffff',
    tertiary: '#7BA05B',
    onTertiary: '#ffffff',
    surface: '#F5F0EB',
    onSurface: '#3D2B1F',
    background: '#FDF8F3',
    onBackground: '#3D2B1F',
  },
}}>
  <App />
</NeoThemeProvider>
```

### Pastel/Soft

```tsx
<NeoThemeProvider theme={{
  colors: {
    primary: '#FFB5C2',
    onPrimary: '#3D2B1F',
    primaryContainer: '#FFE0E6',
    secondary: '#B5D8FF',
    onSecondary: '#3D2B1F',
    tertiary: '#C2FFB5',
    onTertiary: '#3D2B1F',
    surface: '#FFF8FA',
    onSurface: '#2D2D2D',
    background: '#FFFFFF',
    onBackground: '#2D2D2D',
  },
  shadows: {
    sm: '2px 2px 0px 0px rgba(0,0,0,0.1)',
    md: '4px 4px 0px 0px rgba(0,0,0,0.12)',
    lg: '6px 6px 0px 0px rgba(0,0,0,0.15)',
    inset: 'inset 2px 2px 0px 0px rgba(0,0,0,0.08)',
  },
}}>
  <App />
</NeoThemeProvider>
```

---

## CSS Utility Classes

The library provides these pre-built utility classes from `base.css`:

| Class | Effect |
|---|---|
| `.nb-shadow-sm` | Applies `--nb-shadow-sm` |
| `.nb-shadow` | Applies `--nb-shadow` (medium) |
| `.nb-shadow-lg` | Applies `--nb-shadow-lg` |
| `.nb-shadow-inset` | Applies `--nb-shadow-inset` |
| `.nb-tactile` | Hover lift + active press interaction with border |
| `.nb-text-shadow-hard` | Hard text shadow (2px) |
| `.nb-error-flash` | Error flash animation (0.6s) |
| `.nb-success-flash` | Success flash animation (0.4s) |
| `.nb-pop` | Scale pop animation (0.3s) |
| `.nb-score-bump` | Score bump animation (0.3s) |
| `.nb-slide-up` | Slide up entrance animation (0.2s) |
| `.nb-fade-in` | Fade in entrance animation (0.15s) |
