import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Gallery as GallerySection, VideoStory, Footer } from "@/components/Sections";

const Gallery = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar onBook={() => {}} />

      <main>
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              Wildlife • Nature • Sunset
            </p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-6xl">
              Gallery
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore scenes from Crocodile Park Nilaveli, including wild crocodiles, birdlife,
              lagoons, beaches and unforgettable sunsets.
            </p>

            <Link
              to="/"
              className="mt-8 inline-block text-sm text-primary transition-colors hover:text-primary/80"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        <GallerySection />

        <VideoStory />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
