# Usage Examples

Runnable code recipes for common patterns with `neo-brutalist-ui`.

---

## Full Page Layout

Complete page structure with top nav, content, and footer.

```tsx
import {
  NeoThemeProvider, Layout, TopNavBar, Footer,
  Card, CardHeader, CardBody, Button, Badge, Grid, Icon,
} from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';

const navItems = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'about', label: 'About', icon: 'info' },
  { key: 'contact', label: 'Contact', icon: 'mail' },
];

const footerLinks = [
  { label: 'Privacy', href: '/privacy', icon: 'lock' },
  { label: 'Terms', href: '/terms', icon: 'description' },
];

function App() {
  return (
    <NeoThemeProvider>
      <Layout
        topBar={
          <TopNavBar
            logo={<span style={{ fontWeight: 700, fontFamily: 'var(--nb-font-display)' }}>Brand</span>}
            items={navItems}
            activeKey="home"
            onNavigate={(key) => console.log('Navigate:', key)}
            actions={<Button variant="ghost" size="sm">Sign In</Button>}
          />
        }
        footer={
          <Footer
            logo={<span>Brand</span>}
            copyright="(c) 2026 Neo Brutalist"
            links={footerLinks}
          />
        }
      >
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--nb-font-display)' }}>Welcome</h1>
          <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
            <Card variant="elevated">
              <CardHeader title="Card One" icon={<Icon name="star" />} action={<Badge variant="filled" color="primary">New</Badge>} />
              <CardBody><p>Content here</p></CardBody>
            </Card>
            <Card variant="elevated">
              <CardHeader title="Card Two" icon={<Icon name="bolt" />} />
              <CardBody><p>More content</p></CardBody>
            </Card>
            <Card variant="elevated">
              <CardHeader title="Card Three" icon={<Icon name="palette" />} />
              <CardBody><p>Even more content</p></CardBody>
            </Card>
          </Grid>
        </div>
      </Layout>
    </NeoThemeProvider>
  );
}
```

---

## Dashboard

Dashboard with sidebar filters, data grid, and stats cards.

```tsx
import {
  NeoThemeProvider, Layout, TopNavBar, Grid, Card, CardHeader, CardBody,
  Button, Badge, TabNav, SearchBar, FilterSidebar, Icon, type FilterGroup,
} from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';
import { useState } from 'react';

const filterGroups: FilterGroup[] = [
  { title: 'Status', mode: 'pill', options: [{ label: 'Active', value: 'active' }, { label: 'Pending', value: 'pending' }, { label: 'Archived', value: 'archived' }] },
  { title: 'Type', mode: 'checkbox', options: [{ label: 'Feature', value: 'feature' }, { label: 'Bug', value: 'bug' }, { label: 'Task', value: 'task' }] },
];

function Dashboard() {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [activeTab, setActiveTab] = useState('overview');
  const [search, setSearch] = useState('');

  const handleFilterChange = (groupTitle: string, value: string) => {
    setSelected((prev) => {
      const current = prev[groupTitle] || [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [groupTitle]: next };
    });
  };

  return (
    <NeoThemeProvider>
      <Layout
        topBar={
          <TopNavBar
            items={[{ key: 'dashboard', label: 'Dashboard', icon: 'dashboard' }, { key: 'settings', label: 'Settings', icon: 'settings' }]}
            activeKey="dashboard"
          />
        }
      >
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Sidebar */}
          <aside style={{ width: '280px', borderRight: 'var(--nb-border)', padding: '1.5rem' }}>
            <SearchBar placeholder="Search..." value={search} onChange={setSearch} showButton size="sm" />
            <div style={{ marginTop: '1.5rem' }}>
              <FilterSidebar groups={filterGroups} selected={selected} onChange={handleFilterChange} onClearAll={() => setSelected({})} />
            </div>
          </aside>

          {/* Main content */}
          <main style={{ flex: 1, padding: '1.5rem' }}>
            <TabNav
              tabs={[
                { key: 'overview', label: 'Overview', icon: 'visibility' },
                { key: 'analytics', label: 'Analytics', icon: 'bar_chart', badge: 3 },
                { key: 'reports', label: 'Reports', icon: 'description' },
              ]}
              activeKey={activeTab}
              onChange={setActiveTab}
            />

            {/* Stats */}
            <Grid columns={{ sm: 2, lg: 4 }} gap="md" style={{ marginTop: '1.5rem' }}>
              {[
                { title: 'Total Users', value: '12,345', icon: 'people', color: 'primary' as const },
                { title: 'Revenue', value: '$48,200', icon: 'payments', color: 'tertiary' as const },
                { title: 'Orders', value: '1,892', icon: 'shopping_cart', color: 'secondary' as const },
                { title: 'Issues', value: '23', icon: 'bug_report', color: 'error' as const },
              ].map((stat) => (
                <Card key={stat.title} variant="elevated">
                  <CardHeader title={stat.title} icon={<Icon name={stat.icon} />} action={<Badge color={stat.color} dot />} />
                  <CardBody>
                    <div style={{ fontSize: '1.5rem', fontFamily: 'var(--nb-font-display)', fontWeight: 700 }}>{stat.value}</div>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </main>
        </div>
      </Layout>
    </NeoThemeProvider>
  );
}
```

