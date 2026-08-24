import React, { useCallback, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingModal from "@/components/BookingModal";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

import {
  AboutSection,
  ActivityGrid,
  FAQ,
  FeatureHighlights,
  FinalCTA,
  Footer,
  ExperienceIntro,
  PricingSection,
  Testimonials,
  WildlifeRespect,
} from "@/components/Sections";

function Home() {
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
        <Hero onBook={() => openBooking("Guided Wild Crocodile Experience")} />

        <ExperienceIntro />

        <FeatureHighlights />

        <ActivityGrid onBook={openBooking} />

        <PricingSection onBook={openBooking} />

        <WildlifeRespect />

        <AboutSection />

        <Testimonials />

        <FAQ />

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
}

export default function App() {
  return <Home />;
}
