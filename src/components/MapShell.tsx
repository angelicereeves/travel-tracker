"use client";

import dynamic from "next/dynamic";
import { mapPoints } from "@/lib/mapPoints";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="rounded-[2rem] bg-white shadow-md border border-sky-100 p-7">
      <div className="text-sm font-bold text-slate-700">Loading map…</div>
      <div className="mt-4 h-[70vh] rounded-[2rem] bg-sky-50/50 border border-sky-100" />
    </div>
  ),
});

export default function MapShell() {
  return <MapClient points={mapPoints} />;
}
