/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
        helvetica: ["Helvetica", "Helvetica Neue", "Arial", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "eb-garamond": ["EB Garamond", "serif"],
        "source-code-pro": ["Source Code Pro", "monospace"],
        "share-tech": ["Share Tech", "sans-serif"],
        niconne: ["Niconne", "cursive"],
        "rubik-scribble": ["Rubik Scribble", "system-ui"],
        habibi: ["Habibi", "serif"],
        "anek-gurmukhi": ["Anek Gurmukhi", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
        "bree-serif": ["Bree Serif", "serif"],
        courgette: ["Courgette", "cursive"],
        "permanent-marker": ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};
