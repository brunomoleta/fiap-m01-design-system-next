import type { Meta, StoryObj } from '@storybook/react';

import Divider from './component';

const meta: Meta<typeof Divider> = {
  title: 'Utils/Divider',
  tags: ['autodocs', 'utils'],
  component: Divider,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'light',
    isSemantic: true,
  },
};

export default meta;
