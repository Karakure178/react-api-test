import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./",
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/assets/scss/global/index" as *;`,
        api: "modern-compiler", // https://github.com/sass/dart-sass/issues/2352 対策
      },
    },
  },
  build: {
    minify: false, // css,jsのminifyを無効化
    cssCodeSplit: false, // cssの分割を無効化
    rollupOptions: {
      output: {
        assetFileNames: "assets/[ext]/[name][extname]",
      },
    },
  },
});
