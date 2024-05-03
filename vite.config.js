import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const __dirname = import.meta.dirname;
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
