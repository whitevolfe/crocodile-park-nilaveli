import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

import Navbar from "@/components/Navbar";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";

import {
  ExperienceIntro,
  ExperienceTimeline,
  PricingSection,
  WildlifeRespect,
  FinalCTA,
  Footer,
} from "@/components/Sections";

const Experience = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [experience, setExperience] = useState<string | undefined>(undefined);

  const openBooking = useCallback((exp?: string) => {
    setExperience(exp);
    setBookingOpen(true);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar onBook={() => openBooking()} />

      <main>
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-xs tracking-[0.3em] text-primary uppercase">
              Guided Evening Wildlife Experience
            </p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-6xl">
              Discover the Wild Side of Nilaveli
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A two-hour guided journey through crocodile habitat, birdlife, Periyakulam, the lagoon
              and the beautiful Nilaveli sunset.
            </p>

            <Link
              to="/"
              className="mt-8 inline-block text-sm text-primary transition-colors hover:text-primary/80"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        <ExperienceIntro />

        <ExperienceTimeline onBook={openBooking} />

        <PricingSection onBook={openBooking} />

        <WildlifeRespect />

        <FinalCTA onBook={openBooking} />
      </main>

      <Footer />
      <WhatsAppButton />

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialExperience={experience}
      />
    </div>
  );
};

export default Experience;
