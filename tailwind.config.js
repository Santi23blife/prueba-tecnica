/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "maps-cover": "url(./img/maps-cover.jpg)",
      },
    },
  },
  plugins: [],
};
