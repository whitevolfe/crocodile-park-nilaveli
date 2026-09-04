import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { X, MessageCircle, Send, CheckCircle2 } from "lucide-react";

import { activities, business, waLink } from "@/data/site";
import { GoldButton, GhostButton } from "@/components/ui/Primitives";

const field =
  "w-full rounded-lg border border-input bg-navy-deep/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-ring focus:outline-none";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  adults: string;
  children: string;
  experience: string;
  message: string;
}

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  initialExperience?: string | undefined;
}

const defaultExperience = activities.length > 0 ? activities[0].title : "";

const createEmptyForm = (): BookingForm => ({
  name: "",
  email: "",
  phone: "",
  date: "",
  adults: "2",
  children: "0",
  experience: defaultExperience,
  message: "",
});

export default function BookingModal({ open, onClose, initialExperience }: BookingModalProps) {
  const [form, setForm] = useState<BookingForm>(createEmptyForm());

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // ---------------------------------------------------------
  // Update form when modal opens
  // ---------------------------------------------------------
  useEffect(() => {
    if (!open) {
      return;
    }

    setSent(false);
    setError("");

    setForm((previous) => ({
      ...previous,
      experience: initialExperience || previous.experience || defaultExperience,
    }));
  }, [open, initialExperience]);

  // ---------------------------------------------------------
  // Prevent page scrolling while modal is open
  // ---------------------------------------------------------
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  // ---------------------------------------------------------
  // Form field updater
  // ---------------------------------------------------------
  const handleChange =
    (key: keyof BookingForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((previous) => ({
        ...previous,
        [key]: event.target.value,
      }));
    };

  // ---------------------------------------------------------
  // WhatsApp message
  // ---------------------------------------------------------
  const composeMessage = (): string => {
    return [
      `Hello ${business.name}, I would like to book the ${form.experience}.`,
      form.name ? `Name: ${form.name}` : "",
      form.date ? `Preferred date: ${form.date}` : "",
      `Guests: ${form.adults} adult(s), ${form.children} child(ren)`,
      form.email ? `Email: ${form.email}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  // ---------------------------------------------------------
  // Submit booking to Web3Forms
  // ---------------------------------------------------------
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sending) {
      return;
    }

    setSending(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("access_key", "5cca6f2e-360d-44c9-81bc-0011a5b4b619");

      formData.append("subject", `New Booking Request - ${form.experience}`);

      formData.append("from_name", business.name);

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("preferred_date", form.date);
      formData.append("adults", form.adults);
      formData.append("children", form.children);
      formData.append("experience", form.experience);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result: {
        success?: boolean;
        message?: string;
      } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send booking request.");
      }

      setSent(true);
    } catch (submitError) {
      console.error("Booking submission error:", submitError);

      setError(
        "Sorry, your booking request could not be sent. Please try again or contact us on WhatsApp.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-navy-deep/80 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Booking request"
        className="surface-glass relative my-8 w-full max-w-lg rounded-2xl p-5 shadow-[var(--shadow-lux)] sm:p-7"
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary transition hover:bg-primary/10"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h3 className="font-display text-2xl text-primary">Book Your Experience</h3>

        <span className="rule-gold mt-3 block w-20" aria-hidden="true" />

        {/* SUCCESS MESSAGE */}
        {sent ? (
          <div className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="text-primary" size={40} />

            <h4 className="text-lg font-semibold text-foreground">Booking Request Sent!</h4>

            <p className="text-sm text-foreground/80">
              Thank you, {form.name}. Your booking request has been successfully sent to us. We will
              contact you shortly.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <GoldButton
                as="a"
                href={waLink(composeMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] border-[#128C7E] text-black hover:brightness-110"
              >
                <MessageCircle size={16} />
                Send on WhatsApp
              </GoldButton>

              <GhostButton type="button" onClick={onClose}>
                Close
              </GhostButton>
            </div>
          </div>
        ) : (
          /* BOOKING FORM */
          <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
            {/* Name + Email */}
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                name="name"
                autoComplete="name"
                className={field}
                placeholder="Name"
                value={form.name}
                onChange={handleChange("name")}
              />

              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className={field}
                placeholder="Email"
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>

            {/* Phone + Date */}
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                className={field}
                placeholder="WhatsApp / Phone"
                value={form.phone}
                onChange={handleChange("phone")}
              />

              <input
                type="date"
                name="preferred_date"
                className={field}
                aria-label="Preferred date"
                value={form.date}
                onChange={handleChange("date")}
              />
            </div>

            {/* Adults + Children */}
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs text-muted-foreground">
                Adults
                <input
                  type="number"
                  name="adults"
                  min="1"
                  className={`${field} mt-1`}
                  value={form.adults}
                  onChange={handleChange("adults")}
                />
              </label>

              <label className="text-xs text-muted-foreground">
                Children
                <input
                  type="number"
                  name="children"
                  min="0"
                  className={`${field} mt-1`}
                  value={form.children}
                  onChange={handleChange("children")}
                />
              </label>
            </div>

            {/* Experience */}
            <select
              name="experience"
              className={field}
              value={form.experience}
              onChange={handleChange("experience")}
              aria-label="Preferred experience"
            >
              {activities.map((activity: { id: string; title: string }) => (
                <option key={activity.id} value={activity.title}>
                  {activity.title}
                </option>
              ))}
            </select>

            {/* Message */}
            <textarea
              name="message"
              rows={3}
              className={field}
              placeholder="Message (optional)"
              value={form.message}
              onChange={handleChange("message")}
            />

            {/* Availability Note */}
            <p className="text-xs text-muted-foreground">{business.availabilityNote}</p>

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="mt-1 flex flex-col gap-2 sm:flex-row">
              <GoldButton type="submit" disabled={sending} className="w-full sm:flex-1">
                <Send size={15} />

                {sending ? "Sending..." : "Send Booking Request"}
              </GoldButton>

              <GhostButton
                as="a"
                href={waLink(composeMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-[#25D366] border-[#128C7E] text-black hover:bg-[#128C7E] hover:text-black"
              >
                <MessageCircle size={15} />
                Book via WhatsApp
              </GhostButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
