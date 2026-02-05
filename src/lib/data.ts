import type {
  Country,
  CountryTrip,
  JourneyEvent,
  TimelineEvent,
} from "./types";

/* ======================
   SIMPLE HOMEPAGE TIMELINE
====================== */
export const timeline: TimelineEvent[] = [
  {
    id: "born-wi",
    title: "Born in Wisconsin",
    dateLabel: "Early years",
    description: "Midwest roots and early life.",
    place: { region: "Wisconsin", country: "United States" },
  },
  {
    id: "move-vegas",
    title: "Moved to Las Vegas",
    dateLabel: "Later",
    description: "A huge chapter — desert life and new adventures.",
    place: { city: "Las Vegas", region: "Nevada", country: "United States" },
  },
  {
    id: "move-albania",
    title: "Moved to Albania",
    dateLabel: "Current",
    description: "Our home by the Ionian Sea.",
    place: { city: "Sarandë", country: "Albania" },
  },
];

/* ======================
   COUNTRIES VISITED
====================== */
export const countries: Country[] = [
  { code: "US", name: "United States", summary: "Cities, road trips, and big landscapes.", theme: "sunset" },
  { code: "AL", name: "Albania", summary: "Our home base by the sea.", theme: "ocean" },
  { code: "ES", name: "Spain", summary: "Sun, architecture, and tapas nights.", theme: "sunset" },
  { code: "IT", name: "Italy", summary: "Pasta, history, and long walks.", theme: "ocean" },
  { code: "NO", name: "Norway", summary: "Arctic nights and unforgettable people.", theme: "grape" },
  { code: "MT", name: "Malta", summary: "Island time and historic streets.", theme: "lime" },
  { code: "FR", name: "France", summary: "Art, food, and wandering streets.", theme: "ocean" },
  { code: "CH", name: "Switzerland", summary: "Mountains, lakes, and charm.", theme: "grape" },
  { code: "GR", name: "Greece", summary: "Blue water and ancient history.", theme: "sunset" },
];

