import { Mail, MapPin, Phone } from "lucide-react";

import { buttonVariants, WhatsAppIcon } from "@/shared/components/ui";
import { SectionHeading } from "@/features/site/components/section-heading";
import { ContactForm } from "@/features/site/components/contact-form";
import { CONTACT, SECTION_IDS, SERVICE_AREAS } from "@/utils/constants";
import { cn } from "@/utils/cn";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-16 bg-background py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to our team"
            description="Questions about EV charging, electric vehicles, cables, or solar? Call, message us on WhatsApp, or send an enquiry below."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.phoneHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "gap-2"
              )}
            >
              <Phone className="size-4" aria-hidden />
              Call {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 bg-[#25D366] text-white hover:bg-[#1eb855]"
              )}
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-8 space-y-4">
            {CONTACT.email !== "" ? (
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  {CONTACT.email}
                </a>
              </li>
            ) : null}
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <InstagramIcon className="size-4" />
                </span>
                @5pointselectrictech
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-4" aria-hidden />
              </span>
              <span className="pt-2">
                {SERVICE_AREAS.join(" · ")}, Nigeria
              </span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
