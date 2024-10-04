import type {Meta, StoryObj} from "@storybook/react";

import StyledLink from "./Link";

const meta: Meta<typeof StyledLink> = {
  title: "Navigation/StyledLink",
  component: StyledLink,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Voltar para página inicial",
    variant: "primary",
    urlDestination: '/'
  },
};
export const Inherit: Story = {
  args: {
    children: "Saiba mais",
    variant: "inherit",
    urlDestination: '/'
  },
};

export default meta;
