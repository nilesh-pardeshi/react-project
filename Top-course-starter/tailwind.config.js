/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0f172a",
        bgDark2: "#1e293b",
      },
    },
  },
  plugins: [],
};
