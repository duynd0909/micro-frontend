import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        vue_service: "http://localhost:4175/assets/remoteEntry.js",
        react_service: "http://localhost:4174/assets/remoteEntry.js",
      },
    }),
  ],
  server: {
    port: 4173,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 4173,
  },
});
