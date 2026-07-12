import { createContext, useMemo, type ReactNode } from "react";
import { defaultTheme } from "./defaultTheme";
import { mergeTheme } from "./mergeTheme";
import type { NeoTheme, ThemeOverrides } from "./types";

const ThemeContext = createContext<NeoTheme>(defaultTheme);

function themeToCssVars(theme: NeoTheme): Record<string, string> {
  return {
    "--nb-surface": theme.colors.surface,
    "--nb-surface-dim": theme.colors.surfaceDim,
    "--nb-surface-bright": theme.colors.surfaceBright,
    "--nb-surface-container-lowest": theme.colors.surfaceContainerLowest,
    "--nb-surface-container-low": theme.colors.surfaceContainerLow,
    "--nb-surface-container": theme.colors.surfaceContainer,
    "--nb-surface-container-high": theme.colors.surfaceContainerHigh,
    "--nb-surface-container-highest": theme.colors.surfaceContainerHighest,
    "--nb-on-surface": theme.colors.onSurface,
    "--nb-on-surface-variant": theme.colors.onSurfaceVariant,
    "--nb-inverse-surface": theme.colors.inverseSurface,
    "--nb-inverse-on-surface": theme.colors.inverseOnSurface,
    "--nb-background": theme.colors.background,
    "--nb-on-background": theme.colors.onBackground,
    "--nb-primary": theme.colors.primary,
    "--nb-on-primary": theme.colors.onPrimary,
    "--nb-primary-container": theme.colors.primaryContainer,
    "--nb-on-primary-container": theme.colors.onPrimaryContainer,
    "--nb-secondary": theme.colors.secondary,
    "--nb-on-secondary": theme.colors.onSecondary,
    "--nb-secondary-container": theme.colors.secondaryContainer,
    "--nb-on-secondary-container": theme.colors.onSecondaryContainer,
    "--nb-tertiary": theme.colors.tertiary,
    "--nb-on-tertiary": theme.colors.onTertiary,
    "--nb-tertiary-container": theme.colors.tertiaryContainer,
    "--nb-on-tertiary-container": theme.colors.onTertiaryContainer,
    "--nb-error": theme.colors.error,
    "--nb-on-error": theme.colors.onError,
    "--nb-error-container": theme.colors.errorContainer,
    "--nb-on-error-container": theme.colors.onErrorContainer,
    "--nb-outline": theme.colors.outline,
    "--nb-outline-variant": theme.colors.outlineVariant,
    "--nb-shadow-color": "rgba(26, 26, 26, 1)",
    "--nb-shadow-sm": theme.shadows.sm,
    "--nb-shadow": theme.shadows.md,
    "--nb-shadow-lg": theme.shadows.lg,
    "--nb-shadow-inset": theme.shadows.inset,
    "--nb-border-width": `${theme.borders.width}px`,
    "--nb-border-color": theme.borders.color,
    "--nb-border": `${theme.borders.width}px solid ${theme.borders.color}`,
    "--nb-radius-sm": theme.radii.sm,
    "--nb-radius": theme.radii.md,
    "--nb-radius-lg": theme.radii.lg,
    "--nb-radius-full": theme.radii.full,
    "--nb-font-display": theme.typography.displayFont,
    "--nb-font-body": theme.typography.bodyFont,
    "--nb-font-label": theme.typography.labelFont,
    "--nb-transition": `${theme.motion.duration} ${theme.motion.easing}`,
  };
}

interface NeoThemeProviderProps {
  theme?: ThemeOverrides;
  children: ReactNode;
}

export function NeoThemeProvider({ theme: overrides, children }: NeoThemeProviderProps) {
  const mergedTheme = useMemo(
    () => (overrides ? mergeTheme(defaultTheme, overrides) : defaultTheme),
    [overrides],
  );

  const cssVars = useMemo(() => themeToCssVars(mergedTheme), [mergedTheme]);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      <div style={cssVars as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
