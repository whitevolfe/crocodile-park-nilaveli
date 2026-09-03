import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-crocodile.jpg";
import logo from "@/assets/crocodile-parklogo.png";
import { GoldButton, GhostButton } from "@/components/ui/Primitives";

// Drop a cinematic loop at public/videos/crocodile-park-hero.mp4 and it will
// play automatically over the fallback image below.
const HERO_VIDEO = "/videos/crocodile-video.mp4";

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* <img
          src={heroImage}
          alt="Wild crocodile resting beside a Sri Lankan lagoon at sunset"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="animate-kenburns h-full w-full object-cover"
        /> */}
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

      {/* <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/55 to-navy-deep" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,oklch(0.17_0.045_250/0.75)_100%)]" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pt-28 pb-24 text-center sm:px-6">
        {/* <img
          src={logo}
          alt="Crocodile Park Nilaveli emblem"
          width={140}
          height={140}
          className="animate-rise mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-primary/40 sm:h-24 sm:w-24"
        /> */}
        <p
          className="animate-rise mb-45 text-[0.62rem] tracking-[0.3em] text-primary uppercase sm:text-xs sm:tracking-[0.4em]"
          style={{ animationDelay: "120ms" }}
        >
          Nilaveli • Trincomalee • Sri Lanka🐊
        </p>
        <h1
          className="animate-rise font-display text-2xl leading-[1.05] font-light text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "240ms" }}
        >
          Discover the Crocodile Park <span className="text-gold-gradient">Nilaveli</span>
        </h1>
        {/* <p
          className="animate-rise mx-auto mt-25 max-w-2xl text-sm leading-relaxed text-foreground/75 sm:text-base"
          style={{ animationDelay: "360ms" }}
        >
          Crocodile watching, birdlife, nature exploration and unforgettable sunsets — guided by
          local wildlife experts.
        </p> */}
        <div
          className="animate-rise mt-45 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "480ms" }}
        >
          <GoldButton as="a" href="#experience" className="w-full sm:w-auto">
            Explore Experiences
          </GoldButton>
          {/* <GhostButton onClick={onBook} className="w-full sm:w-auto">
            Book Your Experience
          </GhostButton> */}
        </div>
      </div>

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