---

## Form with Filters

Product listing page with search, filters, and grid display.

```tsx
import {
  NeoThemeProvider, SearchBar, FilterSidebar, Grid, Card, CardHeader, CardBody,
  CardActions, Button, Badge, Icon, type FilterGroup,
} from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';
import { useState } from 'react';

const categories: FilterGroup[] = [
  { title: 'Category', mode: 'pill', options: [{ label: 'Shirts', value: 'shirts' }, { label: 'Pants', value: 'pants' }, { label: 'Shoes', value: 'shoes' }, { label: 'Accessories', value: 'accessories' }] },
  { title: 'Size', mode: 'checkbox', options: [{ label: 'XS', value: 'xs' }, { label: 'S', value: 's' }, { label: 'M', value: 'm' }, { label: 'L', value: 'l' }, { label: 'XL', value: 'xl' }] },
  { title: 'Price', mode: 'radio', options: [{ label: 'Under $50', value: 'under50' }, { label: '$50 - $100', value: '50-100' }, { label: 'Over $100', value: 'over100' }] },
];

const products = [
  { id: 1, name: 'Neo Tee', price: 45, category: 'shirts' },
  { id: 2, name: 'Brutalist Pants', price: 89, category: 'pants' },
  { id: 3, name: 'Hard Shadow Sneakers', price: 120, category: 'shoes' },
];

function ProductPage() {
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [search, setSearch] = useState('');

  const handleFilterChange = (groupTitle: string, value: string) => {
    setSelected((prev) => {
      const current = prev[groupTitle] || [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [groupTitle]: next };
    });
  };

  return (
    <NeoThemeProvider>
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--nb-font-display)' }}>Products</h1>

        <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
          {/* Filters */}
          <aside style={{ width: '260px', flexShrink: 0 }}>
            <SearchBar placeholder="Search products..." value={search} onChange={setSearch} showButton buttonLabel="Search" />
            <div style={{ marginTop: '1.5rem' }}>
              <FilterSidebar title="Filters" groups={categories} selected={selected} onChange={handleFilterChange} onClearAll={() => setSelected({})}>
                <Button variant="ghost" fullWidth style={{ marginTop: '1rem' }}>Custom Filter</Button>
              </FilterSidebar>
            </div>
          </aside>

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
              {products.map((product) => (
                <Card key={product.id} variant="elevated" interactive>
                  <CardHeader title={product.name} action={<Badge variant="soft" color="primary">${product.price}</Badge>} />
                  <CardBody>
                    <div style={{ height: '120px', background: 'var(--nb-surface-container)', borderRadius: 'var(--nb-radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="image" size="xl" color="var(--nb-outline)" />
                    </div>
                  </CardBody>
                  <CardActions align="between">
                    <Button variant="ghost" startIcon={<Icon name="favorite_border" size="sm" />}>Save</Button>
                    <Button variant="primary" endIcon={<Icon name="shopping_cart" size="sm" />}>Add to Cart</Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </NeoThemeProvider>
  );
}
```

---

## Modal Dialog

Confirmation dialog with form content.

