import Link from "next/link";
import Section from "@/components/Section";
import { timeline, countries } from "@/lib/data";

export default function HomePage() {
  const currentHome = timeline[timeline.length - 1];

  return (
    <div className="space-y-12">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-400 via-blue-400 to-cyan-300 p-12 shadow-lg text-white">
        {/* decorative blobs */}
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-yellow-300/40 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-pink-400/40 blur-3xl" />

        <div className="relative">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wide bg-white/25 px-4 py-2 rounded-full">
            🌍 Home base: {currentHome.place.city}, {currentHome.place.country}
          </p>

          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Travel Journal
          </h1>

          <p className="mt-4 max-w-2xl text-white/90">
            A bright, living scrapbook of where we’ve lived and everywhere we’ve gone —
            the places, the food, the chaos, and the memories we never want to forget.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/timeline"
              className="px-6 py-3 rounded-full bg-white text-sky-700 font-bold shadow hover:scale-105 transition"
            >
              Timeline
            </Link>

            <Link
              href="/visited"
              className="px-6 py-3 rounded-full bg-white/25 border border-white/40 font-bold hover:bg-white/30 transition"
            >
              Visited Countries
            </Link>

            <Link
              href="/map"
              className="px-6 py-3 rounded-full bg-white/25 border border-white/40 font-bold hover:bg-white/30 transition"
            >
              Map
            </Link>
          </div>
        </div>
      </div>

      {/* CURRENT HOME */}
      <Section title="Current Home Base">
        <p className="text-lg font-bold text-sky-800">
          {currentHome.place.city}, {currentHome.place.country}
        </p>
        <p className="mt-2 text-sm text-slate-700">
          {currentHome.description}
        </p>
      </Section>

      {/* QUICK STATS */}
      <Section title="At a Glance">
        <ul className="text-sm space-y-1">
          <li>
            🌎 <span className="font-semibold">{countries.length}</span> countries visited
          </li>
          <li>
            📍 <span className="font-semibold">{timeline.length}</span> major life chapters
          </li>
        </ul>
      </Section>
    </div>
  );
}
