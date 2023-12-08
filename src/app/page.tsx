import Header from "@/components/Header";
import MediaBanner from "@/components/MediaBanner";
import Footer from "@/components/Footer";
import Typography from "@/components/ui/Typography";
import PreFooter from "@/components/PreFooter/PreFooter";

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