import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        mid: { min: "786px", max: "1100px" },
      },
    },
  },
  plugins: [],
};