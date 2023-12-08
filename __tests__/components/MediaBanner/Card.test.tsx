import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react'
import Card from '@/components/ui/Card'

const image = {
  src: "https://images.ctfassets.net/0sea1vycfyqy/66XcWTL8RWek8gliZLFpYu/e12b79045911f66166bdd34cffeadd62/700x500__1_.png",
  alt: "Happy baby playing with a toy",
  caption: "Happy baby playing with a toy",
}

const buttton = {
  text: "Explore the Play Kits",
  href: "https://lovevery.com/products/the-play-kits/",
}

describe('Home', () => {
  it('should have Docs text', async () => {
    render(
    <Card 
      img={image}
      leadingText="For all their firsts"
      heading="Joyful play at every stage, ages 0-4"
      orientation='right'
      button={buttton}
    />)  

    const leading = screen.getByText('For all their firsts');
    const heading = screen.getByText('Joyful play at every stage, ages 0-4'); 
    const link = screen.getByText('Explore the Play Kits');
    
    expect(leading).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://lovevery.com/products/the-play-kits/');
  })
})
