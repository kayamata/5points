export type StationCity = "Abuja" | "Lagos";

export interface ChargingStation {
  id: string;
  city: StationCity;
  name: string;
  area: string;
  /** True when this entry is demonstration data, not a verified station. */
  isDemo: boolean;
}
