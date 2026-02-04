import Image from "next/image";
import type { FoodHighlight } from "@/lib/types";

export default function FoodHighlights({
  items,
  title = "Food Highlights",
}: {
  items?: FoodHighlight[];
  title?: string;
}) {
  if (!items || items.length === 0) {
    return (
      <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-sky-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-700">
              Food highlights coming soon 🍝
            </p>
          </div>
          <div className="text-2xl">🍴</div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5 shadow-sm"
            >
              <div className="h-4 w-24 rounded bg-sky-100/80" />
              <div className="mt-3 h-3 w-40 rounded bg-sky-100/70" />
              <div className="mt-4 h-3 w-32 rounded bg-sky-100/60" />
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Add items in <code>src/lib/data.ts</code> under{" "}
          <code>foodHighlights</code>.
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
            The best bites we still talk about.
          </p>
        </div>
        <div className="text-2xl">🍴</div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((f, i) => (
          <div
            key={`${f.name}-${i}`}
            className="rounded-2xl border border-sky-100 bg-sky-50/50 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {f.image && (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={f.image.src}
                  alt={f.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-extrabold text-sky-900">
                    {f.name}
                  </div>
                  {f.place && (
                    <div className="mt-1 text-xs font-bold text-sky-700">
                      {f.place}
                    </div>
                  )}
                </div>
                <div className="text-2xl">{f.emoji ?? "🍽️"}</div>
              </div>

              {f.note && (
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  {f.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
