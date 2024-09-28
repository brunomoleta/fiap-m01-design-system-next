import type { Preview } from "@storybook/react";
import "../src/main.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      options: {
        storySort: {
          order: ["✨ Comece por aqui ✨", "Foundations", "Utils", "*"],
          method: "alphabetical",
        },
      },
    },
  },
};

export default preview;
