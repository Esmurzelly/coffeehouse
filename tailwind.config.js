/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",

        "secondary": "#868686"
      },
      fontFamily: {
        'sans': 'Montserrat, sans-serif',
      },
      content: {
        mobileLine: "url('./assets/line__mobile.png')",
        pcLine: "url('./assets/line__pc.png')",
      },
      backgroundImage: {
        'pcLine': "url('./assets/line__pc.png')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1700px',
        '4xl': '1900px',
      }
    },
  },
  plugins: [],
}