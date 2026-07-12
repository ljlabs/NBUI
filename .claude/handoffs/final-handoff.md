# Neo Brutalist UI — Final Handoff

> **Full plan:** `.claude/plans/harmonic-giggling-axolotl.md`
> **Task tracker:** `.claude/plans/harmonic-giggling-axolotl-tasks.md`
> **Phase 1 handoff:** `.claude/handoffs/phase-1-foundations.md`

## Project Status: ✅ Complete

All 9 phases of the implementation plan are done.

## What Was Built

### Library (`src/`)
17 production-ready React components with TypeScript types, 90 tests, tree-shakeable ESM/CJS output.

**Components:**
| Tier | Components |
|------|-----------|
| Foundation | Icon, Badge, Pill, Button, IconButton, Layout |
| Navigation | TopNavBar, BottomNav, TabNav, Footer |
| Content | Card (compound), SearchBar, Modal, HeroSection, Grid |
| Advanced | FilterSidebar, Toast |

**Theme System:**
- CSS custom properties (`--nb-*` prefix) for runtime-overridable tokens
- `NeoThemeProvider` React context that injects CSS vars and exposes TypeScript theme object
- `useTheme()` hook for programmatic access

**Design Tokens:**
- Hard offset shadows: 2px, 4px, 6px, inset (no blur)
- 2px solid borders on all components
- Tactile button interaction (hover lift, active press)
- Colors: primary (yellow), secondary (lavender), tertiary (mint), error
- Radii: 0.5rem, 0.75rem, 1.25rem, 9999px
- Fonts: Fredoka (display), Quicksand (body), Work Sans (labels)

### Build Output (`dist/`)
- `index.js` — ESM (32.2 kB)
- `index.cjs` — CJS (22.6 kB)
- `index.d.ts` + maps — TypeScript declarations
- `styles.css` — CSS variables, shadows, animations

### Documentation Website (`docs/`)
MUI-style documentation site with 20 pages:
- **Getting Started:** Home, Installation, Theming
- **Components:** 17 pages, each with import code, live demos, variants, props table, accessibility notes
- **Features:** Sidebar navigation, code blocks with syntax highlighting, live demo toggle

### Tests
- 13 test suites, 90 tests, all passing
- Covers: rendering, props, events, a11y, theme integration

### Claude Code Skills (`.claude/skills/neo-brutalist/`)
- `SKILL.md` — Main skill trigger + component catalog
- `components.md` — Full API reference for all 17 components
- `theming.md` — Theme customization guide
- `examples.md` — 7 common usage recipes
- `ai-agent-guide.md` — Complete guide for AI agents to use the library

### README
212-line README with features, installation, quick start, component table, theming, Tailwind integration, MIT license.

## How to Use

```bash
# Install from GitHub
npm install https://github.com/user/Neo_Brutalist

# In your app
import { NeoThemeProvider, Button } from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';

function App() {
  return (
    <NeoThemeProvider>
      <Button variant="primary">Click me</Button>
    </NeoThemeProvider>
  );
}
```

## How to Run Locally

```bash
# Library
npm install && npm run build
npm run test    # 90 tests

# Docs site
cd docs && npm install && npm run dev
# Opens on http://localhost:5173 (auto-cycles if port taken)
```

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/index.ts` | Public API barrel export |
| `src/styles/base.css` | CSS variables + utilities + animations |
| `src/theme/ThemeProvider.tsx` | React context + CSS var injection |
| `src/components/Button/Button.tsx` | Core tactile button (sets pattern for all) |
| `vite.config.ts` | Library build config |
| `docs/vite.config.ts` | Docs site build config |
| `docs/src/styles/docs.css` | Inlined CSS vars for docs site |
| `package.json` | `"files": ["dist"]` — only dist ships to npm |
| `.npmignore` | Excludes docs/, .claude/, tests/ |

## Known Notes

1. **Tailwind is required** — Components use Tailwind utility classes. Consumers need Tailwind configured.
2. **CSS vars must be loaded** — Either via `import 'neo-brutalist-ui/styles.css'` or inlining the `:root` block.
3. **Material Symbols font** — Must be loaded in HTML: `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />`
4. **Docs site uses PostCSS Tailwind** — `@tailwindcss/postcss` plugin with `docs/postcss.config.js`
5. **Docs CSS vars are inlined** — `docs/src/styles/docs.css` has the full `:root` block (duplicated from base.css) to avoid alias resolution issues with Tailwind v4.
