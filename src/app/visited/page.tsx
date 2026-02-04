import Link from "next/link";
import { countries } from "@/lib/data";

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

export default function VisitedPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
          Visited Countries
        </h1>
        <p className="mt-2 text-slate-700">
          Click a country to see exactly where we went and what we did.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((c) => (
          <Link
            key={c.code}
            href={`/visited/${c.code}`}
            className="group rounded-[2rem] overflow-hidden shadow-md hover:shadow-lg transition bg-white"
          >
            {/* Color header */}
            <div
              className={`h-24 bg-gradient-to-r ${themeClasses(
                c.theme
              )} relative`}
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-slate-500">
                    {c.code}
                  </div>
                  <div className="text-xl font-extrabold text-sky-900">
                    {c.name}
                  </div>
                </div>

                <div className="text-lg">🧳</div>
              </div>

              {c.summary && (
                <p className="mt-3 text-sm text-slate-700">{c.summary}</p>
              )}

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-900">
                View trips
                <span className="inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
