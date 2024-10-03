import {Meta, StoryContext, StoryObj} from '@storybook/react';

import Illustration from './';

const meta: Meta<typeof Illustration> = {
  title: 'Data Display/Illustration',
  component: Illustration,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    chooseImage: "404"
  },
};

export const Register: Story = {
  args: {
    chooseImage: "register"
  },
};
export const EditAccount: Story = {
  args: {
    chooseImage: "editAccount"
  },
};
export const Home: Story = {
  args: {
    chooseImage: "home"
  },
};
export const Login: Story = {
  args: {
    chooseImage: "login"
  },
}
export const DashboardMan: Story = {
  args: {
    chooseImage: "dashboardMan"
  },
  decorators: [(Story, context: StoryContext) => (
    <div style={{backgroundColor: 'hsl(192, 100%, 19%)', padding: '1em'}}>
      <Story {...context} />
    </div>
  )],
}
export const DashboardWoman: Story = {
  args: {
    chooseImage: "dashboardWoman"
  },
  decorators: [(Story, context: StoryContext) => (
    <div style={{backgroundColor: 'hsl(0, 0%, 80%)', padding: '1em'}}>
      <Story {...context} />
    </div>
  )],
};


export default meta;
