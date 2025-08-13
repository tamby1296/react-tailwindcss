const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      kAppWhite: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        heading: [...defaultTheme.fontFamily.serif],
      },
    },
  },
};
