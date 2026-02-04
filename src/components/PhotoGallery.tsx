"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { TripPhoto } from "@/lib/types";

export default function PhotoGallery({
  photos,
  title = "Photo Gallery",
}: {
  photos?: TripPhoto[];
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () =>
      (photos ?? []).map((p) => ({
        src: p.src,
        alt: p.alt,
      })),
    [photos]
  );

  if (!photos || photos.length === 0) {
    return (
      <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-sky-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-700">
              Photos coming soon 💛
            </p>
          </div>
          <div className="text-2xl">📸</div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl border border-sky-100 bg-sky-50/50 shadow-sm"
            />
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Later you’ll drop images in <code>public/photos/trips/&lt;trip-slug&gt;/</code>{" "}
          and add the list to <code>src/lib/data.ts</code>.
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
            Click a photo to view full screen.
          </p>
        </div>
        <div className="text-2xl">📸</div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-sky-100 bg-sky-50 shadow-sm hover:shadow-md transition"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-[1.03] transition"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition">
              <div className="text-xs font-bold text-white line-clamp-2">
                {p.alt}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </div>
  );
}
