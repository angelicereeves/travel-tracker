import type { TimelineEvent, Country, CountryTrip } from "./types";
import type { JourneyEvent } from "./types";

export const journeyTimeline: JourneyEvent[] = [
  {
    id: "j-1",
    order: 1,
    type: "home",
    title: "Grew up in the Milwaukee area",
    location: "Wisconsin, USA",
    description: "Early years in the Milwaukee area.",
  },
  {
    id: "j-2",
    order: 2,
    type: "move",
    title: "Moved to Milwaukee (5 years)",
    location: "Milwaukee, Wisconsin, USA",
    description:
      "Lived in Milwaukee for 5 years — this is where I met my wife.",
    highlights: ["Met my wife in Milwaukee"],
  },
  {
    id: "j-3",
    order: 3,
    type: "trip",
    title: "Chicago exploring era",
    location: "Chicago, Illinois, USA",
    description:
      "We would always go explore Chicago while living in Milwaukee.",
  },
  {
    id: "j-4",
    order: 4,
    type: "trip",
    title: "Brief road trip to New Orleans",
    location: "New Orleans, Louisiana, USA",
    description: "A quick road trip adventure together.",
  },
  {
    id: "j-5",
    order: 5,
    type: "trip",
    title: "Trip to Portland",
    location: "Portland, Oregon, USA",
    description: "A trip to the Pacific Northwest.",
  },
  {
    id: "j-6",
    order: 6,
    type: "trip",
    title: "1-week Hawaii vacation",
    location: "Oʻahu + Kauaʻi, Hawaii, USA",
    description:
      "A week-long vacation visiting Oʻahu and Kauaʻi.",
    highlights: ["Visited Oʻahu", "Visited Kauaʻi"],
  },
  {
    id: "j-7",
    order: 7,
    type: "move",
    title: "Moved to Las Vegas (3.5 years)",
    location: "Las Vegas, Nevada, USA",
    description:
      "Moved to Las Vegas and lived there for 3.5 years.",
  },
  {
    id: "j-8",
    order: 8,
    type: "trip",
    title: "West Coast / road trip exploring while living in LV",
    location: "LA • San Diego • Monterey Bay • Salt Lake City • Grand Canyon • Sacramento",
    description:
      "During our time living in Las Vegas we explored a bunch of places nearby.",
    highlights: [
      "Los Angeles",
      "San Diego",
      "Monterey Bay",
      "Salt Lake City",
      "Grand Canyon",
      "Sacramento",
    ],
  },
  {
    id: "j-9",
    order: 9,
    type: "trip",
    title: "1-week Maui trip",
    location: "Maui, Hawaii, USA",
    description: "Another week-long Hawaii trip — Maui.",
  },
  {
    id: "j-10",
    order: 10,
    type: "trip",
    title: "2-week Europe vacation (Barcelona + Milan + Lake Como + Switzerland)",
    location: "Spain • Italy • Switzerland",
    description:
      "A two-week trip: Barcelona, Milan, Como/Bellagio, and a stop in Switzerland.",
    highlights: ["Barcelona", "Milan", "Como", "Bellagio", "Lugano"],
  },
  {
    id: "j-11",
    order: 11,
    type: "move",
    title: "Moved to Albania",
    location: "Sarandë • Tirana, Albania",
    description:
      "We decided to move to Albania — exploring Sarandë and Tirana.",
    highlights: ["Sarandë (home base)", "Tirana"],
  },
  {
  id: "j-11b",
  order: 11.5,
  type: "trip",
  title: "First trip after moving abroad — Milan (return visit)",
  location: "Milan, Italy",
  description:
    "Our first trip after moving to Albania — returning to Milan felt like the perfect way to celebrate this new chapter.",
},

  {
    id: "j-12",
    order: 12,
    type: "trip",
    title: "Malta trip #1",
    location: "Sliema, Malta",
    description: "First Malta visit: stayed in Sliema.",
  },
  {
    id: "j-13",
    order: 13,
    type: "trip",
    title: "Norway trip",
    location: "Tromsø, Norway",
    description:
      "Polar cruise vibes, king crab attempts, bar hopping, karaoke, and a Northern Lights safari.",
  },
  {
    id: "j-14",
    order: 14,
    type: "trip",
    title: "Malta trip #2",
    location: "Valletta, Malta",
    dateLabel: "Before Christmas",
    description:
      "Stayed in Valletta right before Christmas — markets, famous steps dinner + wine tasting, and lots of wandering.",
  },
  {
    id: "j-15",
    order: 15,
    type: "trip",
    title: "Rome trip",
    location: "Rome, Italy",
    description:
      "Ancient sites, wandering, and a pasta-making class.",
  },
  {
    id: "j-16",
    order: 16,
    type: "trip",
    title: "Paris trip",
    location: "Paris, France",
    description:
      "Seine wandering, major landmarks, thrifting, aquarium, and nights out.",
  },
];

