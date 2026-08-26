export type ChatOption = {
  label: string;
  next?: string;
  action?: "whatsapp" | "booking" | "inquiry";
};

export type ChatStep = {
  message: string;
  options: ChatOption[];
};

const tourismChatFlow: Record<string, ChatStep> = {
  // ---------------------------------------------------------------------------
  // MAIN MENU
  // ---------------------------------------------------------------------------

  start: {
    message: "Hello! 👋 Welcome to Nilaveli Wild Dreams. How can I help you today?",
    options: [
      {
        label: "🐊 Wild Crocodile Experience",
        next: "crocodile",
      },
      {
        label: "🌿 Explore Activities",
        next: "activities",
      },
      {
        label: "💰 Pricing",
        next: "pricing",
      },
      {
        label: "❓ Frequently Asked Questions",
        next: "faq",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // MAIN CROCODILE EXPERIENCE
  // ---------------------------------------------------------------------------

  crocodile: {
    message:
      "🐊 Our Guided Wild Crocodile Experience is a unique wildlife journey around Crocodile Park Nilaveli and Periyakulam. Travel by Tuk Tuk with a local guide, observe wild crocodiles and birdlife, explore the lagoon and enjoy the Nilaveli sunset.\n\n💰 Price: LKR 3,900\n⏱️ Duration: Approximately 2 hours\n🕔 Start: 5:00 PM",
    options: [
      {
        label: "🐊 About the Experience",
        next: "experience-info",
      },
      {
        label: "⏱️ Duration & Start Time",
        next: "duration",
      },
      {
        label: "💰 View Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "👨‍👩‍👧 Children",
        next: "children",
      },
      {
        label: "🎒 What should I bring?",
        next: "what-to-bring",
      },
      {
        label: "🦜 What wildlife can we see?",
        next: "wildlife",
      },
      {
        label: "📅 Book the Experience",
        action: "booking",
      },
    ],
  },

  "experience-info": {
    message:
      "🐊 The Guided Wild Crocodile Experience takes you into the natural surroundings of Nilaveli and Periyakulam.\n\nYou will travel with a local guide by Tuk Tuk, explore the lake and lagoon surroundings, observe wild crocodiles in their natural environment, look for local birdlife and finish the journey around the Nilaveli sunset.\n\n📍 Location: Crocodile Park Nilaveli & Periyakulam",
    options: [
      {
        label: "⏱️ How long is it?",
        next: "duration",
      },
      {
        label: "💰 How much does it cost?",
        next: "crocodile-pricing",
      },
      {
        label: "🦜 What wildlife can we see?",
        next: "wildlife",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  duration: {
    message:
      "⏱️ The Guided Wild Crocodile Experience takes approximately 2 hours.\n\n🕔 Start time: 5:00 PM\n📍 Starting point: The local guide's home\n🚕 Transport: Tuk Tuk journey included\n🌅 The experience includes time around the lagoon and Nilaveli sunset.",
    options: [
      {
        label: "💰 View Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "🐊 What is included?",
        next: "included",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  "crocodile-pricing": {
    message:
      "💰 Guided Wild Crocodile Experience\n\n🐊 Experience price: LKR 3,900\n\nThe general visitor pricing is:\n\n👤 Adults (18+): $12\n🧒 Children (6–17): $6\n👶 Children under 6: FREE\n\n⏱️ Duration: Approximately 2 hours\n🕔 Start time: 5:00 PM",
    options: [
      {
        label: "👶 Children Information",
        next: "children",
      },
      {
        label: "⏱️ View Duration",
        next: "duration",
      },
      {
        label: "📅 Book Now",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
    ],
  },

  children: {
    message:
      "👨‍👩‍👧 Yes, children can join the experience.\n\n👤 Adults (18+): $12\n🧒 Children (6–17): $6\n👶 Children under 6: FREE\n\nWe recommend that children remain with their parents or guardians and follow the local guide's safety instructions during the wildlife experience.",
    options: [
      {
        label: "💰 View Full Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "🎒 What should I bring?",
        next: "what-to-bring",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  included: {
    message:
      "🎒 The Guided Wild Crocodile Experience includes:\n\n✓ Local guide\n✓ Tuk Tuk journey\n✓ Wildlife observation\n✓ Bird watching\n✓ Periyakulam lake exploration\n✓ Nilaveli sunset experience\n\n📍 Location: Crocodile Park Nilaveli & Periyakulam\n⏱️ Duration: Approximately 2 hours",
    options: [
      {
        label: "💰 View Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "🎒 What should I bring?",
        next: "what-to-bring",
      },
      {
        label: "📅 Book Now",
        action: "booking",
      },
    ],
  },

  "what-to-bring": {
    message:
      "🎒 We recommend bringing:\n\n• Comfortable clothing\n• Drinking water\n• Insect protection\n• Camera 📷\n• Suitable footwear\n\n🌿 Please also help us protect the environment by avoiding littering and following the guide's instructions around wildlife.",
    options: [
      {
        label: "🐊 Learn About the Experience",
        next: "experience-info",
      },
      {
        label: "💰 View Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  wildlife: {
    message:
      "🦜 During the experience you may have the opportunity to see:\n\n🐊 Wild crocodiles\n🦅 Eagles\n🐦 Kingfishers\n🐦 Crows\n🌿 Other local wildlife\n\nWildlife sightings depend on natural conditions, weather and the time of your visit.",
    options: [
      {
        label: "🐊 About the Experience",
        next: "experience-info",
      },
      {
        label: "⏱️ View Duration",
        next: "duration",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // ACTIVITIES
  // ---------------------------------------------------------------------------

  activities: {
    message:
      "🌿 Nilaveli Wild Dreams offers a range of wildlife, ocean, cultural and local experiences. What would you like to explore?",
    options: [
      {
        label: "🐊 Wild Crocodile Experience",
        next: "crocodile",
      },
      {
        label: "🌊 Ocean Activities",
        next: "ocean-activities",
      },
      {
        label: "🦌 Wildlife Activities",
        next: "wildlife-activities",
      },
      {
        label: "🏛️ Culture & Sightseeing",
        next: "culture-activities",
      },
      {
        label: "🌅 Evening Activities",
        next: "evening-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // OCEAN ACTIVITIES
  // ---------------------------------------------------------------------------

  "ocean-activities": {
    message:
      "🌊 Our ocean experiences include:\n\n🤿 Pigeon Island Snorkeling\n💰 LKR 18,500\n⏱️ Approximately 3–4 hours\n\n🎣 Fishing Tour\n💰 LKR 15,000\n⏱️ Approximately 3–4 hours\n\n🤿 Scuba Diving\n💰 LKR 16,500\n⏱️ Approximately 3–4 hours\n\n🐢 Turtle Watching\n💰 LKR 8,500\n⏱️ Approximately 3 hours",
    options: [
      {
        label: "🤿 Pigeon Island Snorkeling",
        next: "pigeon-island",
      },
      {
        label: "🎣 Fishing Tour",
        next: "fishing",
      },
      {
        label: "🤿 Scuba Diving",
        next: "scuba",
      },
      {
        label: "🐢 Turtle Watching",
        next: "turtle",
      },
      {
        label: "🔙 Activities",
        next: "activities",
      },
    ],
  },

  "pigeon-island": {
    message:
      "🤿 Pigeon Island Snorkeling\n\n💰 Price: LKR 18,500\n⏱️ Duration: Approximately 3–4 hours\n📍 Location: Nilaveli & Pigeon Island\n\nExplore coral reefs, tropical fish and the clear turquoise waters around Pigeon Island.\n\nIncludes:\n✓ Local guide\n✓ Boat transfer\n✓ Snorkeling equipment\n✓ Safety briefing",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🌊 Other Ocean Activities",
        next: "ocean-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  fishing: {
    message:
      "🎣 Fishing Tour\n\n💰 Price: LKR 15,000\n⏱️ Duration: Approximately 3–4 hours\n📍 Location: Nilaveli & Trincomalee Coast\n\nEnjoy a local fishing experience along the beautiful Sri Lankan coast.\n\nIncludes:\n✓ Local fishing guide\n✓ Boat journey\n✓ Basic fishing equipment\n✓ Safety guidance",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🌊 Other Ocean Activities",
        next: "ocean-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  scuba: {
    message:
      "🤿 Scuba Diving\n\n💰 Price: LKR 16,500\n⏱️ Duration: Approximately 3–4 hours\n📍 Location: Trincomalee Coast\n\nDiscover tropical marine life and underwater landscapes with professional guidance.\n\nIncludes:\n✓ Dive guide\n✓ Diving equipment\n✓ Safety briefing\n✓ Boat transfer where applicable",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🌊 Other Ocean Activities",
        next: "ocean-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  turtle: {
    message:
      "🐢 Turtle Watching\n\n💰 Price: LKR 8,500\n⏱️ Duration: Approximately 3 hours\n📍 Location: Nilaveli Coast\n\nEnjoy an ocean experience while looking for sea turtles and other marine life.\n\nIncludes:\n✓ Local guide\n✓ Basic equipment where required\n✓ Safety briefing\n✓ Local transportation where applicable",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🌊 Other Ocean Activities",
        next: "ocean-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // WILDLIFE ACTIVITIES
  // ---------------------------------------------------------------------------

  "wildlife-activities": {
    message:
      "🦌 Our wildlife experiences include:\n\n🦌 Deer Feeding Trincomalee\n💰 LKR 3,000\n⏱️ Approximately 1–2 hours\n\n🐘 Elephant Watching\n💰 LKR 10,000\n⏱️ Approximately 4–5 hours\n\n🦜 Bird Watching\n💰 LKR 1,200\n⏱️ Approximately 2 hours\n\n🐊 Guided Wild Crocodile Experience\n💰 LKR 3,900\n⏱️ Approximately 2 hours",
    options: [
      {
        label: "🦌 Deer Feeding",
        next: "deer",
      },
      {
        label: "🐘 Elephant Watching",
        next: "elephant",
      },
      {
        label: "🦜 Bird Watching",
        next: "birds",
      },
      {
        label: "🐊 Crocodile Experience",
        next: "crocodile",
      },
      {
        label: "🔙 Activities",
        next: "activities",
      },
    ],
  },

  deer: {
    message:
      "🦌 Deer Feeding Trincomalee\n\n💰 Price: LKR 3,000\n⏱️ Duration: Approximately 1–2 hours\n📍 Location: Trincomalee\n\nSpend time observing deer and enjoy a peaceful wildlife experience.\n\nSuitable for families, children, couples and wildlife lovers.",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🦌 Other Wildlife Activities",
        next: "wildlife-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  elephant: {
    message:
      "🐘 Elephant Watching\n\n💰 Price: LKR 10,000\n⏱️ Duration: Approximately 4–5 hours\n📍 Location: Trincomalee Area\n\nTravel through suitable wildlife areas and look for Sri Lankan elephants in their natural surroundings.\n\nIncludes:\n✓ Local guide\n✓ Transportation\n✓ Wildlife observation",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🦌 Other Wildlife Activities",
        next: "wildlife-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  birds: {
    message:
      "🦜 Bird Watching\n\n💰 Price: LKR 1,200\n⏱️ Duration: Approximately 2 hours\n📍 Location: Nilaveli & Periyakulam\n\nExplore lagoons and wetlands while looking for eagles, kingfishers and other local bird species.\n\nIncludes:\n✓ Local guide\n✓ Nature walk\n✓ Bird watching",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🦌 Other Wildlife Activities",
        next: "wildlife-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // CULTURE & SIGHTSEEING
  // ---------------------------------------------------------------------------

  "culture-activities": {
    message:
      "🏛️ Explore Trincomalee with our cultural and sightseeing experiences:\n\n🏙️ Trincomalee City Tour\n💰 LKR 7,000\n⏱️ Approximately 4 hours\n\n🛕 Koneswaram Temple Tour\n💰 LKR 3,500\n⏱️ Approximately 2 hours\n\n♨️ Kanniya Hot Water Springs\n💰 LKR 3,000\n⏱️ Approximately 2 hours",
    options: [
      {
        label: "🏙️ Trincomalee City Tour",
        next: "trinco-city",
      },
      {
        label: "🛕 Koneswaram Temple",
        next: "koneswaram",
      },
      {
        label: "♨️ Kanniya Hot Springs",
        next: "kanniya",
      },
      {
        label: "🔙 Activities",
        next: "activities",
      },
    ],
  },

  "trinco-city": {
    message:
      "🏙️ Trincomalee City Tour\n\n💰 Price: LKR 7,000\n⏱️ Duration: Approximately 4 hours\n📍 Location: Trincomalee\n\nDiscover coastal scenery, local streets, cultural landmarks and beautiful viewpoints around Trincomalee.\n\nIncludes:\n✓ Local guide\n✓ Tuk Tuk transportation\n✓ City sightseeing\n✓ Local recommendations",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🏛️ Other Cultural Activities",
        next: "culture-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  koneswaram: {
    message:
      "🛕 Koneswaram Temple Tour\n\n💰 Price: LKR 3,500\n⏱️ Duration: Approximately 2 hours\n📍 Location: Swami Rock, Trincomalee\n\nVisit the famous clifftop temple, explore Swami Rock and enjoy spectacular Indian Ocean views.\n\nIncludes:\n✓ Local guide\n✓ Transportation\n✓ Sightseeing",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🏛️ Other Cultural Activities",
        next: "culture-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  kanniya: {
    message:
      "♨️ Kanniya Hot Water Springs\n\n💰 Price: LKR 3,000\n⏱️ Duration: Approximately 2 hours\n📍 Location: Kanniya, Trincomalee\n\nExplore the famous natural hot water wells and discover the cultural background of this local attraction.\n\nIncludes:\n✓ Local guide\n✓ Transportation\n✓ Sightseeing",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🏛️ Other Cultural Activities",
        next: "culture-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // EVENING ACTIVITIES
  // ---------------------------------------------------------------------------

  "evening-activities": {
    message:
      "🌅 Enjoy a relaxed evening in Nilaveli:\n\n🍖 BBQ Night Tour\n💰 LKR 4,500\n⏱️ Approximately 2–3 hours\n\n🐊 Guided Wild Crocodile Experience\n💰 LKR 3,900\n⏱️ Approximately 2 hours\n🕔 Starts at 5:00 PM",
    options: [
      {
        label: "🍖 BBQ Night Tour",
        next: "bbq",
      },
      {
        label: "🐊 Crocodile Experience",
        next: "crocodile",
      },
      {
        label: "🔙 Activities",
        next: "activities",
      },
    ],
  },

  bbq: {
    message:
      "🍖 BBQ Night Tour\n\n💰 Price: LKR 4,500\n⏱️ Duration: Approximately 2–3 hours\n📍 Location: Nilaveli\n\nEnjoy an outdoor tropical BBQ beneath the palm trees with friends or family.\n\nIncludes:\n✓ BBQ meal\n✓ Outdoor seating\n✓ Basic BBQ setup\n✓ Local assistance",
    options: [
      {
        label: "📅 Book This Activity",
        action: "booking",
      },
      {
        label: "🌅 Other Evening Activities",
        next: "evening-activities",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // GENERAL PRICING
  // ---------------------------------------------------------------------------

  pricing: {
    message:
      "💰 Here are our current experience prices.\n\n🐊 Guided Wild Crocodile Experience — LKR 3,900\n⏱️ Approximately 2 hours\n\n🤿 Pigeon Island Snorkeling — LKR 18,500\n⏱️ Approximately 3–4 hours\n\n🎣 Fishing Tour — LKR 15,000\n⏱️ Approximately 3–4 hours\n\n🤿 Scuba Diving — LKR 16,500\n⏱️ Approximately 3–4 hours\n\n🍖 BBQ Night Tour — LKR 4,500\n⏱️ Approximately 2–3 hours\n\n🏙️ Trincomalee City Tour — LKR 7,000\n⏱️ Approximately 4 hours",
    options: [
      {
        label: "🦌 More Wildlife Prices",
        next: "wildlife-prices",
      },
      {
        label: "🏛️ More Cultural Prices",
        next: "culture-prices",
      },
      {
        label: "🌊 More Ocean Prices",
        next: "ocean-prices",
      },
      {
        label: "🐊 Crocodile Experience Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
    ],
  },

  "wildlife-prices": {
    message:
      "🦌 Wildlife Experience Prices\n\n🐊 Guided Wild Crocodile Experience — LKR 3,900\n⏱️ Approximately 2 hours\n\n🦌 Deer Feeding Trincomalee — LKR 3,000\n⏱️ Approximately 1–2 hours\n\n🐘 Elephant Watching — LKR 10,000\n⏱️ Approximately 4–5 hours\n\n🦜 Bird Watching — LKR 1,200\n⏱️ Approximately 2 hours\n\n🐢 Turtle Watching — LKR 8,500\n⏱️ Approximately 3 hours",
    options: [
      {
        label: "📅 Book Now",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
      {
        label: "🔙 Pricing",
        next: "pricing",
      },
    ],
  },

  "ocean-prices": {
    message:
      "🌊 Ocean Experience Prices\n\n🤿 Pigeon Island Snorkeling — LKR 18,500\n⏱️ Approximately 3–4 hours\n\n🎣 Fishing Tour — LKR 15,000\n⏱️ Approximately 3–4 hours\n\n🤿 Scuba Diving — LKR 16,500\n⏱️ Approximately 3–4 hours\n\n🐢 Turtle Watching — LKR 8,500\n⏱️ Approximately 3 hours",
    options: [
      {
        label: "📅 Book Now",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
      {
        label: "🔙 Pricing",
        next: "pricing",
      },
    ],
  },

  "culture-prices": {
    message:
      "🏛️ Culture & Sightseeing Prices\n\n🏙️ Trincomalee City Tour — LKR 7,000\n⏱️ Approximately 4 hours\n\n🛕 Koneswaram Temple Tour — LKR 3,500\n⏱️ Approximately 2 hours\n\n♨️ Kanniya Hot Water Springs — LKR 3,000\n⏱️ Approximately 2 hours",
    options: [
      {
        label: "📅 Book Now",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
      {
        label: "🔙 Pricing",
        next: "pricing",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // FAQ
  // ---------------------------------------------------------------------------

  faq: {
    message: "❓ What would you like to know?",
    options: [
      {
        label: "🕔 What time does the experience start?",
        next: "start-time",
      },
      {
        label: "⏱️ How long is the experience?",
        next: "duration",
      },
      {
        label: "📍 Where does it begin?",
        next: "location",
      },
      {
        label: "🚗 Is transportation included?",
        next: "transportation",
      },
      {
        label: "🦜 What wildlife can we see?",
        next: "wildlife",
      },
      {
        label: "👶 Can children join?",
        next: "children",
      },
      {
        label: "📅 Is it available every day?",
        next: "availability",
      },
      {
        label: "🎒 What should I bring?",
        next: "what-to-bring",
      },
      {
        label: "💰 What is the price?",
        next: "crocodile-pricing",
      },
    ],
  },

  "start-time": {
    message:
      "🕔 The Guided Wild Crocodile Experience starts at approximately 5:00 PM.\n\nThe evening journey includes wildlife watching around Periyakulam and the lagoon, followed by the beautiful Nilaveli sunset.",
    options: [
      {
        label: "⏱️ View Duration",
        next: "duration",
      },
      {
        label: "💰 View Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  location: {
    message:
      "📍 The Guided Wild Crocodile Experience begins at the local guide's home and continues around Crocodile Park Nilaveli, Periyakulam and the lagoon surroundings.",
    options: [
      {
        label: "🚕 Is transportation included?",
        next: "transportation",
      },
      {
        label: "⏱️ View Duration",
        next: "duration",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  transportation: {
    message:
      "🚕 Yes. The Guided Wild Crocodile Experience includes travel by Tuk Tuk during the guided journey.\n\nYou will travel through the local surroundings towards Periyakulam and the lagoon before returning to Crocodile Park.",
    options: [
      {
        label: "🐊 Learn About the Experience",
        next: "experience-info",
      },
      {
        label: "💰 View Pricing",
        next: "crocodile-pricing",
      },
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
    ],
  },

  availability: {
    message:
      "📅 Availability can depend on natural conditions and the selected experience.\n\nPlease send us your preferred date and we will confirm availability for you.",
    options: [
      {
        label: "📅 Make a Booking",
        action: "booking",
      },
      {
        label: "💬 Contact Us",
        action: "whatsapp",
      },
      {
        label: "🔙 Main Menu",
        next: "start",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // BOOKING
  // ---------------------------------------------------------------------------

  booking: {
    message:
      "📅 Great choice! Please provide your booking details and we'll get back to you to confirm availability.\n\nPlease include:\n\n👤 Your name\n📅 Preferred date\n👥 Number of guests\n🐊 Activity / experience you want\n📱 WhatsApp or phone number\n\nWe'll contact you as soon as possible to confirm your booking.",
    options: [],
  },
};

export default tourismChatFlow;
