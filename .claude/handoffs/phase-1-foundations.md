# Neo Brutalist UI — Phase 1 Handoff

> **Full plan:** See `.claude/plans/harmonic-giggling-axolotl.md` for the complete implementation plan including all 9 phases, component APIs, docs site architecture, and Claude Code skills.
>
> **Task tracker:** See `.claude/plans/harmonic-giggling-axolotl-tasks.md` for checkbox progress across all phases.

## What Was Done

Built the complete foundation of the `neo-brutalist-ui` React component library, including:

- **Package scaffolding** — `package.json`, `tsconfig.json`, `vite.config.ts` (library mode), `vitest.config.ts`, `.npmignore`
- **Theme system** — CSS custom properties (`--nb-*` prefix), TypeScript theme interface, ThemeProvider with deep merge, `useTheme` hook
- **Design tokens** — Unified from both powerup and word_pop projects (colors, shadows, borders, radii, typography, motion)
- **Utility layer** — `cn()` class merging, `useTactile()` hook for hover/active interactions
- **15 components** across 4 tiers, all with TypeScript types:
  - **Tier 1 (Foundation)**: Icon, Badge, Pill, Button, IconButton, Layout
  - **Tier 2 (Navigation)**: TopNavBar, BottomNav, TabNav, Footer
  - **Tier 3 (Content)**: Card (compound), SearchBar, Modal, HeroSection, Grid
  - **Tier 5 (Advanced)**: FilterSidebar, Toast (planned, not yet built)
- **Build output** — `dist/` produces tree-shakeable ESM (27.7 kB) + CJS (19.6 kB) + TypeScript declarations, zero TypeScript errors

## Key Architecture Decisions

1. **CSS variables as the foundation** — All tokens live as `--nb-*` CSS custom properties. Components use Tailwind's arbitrary value syntax (`bg-[var(--nb-primary)]`) so the library works with or without Tailwind.

2. **ThemeProvider bridges CSS vars and TypeScript** — Consumers can override via `<NeoThemeProvider theme={{ colors: { primary: '#FF6B6B' } }}>` and CSS vars update automatically.

3. **`nb-tactile` CSS class** — The signature neo brutalist interaction (hover lift + active press) is a CSS class, not a JS hook. Components just add `nb-tactile` to their className.

4. **Compound components for Card** — `Card`, `CardHeader`, `CardBody`, `CardActions` are separate exports so consumers compose layouts freely.

5. **npm install from GitHub** — `package.json` has `"files": ["dist"]` so `npm i github:user/Neo_Brutalist` only ships the compiled library, not docs/ or .claude/.

## What's Left (Next Phases)

### Phase 5: Advanced Components
- `FilterSidebar` — Composes Pill, Badge, Button, Card for vertical filter panels
- `Toast` — Feedback notification using `nb-flash-success`/`nb-flash-error` animations

### Phase 6: Testing
- Write Vitest tests for all 15 components (render, props, events, a11y, theme integration)
- Test setup file at `tests/setup.ts` already imports `@testing-library/jest-dom/vitest`

### Phase 7: Documentation Website
- Standalone Vite + React app under `docs/`
- Per-component pages with live demos, props tables, code examples (MUI-style)
- Components: Layout, Sidebar, ComponentPage, CodeBlock, LiveDemo, PropsTable
- Pages: Home, Installation, Theming, + 15 component pages
- Tech: React Router, react-syntax-highlighter, consumes the library itself

### Phase 8: README + Final Polish
- Comprehensive README with installation, quick start, component list, theming guide

### Phase 9: Claude Code Skills
- `.claude/skills/neo-brutalist/SKILL.md` — Main skill trigger + component catalog
- `.claude/skills/neo-brutalist/components.md` — Full API reference
- `.claude/skills/neo-brutalist/theming.md` — Theme customization guide
- `.claude/skills/neo-brutalist/examples.md` — Common usage recipes

## File Structure

```
Neo_Brutalist/
  package.json, tsconfig.json, vite.config.ts, vitest.config.ts
  src/
    index.ts                          # Barrel export (all public API)
    styles/base.css                   # CSS variables + shadow/animation utilities
    theme/                            # ThemeProvider, types, defaultTheme, mergeTheme, useTheme
    hooks/                            # useTactile
    utils/                            # cn()
    components/
      Icon/                           # Material Symbols wrapper
      Badge/                          # Status indicator (filled/outlined/soft)
      Pill/                           # Selectable filter chip
      Button/                         # Primary/secondary/ghost/danger with tactile
      IconButton/                     # Icon-only button
      Layout/                         # Page shell (topBar + content + footer)
      TopNavBar/                      # Fixed top bar with mobile menu
      BottomNav/                      # Fixed bottom bar (mobile)
      TabNav/                         # Horizontal tab strip
      Footer/                         # Site footer
      Card/                           # Compound: Card + CardHeader + CardBody + CardActions
      SearchBar/                      # Input with icon + optional button
      Modal/                          # Overlay dialog with backdrop
      HeroSection/                    # Hero block with headline + media
      Grid/                           # Responsive grid container
  tests/setup.ts
  dist/                               # Build output (ESM, CJS, .d.ts)
```

## How to Verify

```bash
cd Neo_Brutalist
npm run build          # Should produce dist/ with no TS errors
npm run test           # Runs Vitest (tests not yet written)
```

## Notes for Next Session

- The `vite.config.css.ts` was created to separately build `base.css` but may need adjustment — currently the CSS is included in the JS bundle via imports. Consider whether consumers should import `neo-brutalist-ui/styles.css` separately.
- The `Badge` component had persistent TS issues with `noUncheckedIndexedAccess` + `Record<string, ...>` — solved by typing the Record with the concrete union type from `BadgeProps["color"]`.
- The `Grid` component uses Tailwind's dynamic class generation (`grid-cols-${n}`) which requires the Tailwind content scanner to see the component. This is a known Tailwind limitation with dynamic classes.
