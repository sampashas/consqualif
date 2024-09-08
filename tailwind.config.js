/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      accent: ["Bricolage Grotesque, sans-serif"],
      normal: ["Oak Sans, sans-serif"],
    },
    extend: {
      colors: {
        /* white */
        white: "var(--white)",
        wh15: "var(--wh15)",
        wh50: "var(--wh50)",
        wh: "var(--wh)",
        /* neutral */
        black: "var(--black)",
        bl15: "var(--bl15)",
        bl50: "var(--bl50)",
        /* grey */
        asphalt: "var(--asphalt)",
        asphaltLight: "var(--asphaltLight)",
        bg: "var(--bg)",
        /* accent */
        yellow: "var(--yellow)",
        yellowLight: "var(--yellowLight)",
        sand: "var(--sand)",
        sandLight: "var(--sandLight)",
        red: "var(--red)",
        redLight: "var(--redLight)",
      },
      transitionTimingFunction: {
        "smooth-ease": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        runner: "runner 30s linear infinite",
        zoom: "zoom 30s linear infinite",
      },
      keyframes: {
        runner: {
          "0%": { transform: "translateX(105%)" },
          "100%": { transform: "translateX(-220%)" },
        },
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.25)" },
        },
      },
      screens: {
        mn: "320px",
        xs: "375px",
        ml: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1728px",
        hd: "1920px",
        "2k": "2560px",
        "4k": "3820px",
      },
    },
  },
  plugins: [],
};
