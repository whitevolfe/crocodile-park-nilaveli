import { ChevronDown, ShieldCheck, Zap, BadgeDollarSign, Star } from "lucide-react";
import heroImage from "@/assets/hero-crocodile.jpg";
import logo from "@/assets/crocodile-parklogo.png";
import { GoldButton, GhostButton } from "@/components/ui/Primitives";

// Hero video
const HERO_VIDEO = "/videos/crocodile-video2.mp4";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0.17_0.045_250/0.75)_100%)]" />

      {/* Main Hero Content */}
      <div className="relative mx-auto w-full max-w-5xl px-5 pt-28 pb-24 text-center sm:px-6">
        {/* Location */}
        <p
          className="animate-rise mt-[-2rem] text-[0.62rem] text-4xl tracking-[0.3em] text-white font-bold uppercase sm:text-xs sm:tracking-[0.4em]"
          style={{ animationDelay: "180ms" }}
        >
          Nilaveli • Trincomalee • Sri Lanka 🐊
        </p>

        {/* Main Heading */}
        <h1
          className="animate-rise mt-10 font-display text-4xl leading-[1.05] font-bold text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "300ms" }}
        >
          Discover the Crocodile Park <span className="text-gold-gradient">Trincomalee</span>
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
          className="animate-rise mt-13 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "480ms" }}
        >
          <GoldButton as="a" href="#experience" className="w-full sm:w-auto">
            Explore Experiences
          </GoldButton>

          <GhostButton onClick={onBook} className="w-full sm:w-auto">
            Book Your Experience
          </GhostButton>
        </div>

        {/* =====================================================
    TRUST / CREDIBILITY CARDS
===================================================== */}
        <div
          className="animate-rise mx-auto mt-8 grid w-full max-w-5xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4"
          style={{ animationDelay: "560ms" }}
        >
          {/* Google Rating */}
          <div className="flex min-h-[72px] items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-md transition-all duration-300 hover:bg-black/30 hover:border-white/20">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="h-7 w-7 shrink-0 object-contain"
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

          {/* SLTDA & DWC */}
          <div className="flex min-h-[72px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-md transition-all duration-300 hover:bg-black/30 hover:border-white/20">
            <ShieldCheck size={20} strokeWidth={2} className="shrink-0 text-sky-300" />

            <span className="text-center text-[10px] font-medium leading-tight tracking-wide text-white/80 sm:text-xs">
              KUPS/NSO/TL/2026/121
            </span>
          </div>

          {/* WhatsApp Confirmation */}

          <div className="flex min-h-[72px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-black/30">
            {/* WhatsApp Logo */}
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            <span className="text-center text-[10px] font-medium leading-tight tracking-wide text-white/80 sm:text-xs">
              Instant WhatsApp confirmation
            </span>
          </div>

          {/* Best Price Guarantee */}
          <div className="flex min-h-[72px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-md transition-all duration-300 hover:bg-black/30 hover:border-white/20">
            <BadgeDollarSign size={20} strokeWidth={2} className="shrink-0 text-emerald-300" />

            <span className="text-center text-[10px] font-medium leading-tight tracking-wide text-white/80 sm:text-xs">
              Best price guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
