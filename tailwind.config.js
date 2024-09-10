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
        /* accent */
        primary: "var(--primary)",
      },
      transitionTimingFunction: {
        "smooth-ease": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        runner: "runner 30s linear infinite",
        zoom: "zoom 20s linear infinite",
      },
      keyframes: {
        runner: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
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
