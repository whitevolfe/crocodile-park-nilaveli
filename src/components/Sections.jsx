import { useEffect, useRef, useState } from "react";
import {
  Bird,
  Leaf,
  Sun,
  Waves,
  Car,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Play,
  Plus,
  Minus,
  ShieldCheck,
  X,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";

import { GoldButton, GhostButton, SectionHeading, Reveal } from "@/components/ui/Primitives";

import {
  activities,
  business,
  faqs,
  gallery,
  highlights,
  navLinks,
  pricing,
  respectPrinciples,
  timeline,
  waLink,
} from "@/data/site";

import logo from "@/assets/crocodile-parklogo.png";
import introImage from "@/assets/exp-crocodile.jpg";
import aboutImage from "@/assets/about-guide.jpg";
import sunsetImage from "@/assets/exp-sunset.jpg";
import lagoonImage from "@/assets/gal-lagoon.jpg";
import crocCloseImage from "@/assets/gal-croc-close.jpg";

// Review images
import reviewimg1 from "@/assets/reviewimg1.jpeg";
import reviewimg2 from "@/assets/reviewimg2.jpeg";
import reviewimg3 from "@/assets/reviewimg3.jpeg";
import reviewimg4 from "@/assets/reviewimg4.jpeg";
import reviewimg5 from "@/assets/reviewimg5.jpeg";
import reviewimg6 from "@/assets/reviewimg6.jpeg";
import reviewimg7 from "@/assets/reviewimg7.jpeg";
import reviewimg8 from "@/assets/reviewimg8.jpeg";
import reviewimg9 from "@/assets/reviewimg9.jpeg";
import reviewimg10 from "@/assets/reviewimg10.jpeg";
import reviewimg11 from "@/assets/reviewimg11.jpeg";
import reviewimg12 from "@/assets/reviewimg12.jpeg";
import reviewimg13 from "@/assets/reviewimg13.jpeg";
import reviewimg14 from "@/assets/reviewimg14.jpeg";
import reviewimg15 from "@/assets/reviewimg15.jpeg";
import reviewimg16 from "@/assets/reviewimg16.jpeg";
import reviewimg17 from "@/assets/reviewimg17.jpeg";
import reviewimg18 from "@/assets/reviewimg18.jpeg";
import reviewimg19 from "@/assets/reviewimg19.jpeg";
import reviewimg20 from "@/assets/reviewimg20.jpeg";

import { Link } from "react-router-dom";

const iconMap = {
  croc: Waves,
  bird: Bird,
  leaf: Leaf,
  tuk: Car,
  sun: Sun,
};

/* ------------------------------- Intro ---------------------------------- */

export function ExperienceIntro() {
  const points = [
    "Wild crocodile observation",
    "Bird watching",
    "Nature exploration",
    "Local Tuk Tuk travel",
    "Periyakulam / The Big Lake",
    "Lagoon exploration",
    "Sunset viewing",
  ];

  return (
    <section id="intro" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="The Hidden Wildlife of Nilaveli"
            title="Experience Nilaveli Beyond the Beach"
            subtitle="Crocodile Park Nilaveli offers visitors a unique opportunity to discover the hidden wildlife and natural beauty around Nilaveli."
          />

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative overflow-hidden rounded-3xl border border-primary/20 shadow-[var(--shadow-lux)]">
            <img
              src={introImage}
              alt="Wild crocodile in a natural Sri Lankan lagoon"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />

            <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-navy-deep to-transparent p-5 text-xs tracking-[0.2em] text-primary uppercase">
              Wild, not enclosed
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Feature highlights -------------------------- */

export function FeatureHighlights() {
  return (
    <section className="border-y border-primary/10 bg-navy/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon] ?? Leaf;

            return (
              <Reveal key={h.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-black/10 bg-white p-6 text-black transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg">
                  {/* Gold Icon */}
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-black shadow-sm">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>

                  <h3 className="mt-4 font-display text-xl text-black">{h.title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-black/70">{h.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Timeline -------------------------------- */

export function ExperienceTimeline({ onBook }) {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Two hours, one story"
            title="The Guided Evening Wildlife Experience"
            subtitle="Approximately two hours, from the guide's doorstep to the lagoon at sunset."
          />

          <p className="mt-6 flex items-center justify-center gap-2 text-sm tracking-[0.25em] text-primary uppercase">
            <Clock size={16} /> 5:00 PM — 7:00 PM
          </p>
        </Reveal>

        <ol className="relative mt-14 space-y-10 border-l border-primary/20 pl-6 sm:pl-10 lg:mx-auto lg:max-w-5xl">
          {timeline.map((step, i) => (
            <Reveal key={step.no} delay={40}>
              <li className="relative grid gap-5 lg:grid-cols-[1fr_260px] lg:items-center">
                {/* Timeline Number */}
                <span className="absolute top-1 -left-[1.85rem] flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary text-[0.65rem] text-black shadow-sm sm:-left-[3.35rem]">
                  {step.no}
                </span>

                <div>
                  <h3 className="font-display text-2xl text-foreground">{step.title}</h3>

                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>

                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className={`aspect-[16/10] w-full rounded-2xl border border-primary/15 object-cover ${
                    i % 2 ? "lg:order-first" : ""
                  }`}
                />
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <GoldButton onClick={onBook}>Book This Experience</GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Activities ------------------------------- */

function ActivityCard({ activity, onBook }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-black/10 bg-white text-black transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg md:grid-cols-[320px_1fr]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={activity.image}
          alt={activity.alt}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full min-h-[240px] w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105"
        />

        {/* Gold Category Badge */}
        <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[0.6rem] tracking-[0.2em] text-black uppercase shadow-sm">
          {activity.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
        <h3 className="font-display text-2xl leading-snug text-black">{activity.title}</h3>

        <p className="max-w-2xl text-sm leading-relaxed text-black/70">{activity.description}</p>

        <p className="text-xl font-medium text-primary">{activity.price}</p>

        {/* Buttons */}
        <div className="mt-2 flex flex-wrap gap-3">
          <GhostButton
            as={Link}
            to={`/activities/${activity.id}`}
            className="border-black/20 px-5 py-2.5 text-[0.68rem] text-black hover:border-black/40 hover:bg-black/5"
          >
            View Experience
          </GhostButton>

          <GoldButton onClick={() => onBook(activity.title)} className="px-5 py-2.5 text-[0.68rem]">
            Book Now
          </GoldButton>
        </div>
      </div>
    </article>
  );
}

export function ActivityGrid({ onBook }) {
  return (
    <section id="activities" className="border-y border-primary/10 bg-navy/30 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond the park"
            title="Explore More Experiences in Nilaveli"
            subtitle="Ocean, wildlife and culture — arranged with local guides across Nilaveli and Trincomalee."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6">
          {activities.map((activity, i) => (
            <Reveal key={activity.id} delay={i * 60}>
              <ActivityCard activity={activity} onBook={onBook} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Pricing --------------------------------- */

export function PricingSection({ onBook }) {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Guided Evening Wildlife Experience"
            title="A Simple Way to Discover the Wild"
            subtitle="One guided experience, priced clearly."
          />

          <p className="mt-5 flex items-center justify-center gap-2 text-sm tracking-[0.25em] text-primary uppercase">
            <Clock size={16} /> 5:00 PM — 7:00 PM
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal key={p.label} delay={i * 90}>
              <div
                className={`flex h-full flex-col items-center gap-3 rounded-2xl border p-8 text-center text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  p.featured ? "border-black/20 bg-white shadow-lg" : "border-black/10 bg-white"
                }`}
              >
                {/* Gold Label */}
                <span className="text-[0.65rem] tracking-[0.3em] text-primary uppercase">
                  {p.label}
                </span>

                <span className="font-display text-5xl text-black">{p.price}</span>

                <span className="text-sm text-black/70">{p.note}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {business.lkrEquivalent ? (
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Approximate local price: {business.lkrEquivalent}
          </p>
        ) : null}

        <div className="mt-10 flex justify-center">
          <GoldButton onClick={() => onBook("Guided Wild Crocodile Experience")}>
            Book This Experience
          </GoldButton>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Wildlife respect ---------------------------- */

export function WildlifeRespect() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={crocCloseImage}
        alt="Close-up of a wild crocodile in golden light"
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-navy-deep/85" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Responsible wildlife"
            title="Respect the Wild"
            subtitle="You are observing wildlife in its natural environment. These animals are not enclosed, tamed or fed — the experience depends on treating them and their habitat with care."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {respectPrinciples.map((p, i) => (
            <Reveal key={p} delay={i * 70}>
              <li className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-5 py-4 text-sm text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                  <ShieldCheck size={18} />
                </span>

                <span>{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- About ---------------------------------- */

export function AboutSection() {
  const pillars = [
    "Local wildlife knowledge",
    "Guided experience",
    "Natural environment",
    "Tuk Tuk journey",
    "Wildlife education",
    "Sunset experience",
    "Local hospitality",
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <figure className="overflow-hidden rounded-3xl border border-primary/20 shadow-[var(--shadow-lux)]">
            <img
              src={aboutImage}
              alt="Local wildlife guide observing a lagoon at golden hour"
              loading="lazy"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="About Crocodile Park Nilaveli"
            title="A Local Experience. A Wild Discovery."
            subtitle="Crocodile Park Nilaveli is focused on providing visitors with a local, educational and memorable wildlife experience around Nilaveli."
          />

          <ul className="mt-8 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <li
                key={p}
                className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs text-black shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-md"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Gallery -------------------------------- */

export function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="border-y border-primary/10 bg-navy/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Scenes from the Journey"
            subtitle="Crocodiles, birdlife, lagoon, beach and the Nilaveli sunset."
          />
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <button
              key={g.alt}
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-2xl border border-primary/15 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={1280}
                height={960}
                className={`w-full object-cover transition-transform duration-[1.1s] group-hover:scale-105 ${
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/95 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary"
          >
            <X size={20} />
          </button>

          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-xl border border-primary/20 object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}

/* ------------------------------ Video story ------------------------------ */

export function VideoStory() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Video story"
            title="See Nilaveli Through a Different Lens"
            subtitle="A short film of the lagoon, the birds and the light at the end of the day."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-primary/20 shadow-[var(--shadow-lux)]">
            {playing ? (
              <video
                className="aspect-video w-full bg-navy-deep object-cover"
                controls
                autoPlay
                playsInline
                poster={lagoonImage}
              >
                <source src="/videos/crocodile-park-story.mp4" type="video/mp4" />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative block w-full"
                aria-label="Play the Nilaveli film"
              >
                <img
                  src={lagoonImage}
                  alt="Lagoon shoreline at dusk near Nilaveli"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-video w-full object-cover"
                />

                <span className="absolute inset-0 bg-navy-deep/45" />

                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/60 bg-primary text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play size={26} className="ml-1" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials ------------------------------ */

export function Testimonials() {
  const reviewImages = [
    reviewimg1,
    reviewimg2,
    reviewimg3,
    reviewimg4,
    reviewimg5,
    reviewimg6,
    reviewimg7,
    reviewimg8,
    reviewimg9,
    reviewimg10,
    reviewimg11,
    reviewimg12,
    reviewimg13,
    reviewimg14,
    reviewimg15,
    reviewimg16,
    reviewimg17,
    reviewimg18,
    reviewimg19,
    reviewimg20,
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimerRef = useRef(null);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewImages.length);
  };

  const previousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviewImages.length) % reviewImages.length);
  };

  const goToReview = (i) => {
    setCurrentReview(i);
  };

  // Auto-advance the carousel every 4 seconds
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviewImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, reviewImages.length]);

  // Pause on user interaction, then auto-resume after 3 seconds
  const pause = () => {
    setPaused(true);

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
    }, 3000);
  };

  return (
    <section className="border-y border-primary/10 bg-navy/30 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Guest Reviews"
            title="What Our Guests Say"
            subtitle="Real experiences shared by visitors who discovered the wild side of Nilaveli."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto mt-10 max-w-2xl">
            {/* Review Image Card */}
            <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-lg sm:h-[380px]">
              <img
                src={reviewImages[currentReview]}
                alt={`Guest review ${currentReview + 1}`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={() => {
                previousReview();
                pause();
              }}
              aria-label="Previous review"
              className="absolute top-1/2 left-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-primary text-black shadow-lg transition-all duration-300 hover:scale-105 sm:-left-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="absolute top-1/2 right-1 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-primary text-black shadow-lg transition-all duration-300 hover:scale-105 sm:-right-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6 6" />
              </svg>
            </button>

            {/* Counter */}
            <div className="mt-4 text-center text-xs tracking-[0.25em] text-black/60 uppercase">
              Review {currentReview + 1} / {reviewImages.length}
            </div>

            {/* Dots */}
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {reviewImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentReview(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentReview === i
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-primary/30 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ ----------------------------------- */

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-black/10 bg-white text-black shadow-sm">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div key={f.q} className="border-b border-black/10 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-black/[0.02] sm:px-6"
                >
                  <span className="font-display text-lg text-black">{f.q}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-black/70 sm:px-6">{f.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------- */

export function FinalCTA({ onBook }) {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <img
        src={sunsetImage}
        alt="Sunset over the Nilaveli lagoon"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
        <h2 className="font-display text-4xl leading-tight font-light text-balance sm:text-5xl">
          Ready to Discover the Wild?
        </h2>

        <span className="rule-gold mx-auto mt-5 w-24" aria-hidden="true" />

        <p className="mt-5 text-sm text-foreground/80 sm:text-base">
          Experience the wildlife, nature and unforgettable sunset of Nilaveli with a local guide.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GoldButton onClick={() => onBook()} className="w-full sm:w-auto">
            Book Your Experience
          </GoldButton>

          <GhostButton
            as="a"
            href={waLink(`Hello ${business.name}, I would like to book an experience.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <MessageCircle size={15} /> Chat on WhatsApp
          </GhostButton>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact --------------------------------- */

export function ContactSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery,
  )}&output=embed`;

  return (
    <section id="contact" className="border-t border-primary/10 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Find Us in Nilaveli" />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-black/10 bg-white p-7 text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg">
              <div>
                <h3 className="font-display text-2xl text-primary">{business.name}</h3>

                <p className="mt-4 flex items-start gap-3 text-sm text-black/70">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  {business.address}
                </p>

                <p className="mt-3 flex items-center gap-3 text-sm text-black/70">
                  <Phone size={18} className="shrink-0 text-primary" />

                  <a
                    href={`tel:${business.phoneTel}`}
                    className="transition-colors hover:text-primary"
                  >
                    {business.phoneDisplay}
                  </a>
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                <GoldButton
                  as="a"
                  href={`tel:${business.phoneTel}`}
                  className="px-5 py-2.5 text-xs"
                >
                  <Phone size={15} /> Call Now
                </GoldButton>

                <GhostButton
                  as="a"
                  href={waLink(`Hello ${business.name}, I have a question.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs"
                >
                  <MessageCircle size={15} /> WhatsApp
                </GhostButton>

                <GhostButton
                  as="a"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    business.mapsQuery,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs"
                >
                  <Navigation size={15} /> Get Directions
                </GhostButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <iframe
                title={`Map showing ${business.name}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer --------------------------------- */

export function Footer() {
  const socials = [
    {
      key: "facebook",
      Icon: Facebook,
      label: "Facebook",
    },
    {
      key: "instagram",
      Icon: Instagram,
      label: "Instagram",
    },
    {
      key: "tiktok",
      Icon: Music2,
      label: "TikTok",
    },
  ].filter((s) => business.social[s.key]);

  return (
    <footer className="border-t border-primary/15 bg-navy-deep py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              width={56}
              height={56}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-primary/30"
            />

            <span className="font-display text-lg text-primary">{business.name}</span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Discover the wild side of Nilaveli through local wildlife, nature and unforgettable
            sunset experiences.
          </p>

          {socials.length ? (
            <div className="mt-5 flex gap-3">
              {socials.map(({ key, Icon, label }) => (
                <a
                  key={key}
                  href={business.social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition-all duration-300 hover:bg-primary hover:text-black"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs tracking-[0.3em] text-primary uppercase">Explore</h3>

          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs tracking-[0.3em] text-primary uppercase">Contact</h3>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${business.phoneTel}`} className="hover:text-primary">
                {business.phoneDisplay}
              </a>
            </li>

            <li>
              <a
                href={waLink(`Hello ${business.name}!`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
            </li>

            <li>{business.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-6">
        <span className="rule-gold" aria-hidden="true" />

        <p className="pt-5 text-center text-xs text-muted-foreground">
          © 2026 {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
