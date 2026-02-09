import type { JourneyEvent } from "../types";

export const journeyTimeline: JourneyEvent[] = [
  { id: "j-1", order: 1, type: "home", title: "Grew up in Kenosha, Wisconsin", location: "Kenosha, Wisconsin, USA", description: "Early years growing up in Kenosha." },
  { id: "j-2", order: 2, type: "move", title: "Moved to Milwaukee (5 years)", location: "Milwaukee, Wisconsin, USA", description: "Where we met and built our life together.", tripSlug: "us-milwaukee" },
  { id: "j-3", order: 3, type: "trip", title: "Chicago exploring era", location: "Chicago, Illinois, USA", description: "Frequent trips while living in Milwaukee.", tripSlug: "us-chicago" },
  { id: "j-4", order: 4, type: "trip", title: "Road trip to New Orleans", location: "New Orleans, Louisiana, USA", description: "A fun early road trip together.", tripSlug: "us-new-orleans" },
  { id: "j-5", order: 5, type: "trip", title: "Trip to Portland", location: "Portland, Oregon, USA", description: "PNW vibes and city exploring.", tripSlug: "us-portland" },
  { id: "j-6", order: 6, type: "trip", title: "Hawaii vacation", location: "Oʻahu + Kauaʻi", description: "Our first island adventure.", tripSlug: "us-hawaii" },
  { id: "j-7", order: 7, type: "move", title: "Moved to Las Vegas", location: "Las Vegas, Nevada, USA", description: "3.5 years of desert life.", tripSlug: "us-las-vegas" },
  { id: "j-8", order: 8, type: "trip", title: "Exploring while living in Vegas", location: "Western USA", description: "Road trips and nearby adventures." },
  { id: "j-9", order: 9, type: "trip", title: "Maui trip", location: "Maui, Hawaii", description: "Another island escape.", tripSlug: "us-maui" },
  { id: "j-10", order: 10, type: "trip", title: "2-week Europe trip", location: "Spain • Italy • Switzerland", description: "Barcelona, Milan, Lake Como, and Lugano.", tripSlug: "es-barcelona" },
  { id: "j-11", order: 11, type: "move", title: "Moved to Albania", location: "Sarandë • Tirana", description: "Starting our life abroad.", tripSlug: "al-sarande" },
  { id: "j-11b", order: 11.5, type: "trip", title: "First trip after moving abroad — Milan", location: "Milan, Italy", description: "Returning to Milan to celebrate the move.", tripSlug: "it-milan" },
  { id: "j-12", order: 12, type: "trip", title: "Malta (Sliema)", location: "Sliema, Malta", description: "First Malta visit.", tripSlug: "mt-sliema" },
  { id: "j-13", order: 13, type: "trip", title: "Norway trip", location: "Tromsø, Norway", description: "Arctic adventure and new friendships.", tripSlug: "no-tromso" },
  { id: "j-14", order: 14, type: "trip", title: "Malta (Valletta)", location: "Valletta, Malta", description: "Christmas markets and historic streets.", tripSlug: "mt-valletta" },
  { id: "j-15", order: 15, type: "trip", title: "Rome trip", location: "Rome, Italy", description: "Ancient wonders and pasta-making.", tripSlug: "it-rome" },
  { id: "j-16", order: 16, type: "trip", title: "Paris trip", location: "Paris, France", description: "Iconic sights and unforgettable nights.", tripSlug: "fr-paris" },
];
