import type { Meta, StoryObj } from '@storybook/react';

import Button from './component';

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Criar conta',
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Criar conta',
    variant: 'secondary',
  },
};
export const OutlineGreen: Story = {
  args: {
    children: 'Criar conta',
    variant: 'outlineGreen',
  },
};
export const OutlineOrange: Story = {
  args: {
    children: 'Criar conta',
    variant: 'outlineOrange',
  },
};


export default meta;
