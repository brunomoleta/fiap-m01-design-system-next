import type { Meta, StoryObj } from '@storybook/react';

import Input from './component';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Textfield: Story = {
  args: {
    label: 'Label',
    type: 'text',
    name: 'textfield-1',
    placeholder: 'Insira seu texto',
  },
};

export default meta;
