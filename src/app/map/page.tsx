import Link from "next/link";
import MapClient from "@/components/MapClient";
import { mapPoints } from "@/lib/mapPoints";

export default function MapPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
              Our Map
            </h1>
            <p className="mt-2 text-slate-700">
              Pins for the places we’ve lived and explored — click any marker to peek.
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

      <MapClient points={mapPoints} />
    </div>
  );
}
