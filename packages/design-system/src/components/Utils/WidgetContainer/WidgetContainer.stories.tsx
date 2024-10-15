import type { Meta, StoryObj } from "@storybook/react";

import { WidgetContainer } from "../../index";

const meta: Meta<typeof WidgetContainer> = {
  title: "Utils/WidgetContainer",
  tags: ["autodocs", "utils"],
  component: WidgetContainer,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: "background-default",
    title: "Title",
    children: (<span>Hello World!</span>)
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: "background-medium-grey",
    title: "Title",
    children: (<span>Hello World!</span>)
  },
};

export const Tertiary: Story = {
  args: {
    backgroundColor: "background-light-grey",
    title: "Title",
    children: (<span>Hello World!</span>)
  },
};

export default meta;
