import { ChevronDown, ShieldCheck, Zap, BadgeDollarSign, Star } from "lucide-react";
import heroImage from "@/assets/hero-crocodile.jpg";
import logo from "@/assets/crocodile-parklogo.png";
import { GoldButton, GhostButton } from "@/components/ui/Primitives";

// Hero video
const HERO_VIDEO = "/videos/crocodile-video.mp4";

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        {/* Fallback Image */}
        {/*
        <img
          src={heroImage}
          alt="Wild crocodile resting beside a Sri Lankan lagoon at sunset"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="animate-kenburns h-full w-full object-cover"
        />
        */}

        {/* Hero Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>

      {/* Hero Overlay */}
      {/*
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/55 to-navy-deep" />
      */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0.17_0.045_250/0.75)_100%)]" />

      {/* Main Hero Content */}
      <div className="relative mx-auto w-full max-w-5xl px-5 pt-28 pb-24 text-center sm:px-6">
        {/* =====================================================
            TRUST / CREDIBILITY BAR
        ====================================================== */}
        <div
          className="animate-rise mx-auto mb-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md sm:mb-12 sm:gap-x-8 sm:px-6"
          style={{ animationDelay: "80ms" }}
        >
          {/* Google Rating */}
          <div className="flex items-center gap-2.5">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-7 w-7 object-contain"
            />

            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-white">4.7</span>

                <div className="flex items-center gap-[1px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={11} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <span className="mt-1 text-[10px] text-white/60">276 Google reviews</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-white/15 sm:block" />

          {/* SLTDA & DWC */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={17} strokeWidth={2} className="text-sky-300" />

            <span className="text-[11px] font-medium tracking-wide text-white/80 sm:text-xs">
              SLTDA &amp; DWC Registered
            </span>
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-white/15 sm:block" />

          {/* WhatsApp Confirmation */}
          <div className="flex items-center gap-2">
            <Zap size={16} strokeWidth={2.5} className="text-orange-400" />

            <span className="text-[11px] font-medium tracking-wide text-white/80 sm:text-xs">
              Instant WhatsApp confirmation
            </span>
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-white/15 sm:block" />

          {/* Best Price Guarantee */}
          <div className="flex items-center gap-2">
            <BadgeDollarSign size={17} strokeWidth={2} className="text-emerald-300" />

            <span className="text-[11px] font-medium tracking-wide text-white/80 sm:text-xs">
              Best price guarantee
            </span>
          </div>
        </div>

        {/* Logo */}
        {/*
        <img
          src={logo}
          alt="Crocodile Park Nilaveli emblem"
          width={140}
          height={140}
          className="animate-rise mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-primary/40 sm:h-24 sm:w-24"
        />
        */}

        {/* Location */}
        <p
          className="animate-rise mb-6 text-[0.62rem] tracking-[0.3em] text-primary uppercase sm:text-xs sm:tracking-[0.4em]"
          style={{ animationDelay: "180ms" }}
        >
          Nilaveli • Trincomalee • Sri Lanka 🐊
        </p>

        {/* Main Heading */}
        <h1
          className="animate-rise font-display text-2xl leading-[1.05] font-light text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "300ms" }}
        >
          Discover the Crocodile Park <span className="text-gold-gradient">Nilaveli</span>
        </h1>

        {/* Description */}
        {/*
        <p
          className="animate-rise mx-auto mt-25 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base"
          style={{ animationDelay: "360ms" }}
        >
          Crocodile watching, birdlife, nature exploration and unforgettable
          sunsets — guided by local wildlife experts.
        </p>
        */}

        {/* CTA */}
        <div
          className="animate-rise mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "480ms" }}
        >
          <GoldButton as="a" href="#experience" className="w-full sm:w-auto">
            Explore Experiences
          </GoldButton>

          {/*
          <GhostButton
            onClick={onBook}
            className="w-full sm:w-auto"
          >
            Book Your Experience
          </GhostButton>
          */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#intro"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-max flex-col items-center gap-1 text-[0.6rem] tracking-[0.3em] text-foreground/60 uppercase transition-colors hover:text-primary"
      >
        Scroll to Explore
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
