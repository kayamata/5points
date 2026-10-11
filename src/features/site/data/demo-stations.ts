import type { ChargingStation } from "@/features/site/types";

/**
 * DEMONSTRATION DATA — these entries exist to show how the station finder
 * will work once verified 5Points charging locations are supplied. They use
 * real district names only; no addresses, opening hours, connector types, or
 * availability are claimed. Replace with confirmed station data before launch.
 */
export const DEMO_STATIONS: ChargingStation[] = [
  {
    id: "demo-abj-wuse",
    city: "Abuja",
    name: "Wuse District",
    area: "Wuse",
    isDemo: true,
  },
  {
    id: "demo-abj-garki",
    city: "Abuja",
    name: "Garki District",
    area: "Garki",
    isDemo: true,
  },
  {
    id: "demo-abj-maitama",
    city: "Abuja",
    name: "Maitama District",
    area: "Maitama",
    isDemo: true,
  },
  {
    id: "demo-lag-lekki",
    city: "Lagos",
    name: "Lekki District",
    area: "Lekki",
    isDemo: true,
  },
  {
    id: "demo-lag-ikeja",
    city: "Lagos",
    name: "Ikeja District",
    area: "Ikeja",
    isDemo: true,
  },
  {
    id: "demo-lag-vi",
    city: "Lagos",
    name: "Victoria Island",
    area: "Victoria Island",
    isDemo: true,
  },
];
