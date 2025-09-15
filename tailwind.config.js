/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          raleway: ["Raleway", "sans-serif"],
        },
        keyframes: {
          wiggle: {
            "0%, 100%": { transform: "translateX(-3px)" },
            "50%": { transform: "translateX(3px)" },
          },
        },
        animation: {
          wiggle: "wiggle 0.4s ease-in-out infinite",
        },
      },
    },
    plugins: [],
  }
  