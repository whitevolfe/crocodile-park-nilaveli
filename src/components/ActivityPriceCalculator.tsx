import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface ActivityPriceCalculatorProps {
  activityId: string;
  activityTitle: string;
  adultPrice: number;
  childPrice: number;
  infantPrice: number;
  privatePrice: number;
  whatsapp: string;
  currency?: string;
}

interface CounterProps {
  label: string;
  age: string;
  value: number;
  onMinus: () => void;
  onPlus: () => void;
}

const Counter = ({ label, age, value, onMinus, onPlus }: CounterProps) => {
  return (
    <div className="min-w-0">
      <p className="mb-2 text-sm font-semibold text-white">
        {label} <span className="font-normal text-white/50">{age}</span>
      </p>

      <div className="flex h-[54px] items-center justify-between rounded-xl border border-white/20 bg-white/[0.04] px-2">
        <button
          type="button"
          onClick={onMinus}
          disabled={label === "Adults" && value <= 1}
          aria-label={`Decrease ${label}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="text-lg font-semibold text-white">{value}</span>

        <button
          type="button"
          onClick={onPlus}
          aria-label={`Increase ${label}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ActivityPriceCalculator = ({
  activityId,
  activityTitle,
  adultPrice,
  childPrice,
  infantPrice,
  privatePrice,
  whatsapp,
  currency = "LKR",
}: ActivityPriceCalculatorProps) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const formatPrice = (amount: number) => {
    return `${currency} ${amount.toLocaleString("en-LK")}`;
  };

  const totalPeople = adults + children + infants;

  /*
   * Calculate the estimated total.
   *
   * If childPrice or infantPrice is 0,
   * the adult price is used as the fallback.
   */
  const subtotal = useMemo(() => {
    return (
      adults * adultPrice +
      children * (childPrice || adultPrice) +
      infants * (infantPrice || adultPrice)
    );
  }, [adults, children, infants, adultPrice, childPrice, infantPrice]);

  /*
   * Book through WhatsApp.
   *
   * The message contains the exact guest numbers
   * and calculated total shown in the calculator.
   */
  const handleBookTour = () => {
    const whatsappMessage = `Hello Crocodile Park Nilaveli,

I would like to book the following activity:

Activity: ${activityTitle}

Adults: ${adults}
Children: ${children}
Infants: ${infants}

Total guests: ${totalPeople}

Price per adult: ${formatPrice(adultPrice)}

Estimated total: ${formatPrice(subtotal)}

Activity ID: ${activityId}

Please confirm availability and booking details.

Thank you.`;

    const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-[30px] border-[6px] border-[#173967] bg-[#173967] shadow-2xl">
        <div className="grid lg:grid-cols-[1.35fr_0.95fr]">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}
          <div className="p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Instant price calculator
            </h2>

            <p className="mt-2 text-sm text-white/60 sm:text-base">
              Choose your group size — your total updates instantly.
            </p>

            {/* ACTIVITY PRICE */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold text-white/80">Activity</p>

              <div className="rounded-2xl border border-[#238bc9] bg-white font-bold px-4 py-5 shadow-lg">
                <p className="text-center font-semibold text-black">{activityTitle}</p>

                <p className="mt-2 text-center text-sm text-black/80">
                  {formatPrice(adultPrice)} / person
                </p>

                <p className="mt-1 text-center text-[11px] text-black/60">
                  Price calculated based on the number of guests
                </p>
              </div>
            </div>

            {/* GUESTS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Counter
                label="Adults"
                age="12+"
                value={adults}
                onMinus={() => setAdults((value) => Math.max(1, value - 1))}
                onPlus={() => setAdults((value) => value + 1)}
              />

              <Counter
                label="Children"
                age="6–11"
                value={children}
                onMinus={() => setChildren((value) => Math.max(0, value - 1))}
                onPlus={() => setChildren((value) => value + 1)}
              />

              <Counter
                label="Infants"
                age="<5"
                value={infants}
                onMinus={() => setInfants((value) => Math.max(0, value - 1))}
                onPlus={() => setInfants((value) => value + 1)}
              />
            </div>

            {/* PRICE INFORMATION */}
            <p className="mt-6 text-sm leading-relaxed text-[#7cc6ef]">
              {formatPrice(adultPrice)} per person. Your estimated total updates automatically based
              on the number of guests.
            </p>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}
          <div className="p-5 sm:p-8">
            <div className="h-full rounded-[24px] border border-white/20 bg-[#526a8d] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#86c9eb]">
                Your tour summary
              </p>

              <p className="mt-4 text-sm font-medium text-white">{activityTitle}</p>

              <p className="mt-2 text-xs text-white/60">
                {totalPeople} {totalPeople === 1 ? "person" : "people"}
              </p>

              {/* GUEST BREAKDOWN */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/70">Adults × {adults}</span>

                  <span className="text-sm font-semibold text-white">
                    {formatPrice(adults * adultPrice)}
                  </span>
                </div>

                {children > 0 && (
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-white/70">Children × {children}</span>

                    <span className="text-sm font-semibold text-white">
                      {formatPrice(children * (childPrice || adultPrice))}
                    </span>
                  </div>
                )}

                {infants > 0 && (
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-white/70">Infants × {infants}</span>

                    <span className="text-sm font-semibold text-white">
                      {formatPrice(infants * (infantPrice || adultPrice))}
                    </span>
                  </div>
                )}
              </div>

              {/* SUBTOTAL */}
              <div className="mt-7 flex items-center justify-between gap-4">
                <span className="text-sm text-white/70">Subtotal</span>

                <span className="text-sm font-semibold text-white">{formatPrice(subtotal)}</span>
              </div>

              {/* FEES */}
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-sm text-white/70">Additional fees</span>

                <span className="text-sm font-semibold text-[#86c9eb]">Included</span>
              </div>

              <div className="my-5 h-px bg-white/20" />

              {/* TOTAL */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold text-white">Grand total</span>

                <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* BOOK BUTTON */}
              <button
                type="button"
                onClick={handleBookTour}
                className="mt-7 flex w-full items-center justify-center rounded-2xl bg-[#f18418] px-5 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-xl"
              >
                Book This Tour →
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-white/50">
                Pay nothing now — confirm first, then pay on the day or by transfer.
              </p>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                  `Hello Crocodile Park Nilaveli,

I need help with booking the ${activityTitle}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center text-xs font-medium text-white/60 transition-colors hover:text-white"
              >
                Need help? Contact us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPriceCalculator;
