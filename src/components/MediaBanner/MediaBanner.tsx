import Image from 'next/image';
import Button from "../ui/Button";
import Typography from "../ui/Typography";

interface MediaBannerI {
  heading: string;
  button: {
    text: string;
    href: string;
  };
  imageData: {
    alt?: string;
    caption?: string;
    src: string;
  };
  orientation: string;
  loadingText: string;
  loading: boolean;
};

const MediaBanner = ({ loading, imageData, heading, button, loadingText }: MediaBannerI) => {
  if (loading) return <p>{loadingText}</p>

  return (
    <div className="bg-lightGrey flex flex-col sm:flex-row">
      <div>
        <Image 
          src={imageData.src} alt={imageData.alt || 'lovevery foto'}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className='p-6 sm:px-12 sm:grid sm:place-content-center'>
        <Typography  variant="body" Tag="h2">For all their firsts</Typography>
        <Typography className="mt-2 mb-4" variant="heading" Tag="p">{heading}</Typography>
        <Button label={button.text} isMobileLayoutAdaptative />
      </div>
    </div>
  );
};

export default MediaBanner;
