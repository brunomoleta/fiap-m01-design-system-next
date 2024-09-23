import type {Config} from "tailwindcss";
import {spacing, colors, typography} from './src/tokens'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontSize: typography,
      spacing: spacing
    },
  },
  plugins: [],
};
export default config;
