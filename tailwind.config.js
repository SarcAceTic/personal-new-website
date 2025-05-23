/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/components/**/*.{js,vue,ts}",
      "./src/layouts/**/*.vue",
      "./src/pages/**/*.vue",
      "./src/plugins/**/*.{js,ts}",
      "./src/app.vue",
      "./src/error.vue",
      "./src/presets/**/*.{js,vue,ts}",
      "./src/app.config.ts"
    ],
    theme: {
      fontFamily: {
        'monts': ['"Montserrat"', 'sans-serif'],
        'pops': ['"Poppins"', 'sans-serif'],
        'hind': ['"Hind"', 'sans-serif']
      },
      extend: {
  
      },
    },
    plugins: [],
  }