```tsx
import { NeoThemeProvider, Button, Modal, Badge, Icon } from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';
import { useState } from 'react';

function ModalExample() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <NeoThemeProvider>
      <div style={{ padding: '2rem' }}>
        <Button variant="primary" onClick={() => setShowConfirm(true)}>Delete Item</Button>
        <Button variant="secondary" onClick={() => setShowForm(true)} style={{ marginLeft: '0.5rem' }}>Add Comment</Button>
      </div>

      {/* Confirmation Modal */}
      <Modal
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Confirm Deletion"
        size="sm"
        actions={
          <>
            <Button variant="ghost" onClick={() => setShowConfirm(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => { setShowConfirm(false); }}>Delete</Button>
          </>
        }
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Icon name="warning" color="var(--nb-error)" size="lg" />
          <div>
            <p>This action cannot be undone.</p>
            <p style={{ color: 'var(--nb-on-surface-variant)', fontSize: '0.875rem' }}>The item will be permanently removed.</p>
          </div>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal
        open={showForm}
        onClose={() => setShowForm(false)}
        title="Add Comment"
        size="md"
        actions={
          <>
            <Button variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setShowForm(false)}>Submit</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ fontFamily: 'var(--nb-font-label)', fontWeight: 600 }}>Author</label>
            <input type="text" placeholder="Your name" style={{ width: '100%', padding: '0.5rem', border: 'var(--nb-border)', borderRadius: 'var(--nb-radius)', marginTop: '0.25rem', fontFamily: 'var(--nb-font-body)' }} />
          </div>
          <div>
            <label style={{ fontFamily: 'var(--nb-font-label)', fontWeight: 600 }}>Comment</label>
            <textarea rows={4} placeholder="Write your comment..." style={{ width: '100%', padding: '0.5rem', border: 'var(--nb-border)', borderRadius: 'var(--nb-radius)', marginTop: '0.25rem', fontFamily: 'var(--nb-font-body)', resize: 'vertical' }} />
          </div>
        </div>
      </Modal>
    </NeoThemeProvider>
  );
}
```

---

## Hero Landing

Landing page with hero section, feature cards, and footer.

```tsx
import {
  NeoThemeProvider, HeroSection, Grid, Card, CardHeader, CardBody,
  Button, Icon, Footer,
} from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';

function LandingPage() {
  return (
    <NeoThemeProvider>
      <HeroSection
        label="Open Source"
        headline="Build Bold Interfaces"
        description="Neo-brutalist design system with tactile interactions, hard shadows, and bold typography."
        primaryAction={<Button variant="primary" size="lg" endIcon={<Icon name="arrow_forward" />}>Get Started</Button>}
        secondaryAction={<Button variant="ghost" size="lg">View on GitHub</Button>}
        media={
          <div style={{ width: '300px', height: '300px', background: 'var(--nb-primary)', border: 'var(--nb-border)', borderRadius: 'var(--nb-radius-lg)', boxShadow: 'var(--nb-shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="palette" size="xl" />
          </div>
        }
        align="left"
      />

      <div style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--nb-font-display)', textAlign: 'center', fontSize: '2rem' }}>Features</h2>
        <Grid columns={{ sm: 1, md: 3 }} gap="lg" style={{ marginTop: '2rem' }}>
          {[
            { title: 'Tactile Feel', desc: 'Buttons lift on hover and press on click.', icon: 'touch_app' },
            { title: 'Hard Shadows', desc: 'Bold offset shadows with no blur.', icon: 'shadow' },
            { title: 'Fully Themed', desc: 'CSS variables for complete customization.', icon: 'palette' },
          ].map((feature) => (
            <Card key={feature.title} variant="outlined">
              <CardHeader title={feature.title} icon={<Icon name={feature.icon} size="lg" color="var(--nb-primary)" />} />
              <CardBody><p>{feature.desc}</p></CardBody>
            </Card>
          ))}
        </Grid>
      </div>

      <Footer
        logo={<span style={{ fontWeight: 700 }}>Neo Brutalist</span>}
        copyright="(c) 2026 Neo Brutalist UI"
        links={[
          { label: 'GitHub', href: 'https://github.com', icon: 'code' },
          { label: 'Docs', href: '/docs', icon: 'menu_book' },
        ]}
      />
    </NeoThemeProvider>
  );
}
```

---

## Mobile App

Mobile-first layout with bottom navigation and tab content.

