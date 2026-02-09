import type { TripPhoto, TripVideo } from "../types";

export const barcelonaPhotos: TripPhoto[] = Array.from({ length: 29 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/trips/spain/barcelona${n}.jpg`,
    alt: `Barcelona photo ${n}`,
    // optional (leave out if you don’t know exact sizes)
    // width: 1200,
    // height: 900,
  };
});

export const barcelonaVideos: TripVideo[] = [
  { src: "/trips/spain/barcelonavideo1.mp4", title: "Barcelona video 1" },
  { src: "/trips/spain/barcelonavideo2.mp4", title: "Barcelona video 2" },
];
