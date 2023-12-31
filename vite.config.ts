import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rune from "vite-plugin-rune"

export default defineConfig({
  plugins: [react(),rune({ logicPath: "./src/logic/logic.ts" })],
})

