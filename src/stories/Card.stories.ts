import type { Meta, StoryObj } from '@storybook/react';
import '../app/globals.css';

import Card from '../components/ui/Card';

const image = {
  src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
  alt: "Happy baby playing with a toy",
  caption: "Happy baby playing with a toy",
}

const buttton = {
  text: "Explore the Play Kits",
  href: "https://lovevery.com/products/the-play-kits/",
}

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    img: image,
    leadingText: "For all their firsts",
    heading: "Joyful play at every stage, ages 0-4",
    orientation: 'right',
    button: buttton
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightCard: Story = {
  args: {
    img: image,
    leadingText: "For all their firsts",
    heading: "Joyful play at every stage, ages 0-4",
    orientation: 'right',
    button: buttton
  },
};

export const LeftCard: Story = {
  args: {
    img: image,
    leadingText: "For all their firsts",
    heading: "Joyful play at every stage, ages 0-4",
    orientation: 'left',
    button: buttton
  },
};