/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': 'var(--bg-black)',
        'main-blue': 'var(--main-blue)',
        'hover-blue': 'var(--hover-blue)',
        'bg-blue': 'var(--bg-blue)',
        'bg-gray': 'var(--bg-gray)',
        'dk-avo-green': 'var(--dk-avo-green)',
        'avo-green': 'var(--avo-green)',
        'txt-gray': 'var(--txt-gray)',
        'txt-lt-gray': 'var(--txt-lt-gray)',
        'txt-white': 'var(--txt-white)',
        'charcoal': 'var(--charcoal)',
      },
      fontSize: {
        's': 'var(--fs-s)',
        'xs': 'var(--fs-xs)',
        'm': 'var(--fs-m)',
        'ml': 'var(--fs-ml)',
        'l': 'var(--fs-l)',
        'title': 'var(--fs-title)',
      },
      borderRadius: {
        'reg': 'var(--br-reg)',
        'soft': 'var(--br-soft)',
        'round': 'var(--br-round)',
      },
      spacing: {
        'small': 'var(--small)',
        'medium': 'var(--medium)',
        'large': 'var(--large)',
        'x-large': 'var(--x-large)',
      }
    },
  },
  plugins: [],
}