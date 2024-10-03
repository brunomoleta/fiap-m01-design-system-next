import type { Meta, StoryObj } from '@storybook/react';

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
};

export default meta;
