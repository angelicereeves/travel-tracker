import type { TimelineEvent } from "../types";

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
