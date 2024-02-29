/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],

  theme: {
    extend: {
      colors: {
        primary: "#80bcbd",
        accent: "#ffb737",
        gray: "#f4f4f4",
      },
    },
  },
  plugins: [],
};
