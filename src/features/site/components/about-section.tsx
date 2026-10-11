import Image from "next/image";
import { MapPin } from "lucide-react";

import { buttonVariants } from "@/shared/components/ui";
import { SectionHeading } from "@/features/site/components/section-heading";
import { SECTION_IDS, SERVICE_AREAS, SITE } from "@/utils/constants";
import { cn } from "@/utils/cn";

export function AboutSection() {
  return (
    <section
      id={SECTION_IDS.about}
      className="scroll-mt-16 border-b border-border/60 bg-secondary py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="About 5Points"
            title="Making electric mobility work in Nigeria"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              {SITE.legalName} is a Nigerian electric mobility and clean-energy
              company. Its work spans EV charging infrastructure, electric
              vehicles, high-grade AC &amp; DC charging cables, and
              industrial-grade solar systems — the pieces needed to make
              driving electric practical, not just possible.
            </p>
            <p>
              The company advertises EV charging in Abuja and is listed across
              Abuja, Lagos, and Port Harcourt, with a focus on bringing
              dependable, solar-supported charging access to Nigerian drivers
              and businesses.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Locations">
            {SERVICE_AREAS.map((city) => (
              <li
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
              >
                <MapPin className="size-3.5 text-primary" aria-hidden />
                {city}
              </li>
            ))}
          </ul>

          <a
            href={`#${SECTION_IDS.contact}`}
            className={cn(buttonVariants({ size: "lg" }), "mt-8")}
          >
            Talk to Our Team
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <Image
            src="/images/solar-panels.jpg"
            alt="A solar panel installation under an open sky"
            width={1600}
            height={1065}
            className="aspect-[4/3] w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