/** Life timeline (moves / big chapters) */
export const timeline: TimelineEvent[] = [
  {
    id: "wi-born",
    title: "Born in Wisconsin",
    dateLabel: "Early years",
    description: "Where my story started — family, seasons, and Midwest roots.",
    place: { region: "Wisconsin", country: "United States" },
  },
  {
    id: "move-vegas",
    title: "Moved to Las Vegas",
    dateLabel: "Later",
    description: "A big shift — desert heat, new chapter, and building our life.",
    place: { city: "Las Vegas", region: "Nevada", country: "United States" },
  },
  {
    id: "move-sarande",
    title: "Moved to Sarandë",
    dateLabel: "Most recent",
    description:
      "Our home base on the Ionian Sea — slow living, seaside walks, and a whole new rhythm.",
    place: { city: "Sarandë", country: "Albania" },
  },
];

/** Countries visited (used for /visited and country hero pages) */
export const countries: Country[] = [
  {
  code: "US",
  name: "United States",
  summary: "Cities, road trips, and iconic landscapes across the country.",
  theme: "sunset",
},
{ code: "AL", name: "Albania", summary: "Our home base — beaches, city life, and everyday adventures.", theme: "ocean" },
  { code: "ES", name: "Spain", summary: "Sun, cities, and tapas nights.", theme: "sunset" },
  { code: "IT", name: "Italy", summary: "Pasta, history, and long walks.", theme: "ocean" },
  { code: "NO", name: "Norway", summary: "Cold air, big views, cozy vibes.", theme: "grape" },
  { code: "MT", name: "Malta", summary: "Blue water, stone cities, island time.", theme: "lime" },
  { code: "FR", name: "France", summary: "Pastries, museums, and wandering streets.", theme: "ocean" },
  { code: "CH", name: "Switzerland", summary: "Mountains, trains, lakes, and postcard views.", theme: "grape" },
  { code: "GR", name: "Greece", summary: "Blue water, ancient ruins, and island sunsets.", theme: "sunset" },
  
  

];

/**
 * Trips inside countries
 * - This powers: /visited/[code] and /trips/[slug]
 * - Add more entries as you go!
 */
