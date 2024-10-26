import type { Meta, StoryObj } from '@storybook/react';

import Select from './component';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    name: 'textfield-1',
    options: [
      {
        value: 'option-1',
        label: 'Option 1',
      },
      {
        value: 'option-2',
        label: 'Option 2',
      },
    ],
  },
};

export default meta;
