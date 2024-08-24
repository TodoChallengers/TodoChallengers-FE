/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      "pretendard": "Pretendard"
    },
    colors: {
      "date-btn":"#D9D9D9",
      "todo-menu":"#9B9B9B",
      "daily-menu":"#D9D9D9",
      "button": "rgba(238, 238, 238, 0.6)",
      "button-border": "rgba(238, 238, 238, 1.0)",
      "button-disable": "#CECECE",
      "login": "#A9A9A9",
      "underline": "#D9D9D9",
      "password-miss": "#7B7B7B",
      "black":"#000000",
      "white":"#FFFFFF",
      "red": "#FF3B30",
      "tab-inactive": "#9B9B9B",
      "popup-plus":"#7085F2",
      "popup-divider": "rgba(238, 238, 238, 1.0)",
      "soft-peach":"#FFD1DC",
      "mint-green":"#B2F7EF",
      "lavender":"#C3B1E1",
      "baby-blue":"#A2CFFE",
      "pale-yellow":"#FFF9B1",
      "blush-pink":"#F4C2C2",
      "pistachio":"#C5E1A5",
      "powder-blue":"#B0E0E6",
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
      },
      boxShadow: {
        'popup-menu': '0 0 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

