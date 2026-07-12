import { defineConfig } from "vite";
import { resolve } from "path";

// Separate build config to compile the CSS file
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/styles/base.css"),
      formats: ["es"],
      fileName: "styles",
    },
    rollupOptions: {
      external: [],
    },
  },
});
