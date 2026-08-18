import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  AboutSection,
  ActivityGrid,
  ContactSection,
  ExperienceIntro,
  ExperienceTimeline,
  FAQ,
  FeatureHighlights,
  FinalCTA,
  Footer,
  Gallery,
  PricingSection,
  Testimonials,
  VideoStory,
  WildlifeRespect,
} from "@/components/Sections";
import { useState, useCallback } from "react";

const title = "Crocodile Park Nilaveli | Wildlife Experience in Sri Lanka";
const description =
  "Discover Crocodile Park Nilaveli in Trincomalee, Sri Lanka. Experience guided crocodile watching, birdlife, nature exploration and beautiful Nilaveli sunsets.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Crocodile Park Nilaveli",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Thamaraikulam Road",
    addressLocality: "Nilaveli",
    postalCode: "31010",
    addressCountry: "LK",
  },
  telephone: "+94721080806",
  touristType: ["Wildlife", "Nature", "Adventure"],
};

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [experience, setExperience] = useState<string | undefined>(undefined);

  const openBooking = useCallback((exp?: string) => {
    setExperience(exp);
    setBookingOpen(true);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden" id="root">
      <Navbar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking("Guided Wild Crocodile Experience")} />
        <ExperienceIntro />
        <FeatureHighlights />
        <ExperienceTimeline onBook={() => openBooking("Guided Wild Crocodile Experience")} />
        <ActivityGrid onBook={openBooking} />
        <PricingSection onBook={openBooking} />
        <WildlifeRespect />
        <AboutSection />
        <Gallery />
        <VideoStory />
        <Testimonials />
        <FAQ />
        <FinalCTA onBook={openBooking} />
        <ContactSection />
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