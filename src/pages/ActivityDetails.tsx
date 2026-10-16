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
  Eye,
  Bird,
  Leaf,
  Moon,
  Home,
  Compass,
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

  const isCrocodile = activity.id === "guided-crocodile";

  const sections = activity.sections || {};

  /*

   * Use the actual activity pricing where available.

   */

  const basePrice = Number(activity.price.replace(/[^\d]/g, "")) || 0;

  const adultPrice = isCrocodile ? sections.pricing?.adults?.price || basePrice : basePrice;

  const childPrice = isCrocodile
    ? sections.pricing?.children?.price || Math.round(basePrice * 0.5)
    : Math.round(basePrice * 0.5);

  const infantPrice = isCrocodile ? sections.pricing?.infants?.price || 0 : 0;

  const privatePrice = basePrice * 2;

  const currency = isCrocodile ? sections.pricing?.currency || "USD" : "LKR";

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

              className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to Activities
            </Link>

            <p className="text-xs uppercase tracking-[0.3em] text-primary">{activity.category}</p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {activity.pageTitle || activity.title}
            </h1>

            {activity.pageSubtitle && (
              <p className="mt-4 text-lg text-primary sm:text-xl">{activity.pageSubtitle}</p>
            )}

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {activity.pageIntro || activity.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================

          EXPERIENCE HIGHLIGHTS

      ========================================================= */}

      {activity.experienceHighlights && activity.experienceHighlights.length > 0 && (
        <section className="border-b border-white/10 bg-[#0b1420] px-5 py-10 text-white sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activity.experienceHighlights.map((item) => (
                <div
                  key={item}

                  className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>

            {activity.experienceDescription && (
              <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-white/65">
                {activity.experienceDescription}
              </p>
            )}
          </div>
        </section>
      )}

      {/* =========================================================

          MAIN CONTENT

      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* =====================================================

              LEFT CONTENT

          ===================================================== */}

          <div>
            {/* ===================================================

                CROCODILE CUSTOM PAGE

            =================================================== */}

            {isCrocodile ? (
              <CrocodileExperience sections={sections} />
            ) : isBBQ ? (
              <BBQExperience sections={sections} />
            ) : (
              /* =================================================

                 NORMAL ACTIVITIES

              ================================================= */

              <>
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

                          className="rounded-xl bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
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

                <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 text-white sm:p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">Good to know</p>

                  <h2 className="mt-3 font-display text-2xl">Suitable For</h2>

                  <p className="mt-4 text-sm leading-relaxed text-white/70">
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 text-white shadow-xl sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {activity.category}
              </p>

              <h2 className="mt-3 font-display text-2xl">{activity.title}</h2>

              <div className="mt-6 border-y border-white/10 py-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Starting from</p>

                <p className="mt-2 text-3xl font-medium text-primary">{activity.price}</p>

                <p className="mt-1 text-xs text-white/50">Per person</p>
              </div>

              <div className="space-y-5 py-6">
                <div className="flex gap-3">
                  <Clock size={18} className="mt-0.5 text-primary" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/50">Duration</p>

                    <p className="mt-1 text-sm">{activity.duration}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 text-primary" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/50">Location</p>

                    <p className="mt-1 text-sm">{activity.location}</p>
                  </div>
                </div>

                {isCrocodile && (
                  <>
                    <div className="flex gap-3">
                      <Car size={18} className="mt-0.5 text-primary" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                          Transportation
                        </p>

                        <p className="mt-1 text-sm">Private Tuk Tuk</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Users size={18} className="mt-0.5 text-primary" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                          Suitable For
                        </p>

                        <p className="mt-1 text-sm">Families, couples & groups</p>
                      </div>
                    </div>
                  </>
                )}

                {isBBQ && (
                  <>
                    <div className="flex gap-3">
                      <Utensils size={18} className="mt-0.5 text-primary" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-white/50">Food</p>

                        <p className="mt-1 text-sm">Seafood, chicken & vegetarian</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Users size={18} className="mt-0.5 text-primary" />

                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-white/50">
                          Suitable For
                        </p>

                        <p className="mt-1 text-sm">Couples, families & groups</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

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

              <p className="mt-5 text-center text-xs leading-relaxed text-white/50">
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

          currency={currency}
        />
      </section>

      {/* =========================================================

          FINAL CTA

      ========================================================= */}

      {(isBBQ || isCrocodile) && sections.finalCta && (
        <section className="border-t border-primary/10 bg-navy-deep/50 px-5 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {isCrocodile ? "Ready for the wild?" : "Ready for the evening?"}
            </p>

            <h2 className="mt-4 font-display text-3xl sm:text-5xl">{sections.finalCta.title}</h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              {sections.finalCta.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {sections.finalCta.highlights?.map((item: string) => (
                <span
                  key={item}

                  className="rounded-full border border-primary/20 bg-white/[0.06] backdrop-blur-xl/5 px-4 py-2 text-xs text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={waLink(
                  `Hello ${business.name}, I would like to book the ${activity.title}. Please send me more details about availability.`,
                )}

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex rounded-full border-2 border-[#128C7E] bg-[#25D366] px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-black transition-all hover:bg-[#128C7E] hover:text-white"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

/* ========================================================================

   CROCODILE EXPERIENCE

   ======================================================================== */

const CrocodileExperience = ({ sections }: { sections: any }) => {
  return (
    <>
      {/* ================================================================

          TOUR ROUTE

      ================================================================ */}

      {sections.tourRoute && (
        <section>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">The Experience</p>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl">{sections.tourRoute.title}</h2>

          <p className="mt-3 text-lg text-primary">{sections.tourRoute.subtitle}</p>

          <div className="mt-8 space-y-4">
            {sections.tourRoute.steps?.map((step: any) => (
              <div
                key={step.number}

                className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-black">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl">{step.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================================================================

          SAFETY

      ================================================================ */}

      {sections.safety && (
        <section className="mt-16 rounded-3xl border border-primary/15 bg-primary/5 p-7 sm:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-black">
              <Check size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {sections.safety.label || "Safety First"}
              </p>

              <h2 className="mt-1 font-display text-3xl">{sections.safety.title}</h2>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {sections.safety.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.safety.points?.map((item: string) => (
              <div
                key={item}

                className="flex gap-3 rounded-xl bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                <Check size={17} className="mt-0.5 shrink-0 text-primary" />

                {item}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================================================================

          GUIDE'S HOUSE

      ================================================================ */}

      {sections.guidesHouse && (
        <CrocSection
          icon={<Home size={22} />}

          label="Starting Point"

          title={sections.guidesHouse.title}

          subtitle={sections.guidesHouse.subtitle}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <InfoBox label="Arrival" value={sections.guidesHouse.arrivalTime} />

            <InfoBox label="Departure" value={sections.guidesHouse.departureTime} />
          </div>

          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {sections.guidesHouse.description}
          </p>

          <div className="mt-7 space-y-3">
            {sections.guidesHouse.points?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>
        </CrocSection>
      )}

      {/* ================================================================

          CROCODILE PARK

      ================================================================ */}

      {sections.crocodilePark && (
        <CrocSection icon={<Eye size={22} />} label="Wildlife" title={sections.crocodilePark.title}>
          {sections.crocodilePark.crocodileWatching && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
                  <Eye size={20} />
                </div>

                <h3 className="font-display text-2xl">
                  {sections.crocodilePark.crocodileWatching.title}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/65">
                {sections.crocodilePark.crocodileWatching.description}
              </p>

              <p className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-white">
                {sections.crocodilePark.crocodileWatching.note}
              </p>
            </div>
          )}

          {sections.crocodilePark.birdWatching && (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
                  <Bird size={20} />
                </div>

                <h3 className="font-display text-2xl">
                  {sections.crocodilePark.birdWatching.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {sections.crocodilePark.birdWatching.description}
              </p>
            </div>
          )}

          {sections.crocodilePark.journey && (
            <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/5 p-6">
              <h3 className="font-display text-2xl">{sections.crocodilePark.journey.title}</h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {sections.crocodilePark.journey.description}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {sections.crocodilePark.journey.possibleViews?.map((item: string) => (
                  <CheckItem key={item} text={item} />
                ))}
              </div>
            </div>
          )}
        </CrocSection>
      )}

      {/* ================================================================

          PERIYAKULAM

      ================================================================ */}

      {sections.periyakulam && (
        <CrocSection
          icon={<Leaf size={22} />}

          label="Natural Environment"

          title={sections.periyakulam.title}
        >
          <p className="text-sm leading-7 text-muted-foreground">
            {sections.periyakulam.description}
          </p>

          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Possible Wildlife
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {sections.periyakulam.possibleSightings?.map((item: string) => (
              <div
                key={item}

                className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                <span className="mr-2 text-primary">✓</span>

                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm leading-7">
            {sections.periyakulam.note}
          </p>

          <p className="mt-5 text-sm text-primary">{sections.periyakulam.nextJourney}</p>
        </CrocSection>
      )}

      {/* ================================================================

          LAGOON & SUNSET

      ================================================================ */}

      {sections.lagoonSunset && (
        <CrocSection
          icon={<Sunset size={22} />}

          label="Golden Hour"

          title={sections.lagoonSunset.title}
        >
          <p className="text-lg text-primary">Enjoy the sunset beside the lagoon.</p>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {sections.lagoonSunset.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.lagoonSunset.highlights?.map((item: string) => (
              <div
                key={item}

                className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-primary">{sections.lagoonSunset.returnJourney}</p>
        </CrocSection>
      )}

      {/* ================================================================

          AFTER SUNSET CROCODILES

      ================================================================ */}

      {sections.nightCrocodile && (
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 text-white shadow-xl sm:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <Moon size={22} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">After Sunset</p>

              <h2 className="mt-1 font-display text-3xl sm:text-4xl">
                {sections.nightCrocodile.title}
              </h2>
            </div>
          </div>

          <p className="mt-6 text-lg text-primary">{sections.nightCrocodile.description}</p>

          <div className="mt-7 space-y-4">
            {sections.nightCrocodile.points?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-navy p-6 text-center">
            <p className="text-sm font-medium leading-7 text-primary">
              {sections.nightCrocodile.quote}
            </p>
          </div>

          <p className="mt-6 text-sm leading-7 text-white/65">{sections.nightCrocodile.return}</p>
        </section>
      )}

      {/* ================================================================

          FINAL EXPERIENCE

      ================================================================ */}

      {sections.finalExperience && (
        <CrocSection
          icon={<Compass size={22} />}

          label="Final Experience"

          title={sections.finalExperience.title}
        >
          <p className="text-sm leading-7 text-muted-foreground">
            {sections.finalExperience.description}
          </p>

          <div className="mt-7 space-y-4">
            {sections.finalExperience.points?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <p className="mt-7 text-sm font-medium text-primary">
            {sections.finalExperience.closing}
          </p>
        </CrocSection>
      )}

      {/* ================================================================

          INCLUDED

      ================================================================ */}

      {sections.included && (
        <CrocSection icon={<Check size={22} />} label="Included" title={sections.included.title}>
          <div className="grid gap-3 sm:grid-cols-2">
            {sections.included.items?.map((item: string) => (
              <div
                key={item}

                className="flex gap-3 rounded-xl bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                <Check size={17} className="shrink-0 text-primary" />

                {item}
              </div>
            ))}
          </div>
        </CrocSection>
      )}

      {/* ================================================================

          TOUR FEES

      ================================================================ */}

      {sections.pricing && (
        <section className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white shadow-xl">
          <div className="bg-primary px-7 py-8 sm:px-10">
            <p className="text-xs uppercase tracking-[0.25em]">Pricing</p>

            <h2 className="mt-2 font-display text-3xl sm:text-4xl">{sections.pricing.title}</h2>
          </div>

          <div className="grid gap-4 p-7 sm:grid-cols-3 sm:p-10">
            <PriceCard
              label={sections.pricing.adults?.label}

              price={sections.pricing.adults?.displayPrice}
            />

            <PriceCard
              label={sections.pricing.children?.label}

              price={sections.pricing.children?.displayPrice}

              featured
            />

            <PriceCard
              label={sections.pricing.infants?.label}

              price={sections.pricing.infants?.displayPrice}
            />
          </div>
        </section>
      )}

      {/* ================================================================

          WILDLIFE EXPERIENCE

      ================================================================ */}

      {sections.wildlifeExperience && (
        <CrocSection
          icon={<Eye size={22} />}

          label="Wildlife"

          title={sections.wildlifeExperience.title}
        >
          <p className="text-sm leading-7 text-muted-foreground">
            {sections.wildlifeExperience.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {sections.wildlifeExperience.possibleWildlife?.map((item: string) => (
              <span
                key={item}

                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-7 text-sm font-medium text-primary">
            {sections.wildlifeExperience.importantNote}
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            {sections.wildlifeExperience.closing}
          </p>
        </CrocSection>
      )}

      {/* ================================================================

          INFORMATION

      ================================================================ */}

      {sections.information && (
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">At a Glance</p>

          <h2 className="mt-3 font-display text-3xl">{sections.information.title}</h2>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white">
            <InfoRow label="Duration" value={sections.information.duration} />

            <InfoRow label="Starting Point" value={sections.information.startingPoint} />

            <InfoRow label="Starting Time" value={sections.information.startingTime} />

            <InfoRow label="Departure" value={sections.information.departureTime} />

            <InfoRow label="Transportation" value={sections.information.transportation} />

            <InfoRow label="Guide" value={sections.information.guide} />

            <InfoRow label="Location" value={sections.information.location} last />
          </div>
        </section>
      )}

      {/* ================================================================

          BOOKING

      ================================================================ */}

      {sections.booking && (
        <section className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Booking</p>

          <h2 className="mt-3 font-display text-3xl">{sections.booking.title}</h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {sections.booking.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.booking.requirements?.map((item: string) => (
              <div
                key={item}

                className="flex gap-3 rounded-xl bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                <Check size={17} className="text-primary" />

                {item}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================================================================

          IMPORTANT INFORMATION

      ================================================================ */}

      {sections.importantInformation && (
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 text-white sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Please Read</p>

          <h2 className="mt-3 font-display text-3xl">{sections.importantInformation.title}</h2>

          <div className="mt-7 space-y-4">
            {(
              sections.importantInformation.points ||
              sections.importantInformation.items ||
              []
            ).map((item: string) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-white/70">
                <Check size={17} className="mt-1 shrink-0 text-primary" />

                {item}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================================================================

          FAQ

      ================================================================ */}

      {sections.faq && (
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Questions</p>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-3">
            {sections.faq.map((item: any) => {
              const question = item.q || item.question;

              const answer = item.a || item.answer;

              return (
                <details
                  key={question}

                  className="group rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl/5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-sm font-medium text-white">
                    {question}

                    <ChevronDown
                      size={18}

                      className="shrink-0 text-primary transition group-open:rotate-180"
                    />
                  </summary>

                  <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-muted-foreground">
                    {answer}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      )}

      {/* ================================================================

          RESPONSIBLE TOURISM

      ================================================================ */}

      {sections.safety?.principles && (
        <section className="mt-16 rounded-3xl bg-navy-deep/50 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Responsible Tourism</p>

          <h2 className="mt-3 font-display text-3xl">{sections.safety.title}</h2>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {sections.safety.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.safety.principles.map((item: string) => (
              <div
                key={item}

                className="rounded-xl border border-primary/10 bg-white/[0.06] backdrop-blur-xl/5 p-4 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>

          {sections.safety.closing && (
            <p className="mt-7 text-sm font-medium text-primary">{sections.safety.closing}</p>
          )}
        </section>
      )}
    </>
  );
};

/* ========================================================================

   BBQ EXPERIENCE

   ======================================================================== */

const BBQExperience = ({ sections }: { sections: any }) => {
  return (
    <>
      {sections.bbqNightTour && (
        <CrocSection
          icon={<Flame size={22} />}

          label="The Experience"

          title={sections.bbqNightTour.title}

          subtitle={sections.bbqNightTour.subtitle}
        >
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            {sections.bbqNightTour.paragraphs?.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {sections.bbqNightTour.features?.map((feature: string) => (
              <div
                key={feature}

                className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {sections.bbqNightTour.description}
          </p>
        </CrocSection>
      )}

      {sections.privateBeach && (
        <CrocSection
          icon={<Sunset size={22} />}

          label="Private Experience"

          title={sections.privateBeach.title}
        >
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            {sections.privateBeach.paragraphs?.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.15em]">Perfect For</h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {sections.privateBeach.perfectFor?.map((item: string) => (
              <span
                key={item}

                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </CrocSection>
      )}

      {sections.bbqAssistant && (
        <CrocSection
          icon={<Flame size={22} />}

          label="Your BBQ Host"

          title={sections.bbqAssistant.title}

          subtitle={sections.bbqAssistant.subtitle}
        >
          <p className="text-base leading-8 text-muted-foreground">
            {sections.bbqAssistant.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.bbqAssistant.responsibilities?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            {sections.bbqAssistant.closing}
          </p>
        </CrocSection>
      )}

      {sections.foodOptions && (
        <CrocSection
          icon={<Utensils size={22} />}

          label="Freshly Prepared"

          title={sections.foodOptions.title}
        >
          <div className="grid gap-5 md:grid-cols-3">
            <FoodCard
              title={sections.foodOptions.seafood.title}

              description={sections.foodOptions.seafood.description}

              options={sections.foodOptions.seafood.options}
            />

            <FoodCard
              title={sections.foodOptions.chicken.title}

              description={sections.foodOptions.chicken.description}
            />

            <FoodCard
              title={sections.foodOptions.vegetarian.title}

              description={sections.foodOptions.vegetarian.description}

              options={sections.foodOptions.vegetarian.options}
            />
          </div>

          <p className="mt-5 text-xs text-muted-foreground">{sections.foodOptions.note}</p>
        </CrocSection>
      )}

      {sections.drinks && (
        <CrocSection
          icon={<Utensils size={22} />}

          label="Refreshments"

          title={sections.drinks.title}
        >
          <p className="text-sm leading-7 text-muted-foreground">{sections.drinks.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {sections.drinks.options?.map((item: string) => (
              <div
                key={item}
                className="rounded-xl bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-muted-foreground">{sections.drinks.note}</p>
        </CrocSection>
      )}

      {sections.sunset && (
        <CrocSection
          icon={<Sunset size={22} />}

          label="Golden Hour"

          title={sections.sunset.title}

          subtitle={sections.sunset.subtitle}
        >
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            {sections.sunset.paragraphs?.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.sunset.suggestedExperience?.map((item: string) => (
              <div
                key={item}

                className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </CrocSection>
      )}

      {sections.transportation && (
        <CrocSection
          icon={<Car size={22} />}

          label="Transportation"

          title={sections.transportation.title}
        >
          <p className="text-sm leading-7 text-muted-foreground">
            {sections.transportation.description}
          </p>

          <div className="mt-6 space-y-3">
            {sections.transportation.pickupOptions?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">{sections.transportation.note}</p>
        </CrocSection>
      )}

      {sections.specialOccasions && (
        <CrocSection
          icon={<Users size={22} />}

          label="Celebrate Together"

          title={sections.specialOccasions.title}

          subtitle={sections.specialOccasions.subtitle}
        >
          <p className="text-sm leading-7 text-muted-foreground">
            {sections.specialOccasions.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.specialOccasions.options?.map((item: string) => (
              <div
                key={item}

                className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-muted-foreground">{sections.specialOccasions.note}</p>
        </CrocSection>
      )}

      {sections.package && (
        <section className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white shadow-xl">
          <div className="bg-primary px-7 py-8 sm:px-10">
            <p className="text-xs uppercase tracking-[0.25em]">Package</p>

            <h2 className="mt-2 font-display text-3xl sm:text-4xl">{sections.package.title}</h2>

            <p className="mt-3 font-display text-xl">{sections.package.packageName}</p>

            <p className="mt-5 text-3xl font-semibold">{sections.package.price}</p>
          </div>

          <div className="p-7 sm:p-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {sections.package.highlights?.map((item: string) => (
                <CheckItem key={item} text={item} />
              ))}
            </div>

            <p className="mt-7 text-xs leading-6 text-white/50">{sections.package.note}</p>
          </div>
        </section>
      )}

      {sections.information && (
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">At a Glance</p>

          <h2 className="mt-3 font-display text-3xl">{sections.information.title}</h2>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl text-white">
            {sections.information.items?.map(([label, value]: string[], index: number) => (
              <InfoRow
                key={label}

                label={label}

                value={value}

                last={index === sections.information.items.length - 1}
              />
            ))}
          </div>
        </section>
      )}

      {sections.booking && (
        <CrocSection label="Booking" title={sections.booking.title}>
          <p className="text-sm leading-7 text-muted-foreground">{sections.booking.description}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.booking.requirements?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>
        </CrocSection>
      )}

      {sections.importantInformation && (
        <section className="mt-16 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 text-white sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Please Read</p>

          <h2 className="mt-3 font-display text-3xl">{sections.importantInformation.title}</h2>

          <div className="mt-7 space-y-4">
            {sections.importantInformation.items?.map((item: string) => (
              <CheckItem key={item} text={item} />
            ))}
          </div>
        </section>
      )}

      {sections.safety && (
        <section className="mt-16 rounded-3xl bg-navy-deep/50 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Responsible Tourism</p>

          <h2 className="mt-3 font-display text-3xl">{sections.safety.title}</h2>

          <p className="mt-3 text-lg text-primary">{sections.safety.subtitle}</p>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {sections.safety.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {sections.safety.principles?.map((item: string) => (
              <div
                key={item}

                className="rounded-xl border border-primary/10 bg-white/[0.06] backdrop-blur-xl/5 p-4 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-7 text-sm font-medium text-primary">{sections.safety.closing}</p>
        </section>
      )}

      {sections.faq && (
        <section className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Questions</p>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-3">
            {sections.faq.map((item: any) => {
              const question = item.q || item.question;

              const answer = item.a || item.answer;

              return (
                <details
                  key={question}

                  className="group rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl/5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-sm font-medium text-white">
                    {question}

                    <ChevronDown
                      size={18}

                      className="shrink-0 text-primary transition group-open:rotate-180"
                    />
                  </summary>

                  <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-muted-foreground">
                    {answer}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

/* ========================================================================

   SMALL REUSABLE COMPONENTS

   ======================================================================== */

const CrocSection = ({
  icon,

  label,

  title,

  subtitle,

  children,
}: {
  icon?: React.ReactNode;

  label?: string;

  title: string;

  subtitle?: string;

  children: React.ReactNode;
}) => {
  return (
    <section className="mt-16 first:mt-0">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-black">
            {icon}
          </div>
        )}

        <div>
          {label && <p className="text-xs uppercase tracking-[0.25em] text-primary">{label}</p>}

          <h2 className="mt-1 font-display text-3xl sm:text-4xl">{title}</h2>
        </div>
      </div>

      {subtitle && <p className="mt-3 text-lg text-primary">{subtitle}</p>}

      <div className="mt-6">{children}</div>
    </section>
  );
};

const CheckItem = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 text-sm text-white shadow-sm">
      <Check size={17} className="mt-0.5 shrink-0 text-primary" />

      {text}
    </div>
  );
};

const InfoBox = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5 text-white shadow-sm">
      <p className="text-xs uppercase tracking-[0.15em] text-white/45">{label}</p>

      <p className="mt-2 font-medium">{value}</p>
    </div>
  );
};

const InfoRow = ({
  label,

  value,

  last = false,
}: {
  label: string;

  value: string;

  last?: boolean;
}) => {
  return (
    <div
      className={`grid gap-2 p-5 sm:grid-cols-[180px_1fr] ${
        !last ? "border-b border-white/10" : ""
      }`}
    >
      <span className="text-xs uppercase tracking-[0.15em] text-white/45">{label}</span>

      <span className="text-sm">{value}</span>
    </div>
  );
};

const PriceCard = ({
  label,

  price,

  featured = false,
}: {
  label: string;

  price: string;

  featured?: boolean;
}) => {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        featured
          ? "border-primary bg-primary/10"
          : "border-white/10 bg-white/[0.06] backdrop-blur-xl"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.15em] text-white/50">{label}</p>

      <p className="mt-3 text-2xl font-semibold text-primary">{price}</p>
    </div>
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="font-display text-2xl">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-white/65">{description}</p>

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
