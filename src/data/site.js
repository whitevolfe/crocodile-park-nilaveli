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
import galleryimg1 from "@/assets/galleryimg1.jpeg";
import galleryimg2 from "@/assets/galleryimg2.jpeg";
import galleryimg3 from "@/assets/galleryimg3.jpeg";
import galleryimg4 from "@/assets/galleryimg4.jpeg";
import galleryimg5 from "@/assets/galleryimg5.jpeg";
import galleryimg6 from "@/assets/galleryimg6.jpeg";
import galleryimg7 from "@/assets/galleryimg7.jpeg";
import galleryimg8 from "@/assets/galleryimg8.jpeg";
import galleryimg9 from "@/assets/galleryimg9.jpeg";
import galleryimg10 from "@/assets/galleryimg10.jpeg";
import galleryimg11 from "@/assets/galleryimg11.jpeg";
import galleryimg12 from "@/assets/galleryimg12.jpeg";
import galleryimg13 from "@/assets/galleryimg13.jpeg";
import galleryimg14 from "@/assets/galleryimg14.jpeg";
import galleryimg15 from "@/assets/galleryimg15.jpeg";
import galleryimg16 from "@/assets/galleryimg16.jpeg";
import galleryimg17 from "@/assets/galleryimg17.jpeg";
import galleryimg18 from "@/assets/galleryimg18.jpeg";
import galleryimg19 from "@/assets/galleryimg19.jpeg";
import galleryimg20 from "@/assets/galleryimg20.jpeg";
import galleryimg21 from "@/assets/galleryimg21.jpeg";
import galleryimg22 from "@/assets/galleryimg22.jpeg";
import galleryimg23 from "@/assets/galleryimg23.jpeg";
import galleryimg25 from "@/assets/galleryimg25.jpeg";
import galleryimg26 from "@/assets/galleryimg26.jpeg";
import galleryimg30 from "@/assets/galleryimg30.jpeg";
import galleryimg31 from "@/assets/galleryimg31.jpeg";
import galleryimg32 from "@/assets/galleryimg32.jpeg";
import galleryimg34 from "@/assets/galleryimg34.jpeg";
import galleryimg35 from "@/assets/galleryimg35.jpeg";
import galleryimg36 from "@/assets/galleryimg36.jpeg";
import galleryimg37 from "@/assets/galleryimg37.jpeg";
import galleryimg38 from "@/assets/galleryimg38.jpeg";

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
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  {
    icon: "croc",
    title: "Wild Crocodiles",
    text: "Observe wild crocodiles in their natural environment.",
  },
  {
    icon: "bird",
    title: "Birdlife",
    text: "Discover eagles, kingfishers, crows and other local bird species.",
  },
  {
    icon: "leaf",
    title: "Nature Exploration",
    text: "Explore the biodiversity around Periyakulam and Nilaveli.",
  },
  { icon: "tuk", title: "Local Tuk Tuk Journey", text: "Experience the destination like a local." },
  {
    icon: "sun",
    title: "Nilaveli Sunset",
    text: "End the journey beside the lagoon with a beautiful sunset.",
  },
];

export const timeline = [
  {
    no: "01",
    title: "Meet Your Local Guide",
    text: "The experience begins at the guide's home.",
    image: expTuktuk,
  },
  {
    no: "02",
    title: "Journey by Tuk Tuk",
    text: "Travel through the local surroundings toward Crocodile Park Nilaveli.",
    image: expTuktuk,
  },
  {
    no: "03",
    title: "Crocodile Watching",
    text: "Observe wild crocodiles living in their natural environment.",
    image: expCrocodile,
  },
  {
    no: "04",
    title: "Bird Watching",
    text: "Look for eagles, kingfishers, crows and other birds.",
    image: expBirds,
  },
  {
    no: "05",
    title: "Periyakulam",
    text: "Explore the natural surroundings of The Big Lake.",
    image: expPeriyakulam,
  },
  { no: "06", title: "Lagoon Shore", text: "Continue towards the lagoon.", image: galLagoon },
  { no: "07", title: "Sunset", text: "Enjoy the beautiful Nilaveli sunset.", image: expSunset },
  {
    no: "08",
    title: "Return to Crocodile Park",
    text: "Return to Crocodile Park and observe crocodiles resting near the shoreline.",
    image: galCrocClose,
  },
];

