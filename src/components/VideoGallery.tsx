"use client";

import type { TripVideo } from "@/lib/types";

export default function VideoGallery({
  videos,
  title = "Videos",
}: {
  videos?: TripVideo[];
  title?: string;
}) {
  if (!videos || videos.length === 0) {
    return (
      <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-sky-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-700">
              Videos coming soon 🎥
            </p>
          </div>
          <div className="text-2xl">🎬</div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="aspect-video rounded-2xl border border-sky-100 bg-sky-50/50 shadow-sm"
            />
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Videos will live in <code>public/videos/trips/&lt;trip-slug&gt;/</code>{" "}
          or be embedded later.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-sky-900">{title}</h2>
          <p className="mt-2 text-sm text-slate-700">
            Short clips from this trip.
          </p>
        </div>
        <div className="text-2xl">🎬</div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((v) => (
          <div
            key={v.src}
            className="rounded-2xl overflow-hidden border border-sky-100 shadow-sm bg-black"
          >
            <video
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src={v.src} />
              Your browser does not support the video tag.
            </video>

            {v.title && (
              <div className="p-3 text-sm font-semibold text-slate-700 bg-white">
                {v.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
