// src/lib/media/switzerland.ts
import type { TripPhoto, TripVideo } from "../types";

export const switzerlandPhotos: TripPhoto[] = Array.from(
  { length: 9 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/switzerland/switzerland${n}.jpg`,
      alt: `Switzerland photo ${n}`,
    };
  }
);

// No videos for Switzerland (yet)
export const switzerlandVideos: TripVideo[] = [];
