import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue-service",
      filename: "remoteEntry.js",
      exposes: {
        "./web-components": "./src/main.ts",
      },
    }),
  ],
  server: {
    port: 4175,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 4175,
  },
});
