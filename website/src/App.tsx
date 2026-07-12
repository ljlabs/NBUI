import { useState } from "react";
import {
  Button,
  IconButton,
  Badge,
  Pill,
  Card,
  CardHeader,
  CardBody,
  CardActions,
  Modal,
  SearchBar,
  HeroSection,
  Grid,
  TopNavBar,
  Footer,
  Toast,
  NeoThemeProvider,
} from "nbui";

const demoTheme = {
  colors: {
    primary: "#FFD54F",
    onPrimary: "#1c1b1b",
    primaryContainer: "#fff8d6",
    onPrimaryContainer: "#464745",
    secondary: "#E9D5FF",
    onSecondary: "#1c1b1b",
    secondaryContainer: "#f3eaff",
    onSecondaryContainer: "#464745",
    tertiary: "#A7F3D0",
    onTertiary: "#1c1b1b",
    tertiaryContainer: "#d1fce6",
    onTertiaryContainer: "#464745",
    surface: "#fcf8f7",
    onSurface: "#1c1b1b",
    background: "#fcf8f7",
    onBackground: "#1c1b1b",
  },
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState<{ msg: string; variant: "success" | "error" | "info" }[]>([]);

  const showToast = (msg: string, variant: "success" | "error" | "info" = "info") => {
    setToasts((t) => [...t, { msg, variant }]);
    setTimeout(() => setToasts((t) => t.slice(1)), 2500);
  };

  return (
    <NeoThemeProvider theme={demoTheme}>
      <div style={{ fontFamily: "var(--nb-font-body)" }}>
        {/* Top Nav */}
        <TopNavBar
          logo={<span style={{ fontFamily: "var(--nb-font-display)", fontWeight: 800, fontSize: 24 }}>NBUI</span>}
          items={[
            { key: "hero", label: "Home", href: "#hero" },
            { key: "buttons", label: "Buttons", href: "#buttons" },
            { key: "cards", label: "Cards", href: "#cards" },
            { key: "badges", label: "Badges", href: "#badges" },
            { key: "modal", label: "Modal", href: "#modal" },
            { key: "search", label: "Search", href: "#search" },
          ]}
        />

        {/* Hero */}
        <section id="hero">
          <HeroSection
            headline="Neo Brutalist UI"
            description="A tactile React component library with bold borders, hard shadows, and playful interactions."
            primaryAction={
              <Button variant="primary" onClick={() => showToast("Welcome!", "success")}>
                Get Started
              </Button>
            }
          />
        </section>

        {/* Buttons */}
        <section id="buttons" style={sectionStyle}>
          <h2 style={headingStyle}>Buttons</h2>
          <p style={{ marginBottom: 16, color: "var(--nb-on-surface-variant)" }}>
            Tactile press feedback, hard shadows, and multiple variants.
          </p>
          <div style={rowStyle}>
            <Button variant="primary" onClick={() => showToast("Primary clicked!", "success")}>
              Primary
            </Button>
            <Button variant="secondary" onClick={() => showToast("Secondary clicked!", "info")}>
              Secondary
            </Button>
            <Button variant="ghost" onClick={() => showToast("Ghost clicked!", "info")}>
              Ghost
            </Button>
            <Button variant="danger" onClick={() => showToast("Danger!", "error")}>
              Danger
            </Button>
          </div>
          <div style={{ ...rowStyle, marginTop: 12 }}>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
          <div style={{ ...rowStyle, marginTop: 12 }}>
            <IconButton icon="add" aria-label="Add" onClick={() => showToast("Add!", "success")} />
            <IconButton icon="favorite" aria-label="Favorite" onClick={() => showToast("Loved!", "success")} />
            <IconButton icon="delete" aria-label="Delete" onClick={() => showToast("Deleted!", "error")} />
            <IconButton icon="settings" aria-label="Settings" onClick={() => showToast("Settings", "info")} />
          </div>
        </section>

        {/* Cards */}
        <section id="cards" style={sectionStyle}>
          <h2 style={headingStyle}>Cards</h2>
          <Grid columns={{ sm: 1, md: 2, lg: 3 }} gap={16}>
            <Card>
              <CardHeader title="Default Card" subtitle="A standard card with header" />
              <CardBody>
                <p>This is the card body content. Cards are versatile containers for grouping related content.</p>
              </CardBody>
              <CardActions>
                <Button variant="primary" size="sm" onClick={() => showToast("Card action!", "success")}>
                  Action
                </Button>
              </CardActions>
            </Card>
            <Card variant="elevated">
              <CardHeader title="Elevated Card" subtitle="With enhanced shadow" />
              <CardBody>
                <p>Elevated cards stand out with a larger shadow, perfect for important content.</p>
              </CardBody>
            </Card>
            <Card variant="outlined">
              <CardHeader title="Outlined Card" subtitle="Minimal shadow style" />
              <CardBody>
                <p>Outlined cards use a border instead of shadow for a lighter feel.</p>
              </CardBody>
            </Card>
          </Grid>
        </section>

        {/* Badges & Pills */}
        <section id="badges" style={sectionStyle}>
          <h2 style={headingStyle}>Badges &amp; Pills</h2>
          <div style={rowStyle}>
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="tertiary">Tertiary</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="neutral">Neutral</Badge>
          </div>
          <div style={{ ...rowStyle, marginTop: 12, flexWrap: "wrap" }}>
            <Pill color="#FFD54F">React</Pill>
            <Pill color="#E9D5FF">TypeScript</Pill>
            <Pill color="#A7F3D0">Vite</Pill>
            <Pill>Default</Pill>
          </div>
        </section>

        {/* Search */}
        <section id="search" style={sectionStyle}>
          <h2 style={headingStyle}>Search Bar</h2>
          <SearchBar
            placeholder="Search components..."
            onSearch={(q) => showToast(`Searched: ${q}`, "info")}
          />
        </section>

        {/* Modal */}
        <section id="modal" style={sectionStyle}>
          <h2 style={headingStyle}>Modal</h2>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Demo Modal"
          >
            <p style={{ marginBottom: 16 }}>This is a modal dialog with hard shadows and tactile interactions.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <Button variant="secondary" size="sm" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={() => { setModalOpen(false); showToast("Confirmed!", "success"); }}>
                Confirm
              </Button>
            </div>
          </Modal>
        </section>

        {/* Footer */}
        <Footer
          copyright="© 2026 NBUI"
          links={[
            { label: "GitHub", href: "https://github.com/ljlabs/NBUI" },
            { label: "npm", href: "https://www.npmjs.com/package/neo-brutalist-ui" },
          ]}
        />

        {/* Toast container */}
        <div style={{ position: "fixed", top: 80, right: 16, zIndex: 9999, display: "flex", flexDirection: "column", gap: 8 }}>
          {toasts.map((t, i) => (
            <Toast
              key={i}
              open={true}
              variant={t.variant}
              onClose={() => setToasts((ts) => ts.filter((_, j) => j !== i))}
            >
              {t.msg}
            </Toast>
          ))}
        </div>
      </div>
    </NeoThemeProvider>
  );
}

const sectionStyle: React.CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "48px 24px",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--nb-font-display)",
  marginBottom: 8,
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "center",
  flexWrap: "wrap",
};
