/** @type {import('tailwindcss').Config} */
module.exports = {
  themes: ["light", "dark", "cupcake"],
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    daisyui: {
      styled: false,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#2563eb",
          "primary-focus": "#4338ca",
          secondary: "#0f172a",
          accent: "#e2e8f0",
          neutral: "#e5e5e5",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#2563eb",
          "primary-focus": "#c7d2fe",
          secondary: "#e2e8f0",
          accent: "#020617",
          neutral: "#171717",
        },
      },
    ],
  },
};
