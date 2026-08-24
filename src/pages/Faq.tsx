import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FAQ, FinalCTA, Footer } from "@/components/Sections";

const Faq = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar onBook={() => {}} />

      <main>
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-xs tracking-[0.3em] text-primary uppercase">Good to Know</p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-6xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Everything you need to know before visiting Crocodile Park Nilaveli and joining the
              guided wildlife experience.
            </p>

            <Link
              to="/"
              className="mt-8 inline-block text-sm text-primary transition-colors hover:text-primary/80"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        <FAQ />

        <FinalCTA onBook={() => {}} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Faq;
