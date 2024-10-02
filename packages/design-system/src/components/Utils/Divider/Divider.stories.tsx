import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../../index";

const meta: Meta<typeof Divider> = {
  title: "Utils/Divider",
  tags: ["autodocs", "utils"],
  component: Divider,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "background-accent",
    isSemantic: true,
  },
};
export const Secondary: Story = {
  args: {
    color: "text-active",
    isSemantic: false,
  },
};
export const Invisible: Story = {
  args: {
    color: "text-revert",
    isSemantic: false,
  },
};

export default meta;
