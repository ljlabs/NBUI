# Component API Reference

Full API documentation for all 17 components in `neo-brutalist-ui`.

---

## Layout

### Layout

```tsx
import { Layout } from 'neo-brutalist-ui';
```

Page shell that wraps content with optional navigation and footer slots.

| Prop | Type | Default | Description |
|---|---|---|---|
| `topBar` | `ReactNode` | -- | Top navigation bar slot |
| `bottomNav` | `ReactNode` | -- | Bottom navigation slot (mobile) |
| `footer` | `ReactNode` | -- | Page footer slot |
| `children` | `ReactNode` | -- | Main page content (required) |
| `background` | `string` | -- | Page background color override |
| `maxWidth` | `string` | -- | Max width constraint |

```tsx
<Layout
  topBar={<TopNavBar items={navItems} activeKey="home" />}
  bottomNav={<BottomNav items={navItems} activeKey="home" onNavigate={setActive} />}
  footer={<Footer copyright="(c) 2026" links={footerLinks} />}
>
  <h1>Dashboard</h1>
</Layout>
```

---

### Grid

```tsx
import { Grid } from 'neo-brutalist-ui';
```

Responsive CSS grid with configurable column counts per breakpoint.

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `{ sm?: number; md?: number; lg?: number; xl?: number }` | -- | Columns at each breakpoint |
| `gap` | `'sm' \| 'md' \| 'lg' \| number` | -- | Gap between items |
| `children` | `ReactNode` | -- | Grid children (required) |
| `className` | `string` | -- | Additional CSS class |
| `style` | `CSSProperties` | -- | Inline style overrides |

```tsx
<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

---

### HeroSection

```tsx
import { HeroSection } from 'neo-brutalist-ui';
```

Hero banner with headline, description, CTAs, and media slot.

| Prop | Type | Default | Description |
|---|---|---|---|
| `headline` | `string` | -- | Main headline (required) |
| `description` | `string` | -- | Supporting text |
| `label` | `string` | -- | Badge/label above headline |
| `primaryAction` | `ReactNode` | -- | Primary CTA element |
| `secondaryAction` | `ReactNode` | -- | Secondary CTA element |
| `media` | `ReactNode` | -- | Decorative content (right side on desktop) |
| `color` | `string` | -- | Background color |
| `align` | `'left' \| 'center'` | `'left'` | Layout alignment |

```tsx
<HeroSection
  label="New Release"
  headline="Build Bold Interfaces"
  description="Neo-brutalist design with tactile interactions."
  primaryAction={<Button variant="primary">Get Started</Button>}
  secondaryAction={<Button variant="ghost">Learn More</Button>}
  media={<img src="/hero.png" alt="Hero" />}
/>
```

---

## Navigation

### TopNavBar

```tsx
import { TopNavBar, type NavItem } from 'neo-brutalist-ui';
```

Horizontal top navigation bar with logo, nav items, and action slot.

**NavItem:**

| Prop | Type | Description |
|---|---|---|
| `key` | `string` | Unique identifier (required) |
| `label` | `string` | Display label (required) |
| `icon` | `string` | Material Symbol icon name |
| `href` | `string` | Link URL |

**TopNavBar:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo` | `ReactNode` | -- | Logo element |
| `items` | `NavItem[]` | -- | Navigation items (required) |
| `activeKey` | `string` | -- | Currently active item key |
| `onNavigate` | `(key: string) => void` | -- | Click callback |
| `actions` | `ReactNode` | -- | Right-side action slot (user menu, etc.) |

```tsx
<TopNavBar
  logo={<span>Brand</span>}
  items={[
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'about', label: 'About', icon: 'info' },
  ]}
  activeKey="home"
  onNavigate={setActive}
/>
```

---

### BottomNav

```tsx
import { BottomNav } from 'neo-brutalist-ui';
```

Fixed bottom navigation for mobile with icon+label items. Reuses `NavItem` from TopNavBar.

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `NavItem[]` | -- | Navigation items (required) |
| `activeKey` | `string` | -- | Currently active item key |
| `onNavigate` | `(key: string) => void` | -- | Click callback |
| `elevated` | `boolean` | -- | Show shadow at top |

