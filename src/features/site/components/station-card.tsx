import { Badge } from "@/shared/components/ui";
import { ExternalLink, MapPin } from "lucide-react";

import type { ChargingStation } from "@/features/site/types";

interface StationCardProps {
  station: ChargingStation;
}

export function StationCard({ station }: StationCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(
    `${station.area}, ${station.city}, Nigeria`
  )}`;

  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <MapPin className="size-5" aria-hidden />
        </div>
        {station.isDemo ? (
          <Badge variant="outline" className="text-xs">
            Demonstration
          </Badge>
        ) : null}
      </div>
      <h3 className="mt-4 font-semibold text-card-foreground">
        {station.name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {station.area}, {station.city}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Exact address and station details to be confirmed with 5Points.
      </p>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent-foreground"
      >
        View area on Google Maps
        <ExternalLink className="size-3.5" aria-hidden />
      </a>
    </article>
  );
}
