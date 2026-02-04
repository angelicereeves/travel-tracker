import MapShell from "@/components/MapShell";

export default function MapPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
          Map
        </h1>
        <p className="mt-2 text-slate-700">
          Explore all the places we’ve lived, visited, and stopped.
        </p>
      </div>

      <MapShell />
    </div>
  );
}
