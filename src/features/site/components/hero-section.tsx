import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/shared/components/ui";
import { SECTION_IDS } from "@/utils/constants";
import { cn } from "@/utils/cn";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.top}
      className="border-b border-border/60 bg-background"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            EV Charging · Electric Vehicles · Clean Energy
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Powering the Next Move.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Making electric mobility more accessible through EV charging
            solutions, electric vehicles, and clean-energy technology.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`#${SECTION_IDS.evCharging}`}
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Explore EV Charging
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={`#${SECTION_IDS.contact}`}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" })
              )}
            >
              Talk to Our Team
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Serving drivers and businesses in Abuja, Lagos, and Port Harcourt.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/charging-plug.jpg"
              alt="An electric vehicle connected to a charging cable at a street charging point"
              width={1600}
              height={2400}
              priority
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
