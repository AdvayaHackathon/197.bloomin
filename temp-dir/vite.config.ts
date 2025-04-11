import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Commented out the imports causing errors
// import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Commented out the plugin calls causing errors
    // tsconfigPaths(),
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
