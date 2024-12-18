/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "faculty": ['Faculty Glyphic', 'sans-serif'],
        "anton": ['Anton', 'sans-serif'],
        "kanit": ["Kanit", "sans-serif"],
        "merriweather": ["Merriweather", "serif"],
        "halloween": ["Rubik Wet Paint", "system-ui"],
      },
    },
  },
  plugins: [],
};
