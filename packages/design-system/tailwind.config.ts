import type {Config} from "tailwindcss";
import {spacing, fontSize} from "./src/tokens";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }
      'desktop': '900px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "background-accent": "hsl(9, 100%, 60%)",
        "background-default": "hsl(192, 100%, 19%)",
        "background-dark-grey": "hsl(183, 22%, 89%)",
        "background-medium-grey": "hsl(0, 0%, 80%)",
        "background-light-grey": "hsl(0, 0%, 97%)",
        "background-light-green": "hsl(114, 22%, 91%)",
        "background-fade": "hsla(191, 100%, 19%, 0.15)",
        "text-revert": "hsl(330, 11%, 96%)",
        "text-active": "hsl(111, 48%, 43%)",
        "text-dark-green": "hsl(192, 100%, 19%)",
        "text-default": "hsl(180, 10%, 15%)",
      },
      fontSize: fontSize,
      spacing: spacing,
      borderRadius: spacing,
      gridTemplateColumns: {
        "auto-fill-150": "repeat(auto-fill, minmax(150px, 1fr))",
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
        "auto-fill-400": "repeat(auto-fill, minmax(400px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
