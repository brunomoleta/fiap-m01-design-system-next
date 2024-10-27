import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    '../../packages/design-system/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }
      'desktop': '900px',
      // => @media (min-width: 1024px) { ... }
    },
    fontSize: {
      "headline-xl": "2rem",
      "headline-lg": "1.75rem",
      "headline-base": "1.5rem",
      "headline-sm": "1.25rem",
      "text-base": "1.00rem",
      "text-sm": "0.875rem",
    },
    extend: {
      gridTemplateColumns:{
        'dashboard-desktop': '4fr 15fr 6fr',
      },
      colors: {
        "background-accent": "hsl(9, 100%, 60%)",
        "background-default": "hsl(192, 100%, 19%)",
        "background-medium-grey": "hsl(183, 22%, 89%)",
        "background-dark-grey": "hsl(0, 0%, 80%)",
        "background-light-grey": "hsl(0, 0%, 97%)",
        "background-medium-green": "hsl(111, 48%, 43%)",
        "background-light-green": "hsl(114, 22%, 91%)",
        "background-fade": "hsla(191, 100%, 19%, 0.15)",
        "text-revert": "hsl(330, 11%, 96%)",
        "text-active": "hsl(111, 48%, 43%)",
        "text-dark-green": "hsl(192, 100%, 19%)",
        "text-default": "hsl(180, 10%, 15%)",
        "text-gray": "hsla(0, 0%, 46%, 1)"
      },
      gridTemplateRows: {
        'middle-1fr': 'auto 1fr auto',
      },
      spacing: {
        "spacing-sm": "8px",
        "spacing-md": "16px",
        "spacing-lg": "24px",
        "spacing-xl": "32px",
        "page-width-desktop":"1200px",
        "100svw":"100svw"
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