// src/lib/media/france.ts
import type { TripPhoto, TripVideo } from "../types";

export const parisPhotos: TripPhoto[] = Array.from(
  { length: 21 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/france/paris${n}.JPG`,
      alt: `Paris photo ${n}`,
    };
  }
);

export const parisVideos: TripVideo[] = [
  { src: "/trips/france/parisvideo1.mp4", title: "Paris video 1" },
  { src: "/trips/france/parisvideo2.mp4", title: "Paris video 2" },
  { src: "/trips/france/parisvideo3.mp4", title: "Paris video 3" },
  { src: "/trips/france/parisvideo4.mp4", title: "Paris video 4" },
  { src: "/trips/france/parisvideo5.mp4", title: "Paris video 5" },
  { src: "/trips/france/parisvideo6.mp4", title: "Paris video 6" },
  
];
