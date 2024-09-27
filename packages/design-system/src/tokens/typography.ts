import { fontSize, fontWeight } from "./typography/index";

export default {
  "headline-xl": {
    "font-size": `${fontSize["headline-xl"]};`,
    "font-weight": `${fontWeight.normal};`,
  },
  "headline-lg": {
    "font-size": `${fontSize["headline-lg"]};`,
    "font-weight": `${fontWeight.medium};`,
  },
  "headline-base-highlight-bold": {
    "font-size": `${fontSize["headline-base"]};`,
    "font-weight": `${fontWeight.bold};`,
  },
  "headline-base-highlight-medium": {
    "font-size": `${fontSize["headline-base"]};`,
    "font-weight": `${fontWeight.medium};`,
  },
  "headline-sm": {
    "font-size": `${fontSize["text-base"]};`,
    "font-weight": `${fontWeight.bold};`,
  },
  "text-baseline": {
    "font-size": `${fontSize["text-base"]};`,
    "font-weight": `${fontWeight.normal};`,
  },
  "text-sm": {
    "font-size": `${fontSize["text-sm"]};`,
    "font-weight": `${fontWeight.normal};`,
  },
} as const;
