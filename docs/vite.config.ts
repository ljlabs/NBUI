import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/NBUI/",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "neo-brutalist-ui/styles.css", replacement: resolve(__dirname, "../src/styles/base.css") },
      { find: "neo-brutalist-ui", replacement: resolve(__dirname, "../src") },
    ],
  },
  css: {
    postcss: resolve(__dirname, "postcss.config.js"),
  },
  server: {
    strictPort: false,
  },
});
