/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      "pretendard": "Pretendard"
    },
    colors: {
      "button": "rgba(238, 238, 238, 0.6)",
      "button-border": "rgba(238, 238, 238, 1.0)",
      "button-disable": "#CECECE",
      "tf": "#A9A9A9",
      "underline": "#D9D9D9",
    },
    extend: {
      borderRadius: {
        "button": "5px"
      },
      borderWidth: {
        "button-border": "0.5",
      },
      height: {
        "button": "50px",
        "img": "175px",
      },
      width: {
        "full": "736px",
        "mid": "439px",
        "img": "175px",
      }
    },
  },
  plugins: [],
}

