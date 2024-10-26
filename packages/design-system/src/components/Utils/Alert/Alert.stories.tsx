import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../../index";

const meta: Meta<typeof Alert> = {
  title: "Utils/Alert",
  tags: ["autodocs", "utils"],
  component: Alert,
};

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    text: 'Sucesso!'
  },
};
export const Warning: Story = {
  args: {
    text: 'Error!',
    bgColor: 'text-warning',
  },
};

export default meta;
