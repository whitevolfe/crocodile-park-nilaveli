import { useEffect, useRef, useState } from "react";

export function GoldButton({ as = "button", className = "", children, ...props }) {
  const Comp = as;
  return (
    <Comp
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:brightness-110 hover:shadow-[var(--shadow-gold)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function GhostButton({ as = "button", className = "", children, ...props }) {
  const Comp = as;
  return (
    <Comp
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-medium tracking-wide text-primary uppercase transition-all duration-300 hover:border-primary hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignment} gap-4 ${className}`}>
      {eyebrow ? (
        <span className="text-[0.7rem] tracking-[0.35em] text-primary uppercase">{eyebrow}</span>
      ) : null}
      <h2 className="max-w-3xl text-3xl leading-tight font-light text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <span
        className={`rule-gold w-24 ${align === "left" ? "" : "mx-auto"}`}
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
