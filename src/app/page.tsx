'use client';

import Header from "@/components/Header";
import MediaBanner from "@/components/MediaBanner";
import { useData } from '../app/useData';
import Footer from "@/components/Footer";
import Typography from "@/components/ui/Typography";

export default function Home() {
  const { data, error, isLoading } = useData();
  // const { img, button, heading, orientation, loadingText } = data?.mediaBanner;

  return (
    <>
      <Header />
      <main className="ctn mt-20 bg-white z-50">
        <div className="my-6">
          <Typography className="mb-4" Tag="h1" variant="heading">Media Banner</Typography>
          {
            data && !isLoading ? <MediaBanner loading={isLoading} imageData={data.mediaBanner.img} heading={data.mediaBanner.heading} orientation={data.mediaBanner.orientation} loadingText={data.mediaBanner.leadingText} button={data.mediaBanner.button} /> : null
          }
        </div>
        <div className="bg-center w-full lg:bg-contain bg-cover bg-repeat-x h-full m-0" style={{ backgroundImage: 'url(https://images.ctfassets.net/0sea1vycfyqy/5EHzqz3tXgv0ogKVwHRBAW/e96e42c1bb289874c9a324be95a8aa59/indigo_overlap.png?fm=webp&amp;q=75)'}}></div>
      </main>
      <Footer />
    </>
  );
}