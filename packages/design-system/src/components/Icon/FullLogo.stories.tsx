import {Meta, StoryContext, StoryObj} from '@storybook/react';

import {FullLogoIcon} from './';

const meta: Meta<typeof FullLogoIcon> = {
  title: 'Data Display/Icon/FullLogoIcon',
  component: FullLogoIcon,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const FullLogo: Story = {
  args: {
    height: 32,
    width: 146,
    fill: "text-revert"
  },
  decorators: [(Story, context: StoryContext) => (
    <div style={{backgroundColor: 'hsl(180, 10%, 15%)', padding: '1em'}}>
      <Story {...context} />
    </div>
  )],
};

export default meta;
