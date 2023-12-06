'use client';

import Header from "@/components/Header";
import MediaBanner from "@/components/MediaBanner";
import { useData } from '../app/useData';
import Footer from "@/components/Footer";

export default function Home() {
  const { data, error, isLoading } = useData();
  // const { img, button, heading, orientation, loadingText } = data?.mediaBanner;

  return (
    <main>
      <Header />
      {
        data && !isLoading ? <MediaBanner loading={isLoading} imageData={data.mediaBanner.img} heading={data.mediaBanner.heading} orientation={data.mediaBanner.orientation} loadingText={data.mediaBanner.leadingText} button={data.mediaBanner.button} /> : null
      }
      <div className="bg-center w-full lg:bg-contain bg-cover bg-repeat-x h-full m-0" style={{ backgroundImage: 'url(https://images.ctfassets.net/0sea1vycfyqy/5EHzqz3tXgv0ogKVwHRBAW/e96e42c1bb289874c9a324be95a8aa59/indigo_overlap.png?fm=webp&amp;q=75)'}}></div>
      <Footer />
    </main>
  );
}
