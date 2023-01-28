/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#36333C",
        secondary: "#16161a",
        font_color: "#fffffe",
        paragraph: "#94a1b2",
        button_color: "#7f5af0",
      },
      fontFamily: {
        signature: ["Quicksand"],
      },
    },
  },
  plugins: [],
};