```tsx
<BottomNav
  items={[
    { key: 'home', label: 'Home', icon: 'home' },
    { key: 'search', label: 'Search', icon: 'search' },
    { key: 'profile', label: 'Profile', icon: 'person' },
  ]}
  activeKey="home"
  onNavigate={setActive}
  elevated
/>
```

---

### TabNav

```tsx
import { TabNav, type TabItem } from 'neo-brutalist-ui';
```

Horizontal tab bar with icons and badge counts.

**TabItem:**

| Prop | Type | Description |
|---|---|---|
| `key` | `string` | Unique identifier (required) |
| `label` | `string` | Display label (required) |
| `icon` | `string` | Material Symbol icon name |
| `badge` | `number` | Badge count to display |

**TabNav:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `TabItem[]` | -- | Tab items (required) |
| `activeKey` | `string` | -- | Active tab key |
| `onChange` | `(key: string) => void` | -- | Tab change callback (required) |
| `size` | `'sm' \| 'md' \| 'lg'` | -- | Size preset |
| `fullWidth` | `boolean` | -- | Fill available width |

```tsx
<TabNav
  tabs={[
    { key: 'all', label: 'All', icon: 'apps', badge: 12 },
    { key: 'active', label: 'Active', icon: 'check_circle' },
    { key: 'archived', label: 'Archived', icon: 'archive' },
  ]}
  activeKey="all"
  onChange={setTab}
  size="md"
/>
```

---

### Footer

```tsx
import { Footer, type FooterLink } from 'neo-brutalist-ui';
```

Page footer with logo, links, and copyright text.

**FooterLink:**

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Link text (required) |
| `href` | `string` | Link URL (required) |
| `icon` | `string` | Material Symbol icon name |

**Footer:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `logo` | `ReactNode` | -- | Logo element |
| `copyright` | `string` | -- | Copyright text |
| `links` | `FooterLink[]` | -- | Footer links |

```tsx
<Footer
  logo={<span>Brand</span>}
  copyright="(c) 2026 Neo Brutalist"
  links={[
    { label: 'Privacy', href: '/privacy', icon: 'lock' },
    { label: 'Terms', href: '/terms', icon: 'description' },
  ]}
/>
```

---

### SearchBar

```tsx
import { SearchBar } from 'neo-brutalist-ui';
```

Search input with icon, optional action button, and controlled state.

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | -- | Placeholder text |
| `size` | `'sm' \| 'md' \| 'lg'` | -- | Size preset |
| `showButton` | `boolean` | -- | Show action button |
| `buttonLabel` | `string` | -- | Button label text |
| `value` | `string` | -- | Controlled value |
| `onSearch` | `(query: string) => void` | -- | Search callback (Enter or button click) |
| `onChange` | `(query: string) => void` | -- | Keystroke callback |
| `icon` | `string` | `'search'` | Material Symbol icon name override |

```tsx
const [query, setQuery] = useState('');

<SearchBar
  placeholder="Search products..."
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  showButton
  buttonLabel="Go"
  size="lg"
/>
```

---

## Feedback

### Toast

```tsx
import { Toast } from 'neo-brutalist-ui';
```

Slide-in notification with success/error/info variants and auto-dismiss.

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | -- | Whether the toast is visible (required) |
| `onClose` | `() => void` | -- | Dismiss callback (required) |
| `variant` | `'success' \| 'error' \| 'info'` | -- | Visual variant |
| `children` | `ReactNode` | -- | Toast message (required) |
| `autoDismiss` | `number` | -- | Auto-dismiss after N ms (0 = no auto-dismiss) |

```tsx
const [showToast, setShowToast] = useState(false);

<Toast open={showToast} onClose={() => setShowToast(false)} variant="success" autoDismiss={3000}>
  Changes saved successfully!
</Toast>
```

---

### Modal

```tsx
import { Modal } from 'neo-brutalist-ui';
```

Dialog overlay with backdrop, escape key, and multiple size presets.

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | -- | Whether modal is open (required) |
| `onClose` | `() => void` | -- | Close callback (required) |
| `title` | `string` | -- | Modal title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | -- | Modal size |
| `closeOnBackdrop` | `boolean` | -- | Close on backdrop click |
| `closeOnEscape` | `boolean` | -- | Close on Escape key |
| `actions` | `ReactNode` | -- | Footer actions |
| `children` | `ReactNode` | -- | Modal content (required) |

```tsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="sm"
  actions={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

---

### Badge

```tsx
import { Badge } from 'neo-brutalist-ui';
```

Inline status indicator with filled/outlined/soft variants and dot mode.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'filled' \| 'outlined' \| 'soft'` | -- | Visual variant |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'error' \| 'neutral'` | -- | Color scheme |
| `size` | `'sm' \| 'md'` | -- | Size |
| `dot` | `boolean` | -- | Render as dot indicator without text |
| `children` | `ReactNode` | -- | Badge content |

```tsx
<Badge variant="filled" color="primary" size="sm">New</Badge>
<Badge variant="outlined" color="error">Urgent</Badge>
<Badge dot color="tertiary" /> {/* dot indicator */}
```

---

### Pill

```tsx
import { Pill } from 'neo-brutalist-ui';
```

Toggleable pill button with icon support for filters and tags.

| Prop | Type | Default | Description |
|---|---|---|---|
| `selected` | `boolean` | -- | Whether pill is selected |
| `color` | `string` | -- | Color when selected |
| `icon` | `string` | -- | Leading Material Symbol icon name |
| `children` | `ReactNode` | -- | Pill label (required) |

Extends `ButtonHTMLAttributes<HTMLButtonElement>` so all native button props are available.

```tsx
<Pill selected={activeFilter === 'all'} onClick={() => setFilter('all')} icon="apps">
  All
</Pill>
<Pill selected={activeFilter === 'red'} onClick={() => setFilter('red')} color="#FF6B6B">
  Red
</Pill>
```

---

### FilterSidebar

```tsx
import { FilterSidebar, type FilterGroup, type FilterOption } from 'neo-brutalist-ui';
```

Sidebar with pill/checkbox/radio filter groups and clear-all action.

**FilterOption:**

| Prop | Type | Description |
|---|---|---|
| `label` | `string` | Display label (required) |
| `value` | `string` | Filter value (required) |

**FilterGroup:**

| Prop | Type | Description |
|---|---|---|
| `title` | `string` | Group title (required) |
| `mode` | `'pill' \| 'checkbox' \| 'radio'` | Display mode (required) |
| `options` | `FilterOption[]` | Available options (required) |

**FilterSidebar:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `groups` | `FilterGroup[]` | -- | Filter groups (required) |
| `selected` | `Record<string, string[]>` | -- | Currently selected values keyed by group title |
| `onChange` | `(groupTitle: string, value: string) => void` | -- | Toggle callback (required) |
| `onClearAll` | `() => void` | -- | Clear All callback (required) |
| `title` | `string` | -- | Title shown above all groups |
| `children` | `ReactNode` | -- | Extra content below the groups |

```tsx
const [selected, setSelected] = useState<Record<string, string[]>>({});

const groups: FilterGroup[] = [
  { title: 'Category', mode: 'pill', options: [{ label: 'Shirts', value: 'shirts' }, { label: 'Pants', value: 'pants' }] },
  { title: 'Size', mode: 'checkbox', options: [{ label: 'S', value: 's' }, { label: 'M', value: 'm' }, { label: 'L', value: 'l' }] },
];

const handleChange = (groupTitle: string, value: string) => {
  setSelected(prev => {
    const current = prev[groupTitle] || [];
    const next = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    return { ...prev, [groupTitle]: next };
  });
};

<FilterSidebar
  title="Filters"
  groups={groups}
  selected={selected}
  onChange={handleChange}
  onClearAll={() => setSelected({})}
/>
```

---

## Surface

### Card (Compound)

```tsx
import { Card, CardHeader, CardBody, CardActions } from 'neo-brutalist-ui';
```

Content container with compound sub-components.

**Card:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `interactive` | `boolean` | -- | Enable hover lift effect |
| `variant` | `'elevated' \| 'outlined' \| 'filled'` | -- | Card variant |
| `shadow` | `'sm' \| 'md' \| 'lg'` | -- | Shadow size |
| `onClick` | `() => void` | -- | Click handler (makes card interactive) |

**CardHeader:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | -- | Leading icon or avatar |
| `title` | `string` | -- | Title text (required) |
| `subtitle` | `string` | -- | Subtitle |
| `action` | `ReactNode` | -- | Trailing action (badge, button) |

**CardBody:** No custom props (extends `HTMLAttributes<HTMLDivElement>`).

**CardActions:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `align` | `'left' \| 'center' \| 'right' \| 'between'` | -- | Action alignment |

```tsx
<Card variant="elevated" shadow="md">
  <CardHeader
    icon={<Icon name="person" />}
    title="User Profile"
    subtitle="Member since 2024"
    action={<Badge variant="filled" color="primary">Pro</Badge>}
  />
  <CardBody>
    <p>Profile details here...</p>
  </CardBody>
  <CardActions align="between">
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Save</Button>
  </CardActions>