export const countryTrips: CountryTrip[] = [
  
  // ======================
// UNITED STATES
// ======================
{
  id: "us-milwaukee",
  countryCode: "US",
  slug: "us-milwaukee",
  title: "Milwaukee",
  dateLabel: "TBD",
  description:
    "Midwest roots, familiar streets, and hometown memories.",
  cities: ["Milwaukee"],
  highlights: [
    "Spent time exploring the city",
    "Visited familiar neighborhoods and spots",
    "Enjoyed local food and bars",
  ],
  notes:
    "Milwaukee will always feel grounding — a place full of memories and history for us.",
},
{
  id: "us-chicago",
  countryCode: "US",
  slug: "us-chicago",
  title: "Chicago",
  dateLabel: "TBD",
  description:
    "Big city energy, architecture, and endless things to explore.",
  cities: ["Chicago"],
  highlights: [
    "Explored downtown and neighborhoods",
    "Walked along the lakefront",
    "Enjoyed the food scene",
  ],
},
{
  id: "us-nyc",
  countryCode: "US",
  slug: "us-new-york-city",
  title: "New York City",
  dateLabel: "TBD",
  description:
    "Nonstop energy, iconic sights, and unforgettable city moments.",
  cities: ["New York City"],
  highlights: [
    "Explored different neighborhoods",
    "Saw iconic landmarks",
    "Experienced the fast-paced city vibe",
  ],
},
{
  id: "us-new-orleans",
  countryCode: "US",
  slug: "us-new-orleans",
  title: "New Orleans",
  dateLabel: "TBD",
  description:
    "Music, food, history, and an atmosphere like nowhere else.",
  cities: ["New Orleans"],
  highlights: [
    "Walked through historic areas",
    "Enjoyed the food and nightlife",
    "Soaked in the culture and music",
  ],
},
{
  id: "us-hawaii",
  countryCode: "US",
  slug: "us-hawaii",
  title: "Hawaii",
  dateLabel: "TBD",
  description:
    "Island life, ocean views, and unforgettable natural beauty.",
  cities: ["Hawaii"],
  highlights: [
    "Spent time by the ocean",
    "Explored the natural landscapes",
    "Relaxed and enjoyed island life",
  ],
},
{
  id: "us-las-vegas",
  countryCode: "US",
  slug: "us-las-vegas",
  title: "Las Vegas",
  dateLabel: "TBD",
  description:
    "Desert heat, bright lights, and a major chapter of our lives.",
  cities: ["Las Vegas"],
  highlights: [
    "Lived in Las Vegas",
    "Explored the Strip and surrounding areas",
    "Used Vegas as a base for road trips",
  ],
  notes:
    "Vegas was more than a destination — it was a huge life chapter and a launch point for so many adventures.",
},
{
  id: "us-los-angeles",
  countryCode: "US",
  slug: "us-los-angeles",
  title: "Los Angeles",
  dateLabel: "TBD",
  description:
    "Sprawling city, beach vibes, and classic California energy.",
  cities: ["Los Angeles"],
  highlights: [
    "Explored different neighborhoods",
    "Spent time near the coast",
    "Experienced the scale and diversity of the city",
  ],
},
{
  id: "us-monterey-bay",
  countryCode: "US",
  slug: "us-monterey-bay",
  title: "Monterey Bay",
  dateLabel: "TBD",
  description:
    "Coastal beauty, ocean air, and peaceful scenery.",
  cities: ["Monterey Bay"],
  highlights: [
    "Walked along the coast",
    "Enjoyed the ocean views",
    "Explored the surrounding area",
  ],
},
{
  id: "us-grand-canyon",
  countryCode: "US",
  slug: "us-grand-canyon",
  title: "Grand Canyon",
  dateLabel: "TBD",
  description:
    "One of the most awe-inspiring natural places we’ve ever seen.",
  cities: ["Grand Canyon"],
  highlights: [
    "Visited the Grand Canyon",
    "Took in the massive scale and views",
    "Explored the surrounding area",
  ],
},
{
  id: "us-portland",
  countryCode: "US",
  slug: "us-portland",
  title: "Portland",
  dateLabel: "TBD",
  description:
    "Creative energy, food, and Pacific Northwest vibes.",
  cities: ["Portland"],
  highlights: [
    "Explored the city",
    "Enjoyed local food and coffee",
    "Soaked in the PNW atmosphere",
  ],
},

  // ======================
// ALBANIA
// ======================
{
  id: "al-sarande",
  countryCode: "AL",
  slug: "al-sarande",
  title: "Sarandë",
  dateLabel: "Home Base",
  description:
    "Our coastal home — daily life, seaside walks, and exploring southern Albania.",
  cities: ["Sarandë"],
  highlights: [
    "Lived in Sarandë as our home base",
    "Explored the city and surrounding areas",
    "Spent time along the Ionian coast",
    "Enjoyed daily seaside walks and sunsets",
    "Got to know local food, cafés, and routines",
  ],
  notes:
    "Sarandë isn’t just a trip — it’s where everyday life slowed down and really started to feel like home.",
},
{
  id: "al-tirana",
  countryCode: "AL",
  slug: "al-tirana",
  title: "Tirana",
  dateLabel: "TBD",
  description:
    "A lively capital city full of color, history, and unexpected energy.",
  cities: ["Tirana"],
  highlights: [
    "Explored Tirana and its neighborhoods",
    "Experienced the contrast between old history and modern life",
    "Walked around the city center and main squares",
    "Tried local food and cafés",
  ],
  notes:
    "Tirana felt vibrant and surprising — a completely different vibe from coastal Sarandë.",
},

  
  
  // ======================
  // SPAIN
  // ======================
  {
    id: "es-1",
    countryCode: "ES",
    slug: "es-barcelona",
    title: "Barcelona",
    dateLabel: "TBD",
    description:
      "We wandered endlessly, chased Gaudí magic, and ate our way through the city.",
    cities: ["Barcelona"],
    highlights: [
      "Wandered all throughout the city",
      "Visited La Sagrada Família",
      "Did an Estrella brewery tour",
      "Went to the football stadium",
      "Visited the botanical gardens",
      "Went to the aquarium",
      "Ate lots of Spanish dishes",
      "Explored the Gothic Quarter",
      "Visited Gaudí’s park (Park Güell)",
      "…and so much more",
    ],
    notes:
      "This was one of those trips where every neighborhood felt like its own little world.",
  },

// ======================
// ITALY
// ======================
{
  id: "it-milan",
  countryCode: "IT",
  slug: "it-milan",
  title: "Milan",
  dateLabel: "TBD",
  description:
    "A perfect mix of iconic landmarks, incredible food, and vibrant city life.",
  cities: ["Milan"],
  highlights: [
    "Visited the Duomo and admired its incredible architecture",
    "Wandered around the main city center",
    "Had the BEST pizza of my life at Dallo Zio",
    "Explored the Navigli district and its canals",
    "Visited a winery for a tour and tasting",
    "Enjoyed fresh, handmade pasta",
    "Soaked up the everyday energy of the city",
  ],
  notes:
    "Milan surprised us the most — stylish but relaxed, and the food alone would be reason enough to go back.",
},
{
  id: "it-como",
  countryCode: "IT",
  slug: "it-como",
  title: "Como",
  dateLabel: "TBD",
  description:
    "Lake views, historic charm, and a dreamy day trip into northern Italy.",
  cities: ["Como"],
  highlights: [
    "Took a guided day trip to Como and Bellagio",
    "Explored the town of Como and the shores of Lake Como",
    "Visited several churches with historical significance",
    "Did some relaxed shopping around the town",
    "Enjoyed the slower, lakeside pace of life",
  ],
  notes:
    "Como felt peaceful and elegant — the kind of place where you just want to sit by the water and stay a while.",
},
{
  id: "it-bellagio",
  countryCode: "IT",
  slug: "it-bellagio",
  title: "Bellagio",
  dateLabel: "TBD",
  description:
    "Pure magic — winding staircases, lake views, and unforgettable food.",
  cities: ["Bellagio"],
  highlights: [
    "Ate the best cacio e pepe of my life",
    "Had the most incredible tiramisu at a hidden restaurant up cobblestone staircases",
    "Walked and explored the entire town",
    "Found beautiful viewpoints and tucked-away corners",
    "Soaked in the storybook atmosphere",
  ],
  notes:
    "Bellagio felt unreal — like wandering through a postcard where every turn was better than the last.",
},
{
  id: "it-rome",
  countryCode: "IT",
  slug: "it-rome",
  title: "Rome",
  dateLabel: "TBD",
  description:
    "History everywhere you look — ancient sites, timeless streets, and unforgettable experiences.",
  cities: ["Rome"],
  highlights: [
    "Visited the Colosseum",
    "Saw the Pantheon",
    "Threw coins into the Trevi Fountain",
    "Explored the Vatican",
    "Wandered freely through ancient streets and ruins",
    "Took a pasta-making class",
  ],
  notes:
    "Rome felt endless — every walk turned into a history lesson, and the pasta-making class was such a highlight.",
},


  // ======================
// NORWAY
// ======================
{
  id: "no-tromso",
  countryCode: "NO",
  slug: "no-tromso",
  title: "Tromsø",
  dateLabel: "TBD",
  description:
    "Arctic adventures, unexpected friendships, and unforgettable nights under the northern sky.",
  cities: ["Tromsø"],
  highlights: [
    "Went on a polar expedition cruise around Tromsø",
    "Tried to catch king crab",
    "Met people from Las Vegas and spent the night bar hopping together",
    "Met locals at a work party and joined them for karaoke",
    "Went bowling and played darts with new friends",
    "Went on a Northern Lights safari",
    "Visited the Christmas Market"
  ],
  notes:
    "Norway surprised us with how social and fun it was — equal parts adventure and late nights with people we’ll never forget.",
},


  

  // ======================
// MALTA
// ======================
{
  id: "mt-sliema",
  countryCode: "MT",
  slug: "mt-sliema",
  title: "Sliema",
  dateLabel: "TBD",
  description:
    "Coastal walks, great food, and an easygoing introduction to Malta.",
  cities: ["Sliema"],
  highlights: [
    "Stayed in Sliema and wandered around the area",
    "Explored the waterfront and nearby neighborhoods",
    "Ate delicious, authentic Indian food",
    "Visited the Malta National Aquarium",
    "Enjoyed the relaxed seaside atmosphere",
  ],
  notes:
    "Sliema felt comfortable and lively — a great place to settle in and explore at our own pace.",
},
{
  id: "mt-valletta",
  countryCode: "MT",
  slug: "mt-valletta",
  title: "Valletta (Christmas Trip)",
  dateLabel: "December",
  description:
    "Festive lights, historic streets, and unforgettable evenings in Malta’s capital.",
  cities: ["Valletta"],
  highlights: [
    "Stayed in Valletta right before Christmas",
    "Explored the Christmas market",
    "Wandered the steep, hilly streets of the city",
    "Had dinner and a wine tasting on Valletta’s most famous steps",
    "Visited the war memorial park",
    "Walked around the marina",
    "Checked out the food hall",
  ],
  notes:
    "Valletta during the holidays was pure magic — historic, cozy, and full of atmosphere.",
},


  // ======================
// FRANCE
// ======================
{
  id: "fr-paris",
  countryCode: "FR",
  slug: "fr-paris",
  title: "Paris",
  dateLabel: "TBD",
  description:
    "Iconic sights, wandering along the Seine, great food, and unforgettable nights out.",
  cities: ["Paris"],
  highlights: [
    "Wandered around the city along the Seine River",
    "Saw the Eiffel Tower",
    "Visited the Louvre",
    "Visited the Arc de Triomphe",
    "Went to the Living Cheese Museum",
    "Saw Notre-Dame Cathedral",
    "Did a lot of thrifting around the city",
    "Visited the aquarium",
    "Went to a lesbian bar",
    "Went to an absinthe bar",
  ],
  notes:
    "Paris felt effortlessly cool — equal parts historic, artsy, and fun, with something memorable around every corner.",
},


  // ======================
// SWITZERLAND
// ======================
{
  id: "ch-lugano",
  countryCode: "CH",
  slug: "ch-lugano",
  title: "Lugano",
  dateLabel: "TBD",
  description:
    "A short but memorable stop — lakeside views, history, and Swiss charm.",
  cities: ["Lugano"],
  highlights: [
    "Stopped in Lugano for a few hours",
    "Visited churches with deep historical significance",
    "Bought fancy Swiss chocolate",
    "Explored the Christmas market",
    "Wandered through town",
    "Walked along the water’s edge and enjoyed the views",
  ],
  notes:
    "Even with just a few hours, Lugano left a strong impression — peaceful, elegant, and incredibly scenic.",
},


  // ======================
// GREECE
// ======================
{
  id: "gr-corfu",
  countryCode: "GR",
  slug: "gr-corfu",
  title: "Corfu (So Far)",
  dateLabel: "TBD",
  description:
    "A brief stop on our way through — with plans to return and really explore.",
  cities: ["Corfu"],
  highlights: [
    "Passed through Corfu Airport",
    "Visited the port to catch a ferry to Sarandë",
    "Got a first glimpse of Greece while in transit",
  ],
  notes:
    "This was more of a transit stop than a full visit — we’re heading back soon to properly explore Corfu and experience Greece beyond the airport and port.",
},

];
