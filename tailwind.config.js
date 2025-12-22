/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium GenAI Color Palette
        background: '#020617',  // slate-950
        primary: '#EF5A3C',     // custom orange
        accent: '#F59E0B',      // amber-500 (complements orange)
        success: '#22C55E',     // green-500
        'text-main': '#E5E7EB', // gray-200
        'text-muted': '#9CA3AF', // gray-400
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