```tsx
import {
  NeoThemeProvider, Layout, TopNavBar, BottomNav, TabNav,
  Card, CardHeader, CardBody, Button, Badge, Icon, IconButton,
} from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';
import { useState } from 'react';

const bottomItems = [
  { key: 'home', label: 'Home', icon: 'home' },
  { key: 'search', label: 'Search', icon: 'search' },
  { key: 'add', label: 'Add', icon: 'add_circle' },
  { key: 'alerts', label: 'Alerts', icon: 'notifications' },
  { key: 'profile', label: 'Profile', icon: 'person' },
];

function MobileApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeNav, setActiveNav] = useState('home');

  return (
    <NeoThemeProvider>
      <Layout
        topBar={
          <TopNavBar
            logo={<span style={{ fontFamily: 'var(--nb-font-display)', fontWeight: 700 }}>App</span>}
            items={[]}
            actions={<IconButton icon="menu" aria-label="Menu" />}
          />
        }
        bottomNav={
          <BottomNav items={bottomItems} activeKey={activeNav} onNavigate={setActiveNav} elevated />
        }
      >
        <div style={{ padding: '1rem' }}>
          <TabNav
            tabs={[
              { key: 'home', label: 'For You', icon: 'home' },
              { key: 'trending', label: 'Trending', icon: 'trending_up' },
              { key: 'saved', label: 'Saved', icon: 'bookmark', badge: 5 },
            ]}
            activeKey={activeTab}
            onChange={setActiveTab}
            fullWidth
          />

          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { title: 'New Feature Released', subtitle: 'Just now', icon: 'celebration', color: 'primary' as const },
              { title: 'System Update', subtitle: '2 hours ago', icon: 'system_update', color: 'secondary' as const },
              { title: 'Security Alert', subtitle: '1 day ago', icon: 'shield', color: 'error' as const },
            ].map((item, i) => (
              <Card key={i} variant="elevated" interactive>
                <CardHeader
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={<Icon name={item.icon} color={`var(--nb-${item.color})`} />}
                  action={<Badge color={item.color} dot />}
                />
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    </NeoThemeProvider>
  );
}
```

---

## Custom Theme

Application with a completely custom color palette and dark shadows.

```tsx
import { NeoThemeProvider, Button, Card, CardHeader, CardBody, Badge, Grid, Icon } from 'neo-brutalist-ui';
import 'neo-brutalist-ui/styles.css';
import type { ThemeOverrides } from 'neo-brutalist-ui';

const cyberpunkTheme: ThemeOverrides = {
  colors: {
    primary: '#00FF88',
    onPrimary: '#000000',
    primaryContainer: '#003322',
    onPrimaryContainer: '#00FF88',
    secondary: '#FF00FF',
    onSecondary: '#000000',
    secondaryContainer: '#330033',
    onSecondaryContainer: '#FF00FF',
    tertiary: '#00CCFF',
    onTertiary: '#000000',
    surface: '#0A0A1A',
    surfaceDim: '#050510',
    surfaceBright: '#1A1A2E',
    onSurface: '#E0E0E0',
    onSurfaceVariant: '#888899',
    background: '#050510',
    onBackground: '#E0E0E0',
    error: '#FF4444',
    onError: '#ffffff',
    outline: '#444466',
    outlineVariant: '#333355',
  },
  shadows: {
    sm: '2px 2px 0px 0px rgba(0, 255, 136, 0.3)',
    md: '4px 4px 0px 0px rgba(0, 255, 136, 0.4)',
    lg: '6px 6px 0px 0px rgba(0, 255, 136, 0.5)',
    inset: 'inset 2px 2px 0px 0px rgba(0, 255, 136, 0.2)',
  },
  borders: {
    width: 2,
    color: '#00FF88',
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  typography: {
    displayFont: '"Space Grotesk", sans-serif',
    bodyFont: '"Space Mono", monospace',
    labelFont: '"Space Grotesk", sans-serif',
  },
};

function CyberpunkApp() {
  return (
    <NeoThemeProvider theme={cyberpunkTheme}>
      <div style={{ padding: '2rem', minHeight: '100vh', background: 'var(--nb-background)' }}>
        <h1 style={{ fontFamily: 'var(--nb-font-display)', color: 'var(--nb-primary)' }}>Cyber Dashboard</h1>

        <Grid columns={{ sm: 1, md: 2 }} gap="md" style={{ marginTop: '1.5rem' }}>
          <Card variant="elevated">
            <CardHeader title="System Status" icon={<Icon name="computer" />} action={<Badge variant="filled" color="primary">Online</Badge>} />
            <CardBody>
              <p style={{ color: 'var(--nb-on-surface-variant)' }}>All systems operational.</p>
              <Button variant="primary" style={{ marginTop: '1rem' }}>Run Diagnostics</Button>
            </CardBody>
          </Card>

          <Card variant="filled">
            <CardHeader title="Active Alerts" icon={<Icon name="warning" />} action={<Badge color="error">3</Badge>} />
            <CardBody>
              <p style={{ color: 'var(--nb-on-surface-variant)' }}>3 alerts require attention.</p>
              <Button variant="danger" style={{ marginTop: '1rem' }}>View Alerts</Button>
            </CardBody>
          </Card>
        </Grid>
      </div>
    </NeoThemeProvider>
  );
}
```