export const activities = [
  {
    id: "guided-crocodile",
    title: "Guided Wild Crocodile Experience",
    description: "One of a kind guided wildlife experience around Crocodile Park Nilaveli.",
    fullDescription:
      "Discover the wild side of Nilaveli on a guided evening wildlife experience around Crocodile Park. Travel with a local guide by Tuk Tuk, explore the surroundings of Periyakulam and the lagoon, watch wild crocodiles in their natural environment and look for Sri Lankan birdlife before enjoying the beautiful sunset.",
    price: "LKR 3,900",
    category: "Signature",
    image: expCrocodile,
    alt: "Wild crocodile in a Sri Lankan lagoon at golden hour",
    duration: "Approximately 2 hours",
    location: "Crocodile Park Nilaveli & Periyakulam",
    highlights: [
      "Wild crocodile watching",
      "Local guide experience",
      "Tuk Tuk journey",
      "Bird watching",
      "Periyakulam lake exploration",
      "Nilaveli lagoon sunset",
    ],
    itinerary: [
      "Meet your local guide at the starting point.",
      "Begin the local journey by Tuk Tuk.",
      "Explore the surroundings of Periyakulam and the lagoon.",
      "Observe wild crocodiles in their natural environment.",
      "Look for eagles, kingfishers and other local birds.",
      "Enjoy the beautiful Nilaveli sunset.",
      "Return to Crocodile Park.",
    ],
    included: [
      "Local guide",
      "Tuk Tuk journey",
      "Wildlife observation",
      "Bird watching",
      "Sunset experience",
    ],
    suitableFor:
      "Suitable for families, couples, solo travellers and visitors interested in wildlife and authentic local experiences.",
  },

  {
    id: "pigeon-island",
    title: "Pigeon Island Snorkeling",
    description: "Snorkel above coral reefs and tropical fish in clear turquoise water.",
    fullDescription:
      "Explore the beautiful waters around Pigeon Island with a memorable snorkeling experience from the Nilaveli coast. Discover colourful coral reefs, tropical fish and clear turquoise water while enjoying one of the area's most popular ocean adventures.",
    price: "LKR 18,500",
    category: "Ocean",
    image: actSnorkeling,
    alt: "Coral reef and tropical fish in clear turquoise water",
    duration: "Approximately 3–4 hours",
    location: "Nilaveli & Pigeon Island",
    highlights: [
      "Crystal-clear turquoise water",
      "Colourful coral reefs",
      "Tropical marine life",
      "Pigeon Island surroundings",
      "Guided snorkeling experience",
    ],
    itinerary: [
      "Meet your guide in Nilaveli.",
      "Travel to the boat departure point.",
      "Boat ride towards Pigeon Island.",
      "Receive a snorkeling and safety briefing.",
      "Explore the coral reefs and tropical fish.",
      "Enjoy time around the island.",
      "Return to Nilaveli.",
    ],
    included: ["Local guide", "Boat transfer", "Snorkeling equipment", "Safety briefing"],
    suitableFor:
      "Suitable for visitors who are comfortable in the water. Children should be accompanied by an adult.",
  },

  {
    id: "fishing",
    title: "Fishing Tour",
    description: "Join a local fishing trip along the Nilaveli and Trincomalee coast.",
    fullDescription:
      "Experience the coastal fishing traditions around Nilaveli and Trincomalee on a local fishing trip. Spend time on the water, learn about traditional fishing practices and enjoy the peaceful atmosphere of the Sri Lankan coast.",
    price: "LKR 15,000",
    category: "Ocean",
    image: actFishing,
    alt: "Local fishermen on a traditional boat at sunrise",
    duration: "Approximately 3–4 hours",
    location: "Nilaveli & Trincomalee Coast",
    highlights: [
      "Local fishing experience",
      "Traditional coastal environment",
      "Scenic ocean journey",
      "Local fishing knowledge",
      "Sunrise or morning atmosphere",
    ],
    itinerary: [
      "Meet your local fishing guide.",
      "Travel to the departure point.",
      "Board the fishing boat.",
      "Learn about local fishing methods.",
      "Spend time fishing along the coast.",
      "Enjoy the surrounding ocean scenery.",
      "Return to shore.",
    ],
    included: ["Local fishing guide", "Boat journey", "Basic fishing equipment", "Safety guidance"],
    suitableFor:
      "Suitable for visitors interested in local culture, fishing and ocean experiences.",
  },

  {
    id: "scuba",
    title: "Scuba Diving",
    description: "Dive into tropical marine life with clear-water visibility.",
    fullDescription:
      "Discover the underwater world of the Trincomalee coast with a scuba diving experience. Explore tropical marine life and underwater landscapes while accompanied by experienced local diving professionals.",
    price: "LKR 16,500",
    category: "Ocean",
    image: actScuba,
    alt: "Scuba diver exploring a tropical coral reef",
    duration: "Approximately 3–4 hours",
    location: "Trincomalee Coast",
    highlights: [
      "Tropical marine life",
      "Clear-water diving",
      "Coral reef exploration",
      "Professional guidance",
      "Underwater adventure",
    ],
    itinerary: [
      "Meet the diving team.",
      "Complete the safety briefing.",
      "Prepare your diving equipment.",
      "Travel to the selected dive location.",
      "Enter the water with your guide.",
      "Explore the underwater environment.",
      "Return to shore.",
    ],
    included: [
      "Dive guide",
      "Diving equipment",
      "Safety briefing",
      "Boat transfer where applicable",
    ],
    suitableFor:
      "Suitable for travellers who meet the required diving and safety conditions. Beginners should follow the guidance of the diving team.",
  },

  {
    id: "bbq",
    title: "BBQ Night Tour",
    description: "An outdoor tropical evening BBQ under the palm trees.",
    fullDescription:
      "Enjoy a relaxed tropical evening with an outdoor BBQ experience surrounded by the natural atmosphere of Nilaveli. Spend time with friends and family, enjoy freshly prepared food and relax beneath the palm trees.",
    price: "LKR 4,500",
    category: "Evening",
    image: actBbq,
    alt: "Evening beach BBQ under palm trees with warm lights",
    duration: "Approximately 2–3 hours",
    location: "Nilaveli",
    highlights: [
      "Outdoor tropical BBQ",
      "Relaxed evening atmosphere",
      "Palm-lined surroundings",
      "Local food experience",
      "Perfect for groups and families",
    ],
    itinerary: [
      "Meet at the agreed location.",
      "Settle into the outdoor BBQ area.",
      "Enjoy the tropical evening surroundings.",
      "Fresh food is prepared for the BBQ.",
      "Enjoy dinner with friends or family.",
      "Relax and enjoy the evening atmosphere.",
    ],
    included: ["BBQ meal", "Outdoor seating", "Basic BBQ setup", "Local assistance"],
    suitableFor:
      "Suitable for families, couples, friends and groups looking for a relaxed evening experience.",
  },

  {
    id: "trinco-city",
    title: "Trincomalee City Tour",
    description: "Discover the coastal streets and viewpoints of Trincomalee.",
    fullDescription:
      "Explore Trincomalee and discover its coastal scenery, local streets, important landmarks and beautiful viewpoints. Travel around the city and experience the unique combination of history, culture and ocean landscapes.",
    price: "LKR 7,000",
    category: "Culture",
    image: actTrinco,
    alt: "Tuk tuk on a scenic coastal road in Trincomalee",
    duration: "Approximately 4 hours",
    location: "Trincomalee",
    highlights: [
      "Trincomalee city exploration",
      "Coastal viewpoints",
      "Local streets",
      "Cultural landmarks",
      "Tuk Tuk journey",
    ],
    itinerary: [
      "Meet your local guide.",
      "Begin the city journey by Tuk Tuk.",
      "Explore important areas of Trincomalee.",
      "Visit scenic coastal viewpoints.",
      "Discover local culture and surroundings.",
      "Return to the agreed location.",
    ],
    included: [
      "Local guide",
      "Tuk Tuk transportation",
      "City sightseeing",
      "Local recommendations",
    ],
    suitableFor:
      "Suitable for families, couples, solo travellers and visitors wanting to discover Trincomalee.",
  },

  {
    id: "deer",
    title: "Deer Feeding Trincomalee",
    description: "Meet the gentle deer that roam the Trincomalee area.",
    fullDescription:
      "Spend time observing deer around the Trincomalee area and enjoy a peaceful wildlife experience. This activity offers visitors an opportunity to see these beautiful animals and appreciate the natural surroundings.",
    price: "LKR 3,000",
    category: "Wildlife",
    image: actDeer,
    alt: "Spotted deer grazing in a green Sri Lankan landscape",
    duration: "Approximately 1–2 hours",
    location: "Trincomalee",
    highlights: [
      "Deer observation",
      "Natural surroundings",
      "Wildlife photography",
      "Peaceful outdoor experience",
    ],
    itinerary: [
      "Meet your local guide.",
      "Travel to the deer viewing area.",
      "Observe the deer from a safe distance.",
      "Learn about the local environment.",
      "Enjoy time for photography.",
      "Return to the agreed location.",
    ],
    included: ["Local guide", "Transportation", "Wildlife observation"],
    suitableFor: "Suitable for families, children, couples and wildlife lovers.",
  },

  {
    id: "koneswaram",
    title: "Koneswaram Temple Tour",
    description: "Visit the clifftop temple above the Indian Ocean.",
    fullDescription:
      "Visit the famous Koneswaram Temple and explore the dramatic coastal surroundings above the Indian Ocean. Enjoy the cultural atmosphere, architecture and spectacular ocean views from one of Trincomalee's best-known landmarks.",
    price: "LKR 3,500",
    category: "Culture",
    image: actKoneswaram,
    alt: "Colourful clifftop Hindu temple above the ocean",
    duration: "Approximately 2 hours",
    location: "Swami Rock, Trincomalee",
    highlights: [
      "Koneswaram Temple",
      "Indian Ocean views",
      "Swami Rock",
      "Cultural experience",
      "Scenic photography",
    ],
    itinerary: [
      "Meet your guide.",
      "Travel towards Koneswaram Temple.",
      "Explore the temple surroundings.",
      "Enjoy views from Swami Rock.",
      "Learn about the cultural significance of the area.",
      "Return to the agreed location.",
    ],
    included: ["Local guide", "Transportation", "Sightseeing"],
    suitableFor:
      "Suitable for families, couples and travellers interested in culture, history and scenic locations.",
  },

  {
    id: "kanniya",
    title: "Kanniya Hot Water Springs",
    description: "Experience the natural hot water wells near Trincomalee.",
    fullDescription:
      "Visit the Kanniya Hot Water Springs and discover one of the well-known natural attractions around Trincomalee. Explore the site, learn about its cultural background and enjoy a relaxing stop during your journey.",
    price: "LKR 3,000",
    category: "Nature",
    image: actKanniya,
    alt: "Natural hot water spring wells surrounded by palms",
    duration: "Approximately 2 hours",
    location: "Kanniya, Trincomalee",
    highlights: [
      "Natural hot water wells",
      "Local cultural experience",
      "Scenic surroundings",
      "Relaxed sightseeing",
    ],
    itinerary: [
      "Meet your guide.",
      "Travel to Kanniya.",
      "Explore the hot water spring area.",
      "Learn about the local history and traditions.",
      "Enjoy the surrounding environment.",
      "Return to the agreed location.",
    ],
    included: ["Local guide", "Transportation", "Sightseeing"],
    suitableFor:
      "Suitable for families, couples, solo travellers and visitors exploring Trincomalee.",
  },

  {
    id: "elephant",
    title: "Elephant Watching",
    description: "Look for Sri Lankan elephants in their natural surroundings.",
    fullDescription:
      "Experience Sri Lankan wildlife while searching for elephants in their natural surroundings. Travel through suitable wildlife areas with a local guide and observe these magnificent animals while respecting their natural behaviour.",
    price: "LKR 10,000",
    category: "Wildlife",
    image: actElephant,
    alt: "Sri Lankan elephant in dry tropical forest at golden hour",
    duration: "Approximately 4–5 hours",
    location: "Trincomalee Area",
    highlights: [
      "Sri Lankan elephant watching",
      "Natural wildlife environment",
      "Local wildlife knowledge",
      "Wildlife photography",
      "Scenic journey",
    ],
    itinerary: [
      "Meet your local wildlife guide.",
      "Travel towards the wildlife viewing area.",
      "Search for elephants and other wildlife.",
      "Observe animals from a safe distance.",
      "Enjoy the natural surroundings.",
      "Return after the wildlife experience.",
    ],
    included: ["Local guide", "Transportation", "Wildlife observation"],
    suitableFor:
      "Suitable for wildlife lovers, photographers, families and visitors interested in Sri Lankan nature.",
  },

  {
    id: "birds",
    title: "Bird Watching",
    description: "Spot eagles, kingfishers and wetland birds around the lagoons.",
    fullDescription:
      "Explore the lagoons and wetlands around Nilaveli while looking for Sri Lankan birdlife. With a local guide, discover eagles, kingfishers, crows and other birds that live around the area's waterways and natural habitats.",
    price: "LKR 1,200",
    category: "Wildlife",
    image: expBirds,
    alt: "Eagle and kingfisher beside a Sri Lankan wetland",
    duration: "Approximately 2 hours",
    location: "Nilaveli & Periyakulam",
    highlights: [
      "Eagle watching",
      "Kingfisher spotting",
      "Wetland birds",
      "Lagoon exploration",
      "Nature photography",
    ],
    itinerary: [
      "Meet your local bird-watching guide.",
      "Travel towards the lagoon or wetland.",
      "Explore suitable bird-watching locations.",
      "Look for eagles, kingfishers and other species.",
      "Enjoy the natural surroundings.",
      "Return to the agreed location.",
    ],
    included: ["Local guide", "Nature walk", "Bird watching"],
    suitableFor:
      "Suitable for bird lovers, photographers, families and travellers who enjoy peaceful nature experiences.",
  },

  {
    id: "turtle",
    title: "Turtle Watching",
    description: "Watch sea turtles glide through clear tropical water.",
    fullDescription:
      "Enjoy a memorable ocean experience while looking for sea turtles in the clear tropical waters around the Trincomalee and Nilaveli coast. Observe marine life responsibly and enjoy the beauty of the surrounding coastline.",
    price: "LKR 8,500",
    category: "Ocean",
    image: actTurtle,
    alt: "Green sea turtle swimming in turquoise water",
    duration: "Approximately 3 hours",
    location: "Nilaveli Coast",
    highlights: [
      "Sea turtle watching",
      "Clear tropical water",
      "Marine life observation",
      "Coastal scenery",
      "Ocean adventure",
    ],
    itinerary: [
      "Meet your local guide.",
      "Travel to the selected coastal location.",
      "Receive a safety briefing.",
      "Enter the water or viewing area.",
      "Look for sea turtles and other marine life.",
      "Enjoy the surrounding coastline.",
      "Return to shore.",
    ],
    included: [
      "Local guide",
      "Basic equipment where required",
      "Safety briefing",
      "Local transportation where applicable",
    ],
    suitableFor:
      "Suitable for ocean lovers and families. Children should be accompanied by an adult.",
  },
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
  {
    name: "Sample Guest",
    origin: "Placeholder review",
    text: "The crocodile watching was the highlight of our trip — seeing them in the wild rather than an enclosure felt completely different.",
  },
  {
    name: "Sample Guest",
    origin: "Placeholder review",
    text: "Our local guide knew exactly where to look and explained so much about the birds and the lake along the way.",
  },
  {
    name: "Sample Guest",
    origin: "Placeholder review",
    text: "Ending beside the lagoon for the sunset after the tuk tuk journey was unforgettable.",
  },
];

