/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "#F2F4F5",
        "my-gray": "#6C7072",
      },
    },
  },
  plugins: [],
};
