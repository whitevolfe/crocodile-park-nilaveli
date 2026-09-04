import { Link, useParams } from "react-router-dom";
import { activities, business, waLink } from "@/data/site";

interface Activity {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
  alt: string;
  fullDescription: string;
  highlights: string[];
  itinerary: string[];
  included: string[];
  suitableFor: string;
  duration: string;
  location: string;
}

const ActivityDetails = () => {
  const { slug } = useParams<{ slug: string }>();

  // Tell TypeScript what the JavaScript activity data looks like.
  const activity = (activities as Activity[]).find((item) => item.id === slug);

  if (!activity) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-navy px-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Experience</p>

          <h1 className="mt-4 font-display text-4xl text-foreground">Experience Not Found</h1>

          <p className="mt-4 text-muted-foreground">
            Sorry, we couldn't find the experience you're looking for.
          </p>

          <Link
            to="/activities"
            className="mt-8 inline-block rounded-full border border-primary/30 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-navy"
          >
            ← Back to Activities
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-navy text-foreground">
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-black/10" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
            <Link
              to="/activities"
              className="mb-6 inline-block text-sm text-white/70 transition-colors hover:text-primary"
            >
              ← Back to Activities
            </Link>

            <p className="text-xs uppercase tracking-[0.3em] text-primary">{activity.category}</p>

            <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {activity.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              {activity.description}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* LEFT CONTENT */}
          <div>
            {/* ABOUT */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Discover the experience
              </p>

              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                About This Experience
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                {activity.fullDescription}
              </p>
            </div>

            {/* HIGHLIGHTS */}
            {activity.highlights.length > 0 && (
              <div className="mt-14">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  What you can expect
                </p>

                <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
                  Experience Highlights
                </h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {activity.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg"
                    >
                      <span className="mr-3 text-primary">✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ITINERARY */}
            {activity.itinerary.length > 0 && (
              <div className="mt-14">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Your journey</p>

                <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
                  Itinerary
                </h2>

                <div className="mt-8 space-y-5">
                  {activity.itinerary.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary text-sm font-medium text-black shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="pt-1">
                        <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INCLUDED */}
            {activity.included.length > 0 && (
              <div className="mt-14">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Included</p>

                <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
                  What's Included
                </h2>

                <ul className="mt-6 space-y-3">
                  {activity.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SUITABLE FOR */}
            <div className="mt-14 rounded-2xl border border-black/10 bg-white p-6 text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Good to know</p>

              <h2 className="mt-3 font-display text-2xl text-black">Suitable For</h2>

              <p className="mt-4 text-sm leading-relaxed text-black/70">{activity.suitableFor}</p>
            </div>
          </div>

          {/* BOOKING CARD */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-black/10 bg-white p-6 text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {activity.category}
              </p>

              <h2 className="mt-3 font-display text-2xl leading-snug text-black">
                {activity.title}
              </h2>

              <div className="mt-6 border-y border-black/10 py-6">
                <p className="text-xs uppercase tracking-[0.2em] text-black/50">Starting from</p>

                <p className="mt-2 text-3xl font-medium text-primary">{activity.price}</p>
              </div>

              <div className="space-y-5 py-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/50">Duration</p>

                  <p className="mt-1 text-sm text-black">{activity.duration}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-black/50">Location</p>

                  <p className="mt-1 text-sm text-black">{activity.location}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to={`/activities?book=${activity.id}`}
                  className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:brightness-110"
                >
                  Book Now
                </Link>

                <a
                  href={waLink(
                    `Hello ${business.name}, I would like to book the ${activity.title}. Please send me more details about availability.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-full bg-[#25D366] border-[#128C7E] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#128C7E]"
                >
                  WhatsApp Us
                </a>
              </div>

              <p className="mt-5 text-center text-xs leading-relaxed text-black/50">
                Contact us to confirm availability for your preferred date.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-primary/10 bg-navy-deep/40 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Ready for the adventure?
          </p>

          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            Experience {activity.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Contact us today to check availability and plan your experience around Nilaveli and
            Trincomalee.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={waLink(
                `Hello ${business.name}, I would like more information about the ${activity.title}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] border-[#128C7E] px-7 py-3 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#128C7E]"
            >
              Ask on WhatsApp
            </a>

            <Link
              to="/activities"
              className="rounded-full border border-primary/30 px-7 py-3 text-xs font-medium uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary hover:text-navy"
            >
              Explore More Activities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActivityDetails;
