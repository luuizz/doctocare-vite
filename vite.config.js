import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      main: resolve(__dirname, "index.html"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          cascade: false,
        }),
      ],
    },
  },
});
