/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      serif: ["Courier New", "Courier", "monospace"],
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
