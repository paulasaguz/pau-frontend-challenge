import type { Meta, StoryObj } from '@storybook/react';
import '../app/globals.css';

import Typography from '../components/ui/Typography';

const meta = {
  title: 'Typography',
  component: Typography,
  parameters: {
    Tag: 'p',
    children: 'Text'
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Heading: Story = {
  args: {
    variant: 'heading',
    Tag: 'h1',
    children: 'lorem ipsum'
  },
};

export const SubHeading: Story = {
  args: {
    variant: 'subHeading',
    Tag: 'h2',
    children: 'lorem ipsum'
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    Tag: 'p',
    children: 'lorem ipsum'
  },
};