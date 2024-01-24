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
          'hero-pattern': "url('/images/bg-img-1.webp')",
      },
      backgroundColor:{
       primary:"rgba(0, 0, 0, 0.5)",
       base:"rgba(109, 109, 110, 0.7)"
      }
    },
  },
  plugins: [],
};


