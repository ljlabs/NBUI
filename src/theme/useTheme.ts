import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import type { NeoTheme } from "./types";

export function useTheme(): NeoTheme {
  return useContext(ThemeContext);
}