</Card>
```

---

### Button

```tsx
import { Button } from 'neo-brutalist-ui';
```

Primary action with primary/secondary/ghost/danger variants and tactile hover/press feel.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | -- | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | -- | Size preset |
| `startIcon` | `ReactNode` | -- | Icon before children |
| `endIcon` | `ReactNode` | -- | Icon after children |
| `loading` | `boolean` | -- | Show loading spinner, disables button |
| `fullWidth` | `boolean` | -- | Full width |
| `rounded` | `'sm' \| 'md' \| 'lg' \| 'full'` | -- | Border radius override |
| `children` | `ReactNode` | -- | Button content (required) |

Extends `ButtonHTMLAttributes<HTMLButtonElement>` so `onClick`, `disabled`, etc. are available.

```tsx
<Button variant="primary" size="lg" loading={isSubmitting}>
  Submit
</Button>

<Button variant="secondary" startIcon={<Icon name="download" />}>
  Download
</Button>

<Button variant="danger" rounded="full">
  Delete Account
</Button>
```

---

### IconButton

```tsx
import { IconButton } from 'neo-brutalist-ui';
```

Icon-only button with required `aria-label` for accessibility.

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `string` | -- | Material Symbol icon name (required) |
| `filled` | `boolean` | -- | Render filled variant |
| `size` | `'sm' \| 'md' \| 'lg'` | -- | Size preset |
| `aria-label` | `string` | -- | Accessibility label (required) |

Extends `ButtonHTMLAttributes<HTMLButtonElement>` minus `children`.

```tsx
<IconButton icon="edit" aria-label="Edit item" size="md" />
<IconButton icon="delete" aria-label="Delete item" filled size="sm" />
```

---

### Icon

```tsx
import { Icon } from 'neo-brutalist-ui';
```

Material Symbols Outlined icon with size presets and filled variant.

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | -- | Material Symbol name (required) |
| `filled` | `boolean` | -- | Render filled variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| number` | -- | Size preset or custom pixel value |
| `color` | `string` | -- | Color override (CSS color value) |
| `className` | `string` | -- | Additional CSS class |
| `style` | `CSSProperties` | -- | Inline style overrides |
| `aria-label` | `string` | -- | Accessibility label for non-decorative icons |

```tsx
<Icon name="home" size="lg" />
<Icon name="star" filled color="#FFD54F" />
<Icon name="search" size={32} className="my-icon" />
```

---

## Hooks

### useTheme

```tsx
import { useTheme } from 'neo-brutalist-ui';
```

Access the current `NeoTheme` from context. Must be used inside `NeoThemeProvider`.

```tsx
const theme = useTheme();
console.log(theme.colors.primary); // "#FFD54F"
```

### useTactile

```tsx
import { useTactile } from 'neo-brutalist-ui';
```

Hook for tactile hover/press state management. Returns handlers and state for building custom tactile components.

| Return | Type | Description |
|---|---|---|
| `isHovered` | `boolean` | Whether element is hovered |
| `isPressed` | `boolean` | Whether element is pressed |
| `handlers` | `{ onMouseEnter, onMouseLeave, onMouseDown, onMouseUp }` | Mouse event handlers |

```tsx
const { isHovered, isPressed, handlers } = useTactile();

<div
  {...handlers}
  style={{
    transform: isPressed ? 'translate(4px, 4px)' : isHovered ? 'translate(-2px, -2px)' : 'none',
    boxShadow: isPressed ? '0 0 0 0' : isHovered ? 'var(--nb-shadow-lg)' : 'var(--nb-shadow)',
  }}
>
  Custom tactile element
</div>
```

---

## Utility

### cn

```tsx
import { cn } from 'neo-brutalist-ui';
```

Conditional class name utility. Accepts strings, numbers, booleans, undefined, null, and nested arrays.

```tsx
<div className={cn('base-class', isActive && 'active', ['nested', condition && 'conditional'])} />
```
