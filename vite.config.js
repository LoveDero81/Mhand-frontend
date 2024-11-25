import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import {defineConfig} from "vite";



export default defineConfig({
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
    }),
  ],
});

