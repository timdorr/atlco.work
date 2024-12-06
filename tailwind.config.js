module.exports = {
  content: ['./pages/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['InterVariable', 'Helvetica', 'Arial', 'sans-serif'],
      mono: ['SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace']
    },
    extend: {
      colors: {
        'cw-red': '#f26f59',
        'cw-white': '#f5f9ea'
      }
    }
  },
  variants: {
    extend: {}
  }
}
