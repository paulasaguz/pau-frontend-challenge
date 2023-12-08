'use client'

import useData from '@/hooks/useData';
import Card from '../ui/Card';

const MediaBanner = () => {
  const { data, error, isLoading } = useData();
  const { img, heading, orientation, button, leadingText } = data?.mediaBanner || {};
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Whoops, something went wrong. Mind refreshing the page, please?"</p>

  return <Card img={img} heading={heading} leadingText={leadingText} orientation={orientation} button={button} />
};

export default MediaBanner;
