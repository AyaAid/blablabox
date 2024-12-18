import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app/shared": path.resolve(__dirname, "libs/shared/src"),
      "@app/shared/*": path.resolve(__dirname, "libs/shared/src/*"),
      "@app/iam": path.resolve(__dirname, "libs/iam/src"),
      "@app/iam/*": path.resolve(__dirname, "libs/iam/src/*"),
      "@app/chat": path.resolve(__dirname, "libs/chat/src"),
      "@app/chat/*": path.resolve(__dirname, "libs/chat/src/*"),
      "test/*": path.resolve(__dirname, "test/*"),
      "@components/*": path.resolve(__dirname, "src/components/*"),
      "@views/*": path.resolve(__dirname, "src/views/*"),
      "@store": path.resolve(__dirname, "src/store"), // Ajout de l'alias @store
    },
  },
});
