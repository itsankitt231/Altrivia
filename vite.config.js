import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Clean config — no Tailwind plugin here
export default defineConfig({
  plugins: [react()],
})

