export type MapPointKind = "home" | "trip" | "short";

export type MapPoint = {
  id: string;
  label: string;
  countryCode?: string;
  tripSlug?: string;
  lat: number;
  lng: number;
  kind: MapPointKind;
};

export const mapPoints: MapPoint[] = [
  // ======================
  // UNITED STATES
  // ======================

  // Home / long-term living
  {
    id: "milwaukee",
    label: "Milwaukee",
    countryCode: "US",
    tripSlug: "us-milwaukee",
    lat: 43.0389,
    lng: -87.9065,
    kind: "home",
  },
  {
    id: "las-vegas",
    label: "Las Vegas",
    countryCode: "US",
    tripSlug: "us-las-vegas",
    lat: 36.1699,
    lng: -115.1398,
    kind: "home",
  },

  // Trips
  {
    id: "chicago",
    label: "Chicago",
    countryCode: "US",
    tripSlug: "us-chicago",
    lat: 41.8781,
    lng: -87.6298,
    kind: "trip",
  },
  {
    id: "new-orleans",
    label: "New Orleans",
    countryCode: "US",
    tripSlug: "us-new-orleans",
    lat: 29.9511,
    lng: -90.0715,
    kind: "trip",
  },
  {
    id: "portland",
    label: "Portland",
    countryCode: "US",
    tripSlug: "us-portland",
    lat: 45.5152,
    lng: -122.6784,
    kind: "trip",
  },
  {
    id: "los-angeles",
    label: "Los Angeles",
    countryCode: "US",
    tripSlug: "us-los-angeles",
    lat: 34.0522,
    lng: -118.2437,
    kind: "trip",
  },
  {
    id: "san-diego",
    label: "San Diego",
    countryCode: "US",
    lat: 32.7157,
    lng: -117.1611,
    kind: "trip",
  },
  {
    id: "monterey",
    label: "Monterey Bay",
    countryCode: "US",
    tripSlug: "us-monterey-bay",
    lat: 36.6002,
    lng: -121.8947,
    kind: "trip",
  },
  {
    id: "salt-lake-city",
    label: "Salt Lake City",
    countryCode: "US",
    lat: 40.7608,
    lng: -111.8910,
    kind: "trip",
  },
  {
    id: "sacramento",
    label: "Sacramento",
    countryCode: "US",
    lat: 38.5816,
    lng: -121.4944,
    kind: "trip",
  },
  {
    id: "grand-canyon",
    label: "Grand Canyon",
    countryCode: "US",
    tripSlug: "us-grand-canyon",
    lat: 36.0544,
    lng: -112.1401,
    kind: "trip",
  },

  // Hawaii (vacations)
  {
    id: "oahu",
    label: "Oʻahu",
    countryCode: "US",
    lat: 21.4389,
    lng: -158.0001,
    kind: "trip",
  },
  {
    id: "kauai",
    label: "Kauaʻi",
    countryCode: "US",
    lat: 22.0964,
    lng: -159.5261,
    kind: "trip",
  },
  {
    id: "maui",
    label: "Maui",
    countryCode: "US",
    lat: 20.7984,
    lng: -156.3319,
    kind: "trip",
  },

  // ======================
  // EUROPE
  // ======================
  {
    id: "barcelona",
    label: "Barcelona",
    countryCode: "ES",
    tripSlug: "es-barcelona",
    lat: 41.3851,
    lng: 2.1734,
    kind: "trip",
  },
  {
    id: "milan",
    label: "Milan",
    countryCode: "IT",
    tripSlug: "it-milan",
    lat: 45.4642,
    lng: 9.19,
    kind: "trip",
  },
  {
    id: "como",
    label: "Como",
    countryCode: "IT",
    tripSlug: "it-como",
    lat: 45.8081,
    lng: 9.0852,
    kind: "trip",
  },
  {
    id: "bellagio",
    label: "Bellagio",
    countryCode: "IT",
    tripSlug: "it-bellagio",
    lat: 45.987,
    lng: 9.257,
    kind: "trip",
  },
  {
    id: "rome",
    label: "Rome",
    countryCode: "IT",
    tripSlug: "it-rome",
    lat: 41.9028,
    lng: 12.4964,
    kind: "trip",
  },
  {
    id: "paris",
    label: "Paris",
    countryCode: "FR",
    tripSlug: "fr-paris",
    lat: 48.8566,
    lng: 2.3522,
    kind: "trip",
  },

  // Short stop
  {
    id: "lugano",
    label: "Lugano",
    countryCode: "CH",
    tripSlug: "ch-lugano",
    lat: 46.0037,
    lng: 8.9511,
    kind: "short",
  },

  // ======================
  // ALBANIA (HOME BASE)
  // ======================
  {
    id: "sarande",
    label: "Sarandë",
    countryCode: "AL",
    tripSlug: "al-sarande",
    lat: 39.8756,
    lng: 20.0053,
    kind: "home",
  },
  {
    id: "tirana",
    label: "Tirana",
    countryCode: "AL",
    tripSlug: "al-tirana",
    lat: 41.3275,
    lng: 19.8187,
    kind: "home",
  },

  // ======================
  // GREECE (SHORT STOP)
  // ======================
  {
    id: "corfu",
    label: "Corfu",
    countryCode: "GR",
    tripSlug: "gr-corfu",
    lat: 39.6243,
    lng: 19.9217,
    kind: "short",
  },

  // ======================
  // MALTA
  // ======================
  {
    id: "sliema",
    label: "Sliema",
    countryCode: "MT",
    tripSlug: "mt-sliema",
    lat: 35.9122,
    lng: 14.5019,
    kind: "trip",
  },
  {
    id: "valletta",
    label: "Valletta",
    countryCode: "MT",
    tripSlug: "mt-valletta",
    lat: 35.8989,
    lng: 14.5146,
    kind: "trip",
  },

  // ======================
  // NORWAY
  // ======================
  {
    id: "tromso",
    label: "Tromsø",
    countryCode: "NO",
    tripSlug: "no-tromso",
    lat: 69.6492,
    lng: 18.9553,
    kind: "trip",
  },
];
