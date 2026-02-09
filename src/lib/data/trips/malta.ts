import type { CountryTrip } from "../../types";
import { maltaPhotos, maltaVideos } from "../../media/malta";

export const maltaTrips: CountryTrip[] = [
  {
    id: "mt-valletta",
    countryCode: "MT",
    slug: "mt-valletta",
    title: "Valletta (Christmas)",
    description: "Festive streets, historic views, and unforgettable evenings.",
    cities: ["Valletta"],
    highlights: ["Christmas market", "Wine tasting", "Appertivo", "Food Market", "Old city walks", "Explored War Memorial", "Went ot Aquarium"],
    photos: maltaPhotos,
    videos: maltaVideos,

    foodHighlights: [
        {
  name: "Is-Suq tal-Belt food hall",
  place: "Valletta",
  note:
    "A historic indoor market turned modern food hall — lots of options, easy to eat vegetarian, and a great place to sample different flavors.",
  emoji: "🏛️",
},
{
  name: "The Bagel Hole",
  place: "Valletta",
  note:
    "Fresh bagels with solid vegetarian options. Casual, comforting, and exactly what we needed between exploring sessions.",
  emoji: "🥯",
},

        {
  name: "Drunken dumplings",
  place: "Wine bar / restaurant",
  note:
    "Soft dumplings served in a wine-forward sauce — rich, cozy, and exactly the kind of dish you want on a cool evening.",
  emoji: "🥟",
},
{
  name: "Pumpkin pasta",
  place: "Old town restaurant",
  note:
    "Creamy, slightly sweet pumpkin sauce with pasta — comforting, seasonal, and an unexpected standout.",
  emoji: "🎃",
},

      {
        name: "Mulled wine",
        place: "Christmas market",
        note:
          "Warm, spiced, and perfect for wandering Valletta’s festive streets.",
        emoji: "🍷",
      },
      {
        name: "Pastizzi (ricotta or pea)",
        place: "Local bakeries",
        note:
          "Flaky pastry pockets — cheap, iconic, and vegetarian-friendly.",
        emoji: "🥟",
      },
      {
        name: "Vegetarian Mediterranean pasta",
        place: "Old town restaurants",
        note:
          "Simple pasta with olive oil, vegetables, and local flavors — easy and comforting.",
        emoji: "🍝",
      },
      {
        name: "Gelato",
        place: "City streets",
        note:
          "A must between sightseeing stops, even in cooler weather.",
        emoji: "🍦",
      },
    ],
  },
];

