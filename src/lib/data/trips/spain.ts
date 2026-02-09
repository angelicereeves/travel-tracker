import type { CountryTrip } from "../../types";
import { barcelonaPhotos, barcelonaVideos } from "../../media/spain";

export const spainTrips: CountryTrip[] = [
  {
    id: "es-barcelona",
    countryCode: "ES",
    slug: "es-barcelona",
    title: "Barcelona",
    description: "Gaudí, endless wandering, and incredible food.",
    cities: ["Barcelona"],
    highlights: ["Sagrada Família", "Gothic Quarter", "Brewery tour", "Park Güell"],
    photos: barcelonaPhotos,
    videos: barcelonaVideos,
    foodHighlights: [
      {
        name: "Artichoke tapas with black garlic sauce",
        place: "Tapas bar",
        note:
          "Hands-down our favorite dish. Crispy-tender artichokes with a deep, savory black garlic sauce — rich, umami, and unforgettable.",
        emoji: "🌿",
      },
      {
        name: "Vegetarian croquetas",
        place: "Tapas bar",
        note:
          "Golden and crunchy on the outside, creamy inside. Mushroom and cheese versions were especially good.",
        emoji: "✨",
      },
      {
        name: "Pa amb tomàquet",
        place: "Everywhere",
        note:
          "Toasted bread rubbed with fresh tomato, olive oil, and salt. Simple, perfect, and always vegetarian.",
        emoji: "🍅",
      },
      {
        name: "Grilled seasonal vegetables",
        place: "Local Catalan restaurants",
        note:
          "Charred zucchini, peppers, and onions with olive oil and sea salt — rustic and satisfying.",
        emoji: "🥬",
      },
      {
        name: "Churros with hot chocolate",
        place: "Late-night dessert stop",
        note:
          "Crispy churros dipped into thick, almost-pudding chocolate. A must after wandering the city.",
        emoji: "🍫",
      },
      {
        name: "Cava",
        place: "Tapas nights & terraces",
        note:
          "Light, dry, and refreshing — the perfect vegetarian-friendly pairing for tapas.",
        emoji: "🥂",
      },
    ],
  },
];
