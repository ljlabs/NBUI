import type { NeoTheme, ThemeOverrides } from "./types";

function isObject(item: unknown): item is Record<string, unknown> {
  return typeof item === "object" && item !== null && !Array.isArray(item);
}

export function mergeTheme(base: NeoTheme, overrides: ThemeOverrides): NeoTheme {
  const result = { ...base };

  for (const key of Object.keys(overrides) as Array<keyof ThemeOverrides>) {
    const baseVal = base[key];
    const overVal = overrides[key];

    if (isObject(baseVal) && isObject(overVal)) {
      (result as Record<string, unknown>)[key] = {
        ...(baseVal as Record<string, unknown>),
        ...(overVal as Record<string, unknown>),
      };
    } else if (overVal !== undefined) {
      (result as Record<string, unknown>)[key] = overVal;
    }
  }

  return result;
}
