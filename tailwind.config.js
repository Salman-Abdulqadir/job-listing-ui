/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        "grayish-cyan-1": "hsl(180, 52%, 96%)",
        "grayish-cyan-2": "hsl(180, 31%, 95%)",
        "grayish-cyan-dark": "hsl(180, 8%, 52%)",
        "grayish-cyan-dark-2": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
