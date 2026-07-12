export interface NeoThemeColors {
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
}

export interface NeoThemeShadows {
  sm: string;
  md: string;
  lg: string;
  inset: string;
}

export interface NeoThemeBorders {
  width: number;
  color: string;
}

export interface NeoThemeRadii {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface NeoThemeTypography {
  displayFont: string;
  bodyFont: string;
  labelFont: string;
}

export interface NeoThemeMotion {
  duration: string;
  easing: string;
}

export interface NeoTheme {
  colors: NeoThemeColors;
  shadows: NeoThemeShadows;
  borders: NeoThemeBorders;
  radii: NeoThemeRadii;
  typography: NeoThemeTypography;
  motion: NeoThemeMotion;
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ThemeOverrides = DeepPartial<NeoTheme>;
