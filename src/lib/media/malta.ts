// src/lib/media/malta.ts
import type { TripPhoto, TripVideo } from "../types";

export const maltaPhotos: TripPhoto[] = Array.from(
  { length: 30 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/malta/malta${n}.jpg`,
      alt: `Malta photo ${n}`,
    };
  }
);

export const maltaVideos: TripVideo[] = [
  { src: "/trips/malta/maltavideo1.mp4", title: "Malta video 1" },
  { src: "/trips/malta/maltavideo2.mp4", title: "Malta video 2" },
];
