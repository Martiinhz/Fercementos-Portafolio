/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',    // Pantallas pequeñas
        'md': '768px',    // Pantallas medianas
        'lg': '1024px',   // Pantallas grandes
        'xl': '1280px',   // Pantallas extra grandes
        '2xl': '1536px',  // Pantallas muy grandes
        '3xl': '1600px',  // Pantallas personalizadas extra grandes
      },
    },
  },
  plugins: [],
}
