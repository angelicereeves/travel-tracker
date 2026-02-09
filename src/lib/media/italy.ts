// src/lib/media/italy.ts
import type { TripPhoto, TripVideo } from "../types";

/* ======================
   MILAN
====================== */

export const milanPhotos: TripPhoto[] = Array.from(
  { length: 27 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/italy/milan/milan${n}.jpg`,
      alt: `Milan photo ${n}`,
    };
  }
);

export const milanVideos: TripVideo[] = [
  { src: "/trips/italy/milan/milanvideo1.mp4", title: "Milan video 1" },
  { src: "/trips/italy/milan/milanvideo2.mp4", title: "Milan video 2" },
];

/* ======================
   LAKE COMO (Como + Bellagio)
====================== */



export const lakeComoPhotos: TripPhoto[] = Array.from(
  { length: 17 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/italy/lakeComo/lakecomo${n}.jpg`,
      alt: `Lake Como photo ${n}`,
    };
  }
);

export const lakeComoVideos: TripVideo[] = Array.from(
  { length: 4 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/italy/lakeComo/lakecomovideo${n}.mp4`,
      title: `Lake Como video ${n}`,
    };
  }
);

/* ======================
   ROME
====================== */

export const romePhotos: TripPhoto[] = Array.from(
  { length: 33 },
  (_, i) => {
    const n = i + 1;
    return {
      src: `/trips/italy/rome/rome${n}.jpg`,
      alt: `Rome photo ${n}`,
    };
  }
);

export const romeVideos: TripVideo[] = [
  { src: "/trips/italy/rome/romevideo1.mp4", title: "Rome video 1" },
  { src: "/trips/italy/rome/romevideo2.mp4", title: "Rome video 2" },
];
