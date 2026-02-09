import type { CountryTrip } from "../../types";
import {
  switzerlandPhotos,

} from "../../media/switzerland";

export const switzerlandTrips: CountryTrip[] = [
  {
    id: "ch-lugano",
    countryCode: "CH",
    slug: "ch-lugano",
    title: "Lugano",
    kind: "short",
    description: "A short but beautiful stop.",
    cities: ["Lugano"],
    highlights: ["Churches", "Chocolate", "Lake views"],
    photos: switzerlandPhotos,
   foodHighlights: [
  {
    name: "Cheese fondue",
    place: "Traditional Swiss restaurants",
    note:
      "Rich, bubbling melted cheese served with bread for dipping — cozy, indulgent, and deeply comforting.",
    emoji: "🫕",
  },
  {
    name: "Swiss chocolate",
    place: "Chocolate shops & cafés",
    note:
      "Smooth, high-quality chocolate everywhere you look. Sampling different varieties felt mandatory.",
    emoji: "🍫",
  },
],

  },
];
