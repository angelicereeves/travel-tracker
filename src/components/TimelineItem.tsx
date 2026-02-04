import Link from "next/link";
import type { JourneyEvent } from "@/lib/types";

function badge(type: JourneyEvent["type"]) {
  switch (type) {
    case "move":
      return "bg-white/70 border border-sky-100 text-sky-800";
    case "home":
      return "bg-white/70 border border-emerald-100 text-emerald-800";
    case "trip":
    default:
      return "bg-white/70 border border-pink-100 text-pink-800";
  }
}

function label(type: JourneyEvent["type"]) {
  switch (type) {
    case "move":
      return "Move";
    case "home":
      return "Home";
    case "trip":
    default:
      return "Trip";
  }
}

export default function TimelineItem({
  event,
  index,
}: {
  event: JourneyEvent;
  index: number;
}) {
  const dotBg = [
    "bg-pink-400",
    "bg-yellow-300",
    "bg-emerald-400",
    "bg-sky-400",
    "bg-violet-400",
  ][index % 5];

  const ring = [
    "ring-pink-200",
    "ring-yellow-200",
    "ring-emerald-200",
    "ring-sky-200",
    "ring-violet-200",
  ][index % 5];

  const tripHref = event.tripSlug ? `/trips/${event.tripSlug}` : null;

  return (
    <div className="relative pl-10">
      <div
        className={[
          "absolute left-0 top-2 h-5 w-5 rounded-full ring-8",
          dotBg,
          ring,
        ].join(" ")}
      />

      <div className="rounded-3xl bg-white shadow-md border border-sky-100 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {tripHref ? (
              <Link
                href={tripHref}
                className="text-lg font-extrabold text-sky-900 hover:underline"
              >
                {event.title}
              </Link>
            ) : (
              <h3 className="text-lg font-extrabold text-sky-900">
                {event.title}
              </h3>
            )}

            <p className="mt-1 text-sm font-semibold text-sky-700">
              {event.location}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {event.dateLabel && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700">
                {event.dateLabel}
              </span>
            )}
            <span
              className={`text-xs font-extrabold px-3 py-1 rounded-full ${badge(
                event.type
              )}`}
            >
              {label(event.type)}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-700 leading-relaxed">
          {event.description}
        </p>

        {event.highlights?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {event.highlights.map((h, i) => (
              <span
                key={i}
                className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-800"
              >
                {h}
              </span>
            ))}
          </div>
        ) : null}

        {tripHref ? (
          <div className="mt-4">
            <Link
              href={tripHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline"
            >
              Open trip →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
