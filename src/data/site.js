// ---------------------------------------------------------------------------
// EDIT THIS FILE to update business info, activities, pricing and content.
// ---------------------------------------------------------------------------

import expCrocodile from "@/assets/exp-crocodile.jpg";
import expBirds from "@/assets/exp-birds.jpg";
import expPeriyakulam from "@/assets/exp-periyakulam.jpg";
import expSunset from "@/assets/exp-sunset.jpg";
import expTuktuk from "@/assets/exp-tuktuk.jpg";
import galLagoon from "@/assets/gal-lagoon.jpg";
import galBeach from "@/assets/gal-beach.jpg";
import galCrocClose from "@/assets/gal-croc-close.jpg";
import actSnorkeling from "@/assets/act-snorkeling.jpg";
import actFishing from "@/assets/act-fishing.jpg";
import actScuba from "@/assets/act-scuba.jpg";
import actBbq from "@/assets/act-bbq.jpg";
import actTrinco from "@/assets/act-trinco.jpg";
import actDeer from "@/assets/act-deer.jpg";
import actKoneswaram from "@/assets/act-koneswaram.jpg";
import actKanniya from "@/assets/act-kanniya.jpg";
import actElephant from "@/assets/act-elephant.jpg";
import actTurtle from "@/assets/act-turtle.jpg";

export const business = {
  name: "Crocodile Park Nilaveli",
  address: "Thamaraikulam Road, Nilaveli 31010, Sri Lanka",
  phoneDisplay: "072 108 0806",
  phoneTel: "+94721080806",
  whatsapp: "94721080806",
  mapsQuery: "Thamaraikulam Road, Nilaveli 31010, Sri Lanka",
  // Set to null to hide a social link. Replace with real URLs when available.
  social: { facebook: null, instagram: null, tiktok: null },
  // Availability is intentionally left editable — update when confirmed.
  availabilityNote: "Please contact us to confirm availability for your preferred date.",
  // Optional: set to a string like "LKR 3,900 / adult" to display alongside USD pricing.
  lkrEquivalent: null,
};

export const waLink = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { icon: "croc", title: "Wild Crocodiles", text: "Observe wild crocodiles in their natural environment." },
  { icon: "bird", title: "Birdlife", text: "Discover eagles, kingfishers, crows and other local bird species." },
  { icon: "leaf", title: "Nature Exploration", text: "Explore the biodiversity around Periyakulam and Nilaveli." },
  { icon: "tuk", title: "Local Tuk Tuk Journey", text: "Experience the destination like a local." },
  { icon: "sun", title: "Nilaveli Sunset", text: "End the journey beside the lagoon with a beautiful sunset." },
];

export const timeline = [
  { no: "01", title: "Meet Your Local Guide", text: "The experience begins at the guide's home.", image: expTuktuk },
  { no: "02", title: "Journey by Tuk Tuk", text: "Travel through the local surroundings toward Crocodile Park Nilaveli.", image: expTuktuk },
  { no: "03", title: "Crocodile Watching", text: "Observe wild crocodiles living in their natural environment.", image: expCrocodile },
  { no: "04", title: "Bird Watching", text: "Look for eagles, kingfishers, crows and other birds.", image: expBirds },
  { no: "05", title: "Periyakulam", text: "Explore the natural surroundings of The Big Lake.", image: expPeriyakulam },
  { no: "06", title: "Lagoon Shore", text: "Continue towards the lagoon.", image: galLagoon },
  { no: "07", title: "Sunset", text: "Enjoy the beautiful Nilaveli sunset.", image: expSunset },
  { no: "08", title: "Return to Crocodile Park", text: "Return to Crocodile Park and observe crocodiles resting near the shoreline.", image: galCrocClose },
];

