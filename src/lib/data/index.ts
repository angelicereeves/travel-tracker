import type { CountryTrip } from "../types";

import { timeline } from "./timeline";
import { countries } from "./countries";
import { journeyTimeline } from "./journey";

import { usaTrips } from "./trips/unitedStates";
import { albaniaTrips } from "./trips/albania";
import { spainTrips } from "./trips/spain";
import { italyTrips } from "./trips/italy";
import { norwayTrips } from "./trips/norway";
import { maltaTrips } from "./trips/malta";
import { franceTrips } from "./trips/france";
import { switzerlandTrips } from "./trips/switzerland";
import { greeceTrips } from "./trips/greece";

export { timeline, countries, journeyTimeline };

export const countryTrips: CountryTrip[] = [
  ...usaTrips,
  ...albaniaTrips,
  ...spainTrips,
  ...italyTrips,
  ...norwayTrips,
  ...maltaTrips,
  ...franceTrips,
  ...switzerlandTrips,
  ...greeceTrips,
];
