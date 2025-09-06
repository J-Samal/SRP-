/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        secondary: "#14B8A6",
        accent: "#06B6D4",
        neutral: "#111827",
        "base-100": "#FFFFFF",
        "base-200": "#F3F4F6",
        "base-300": "#E5E7EB",
        info: "#0EA5E9",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        construction: {
          "primary": "#F97316",
          "secondary": "#14B8A6",
          "accent": "#06B6D4",
          "neutral": "#111827",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "info": "#0EA5E9",
          "success": "#22C55E",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
      "light",
      "dark",
    ],
  },
}

