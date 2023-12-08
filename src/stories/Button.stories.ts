import type { Meta, StoryObj } from '@storybook/react';
import '../app/globals.css';

import Button from '../components/ui/Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    variant: 'primary',
    label: 'Button'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button 1'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};
