import { BrandLogo } from "@/shared/components/layout/brand-logo";
import {
  CONTACT,
  NAV_LINKS,
  SERVICE_AREAS,
  SITE,
} from "@/utils/constants";

export function SiteFooter() {
  return (
    <footer className="bg-[#242424] text-white dark:bg-[#101312]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Electric mobility and clean-energy solutions — EV charging,
              electric vehicles, charging cables, and solar systems in Nigeria.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href.replace("/", "")}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Service Areas
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_AREAS.map((city) => (
                <li key={city} className="text-sm text-white/80">
                  {city}, Nigeria
                </li>
              ))}
            </ul>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-primary"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
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
              @5pointselectrictech
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Demonstration website — some details pending confirmation.</p>
        </div>
      </div>
    </footer>
  );
}
