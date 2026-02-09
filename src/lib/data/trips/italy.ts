import type { CountryTrip } from "../../types";
import {
  milanPhotos,
  milanVideos,
  lakeComoPhotos,
  lakeComoVideos,
  romePhotos,
  romeVideos,
} from "../../media/italy";




export const italyTrips: CountryTrip[] = [
  {
  id: "it-milan",
  countryCode: "IT",
  slug: "it-milan",
  title: "Milan",
  description: "Style, food, and iconic landmarks.",
  cities: ["Milan"],
  highlights: [
  "Duomo",
  "Sforza Castle",
  "Visited Fashion District",
  "Winery visit",
  "Best pizza ever",
],

  photos: milanPhotos,
  videos: milanVideos,
  foodHighlights: [
    {
      name: "Pizza at Dallo Zio",
      place: "Dallo Zio",
      note:
        "Hands down the best pizza we’ve ever had. Perfect crust, incredible cheese, and simple toppings done absolutely right.",
      emoji: "🍕",
    },
    {
      name: "Parmesan cream & mushroom ravioli",
      place: "Local restaurant",
      note:
        "Rich, creamy parmesan sauce with earthy mushrooms — indulgent, comforting, and unforgettable.",
      emoji: "🍄",
    },
    {
      name: "Truffle potato gnocchi",
      place: "Italian trattoria",
      note:
        "Soft potato gnocchi coated in a truffle-forward sauce. Deeply savory and one of those dishes you think about later.",
      emoji: "🍄‍🟫",
    },
    {
      name: "Fresh pasta everywhere",
      place: "Across Milan",
      note:
        "So many incredible vegetarian pasta dishes that it was impossible to pick a favorite. Milan seriously delivers on food.",
      emoji: "🍝",
    },
  ],



  },
{
  id: "it-lake-como",
  countryCode: "IT",
  slug: "it-lake-como",
  title: "Lake Como (Como & Bellagio)",
  description:
    "A dreamy Lake Como day trip filled with ferry rides, postcard-perfect views, and slow meals by the water.",
  cities: ["Como", "Bellagio"],
  highlights: [
    "Lake Como views",
    "Ferry ride across the lake",
    "Como & Bellagio old towns",
    "Cacio e pepe",
    "Tiramisu",
    "Lakefront espresso stops",
  ],
  photos: lakeComoPhotos,
  videos: lakeComoVideos,
  foodHighlights: [
  {
    name: "Perch risotto",
    place: "Lake Como",
    note:
      "A local lake specialty — delicate, comforting, and perfect for a slow meal by the water.",
    emoji: "🍚",
  },
  {
    name: "Cacio e pepe",
    place: "Bellagio",
    note:
      "Hands down the best cacio e pepe we’ve ever had. Creamy, peppery, and flawlessly balanced.",
    emoji: "🧀",
  },
  {
    name: "Tiramisu",
    place: "Bellagio",
    note:
      "Classic, rich, and exactly what you want after a lakefront meal.",
    emoji: "🍰",
  },
  {
    name: "Lakefront espresso & pastries",
    place: "Como",
    note:
      "Quick coffee stops with postcard views — simple pleasures done perfectly.",
    emoji: "☕",
  },
  {
    name: "Fresh pasta dishes",
    place: "Restaurants around the lake",
    note:
      "Excellent vegetarian pasta options everywhere — simple sauces, quality ingredients, zero misses.",
    emoji: "🍝",
  },
],

},

{
  id: "it-rome",
  countryCode: "IT",
  slug: "it-rome",
  title: "Rome",
  description:
    "Ancient history everywhere you look — layered, chaotic, and unforgettable.",
  cities: ["Rome"],
  highlights: [
    "Colosseum",
    "Pantheon",
    "Roman Forum",
    "Pasta class",
    "Endless wandering",
  ],
  photos: romePhotos,
  videos: romeVideos,
  foodHighlights: [
    {
      name: "Cacio e pepe",
      place: "Roman trattorias",
      note:
        "Simple, bold, and perfectly balanced. Rome does this dish like nowhere else.",
      emoji: "🧀",
    },
    {
      name: "Margherita pizza",
      place: "Neighborhood pizzerias",
      note:
        "Thin crust, bright tomato sauce, and fresh mozzarella — simple and perfect.",
      emoji: "🍕",
    },
    {
      name: "Pasta-making class (vegetarian-friendly)",
      place: "Rome",
      note:
        "Learning to make fresh pasta by hand was one of the most fun experiences of the trip.",
      emoji: "🍝",
    },
    {
      name: "Supplì",
      place: "Street food spots",
      note:
        "Crispy rice balls with melty cheese inside — the ideal snack while exploring.",
      emoji: "🍘",
    },
    {
      name: "Gelato (constantly)",
      place: "Everywhere",
      note:
        "Multiple gelato stops per day — the only correct way to see Rome.",
      emoji: "🍦",
    },
  ],
},

];
