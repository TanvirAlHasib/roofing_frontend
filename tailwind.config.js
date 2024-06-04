/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: {'image': "url('./src/assets/free_consultation_1.webp')",},},
  },
  // we need this plugin to get the style of rich text of starpi backend
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography','@tailwindcss/forms'),],
}

