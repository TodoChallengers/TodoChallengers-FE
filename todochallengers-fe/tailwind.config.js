/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "pretendard": "Pretendard"
      },
      colors: {
        gray: {
          default: "EEEEEE",
          1: "A9A9A9",
          2: "9B9B9B",
        },
        "button": "rgba(238, 238, 238, 0.6)"
      }
    },
  },
  plugins: [],
}

