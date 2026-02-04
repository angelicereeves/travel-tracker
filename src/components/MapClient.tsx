"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { MapPoint } from "@/lib/mapPoints";

const icons: Record<MapPoint["kind"], L.Icon> = {
  home: L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  trip: L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
  short: L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  }),
};

export default function MapClient({ points }: { points: MapPoint[] }) {
  return (
    <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-md border border-sky-100">
      {/* Legend */}
      <div className="absolute top-4 right-4 z-[1000] bg-white/90 backdrop-blur rounded-2xl shadow-md p-4 text-sm space-y-2">
        <div className="font-extrabold text-sky-900">Legend</div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span>Home base</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500" />
          <span>Trip</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span>Short stop</span>
        </div>
      </div>

      <div className="h-[70vh] w-full">
        <MapContainer
          center={[41.5, 9.5]}
          zoom={3}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {points.map((p) => (
            <Marker
              key={p.id}
              position={[p.lat, p.lng]}
              icon={icons[p.kind]}
            >
              <Popup>
                <div className="space-y-2">
                  <div className="font-extrabold text-sky-900">{p.label}</div>

                  {p.countryCode && (
                    <div className="text-xs text-slate-600">
                      Country: {p.countryCode}
                    </div>
                  )}

                  {p.tripSlug ? (
                    <a
                      href={`/trips/${p.tripSlug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 underline"
                    >
                      Open trip →
                    </a>
                  ) : (
                    <div className="text-xs text-slate-500">
                      Trip details coming soon
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
