import { useEffect, useState } from "react";
import { X, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { activities, business, waLink } from "@/data/site";
import { GoldButton, GhostButton } from "@/components/ui/Primitives";

const field =
  "w-full rounded-lg border border-input bg-navy-deep/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-ring focus:outline-none";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  adults: "2",
  children: "0",
  experience: activities[0].title,
  message: "",
};

export default function BookingModal({ open, onClose, initialExperience }) {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open && initialExperience) {
      setForm((f) => ({ ...f, experience: initialExperience }));
    }
    if (open) setSent(false);
  }, [open, initialExperience]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const composeMessage = () =>
    [
      `Hello ${business.name}, I would like to book the ${form.experience}.`,
      form.name && `Name: ${form.name}`,
      form.date && `Preferred date: ${form.date}`,
      `Guests: ${form.adults} adult(s), ${form.children} child(ren)`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect a form backend (e.g. Web3Forms) here by POSTing `form`.
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-navy-deep/80 p-4 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Booking request"
        className="surface-glass relative my-8 w-full max-w-lg rounded-2xl p-5 shadow-[var(--shadow-lux)] sm:p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
          className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-primary"
        >
          <X size={18} />
        </button>

        <h3 className="font-display text-2xl text-primary">Book Your Experience</h3>
        <span className="rule-gold mt-3 w-20" aria-hidden="true" />

        {sent ? (
          <div className="mt-6 flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="text-primary" size={40} />
            <p className="text-sm text-foreground/80">
              Thank you — your request has been prepared. For the fastest reply, send it directly on
              WhatsApp.
            </p>
            <GoldButton
              as="a"
              href={waLink(composeMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> Send on WhatsApp
            </GoldButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input required className={field} placeholder="Name" value={form.name} onChange={set("name")} />
              <input type="email" className={field} placeholder="Email" value={form.email} onChange={set("email")} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input required className={field} placeholder="WhatsApp / Phone" value={form.phone} onChange={set("phone")} />
              <input type="date" className={field} aria-label="Preferred date" value={form.date} onChange={set("date")} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs text-muted-foreground">
                Adults
                <input type="number" min="0" className={`${field} mt-1`} value={form.adults} onChange={set("adults")} />
              </label>
              <label className="text-xs text-muted-foreground">
                Children
                <input type="number" min="0" className={`${field} mt-1`} value={form.children} onChange={set("children")} />
              </label>
            </div>
            <select className={field} value={form.experience} onChange={set("experience")} aria-label="Preferred experience">
              {activities.map((a) => (
                <option key={a.id} value={a.title}>
                  {a.title}
                </option>
              ))}
            </select>
            <textarea rows={3} className={field} placeholder="Message (optional)" value={form.message} onChange={set("message")} />
            <p className="text-xs text-muted-foreground">{business.availabilityNote}</p>
            <div className="mt-1 flex flex-col gap-2 sm:flex-row">
              <GoldButton type="submit" className="w-full sm:flex-1">
                <Send size={15} /> Send Booking Request
              </GoldButton>
              <GhostButton
                as="a"
                href={waLink(composeMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1"
              >
                <MessageCircle size={15} /> Book via WhatsApp
              </GhostButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
