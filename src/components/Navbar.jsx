import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/crocodile-parklogo.png";
import { navLinks, business } from "@/data/site";
import { GoldButton } from "@/components/ui/Primitives";

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/15 bg-navy-deep/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-primary/30 sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-tight text-primary sm:text-lg">
              Crocodile Park
            </span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
              Nilaveli
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-xs tracking-[0.18em] text-foreground/80 uppercase transition-colors hover:text-primary"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <GoldButton onClick={onBook} className="hidden px-5 py-2 text-xs sm:inline-flex">
            Book Now
          </GoldButton>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary lg:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-navy-deep/98 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-display text-lg text-primary">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 text-primary"
            >
              <X size={20} />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-2 px-6 pb-24">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-primary/10 py-4 font-display text-2xl text-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <GoldButton
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
                className="w-full"
              >
                Book Now
              </GoldButton>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
