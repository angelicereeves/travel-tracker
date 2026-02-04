import Link from "next/link";
import { getCountryByCode, getTripsForCountry } from "@/lib/countries";

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

export default async function CountryPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const country = getCountryByCode(code);

  if (!country) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Country not found</h1>
        <p className="text-sm text-slate-600">
          Received code: <code>{String(code)}</code>
        </p>
        <Link className="underline" href="/visited">
          Back to Visited
        </Link>
      </div>
    );
  }

  const trips = getTripsForCountry(country.code);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div
        className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${themeClasses(
          country.theme
        )} p-10 shadow-lg text-white`}
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-extrabold bg-white/20 px-4 py-2 rounded-full">
              🌍 {country.code}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              {country.name}
            </h1>
            {country.summary && (
              <p className="mt-3 max-w-2xl text-white/90 font-medium">
                {country.summary}
              </p>
            )}
          </div>

          <Link
            href="/visited"
            className="px-5 py-2.5 rounded-full bg-white text-sky-800 font-bold shadow hover:scale-105 transition"
          >
            ← Back
          </Link>
        </div>
      </div>

      {/* Trips */}
      <div className="rounded-[2rem] bg-white shadow-md p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-sky-900">
              Trips & Places
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Click a trip to see what we did. Later, we’ll add photos and
              videos.
            </p>
          </div>
          <div className="text-2xl">📌</div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {trips.length === 0 ? (
            <p className="text-sm text-slate-700">
              No trips added yet. Add one in <code>src/lib/data.ts</code>.
            </p>
          ) : (
            trips.map((t) => (
              <Link
                key={t.id}
                href={`/trips/${t.slug}`}
                className="block rounded-[2rem] border border-sky-100 bg-sky-50/40 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-extrabold text-sky-900">
                    {t.title}
                  </h3>
                  {t.dateLabel && (
                    <span className="text-xs font-bold text-sky-700 bg-white/70 border border-sky-100 px-3 py-1 rounded-full">
                      {t.dateLabel}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  {t.description}
                </p>

                <div className="mt-4 text-sm font-bold text-sky-900">
                  Open trip →
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
