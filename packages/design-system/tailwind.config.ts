import type {Config} from "tailwindcss";
import {spacing, colors, typography} from './src/tokens'

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/docs/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontSize: typography,
      spacing: spacing,
      gridTemplateColumns: {
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
