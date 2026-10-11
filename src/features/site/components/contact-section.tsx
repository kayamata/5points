import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { SectionHeading } from "@/features/site/components/section-heading";
import { ContactForm } from "@/features/site/components/contact-form";
import { CONTACT, SECTION_IDS, SERVICE_AREAS } from "@/utils/constants";

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
  const hasPhone = CONTACT.phoneHref !== "";
  const hasWhatsapp = CONTACT.whatsappNumber !== "";
  const hasEmail = CONTACT.email !== "";

  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-16 bg-background py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to our team"
            description="Questions about EV charging, electric vehicles, cables, or solar? Send an enquiry and the 5Points team will get back to you."
          />

          <ul className="mt-8 space-y-4">
            {hasPhone ? (
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            ) : null}
            {hasWhatsapp ? (
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="size-4" aria-hidden />
                  </span>
                  Chat on WhatsApp
                </a>
              </li>
            ) : null}
            {hasEmail ? (
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

          {!hasPhone && !hasWhatsapp && !hasEmail ? (
            <p className="mt-6 rounded-lg border border-dashed border-border bg-secondary px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              Phone, WhatsApp, and email buttons will appear here once the
              company&apos;s verified contact details are supplied.
            </p>
          ) : null}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
