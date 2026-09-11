import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Clock,
  MapPin,
  Car,
  Utensils,
  Sunset,
  Users,
  Flame,
  ChevronDown,
} from "lucide-react";

import { activities, business, waLink } from "@/data/site";
import ActivityPriceCalculator from "@/components/ActivityPriceCalculator";

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

  pageTitle?: string;
  pageSubtitle?: string;
  pageIntro?: string;
  experienceHighlights?: string[];
  experienceDescription?: string;
  pricePerPerson?: string;

  sections?: any;

  seo?: {
    pageTitle: string;
    metaDescription: string;
    slug: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
}

const ActivityDetails = () => {
  const { slug } = useParams<{ slug: string }>();

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

  const isBBQ = activity.id === "bbq";

  const basePrice = Number(activity.price.replace(/[^\d]/g, "")) || 0;

  const adultPrice = basePrice;
  const childPrice = Math.round(basePrice * 0.5);
  const infantPrice = 0;
  const privatePrice = basePrice * 2;

  const bbq = activity.sections;

  return (
    <main className="min-h-screen bg-navy text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[620px] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl items-end px-5 pb-14 sm:px-6 sm:pb-20">
          <div className="max-w-4xl">
            <Link
              to="/activities"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to Activities
            </Link>

            <p className="text-xs uppercase tracking-[0.3em] text-primary">{activity.category}</p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {isBBQ && activity.pageTitle ? activity.pageTitle : activity.title}
            </h1>

            {isBBQ && activity.pageSubtitle && (
              <p className="mt-4 text-lg text-primary sm:text-xl">{activity.pageSubtitle}</p>
            )}

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {isBBQ && activity.pageIntro ? activity.pageIntro : activity.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          BBQ HIGHLIGHTS
      ========================================================= */}

      {isBBQ && activity.experienceHighlights && (
        <section className="border-b border-black/10 bg-white px-5 py-10 text-black sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activity.experienceHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white p-4 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>

            {activity.experienceDescription && (
              <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-black/65">
                {activity.experienceDescription}
              </p>
            )}
          </div>
        </section>
      )}

      {/* =========================================================
          MAIN
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* =====================================================
              LEFT
          ===================================================== */}

          <div>
            {isBBQ ? (
              <>
                {/* BBQ NIGHT TOUR */}

                {bbq?.bbqNightTour && (
                  <section>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      The Experience
                    </p>

                    <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                      {bbq.bbqNightTour.title}
                    </h2>

                    <p className="mt-3 text-lg text-primary">{bbq.bbqNightTour.subtitle}</p>

                    <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
                      {bbq.bbqNightTour.paragraphs?.map((paragraph: string) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {bbq.bbqNightTour.features?.map((feature: string) => (
                        <div
                          key={feature}
                          className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black shadow-sm"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-muted-foreground">
                      {bbq.bbqNightTour.description}
                    </p>
                  </section>
                )}

                {/* PRIVATE BEACH */}

                {bbq?.privateBeach && (
                  <section className="mt-16 rounded-3xl bg-white p-7 text-black shadow-sm sm:p-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Private Experience
                    </p>

                    <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                      {bbq.privateBeach.title}
                    </h2>

                    <div className="mt-6 space-y-4 text-sm leading-7 text-black/70">
                      {bbq.privateBeach.paragraphs?.map((paragraph: string) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.15em]">
                      Perfect For
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {bbq.privateBeach.perfectFor?.map((item: string) => (
                        <span
                          key={item}
                          className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* BBQ ASSISTANT */}

                {bbq?.bbqAssistant && (
                  <section className="mt-16">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
                        <Flame size={22} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-primary">
                          Your BBQ Host
                        </p>

                        <h2 className="mt-1 font-display text-3xl text-foreground">
                          {bbq.bbqAssistant.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-5 text-lg text-primary">{bbq.bbqAssistant.subtitle}</p>

                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      {bbq.bbqAssistant.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {bbq.bbqAssistant.responsibilities?.map((item: string) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 p-4 text-sm"
                        >
                          <Check size={17} className="text-primary" />

                          {item}
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-muted-foreground">
                      {bbq.bbqAssistant.closing}
                    </p>
                  </section>
                )}

                {/* FOOD */}

                {bbq?.foodOptions && (
                  <section className="mt-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Freshly Prepared
                    </p>

                    <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                      {bbq.foodOptions.title}
                    </h2>

                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                      <FoodCard
                        title={bbq.foodOptions.seafood.title}
                        description={bbq.foodOptions.seafood.description}
                        options={bbq.foodOptions.seafood.options}
                      />

                      <FoodCard
                        title={bbq.foodOptions.chicken.title}
                        description={bbq.foodOptions.chicken.description}
                      />

                      <FoodCard
                        title={bbq.foodOptions.vegetarian.title}
                        description={bbq.foodOptions.vegetarian.description}
                        options={bbq.foodOptions.vegetarian.options}
                      />
                    </div>

                    <p className="mt-5 text-xs text-muted-foreground">{bbq.foodOptions.note}</p>
                  </section>
                )}

                {/* DRINKS */}

                {bbq?.drinks && (
                  <section className="mt-16 rounded-3xl border border-primary/15 bg-primary/5 p-7 sm:p-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">Refreshments</p>

                    <h2 className="mt-3 font-display text-3xl">{bbq.drinks.title}</h2>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {bbq.drinks.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {bbq.drinks.options?.map((item: string) => (
                        <div
                          key={item}
                          className="rounded-xl bg-white p-4 text-sm text-black shadow-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-xs text-muted-foreground">{bbq.drinks.note}</p>
                  </section>
                )}

                {/* SUNSET */}

                {bbq?.sunset && (
                  <section className="mt-16">
                    <div className="rounded-3xl bg-white p-7 text-black shadow-sm sm:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                          <Sunset size={23} />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-primary">
                            Golden Hour
                          </p>

                          <h2 className="mt-1 font-display text-3xl">{bbq.sunset.title}</h2>
                        </div>
                      </div>

                      <p className="mt-5 text-lg text-primary">{bbq.sunset.subtitle}</p>

                      <div className="mt-5 space-y-4 text-sm leading-7 text-black/70">
                        {bbq.sunset.paragraphs?.map((paragraph: string) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {bbq.sunset.suggestedExperience?.map((item: string) => (
                          <div key={item} className="rounded-xl border border-black/10 p-4 text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* TRANSPORT */}

                {bbq?.transportation && (
                  <section className="mt-16">
                    <div className="rounded-3xl border border-black/10 bg-white p-7 text-black shadow-sm sm:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                          <Car size={22} />
                        </div>

                        <h2 className="font-display text-3xl">{bbq.transportation.title}</h2>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-black/65">
                        {bbq.transportation.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        {bbq.transportation.pickupOptions?.map((item: string) => (
                          <div key={item} className="flex gap-3 text-sm">
                            <Check size={17} className="text-primary" />

                            {item}
                          </div>
                        ))}
                      </div>

                      <p className="mt-6 text-xs text-black/50">{bbq.transportation.note}</p>
                    </div>
                  </section>
                )}

                {/* SPECIAL OCCASIONS */}

                {bbq?.specialOccasions && (
                  <section className="mt-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Celebrate Together
                    </p>

                    <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                      {bbq.specialOccasions.title}
                    </h2>

                    <p className="mt-3 text-lg text-primary">{bbq.specialOccasions.subtitle}</p>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {bbq.specialOccasions.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {bbq.specialOccasions.options?.map((item: string) => (
                        <div
                          key={item}
                          className="rounded-xl border border-black/10 bg-white p-4 text-sm text-black"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-xs text-muted-foreground">
                      {bbq.specialOccasions.note}
                    </p>
                  </section>
                )}

                {/* PACKAGE */}

                {bbq?.package && (
                  <section className="mt-16">
                    <div className="overflow-hidden rounded-3xl bg-white text-black shadow-xl">
                      <div className="bg-primary px-7 py-8 sm:px-10">
                        <p className="text-xs uppercase tracking-[0.25em]">Package</p>

                        <h2 className="mt-2 font-display text-3xl sm:text-4xl">
                          {bbq.package.title}
                        </h2>

                        <p className="mt-3 font-display text-xl">{bbq.package.packageName}</p>

                        <p className="mt-5 text-3xl font-semibold">{bbq.package.price}</p>
                      </div>

                      <div className="p-7 sm:p-10">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {bbq.package.highlights?.map((item: string) => (
                            <div key={item} className="flex gap-3 text-sm">
                              <Check size={17} className="text-primary" />

                              {item}
                            </div>
                          ))}
                        </div>

                        <p className="mt-7 text-xs leading-6 text-black/50">{bbq.package.note}</p>
                      </div>
                    </div>
                  </section>
                )}

                {/* INFORMATION */}

                {bbq?.information && (
                  <section className="mt-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">At a Glance</p>

                    <h2 className="mt-3 font-display text-3xl">{bbq.information.title}</h2>

                    <div className="mt-7 overflow-hidden rounded-2xl border border-black/10 bg-white text-black">
                      {bbq.information.items?.map(([label, value]: string[]) => (
                        <div
                          key={label}
                          className="grid gap-2 border-b border-black/10 p-5 last:border-0 sm:grid-cols-[180px_1fr]"
                        >
                          <span className="text-xs uppercase tracking-[0.15em] text-black/45">
                            {label}
                          </span>

                          <span className="text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* BOOKING INFORMATION */}

                {bbq?.booking && (
                  <section className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-7 sm:p-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">Booking</p>

                    <h2 className="mt-3 font-display text-3xl">{bbq.booking.title}</h2>

                    <p className="mt-3 text-lg text-primary">{bbq.booking.subtitle}</p>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {bbq.booking.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {bbq.booking.requirements?.map((item: string) => (
                        <div
                          key={item}
                          className="flex gap-3 rounded-xl bg-white p-4 text-sm text-black"
                        >
                          <Check size={17} className="text-primary" />

                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* IMPORTANT INFORMATION */}

                {bbq?.importantInformation && (
                  <section className="mt-16 rounded-3xl bg-white p-7 text-black sm:p-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">Please Read</p>

                    <h2 className="mt-3 font-display text-3xl">{bbq.importantInformation.title}</h2>

                    <div className="mt-7 space-y-4">
                      {bbq.importantInformation.items?.map((item: string) => (
                        <div key={item} className="flex gap-3 text-sm leading-7 text-black/70">
                          <Check size={17} className="mt-1 shrink-0 text-primary" />

                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* SAFETY */}

                {bbq?.safety && (
                  <section className="mt-16 rounded-3xl bg-navy-deep/50 p-7 sm:p-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      Responsible Tourism
                    </p>

                    <h2 className="mt-3 font-display text-3xl">{bbq.safety.title}</h2>

                    <p className="mt-3 text-lg text-primary">{bbq.safety.subtitle}</p>

                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {bbq.safety.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {bbq.safety.principles?.map((item: string) => (
                        <div
                          key={item}
                          className="rounded-xl border border-primary/10 bg-white/5 p-4 text-sm text-muted-foreground"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <p className="mt-7 text-sm font-medium text-primary">{bbq.safety.closing}</p>
                  </section>
                )}

                {/* FAQ */}

                {bbq?.faq && (
                  <section className="mt-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">Questions</p>

                    <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                      Frequently Asked Questions
                    </h2>

                    <div className="mt-8 space-y-3">
                      {bbq.faq.map((item: { q: string; a: string }) => (
                        <details
                          key={item.q}
                          className="group rounded-2xl border border-white/10 bg-white/5"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-sm font-medium text-white">
                            {item.q}

                            <ChevronDown
                              size={18}
                              className="shrink-0 text-primary transition group-open:rotate-180"
                            />
                          </summary>

                          <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-muted-foreground">
                            {item.a}
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>
                )}
              </>
            ) : (
              <>
                {/* =================================================
                    NORMAL ACTIVITIES
                ================================================= */}

                <section>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">
                    Discover the experience
                  </p>

                  <h2 className="mt-3 font-display text-3xl sm:text-4xl">About This Experience</h2>

                  <p className="mt-6 text-base leading-8 text-muted-foreground">
                    {activity.fullDescription}
                  </p>
                </section>

                {activity.highlights.length > 0 && (
                  <section className="mt-14">
                    <p className="text-xs uppercase tracking-[0.25em] text-primary">
                      What you can expect
                    </p>

                    <h2 className="mt-3 font-display text-2xl sm:text-3xl">
                      Experience Highlights
                    </h2>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {activity.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl bg-white p-4 text-sm text-black shadow-sm"
                        >
                          <span className="mr-3 text-primary">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activity.itinerary.length > 0 && (
                  <section className="mt-14">
                    <h2 className="font-display text-2xl sm:text-3xl">Itinerary</h2>

                    <div className="mt-8 space-y-5">
                      {activity.itinerary.map((step, index) => (
                        <div key={step} className="flex gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-black">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activity.included.length > 0 && (
                  <section className="mt-14">
                    <h2 className="font-display text-2xl sm:text-3xl">What's Included</h2>

                    <ul className="mt-6 space-y-3">
                      {activity.included.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                          <Check size={17} className="text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section className="mt-14 rounded-2xl bg-white p-6 text-black sm:p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">Good to know</p>

                  <h2 className="mt-3 font-display text-2xl">Suitable For</h2>

                  <p className="mt-4 text-sm leading-relaxed text-black/70">
                    {activity.suitableFor}
                  </p>
                </section>
              </>
            )}
          </div>

          {/* =====================================================
              RIGHT BOOKING CARD
          ===================================================== */}

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-black/10 bg-white p-6 text-black shadow-xl sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {activity.category}
              </p>

              <h2 className="mt-3 font-display text-2xl">{activity.title}</h2>

              <div className="mt-6 border-y border-black/10 py-6">
                <p className="text-xs uppercase tracking-[0.2em] text-black/50">Starting from</p>

                <p className="mt-2 text-3xl font-medium text-primary">{activity.price}</p>

                {isBBQ && <p className="mt-1 text-xs text-black/50">Per person</p>}
              </div>

              <div className="space-y-5 py-6">
                <div className="flex gap-3">
                  <Clock size={18} className="mt-0.5 text-primary" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/50">Duration</p>

                    <p className="mt-1 text-sm">{activity.duration}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 text-primary" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-black/50">Location</p>

                    <p className="mt-1 text-sm">{activity.location}</p>
                  </div>
                </div>

                {isBBQ && (
                  <>
                    <div className="flex gap-3">
                      <Utensils size={18} className="mt-0.5 text-primary" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-black/50">Food</p>

                        <p className="mt-1 text-sm">Seafood, chicken & vegetarian</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Users size={18} className="mt-0.5 text-primary" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-black/50">
                          Suitable For
                        </p>

                        <p className="mt-1 text-sm">Couples, families & groups</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* WHATSAPP */}

              <a
                href={waLink(
                  `Hello ${business.name}, I would like to book the ${activity.title}. Please send me more details about availability.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full border-2 border-[#128C7E] bg-[#25D366] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:border-[#25D366] hover:bg-[#128C7E] hover:text-white"
              >
                Book on WhatsApp
              </a>

              <p className="mt-5 text-center text-xs leading-relaxed text-black/50">
                Contact us to confirm availability for your preferred date.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* =========================================================
          PRICE CALCULATOR
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-24">
        <ActivityPriceCalculator
          activityId={activity.id}
          activityTitle={activity.title}
          adultPrice={adultPrice}
          childPrice={childPrice}
          infantPrice={infantPrice}
          privatePrice={privatePrice}
          whatsapp={business.whatsapp}
          currency="LKR"
        />
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      {isBBQ && bbq?.finalCta && (
        <section className="border-t border-primary/10 bg-navy-deep/50 px-5 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Ready for the evening?
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-5xl">{bbq.finalCta.title}</h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              {bbq.finalCta.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {bbq.finalCta.highlights?.map((item: string) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-xs text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={waLink(
                  `Hello ${business.name}, I would like to book the BBQ Night Tour. Please send me more details about availability.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-[#128C7E] bg-[#25D366] px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#128C7E] hover:text-white"
              >
                Book BBQ on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

const FoodCard = ({
  title,
  description,
  options,
}: {
  title: string;
  description: string;
  options?: string[];
}) => {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-display text-2xl">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-black/65">{description}</p>

      {options && (
        <ul className="mt-5 space-y-2">
          {options.map((item) => (
            <li key={item} className="flex gap-2 text-sm">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" />

              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityDetails;
