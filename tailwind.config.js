/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ed',
          100: '#b3e8cc',
          200: '#80d9ab',
          300: '#4dca8a',
          400: '#26bf72',
          500: '#00b45a',
          600: '#009e4f',
          700: '#008542',
          800: '#006c36',
          900: '#004a24',
        },
        dark: {
          50: '#e8eaf0',
          100: '#c5c9d6',
          200: '#9ea5ba',
          300: '#77819e',
          400: '#5a668a',
          500: '#3d4b76',
          600: '#35436e',
          700: '#2b3963',
          800: '#222f58',
          900: '#131d44',
          950: '#0b1224',
        },
        surface: {
          DEFAULT: '#0f1923',
          light: '#162231',
          lighter: '#1e2d3d',
          card: '#162231',
          hover: '#1e2d3d',
        },
        accent: {
          red: '#ef4444',
          yellow: '#eab308',
          green: '#22c55e',
          blue: '#3b82f6',
          orange: '#f97316',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
