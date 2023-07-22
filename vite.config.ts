import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import rune from 'vite-plugin-rune';

const aliases = {
  _assets: '/src/assets',
  _components: '/src/components',
  _hooks: '/src/hooks',
  _logic: '/src/logic',
  _styles: '/src/styles',
  _types: '/src/types',
  _utils: '/src/utils',
};

export default defineConfig({
  base: '',
  plugins: [react(), rune({ logicPath: './src/logic/index.ts' })],
  resolve: {
    alias: aliases,
  },
});
