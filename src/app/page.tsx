import { Metadata } from 'next';

import Header from "@/components/Header";
import MediaBanner from "@/components/MediaBanner";
import Footer from "@/components/Footer";
import Typography from "@/components/ui/Typography";
import PreFooter from "@/components/PreFooter/PreFooter";

export const metadata: Metadata = {
  title: "Clonevery | Learning Through Play for Your Child's Developing Brain",
  description: 'Award-winning, Montessori-inspired toys and subscription boxes for babies and toddlers. Designed by child development experts and sustainably-made.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="ctn mt-20 bg-white z-50">
        <div className="my-6">
          <Typography className="mb-4" Tag="h1" variant="heading">Media Banner</Typography>
          <MediaBanner />
        </div>
      </main>
      <PreFooter />
      <Footer />
    </>
  );
}