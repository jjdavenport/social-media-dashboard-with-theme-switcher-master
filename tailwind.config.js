/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts}", "./index.html"],
  darkMode: "selector",
  theme: {
    extend: {
      letterSpacing: {
        customSpacing: "0.3em"
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        darkThemeBg: "hsl(230, 17%, 14%)",
        darkThemeTopBgPattern: "hsl(232, 19%, 15%)",
        darkThemeCardBg: "hsl(228, 28%, 20%)",
        darkThemeText: "hsl(228, 34%, 66%)",
        darkThemeWhiteText: "hsl(0, 0%, 100%)",
        lightThemeBg: "hsl(0, 0%, 100%)",
        lightThemeTopBgPattern: "hsl(225, 100%, 98%)",
        lightThemeCardBg: "hsl(227, 47%, 96%)",
        lightThemeDarkGrayishBlueText: "hsl(228, 12%, 44%)",
        lightThemeVeryDarkBlueText: "hsl(230, 17%, 14%)",
        lightThemeHover: "hsl(225, 35%, 91%)",
        darkThemeHover: "hsl(228, 26%, 27%)",
      },
      backgroundSize: {
        customHeight: "auto 30%"
      },
      backgroundImage: {
        instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        darkThemeToggle:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};
