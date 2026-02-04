export type TimelineEvent = {
  id: string;
  title: string;       // "Born in Wisconsin"
  dateLabel?: string;  // "199x" or "201x" (optional)
  description: string;
  place: {
    city?: string;
    region?: string;   // state/province
    country: string;
  };
};

export type VisitedCountry = {
  code: string;  // "ES"
  name: string;  // "Spain"
  notes?: string;
};

export type Country = {
  code: string; // "ES"
  name: string; // "Spain"
  heroImage?: string; // optional later
  summary?: string;
  theme?: "sunset" | "ocean" | "lime" | "grape";
};


export type CountryTrip = {
  id: string;
  countryCode: string; // "ES"
  slug: string;        // "es-barcelona"
  title: string;       // "Barcelona"
  dateLabel?: string;  // "May 2025"
  description: string; // short intro
  cities?: string[];   // ["Barcelona"]
  highlights: string[]; // bullet list of what you did
  notes?: string;      // optional extra paragraph
  coverImage?: string; // later
};

export type JourneyEventType = "move" | "trip" | "home";

export type JourneyEvent = {
  id: string;
  order: number;          // controls chronology (1,2,3...)
  type: JourneyEventType; // move/trip/home
  title: string;
  location: string;       // short display string
  dateLabel?: string;     // optional: "2019", "Summer 2022", etc.
  description: string;
  highlights?: string[];
};
