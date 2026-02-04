import Link from "next/link";
import { countryTrips } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
          Gallery
        </h1>
        <p className="mt-2 text-slate-700">
          Coming soon — we’ll add photo galleries for each trip.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
        <h2 className="text-xl font-extrabold text-sky-900">Trips</h2>
        <p className="mt-2 text-sm text-slate-700">
          For now, this is a placeholder list. Later we can show “featured”
          photos and filters.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countryTrips.map((t) => (
            <Link
              key={t.slug}
              href={`/trips/${t.slug}`}
              className="rounded-2xl border border-sky-100 bg-sky-50/40 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="text-sm font-extrabold text-sky-900">
                {t.title}
              </div>
              <div className="mt-1 text-xs font-bold text-slate-600">
                {t.countryCode}
              </div>

              <div className="mt-3 text-sm font-semibold text-sky-800 underline">
                Open trip →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
