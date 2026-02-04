import Link from "next/link";
import { mapPoints } from "@/lib/mapPoints";

export default function LocationsPage() {
  // show only unique labels/cities (and ignore duplicates if you add them later)
  const locations = [...mapPoints]
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
          Locations
        </h1>
        <p className="mt-2 text-slate-700">
          Coming soon — this will break down trips by specific cities and towns.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-sky-900">
              All pinned locations
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              For now this is a simple list from your map. Later we’ll make each
              location clickable and show galleries, food, and notes.
            </p>
          </div>
          <div className="text-2xl">📍</div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-sky-100 bg-sky-50/40 p-5 shadow-sm"
            >
              <div className="text-sm font-extrabold text-sky-900">
                {p.label}
              </div>
              <div className="mt-1 text-xs font-bold text-slate-600">
                {p.countryCode ?? "—"}
              </div>

              {p.tripSlug ? (
                <Link
                  href={`/trips/${p.tripSlug}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline"
                >
                  Open related trip →
                </Link>
              ) : (
                <div className="mt-3 text-xs text-slate-500">
                  Trip details coming soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/map"
        className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline"
      >
        Back to Map →
      </Link>
    </div>
  );
}
