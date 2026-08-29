import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// Static SPA build. Output is plain files in dist/, hostable on any static host.
// `base` is relative so it also works from a subpath (e.g. GitHub Pages project site).
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Twee pagina's: de one-pager (index.html) en het logboek (voortgang.html).
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        voortgang: fileURLToPath(new URL("./voortgang.html", import.meta.url)),
      },
    },
  },
});