export const faqs = [
  { q: "What time does the experience start?", a: "5:00 PM." },
  { q: "How long is the experience?", a: "Approximately two hours." },
  { q: "Where does the experience begin?", a: "The experience begins at the local guide's home." },
  {
    q: "Is transportation included?",
    a: "The experience includes travel by Tuk Tuk during the guided journey.",
  },
  {
    q: "What wildlife can we see?",
    a: "Crocodiles, birds and potentially other wildlife depending on natural conditions.",
  },
  {
    q: "Can children join?",
    a: "Yes. Children aged 6–17 have a reduced fee and children below 6 are free.",
  },
  { q: "Is the experience available every day?", a: business.availabilityNote },
  {
    q: "What should I bring?",
    a: "Comfortable clothing, water, insect protection, camera and suitable footwear.",
  },
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
  { src: galleryimg1, alt: "Gallery image 1" },
  { src: galleryimg2, alt: "Gallery image 2" },
  { src: galleryimg3, alt: "Gallery image 3" },
  { src: galleryimg4, alt: "Gallery image 4" },
  { src: galleryimg5, alt: "Gallery image 5" },
  { src: galleryimg6, alt: "Gallery image 6" },
  { src: galleryimg7, alt: "Gallery image 7" },
  { src: galleryimg8, alt: "Gallery image 8" },
  { src: galleryimg9, alt: "Gallery image 9" },
  { src: galleryimg10, alt: "Gallery image 10" },
  { src: galleryimg11, alt: "Gallery image 11" },
  { src: galleryimg12, alt: "Gallery image 12" },
  { src: galleryimg13, alt: "Gallery image 13" },
  { src: galleryimg14, alt: "Gallery image 14" },
  { src: galleryimg15, alt: "Gallery image 15" },
  { src: galleryimg16, alt: "Gallery image 16" },
  { src: galleryimg17, alt: "Gallery image 17" },
  { src: galleryimg18, alt: "Gallery image 18" },
  { src: galleryimg19, alt: "Gallery image 19" },
  { src: galleryimg20, alt: "Gallery image 20" },
  { src: galleryimg21, alt: "Gallery image 21" },
  { src: galleryimg22, alt: "Gallery image 22" },
  { src: galleryimg23, alt: "Gallery image 23" },
  { src: galleryimg25, alt: "Gallery image 25" },
  { src: galleryimg26, alt: "Gallery image 26" },
  { src: galleryimg30, alt: "Gallery image 30" },
  { src: galleryimg31, alt: "Gallery image 31" },
  { src: galleryimg32, alt: "Gallery image 32" },
  { src: galleryimg34, alt: "Gallery image 34" },
  { src: galleryimg35, alt: "Gallery image 35" },
  { src: galleryimg36, alt: "Gallery image 36" },
  { src: galleryimg37, alt: "Gallery image 37" },
  { src: galleryimg38, alt: "Gallery image 38" },
];
