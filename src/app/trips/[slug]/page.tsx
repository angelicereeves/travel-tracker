import Link from "next/link";
import { countries, countryTrips } from "@/lib/data";

function themeClasses(theme?: string) {
  switch (theme) {
    case "sunset":
      return "from-pink-500 via-rose-400 to-yellow-300";
    case "ocean":
      return "from-sky-500 via-cyan-400 to-emerald-300";
    case "lime":
      return "from-lime-400 via-emerald-300 to-sky-300";
    case "grape":
      return "from-violet-500 via-fuchsia-400 to-pink-300";
    default:
      return "from-sky-500 via-cyan-400 to-emerald-300";
  }
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const trip = countryTrips.find((t) => t.slug === slug);

  if (!trip) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Trip not found</h1>
        <p className="text-sm text-slate-600">
          Received slug: <code>{String(slug)}</code>
        </p>
        <Link className="underline" href="/visited">
          Back to Visited
        </Link>
      </div>
    );
  }

  const country = countries.find((c) => c.code === trip.countryCode);

  const heroTheme = themeClasses(country?.theme);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div
        className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${heroTheme} p-10 shadow-lg text-white`}
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-extrabold bg-white/20 px-4 py-2 rounded-full">
              🧳 {country?.name ?? trip.countryCode}
              {trip.cities?.length ? ` • ${trip.cities.join(", ")}` : ""}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              {trip.title}
            </h1>

            {trip.dateLabel && (
              <p className="mt-4 inline-flex items-center text-xs font-extrabold bg-white/20 px-4 py-2 rounded-full">
                📅 {trip.dateLabel}
              </p>
            )}

            <p className="mt-4 max-w-2xl text-white/90 font-medium">
              {trip.description}
            </p>
          </div>

          <Link
            href={`/visited/${trip.countryCode}`}
            className="px-5 py-2.5 rounded-full bg-white text-sky-800 font-bold shadow hover:scale-105 transition"
          >
            ← Back to {country?.name ?? "Country"}
          </Link>
        </div>
      </div>

      {/* What we did */}
      <div className="rounded-[2rem] bg-white shadow-md p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-sky-900">What we did</h2>
            <p className="mt-2 text-sm text-slate-700">
              Highlights from the trip. (We’ll add photos and videos later.)
            </p>
          </div>
          <div className="text-2xl">✨</div>
        </div>

        <ul className="mt-5 space-y-3">
          {trip.highlights.map((h, idx) => (
            <li key={idx} className="flex gap-3 text-slate-700">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-400 shrink-0" />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Notes */}
      {trip.notes && (
        <div className="rounded-[2rem] bg-white shadow-md p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-extrabold text-sky-900">Little notes</h2>
              <p className="mt-2 text-sm text-slate-700">
                Extra memories, vibes, and things you don’t want to forget.
              </p>
            </div>
            <div className="text-2xl">📝</div>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">{trip.notes}</p>
        </div>
      )}
    </div>
  );
}
