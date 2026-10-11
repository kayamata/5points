"use client";

import { useMemo, useState } from "react";
import { MapPinOff, Search } from "lucide-react";

import { Input } from "@/shared/components/ui";
import { StationCard } from "@/features/site/components/station-card";
import { DEMO_STATIONS } from "@/features/site/data/demo-stations";
import type { StationCity } from "@/features/site/types";
import { SECTION_IDS } from "@/utils/constants";
import { cn } from "@/utils/cn";

const CITIES: StationCity[] = ["Abuja", "Lagos"];

export function StationFinder() {
  const [city, setCity] = useState<StationCity>("Abuja");
  const [query, setQuery] = useState("");

  const stations = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DEMO_STATIONS.filter(
      (s) =>
        s.city === city &&
        (q === "" ||
          s.name.toLowerCase().includes(q) ||
          s.area.toLowerCase().includes(q))
    );
  }, [city, query]);

  return (
    <div
      id={SECTION_IDS.stationFinder}
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
            Find a charging location
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Choose a city and search by area to see charging locations.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div
            role="group"
            aria-label="Select city"
            className="inline-flex rounded-lg border border-border bg-secondary p-1"
          >
            {CITIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCity(c)}
                aria-pressed={city === c}
                className={cn(
                  "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
                  city === c
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by area, e.g. Wuse"
              aria-label="Search charging locations by area"
              className="pl-9"
            />
          </div>
        </div>
      </div>

      {stations.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center rounded-xl border border-dashed border-border py-12 text-center">
          <MapPinOff className="size-8 text-muted-foreground" aria-hidden />
          <p className="mt-3 font-medium text-foreground">
            No locations found
          </p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Try a different area name, or check back once confirmed charging
            locations are published.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        Location listings shown are demonstrations to illustrate how the finder
        will work. Live station availability is not connected, and exact
        addresses will be published once confirmed by 5Points.
      </p>
    </div>
  );
}
