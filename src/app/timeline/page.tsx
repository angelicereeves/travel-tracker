import Link from "next/link";
import { journeyTimeline } from "@/lib/data";
import TimelineItem from "@/components/TimelineItem";

export default function TimelinePage() {
  const events = [...journeyTimeline].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
              Our Journey
            </h1>
            <p className="mt-2 text-slate-700">
              The full story — moves and trips in chronological order.
            </p>
          </div>

          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-sky-100 text-sky-900 font-bold hover:bg-sky-200 transition"
          >
            ← Home
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-2 top-2 bottom-2 w-[6px] rounded-full bg-gradient-to-b from-pink-400 via-yellow-300 to-emerald-400 opacity-70" />

        <div className="space-y-6">
          {events.map((event, idx) => (
            <TimelineItem key={event.id} event={event} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
