import Image from "next/image";
import { ArrowRight, Cable, Car, Sun, Zap } from "lucide-react";

import { SectionHeading } from "@/features/site/components/section-heading";
import { SECTION_IDS } from "@/utils/constants";

const SOLUTIONS = [
  {
    icon: Zap,
    title: "EV Charging",
    description:
      "Charging access for electric vehicle owners — built to make driving electric in Nigeria practical and convenient.",
    image: "/images/wall-charger.jpg",
    imageAlt: "A wall-mounted electric vehicle charger",
    cta: "Find a station",
    href: `#${SECTION_IDS.stationFinder}`,
  },
  {
    icon: Car,
    title: "Electric Vehicles",
    description:
      "Information and enquiries about the electric vehicles offered by 5Points — from first questions to next steps.",
    image: "/images/electric-vehicle.jpg",
    imageAlt: "A modern electric vehicle",
    cta: "Make an enquiry",
    href: `#${SECTION_IDS.contact}`,
  },
  {
    icon: Cable,
    title: "Charging Cables",
    description:
      "High-grade AC and DC charging cable solutions for electric vehicles and charging installations.",
    image: "/images/charging-cable.jpg",
    imageAlt: "A charging cable connected to an electric vehicle's charging port",
    cta: "Ask about cables",
    href: `#${SECTION_IDS.contact}`,
  },
  {
    icon: Sun,
    title: "Solar & Industrial Energy",
    description:
      "Solar-powered charging infrastructure and industrial-grade solar systems for homes and businesses.",
    image: "/images/solar-rooftop.jpg",
    imageAlt: "Solar panels installed on an industrial rooftop",
    cta: "Discuss a project",
    href: `#${SECTION_IDS.contact}`,
  },
] as const;

export function SolutionsSection() {
  return (
    <section
      id={SECTION_IDS.solutions}
      className="scroll-mt-16 border-b border-border/60 bg-background py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Our Solutions"
          title="Clean-energy solutions for Nigeria"
          description="From charging access to solar infrastructure, 5Points brings together the products and services that make electric mobility work."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <article
                key={solution.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4.5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <a
                    href={solution.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent-foreground"
                  >
                    {solution.cta}
                    <ArrowRight
                      className="size-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
