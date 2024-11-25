import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import {defineConfig} from "vite";
import { pageData } from "./src/js/modules/pages.js";


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'page2.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});