/* ======================
   TRIPS BY COUNTRY
====================== */
export const countryTrips: CountryTrip[] = [
  /* ---------- USA ---------- */
  {
    id: "us-milwaukee",
    countryCode: "US",
    slug: "us-milwaukee",
    title: "Milwaukee",
    kind: "home",
    description: "Five years of life, memories, and where we met.",
    cities: ["Milwaukee"],
    highlights: ["Lived here", "Met my wife", "Explored the city deeply"],
  },
  {
    id: "us-chicago",
    countryCode: "US",
    slug: "us-chicago",
    title: "Chicago",
    description: "Endless exploring from our Milwaukee years.",
    cities: ["Chicago"],
    highlights: ["Architecture", "Lakefront walks", "Food scene"],
  },
  {
    id: "us-new-orleans",
    countryCode: "US",
    slug: "us-new-orleans",
    title: "New Orleans",
    description: "Music, culture, and unforgettable vibes.",
    cities: ["New Orleans"],
    highlights: ["Food", "Nightlife", "Historic streets"],
  },
  {
    id: "us-portland",
    countryCode: "US",
    slug: "us-portland",
    title: "Portland",
    description: "Pacific Northwest charm and creativity.",
    cities: ["Portland"],
    highlights: ["Coffee", "Neighborhoods", "PNW vibes"],
  },
  {
    id: "us-hawaii",
    countryCode: "US",
    slug: "us-hawaii",
    title: "Oʻahu + Kauaʻi",
    description: "A week of island life and ocean air.",
    cities: ["Oʻahu", "Kauaʻi"],
    highlights: ["Beaches", "Nature", "Island exploring"],
  },
  {
    id: "us-maui",
    countryCode: "US",
    slug: "us-maui",
    title: "Maui",
    description: "A second island trip — pure reset.",
    cities: ["Maui"],
    highlights: ["Ocean views", "Relaxation", "Nature"],
  },
  {
    id: "us-las-vegas",
    countryCode: "US",
    slug: "us-las-vegas",
    title: "Las Vegas",
    kind: "home",
    description: "3.5 years — desert life and a launchpad for adventures.",
    cities: ["Las Vegas"],
    highlights: ["Lived here", "Road trips", "Built a life"],
  },
  {
    id: "us-los-angeles",
    countryCode: "US",
    slug: "us-los-angeles",
    title: "Los Angeles",
    description: "Sprawling city and classic California energy.",
    cities: ["Los Angeles"],
    highlights: ["Neighborhoods", "Coast", "Culture"],
  },
  {
    id: "us-monterey-bay",
    countryCode: "US",
    slug: "us-monterey-bay",
    title: "Monterey Bay",
    description: "Peaceful coastlines and ocean air.",
    cities: ["Monterey Bay"],
    highlights: ["Scenic views", "Ocean walks"],
  },
  {
  id: "us-san-diego",
  countryCode: "US",
  slug: "us-san-diego",
  title: "San Diego",
  description: "A sunny birthday getaway filled with marine life and magical lights.",
  cities: ["San Diego"],
  highlights: [
    "Birthday trip",
    "SeaWorld",
    "Botanical garden light show",
    "Coastal vibes"
  ],
},
{
  id: "us-salt-lake-city",
  countryCode: "US",
  slug: "us-salt-lake-city",
  title: "Salt Lake City",
  description: "A birthday trip that turned into an unforgettable proposal surrounded by wildlife and wide-open views.",
  cities: ["Salt Lake City"],
  highlights: [
    "Birthday trip",
    "Topgolf",
    "Great Salt Lake",
    "Aquarium penguin feeding",
    "Proposal"
  ],
},

  {
    id: "us-grand-canyon",
    countryCode: "US",
    slug: "us-grand-canyon",
    title: "Grand Canyon",
    description: "One of the most awe-inspiring places on Earth.",
    cities: ["Grand Canyon"],
    highlights: ["Vast views", "Nature"],
  },
 

  /* ---------- ALBANIA ---------- */
  {
    id: "al-sarande",
    countryCode: "AL",
    slug: "al-sarande",
    title: "Sarandë",
    kind: "home",
    description: "Our home base by the Ionian Sea.",
    cities: ["Sarandë"],
    highlights: ["Daily life", "Seaside walks", "Slow living"],
  },
  {
    id: "al-tirana",
    countryCode: "AL",
    slug: "al-tirana",
    title: "Tirana",
    kind: "home",
    description: "A vibrant capital full of color and energy.",
    cities: ["Tirana"],
    highlights: ["City exploring", "Cafés", "History"],
  },

  /* ---------- SPAIN ---------- */
  {
    id: "es-barcelona",
    countryCode: "ES",
    slug: "es-barcelona",
    title: "Barcelona",
    description: "Gaudí, endless wandering, and incredible food.",
    cities: ["Barcelona"],
    highlights: [
      "Sagrada Família",
      "Gothic Quarter",
      "Brewery tour",
      "Park Güell",
    ],
  },

  /* ---------- ITALY ---------- */
  {
    id: "it-milan",
    countryCode: "IT",
    slug: "it-milan",
    title: "Milan",
    description: "Style, food, and iconic landmarks.",
    cities: ["Milan"],
    highlights: ["Duomo", "Navigli", "Best pizza ever"],
    foodHighlights: [
  { name: "Pizza", place: "Dallo Zio", note: "Best pizza of my life.", emoji: "🍕" },
  { name: "Fresh made pasta", note: "So good we still talk about it.", emoji: "🍝" },
],

  },
  {
    id: "it-como",
    countryCode: "IT",
    slug: "it-como",
    title: "Como",
    description: "Lake views and historic charm.",
    cities: ["Como"],
    highlights: ["Lake Como", "Churches", "Day trip"],
  },
  {
    id: "it-bellagio",
    countryCode: "IT",
    slug: "it-bellagio",
    title: "Bellagio",
    description: "Storybook streets and unforgettable food.",
    cities: ["Bellagio"],
    highlights: ["Cacio e pepe", "Tiramisu", "Lake views"],
  },
  {
    id: "it-rome",
    countryCode: "IT",
    slug: "it-rome",
    title: "Rome",
    description: "Ancient history everywhere you look.",
    cities: ["Rome"],
    highlights: ["Colosseum", "Pantheon", "Pasta class"],
  },

  /* ---------- NORWAY ---------- */
  {
    id: "no-tromso",
    countryCode: "NO",
    slug: "no-tromso",
    title: "Tromsø",
    description: "Arctic adventures and unforgettable nights.",
    cities: ["Tromsø"],
    highlights: ["Northern Lights", "Bar hopping", "Polar cruise"],
  },

  /* ---------- MALTA ---------- */
  {
    id: "mt-sliema",
    countryCode: "MT",
    slug: "mt-sliema",
    title: "Sliema",
    description: "Easygoing seaside introduction to Malta.",
    cities: ["Sliema"],
    highlights: ["Waterfront walks", "Indian food"],
  },
  {
    id: "mt-valletta",
    countryCode: "MT",
    slug: "mt-valletta",
    title: "Valletta (Christmas)",
    description: "Festive streets and unforgettable evenings.",
    cities: ["Valletta"],
    highlights: ["Christmas market", "Wine tasting"],
  },

  /* ---------- FRANCE ---------- */
  {
    id: "fr-paris",
    countryCode: "FR",
    slug: "fr-paris",
    title: "Paris",
    description: "Iconic sights, thrifting, and nightlife.",
    cities: ["Paris"],
    highlights: ["Eiffel Tower", "Louvre", "Absinthe bar"],
  },

  /* ---------- SWITZERLAND ---------- */
  {
    id: "ch-lugano",
    countryCode: "CH",
    slug: "ch-lugano",
    title: "Lugano",
    kind: "short",
    description: "A short but beautiful stop.",
    cities: ["Lugano"],
    highlights: ["Churches", "Chocolate", "Lake views"],
  },

  /* ---------- GREECE ---------- */
  {
    id: "gr-corfu",
    countryCode: "GR",
    slug: "gr-corfu",
    title: "Corfu (So far)",
    kind: "short",
    description: "A transit stop with plans to return.",
    cities: ["Corfu"],
    highlights: ["Airport", "Port", "First glimpse"],
  },
];

