import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rune from 'vite-plugin-rune';

const aliases = {
  '@assets': '/src/assets',
  '@components': '/src/components',
  '@hooks': '/src/hooks',
  '@logic': '/src/logic',
  '@styles': '/src/styles',
  '@utils': '/src/utils',
};

export default defineConfig({
  base: '',
  plugins: [react(), rune({ logicPath: './src/logic/index.ts' })],
  resolve: {
    alias: aliases,
  },
});
