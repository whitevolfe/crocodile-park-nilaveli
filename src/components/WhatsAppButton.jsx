import { MessageCircle } from "lucide-react";
import { business, waLink } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink(`Hello ${business.name}, I would like to know more about your experiences.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-jungle text-sand shadow-[var(--shadow-lux)] ring-1 ring-primary/30 transition-transform duration-300 hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle size={24} />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-full bg-navy px-3 py-1.5 text-xs whitespace-nowrap text-foreground ring-1 ring-primary/20 group-hover:block lg:block lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
