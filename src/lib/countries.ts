import { countries, countryTrips } from "./data";

function normalize(input?: string) {
  return (input ?? "").trim().toUpperCase();
}

export function getCountryByCode(code?: string) {
  const normalized = normalize(code);
  if (!normalized) return undefined;

  return countries.find((c) => normalize(c.code) === normalized);
}

export function getTripsForCountry(code?: string) {
  const normalized = normalize(code);
  if (!normalized) return [];

  return countryTrips.filter((t) => normalize(t.countryCode) === normalized);
}
