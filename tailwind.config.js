module.exports = {
  content: ['./pages/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['TT Norms Pro', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace']
    }
  },
  variants: {
    extend: {}
  }
}
