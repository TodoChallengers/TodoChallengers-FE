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
      "login": "#A9A9A9",
      "underline": "#D9D9D9",
      "password-miss": "#7B7B7B",
      "black":"#000000",
      "red": "#FF3B30"
    },
    extend: {
      borderRadius: {
        "button": "5px"
      },
      borderWidth: {
        "0.5": "0.5px",
        "0.7": "0.7px",
      },
      height: {
        "button": "50px",
        "img": "175px",
      },
      width: {
        "large": "736px",
        "middle": "439px",
        "img": "175px",
      }
    },
  },
  plugins: [],
}