/* ======================
   CHRONOLOGICAL JOURNEY
====================== */
export const journeyTimeline: JourneyEvent[] = [
  {
    id: "j-1",
    order: 1,
    type: "home",
    title: "Grew up in Kenosha, Wisconsin",
    location: "Kenosha, Wisconsin, USA",
    description: "Early years growing up in Kenosha.",
  },
  {
    id: "j-2",
    order: 2,
    type: "move",
    title: "Moved to Milwaukee (5 years)",
    location: "Milwaukee, Wisconsin, USA",
    description: "Where we met and built our life together.",
    tripSlug: "us-milwaukee",
  },
  {
    id: "j-3",
    order: 3,
    type: "trip",
    title: "Chicago exploring era",
    location: "Chicago, Illinois, USA",
    description: "Frequent trips while living in Milwaukee.",
    tripSlug: "us-chicago",
  },
  {
    id: "j-4",
    order: 4,
    type: "trip",
    title: "Road trip to New Orleans",
    location: "New Orleans, Louisiana, USA",
    description: "A fun early road trip together.",
    tripSlug: "us-new-orleans",
  },
  {
    id: "j-5",
    order: 5,
    type: "trip",
    title: "Trip to Portland",
    location: "Portland, Oregon, USA",
    description: "PNW vibes and city exploring.",
    tripSlug: "us-portland",
  },
  {
    id: "j-6",
    order: 6,
    type: "trip",
    title: "Hawaii vacation",
    location: "Oʻahu + Kauaʻi",
    description: "Our first island adventure.",
    tripSlug: "us-hawaii",
  },
  {
    id: "j-7",
    order: 7,
    type: "move",
    title: "Moved to Las Vegas",
    location: "Las Vegas, Nevada, USA",
    description: "3.5 years of desert life.",
    tripSlug: "us-las-vegas",
  },
  {
    id: "j-8",
    order: 8,
    type: "trip",
    title: "Exploring while living in Vegas",
    location: "Western USA",
    description: "Road trips and nearby adventures.",
  },
  {
    id: "j-9",
    order: 9,
    type: "trip",
    title: "Maui trip",
    location: "Maui, Hawaii",
    description: "Another island escape.",
    tripSlug: "us-maui",
  },
  {
    id: "j-10",
    order: 10,
    type: "trip",
    title: "2-week Europe trip",
    location: "Spain • Italy • Switzerland",
    description: "Barcelona, Milan, Lake Como, and Lugano.",
    tripSlug: "es-barcelona",
  },
  {
    id: "j-11",
    order: 11,
    type: "move",
    title: "Moved to Albania",
    location: "Sarandë • Tirana",
    description: "Starting our life abroad.",
    tripSlug: "al-sarande",
  },
  {
    id: "j-11b",
    order: 11.5,
    type: "trip",
    title: "First trip after moving abroad — Milan",
    location: "Milan, Italy",
    description: "Returning to Milan to celebrate the move.",

    tripSlug: "it-milan",
  },
  {
    id: "j-12",
    order: 12,
    type: "trip",
    title: "Malta (Sliema)",
    location: "Sliema, Malta",
    description: "First Malta visit.",
    tripSlug: "mt-sliema",
  },
  {
    id: "j-13",
    order: 13,
    type: "trip",
    title: "Norway trip",
    location: "Tromsø, Norway",
    description: "Arctic adventure and new friendships.",
    tripSlug: "no-tromso",
  },
  {
    id: "j-14",
    order: 14,
    type: "trip",
    title: "Malta (Valletta)",
    location: "Valletta, Malta",
    description: "Christmas markets and historic streets.",
    tripSlug: "mt-valletta",
  },
  {
    id: "j-15",
    order: 15,
    type: "trip",
    title: "Rome trip",
    location: "Rome, Italy",
    description: "Ancient wonders and pasta-making.",
    tripSlug: "it-rome",
  },
  {
    id: "j-16",
    order: 16,
    type: "trip",
    title: "Paris trip",
    location: "Paris, France",
    description: "Iconic sights and unforgettable nights.",
    tripSlug: "fr-paris",
  },
];
