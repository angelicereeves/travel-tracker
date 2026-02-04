import Link from "next/link";

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white/70 backdrop-blur border border-sky-100 shadow-md p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-900">
          Location
        </h1>
        <p className="mt-2 text-slate-700">
          Coming soon — individual city/location pages.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7 space-y-4">
        <div className="text-sm text-slate-700">
          Requested slug:{" "}
          <code className="font-bold text-sky-900">{slug}</code>
        </div>

        <p className="text-sm text-slate-700">
          We’ll use this page later to show city-specific details (what we did,
          food, photos, videos, and map points).
        </p>

        <Link
          href="/visited"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline"
        >
          Back to Visited →
        </Link>
      </div>
    </div>
  );
}
