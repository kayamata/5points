import Image from "next/image";
import { Zap } from "lucide-react";

import { SectionHeading } from "@/features/site/components/section-heading";
import { StationFinder } from "@/features/site/components/station-finder";
import { CHARGING_RATE, SECTION_IDS } from "@/utils/constants";

export function ChargingSection() {
  return (
    <section
      id={SECTION_IDS.evCharging}
      className="scroll-mt-16 border-b border-border/60 bg-secondary py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="EV Charging"
              title="Your EV's Next Favourite Stop."
              description="5Points provides EV charging access designed to make electric driving more convenient — helping EV owners keep moving without worrying about where to plug in next."
            />

            <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="size-6" aria-hidden />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">
                  {CHARGING_RATE.amount}
                  <span className="ml-1 text-sm font-medium text-muted-foreground">
                    {CHARGING_RATE.unit}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {CHARGING_RATE.note}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/hero-ev-charging.jpg"
              alt="Close-up of an electric vehicle charging port with a connector plugged in"
              width={1600}
              height={1065}
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-10">
          <StationFinder />
        </div>
      </div>
    </section>
  );
}
