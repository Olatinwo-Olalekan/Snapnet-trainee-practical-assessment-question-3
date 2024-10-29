/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "960px",
        x: "1024px"
      },
    },
  },
  plugins: [],
}

