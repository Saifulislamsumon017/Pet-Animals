/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'color-bg': '#FFF9F4',
        'color-primary': '#FFFFFF',
        'color-text': '#111111',
        'color-accent': '#FFDC26',
        'color-foot': 'rgba(255, 220, 38, 0.5)',
      },
      fontFamily: {
        sora: ['"Sora", serif'],
        display: ['"ADLaM Display", serif'],
      },
    },
  },
  plugins: [],
};
