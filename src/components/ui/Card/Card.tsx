import Image from 'next/image';

import Button from "../Button";
import Typography from "../Typography";

import { CardI } from './types';

const Card = ({ img, heading, button, leadingText, orientation }: CardI) => {
  const invertedCard  = orientation === 'left';

  return (
    <div className="bg-lightGrey flex flex-col sm:flex-row">
    <div className={`${invertedCard ? 'sm:order-1' : 'sm:-order-1'}`}>
      {
        img ?
          <Image 
            src={img.src} alt={img.alt || 'clonevery figure'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        : <div className='w-full h-full bg-lightGrey' />
      }
    </div>
    <div className='p-6 sm:px-12 sm:grid sm:place-content-center'>
      <Typography  variant="body" Tag="h2">{leadingText}</Typography>
      <Typography className="mt-2 mb-4" variant="heading" Tag="p">{heading}</Typography>
      {
        button ? <Button href={button.href} label={button.text} isMobileLayoutAdaptative target='_blank' /> : null
      }
    </div>
  </div>
  );
};

export default Card;