export const activities = [
  {
    id: "guided-crocodile",
    title: "Guided Wild Crocodile Experience",
    description: "One of a kind guided wildlife experience around Crocodile Park Nilaveli.",
    price: "LKR 3,900",
    category: "Signature",
    image: expCrocodile,
    alt: "Wild crocodile in a Sri Lankan lagoon at golden hour",
  },
  { id: "pigeon-island", title: "Pigeon Island Snorkeling", description: "Snorkel above coral reefs and tropical fish in clear turquoise water.", price: "LKR 18,500", category: "Ocean", image: actSnorkeling, alt: "Coral reef and tropical fish in clear turquoise water" },
  { id: "fishing", title: "Fishing Tour", description: "Join a local fishing trip along the Nilaveli and Trincomalee coast.", price: "LKR 15,000", category: "Ocean", image: actFishing, alt: "Local fishermen on a traditional boat at sunrise" },
  { id: "scuba", title: "Scuba Diving", description: "Dive into tropical marine life with clear-water visibility.", price: "LKR 16,500", category: "Ocean", image: actScuba, alt: "Scuba diver exploring a tropical coral reef" },
  { id: "bbq", title: "BBQ Night Tour", description: "An outdoor tropical evening BBQ under the palm trees.", price: "LKR 4,500", category: "Evening", image: actBbq, alt: "Evening beach BBQ under palm trees with warm lights" },
  { id: "trinco-city", title: "Trincomalee City Tour", description: "Discover the coastal streets and viewpoints of Trincomalee.", price: "LKR 7,000", category: "Culture", image: actTrinco, alt: "Tuk tuk on a scenic coastal road in Trincomalee" },
  { id: "deer", title: "Deer Feeding Trincomalee", description: "Meet the gentle deer that roam the Trincomalee area.", price: "LKR 3,000", category: "Wildlife", image: actDeer, alt: "Spotted deer grazing in a green Sri Lankan landscape" },
  { id: "koneswaram", title: "Koneswaram Temple Tour", description: "Visit the clifftop temple above the Indian Ocean.", price: "LKR 3,500", category: "Culture", image: actKoneswaram, alt: "Colourful clifftop Hindu temple above the ocean" },
  { id: "kanniya", title: "Kanniya Hot Water Springs", description: "Experience the natural hot water wells near Trincomalee.", price: "LKR 3,000", category: "Nature", image: actKanniya, alt: "Natural hot water spring wells surrounded by palms" },
  { id: "elephant", title: "Elephant Watching", description: "Look for Sri Lankan elephants in their natural surroundings.", price: "LKR 10,000", category: "Wildlife", image: actElephant, alt: "Sri Lankan elephant in dry tropical forest at golden hour" },
  { id: "birds", title: "Bird Watching", description: "Spot eagles, kingfishers and wetland birds around the lagoons.", price: "LKR 1,200", category: "Wildlife", image: expBirds, alt: "Eagle and kingfisher beside a Sri Lankan wetland" },
  { id: "turtle", title: "Turtle Watching", description: "Watch sea turtles glide through clear tropical water.", price: "LKR 8,500", category: "Ocean", image: actTurtle, alt: "Green sea turtle swimming in turquoise water" },
];

export const pricing = [
  { label: "Adults", price: "$12", note: "18 years and above" },
  { label: "Children", price: "$6", note: "6–17 years", featured: true },
  { label: "Under 6", price: "FREE", note: "No fee will be collected" },
];

export const respectPrinciples = [
  "Observe wildlife responsibly",
  "Maintain a safe distance",
  "Follow the local guide's instructions",
  "Do not feed or disturb wildlife",
  "Respect the natural environment",
  "Avoid littering",
];

// Sample content — replace with real, verified guest feedback when available.
export const testimonials = [
  { name: "Sample Guest", origin: "Placeholder review", text: "The crocodile watching was the highlight of our trip — seeing them in the wild rather than an enclosure felt completely different." },
  { name: "Sample Guest", origin: "Placeholder review", text: "Our local guide knew exactly where to look and explained so much about the birds and the lake along the way." },
  { name: "Sample Guest", origin: "Placeholder review", text: "Ending beside the lagoon for the sunset after the tuk tuk journey was unforgettable." },
];

export const faqs = [
  { q: "What time does the experience start?", a: "5:00 PM." },
  { q: "How long is the experience?", a: "Approximately two hours." },
  { q: "Where does the experience begin?", a: "The experience begins at the local guide's home." },
  { q: "Is transportation included?", a: "The experience includes travel by Tuk Tuk during the guided journey." },
  { q: "What wildlife can we see?", a: "Crocodiles, birds and potentially other wildlife depending on natural conditions." },
  { q: "Can children join?", a: "Yes. Children aged 6–17 have a reduced fee and children below 6 are free." },
  { q: "Is the experience available every day?", a: business.availabilityNote },
  { q: "What should I bring?", a: "Comfortable clothing, water, insect protection, camera and suitable footwear." },
];

export const gallery = [
  { src: expCrocodile, alt: "Wild crocodile half submerged in a lagoon" },
  { src: expSunset, alt: "Sunset over the Nilaveli lagoon" },
  { src: expBirds, alt: "Eagle and kingfisher at a wetland" },
  { src: galBeach, alt: "Nilaveli beach with leaning palm trees" },
  { src: expTuktuk, alt: "Tuk tuk on a palm-lined coastal road" },
  { src: expPeriyakulam, alt: "Periyakulam, The Big Lake, at golden hour" },
  { src: galLagoon, alt: "Lagoon shoreline at dusk with birds" },
  { src: galCrocClose, alt: "Close-up of a crocodile eye in golden light" },
  { src: actTurtle, alt: "Sea turtle swimming in clear water" },
];
