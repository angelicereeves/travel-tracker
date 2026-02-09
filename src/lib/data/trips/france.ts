import { parisPhotos, parisVideos } from "../../media/france";
import type { CountryTrip } from "../../types";

export const franceTrips: CountryTrip[] = [
  {
    id: "fr-paris",
    countryCode: "FR",
    slug: "fr-paris",
    title: "Paris",
    description: "Iconic sights, thrifting, and nightlife.",
    cities: ["Paris"],
    highlights: ["Eiffel Tower", "Louvre", "Absinthe bar", "Japanese Lantern Festival", "Notre Dame", "Thrift Shopping", "L'Arc de Triomphe"],
    photos: parisPhotos,
    videos: parisVideos,

    foodHighlights: [
      {
        name: "French cheeses (many, many kinds)",
        place: "Fromageries & markets",
        note:
          "Soft, funky, nutty, creamy — tasting our way through French cheese felt like a cultural experience on its own.",
        emoji: "🧀",
      },
      {
        name: "Crêpes (sweet & savory)",
        place: "Street stands",
        note:
          "Hot, thin crêpes made to order. Nutella, sugar and lemon, or cheese — impossible to choose just one.",
        emoji: "🥞",
      },
      {
        name: "Pain au chocolat",
        place: "Bakeries",
        note:
          "Flaky, buttery layers with rich chocolate inside. Ate them constantly and never got tired of it.",
        emoji: "🥐",
      },
      {
        name: "Pizza",
        place: "Neighborhood pizzerias",
        note:
          "Surprisingly excellent — thin crust, quality cheese, and simple vegetarian toppings done right.",
        emoji: "🍕",
      },
      {
        name: "French onion soup",
        place: "Classic bistros",
        note:
          "Deeply caramelized onions, rich broth, and a bubbling cheese crust. Comfort food at its finest.",
        emoji: "🧅",
      },
      {
        name: "Ratatouille",
        place: "Traditional French kitchens",
        note:
          "Stewed summer vegetables with herbs and olive oil — rustic, hearty, and naturally vegetarian.",
        emoji: "🍆",
      },
      {
        name: "Vegetarian quiche",
        place: "Cafés & bakeries",
        note:
          "Eggy, creamy, and filled with vegetables and cheese. Perfect with a simple salad.",
        emoji: "🥧",
      },
      {
        name: "Cheese plates with bread & wine",
        place: "Wine bars",
        note:
          "Crusty bread, multiple cheeses, and a glass of wine — peak Paris evening energy.",
        emoji: "🍷",
      },
    ],
  },
];
