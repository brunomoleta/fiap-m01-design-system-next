import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      spacing: {
        "spacing-sm": "8px",
        "spacing-md": "16px",
        "spacing-lg": "24px",
        "spacing-xl": "32px",
        "page-width-desktop":"1200px",
      },
      borderRadius: {
        "spacing-sm": "8px",
        "spacing-md": "16px",
        "spacing-lg": "24px",
        "spacing-xl": "32px",
      }
    }
  },
  plugins: [],
};
export default config;
