/**
 * Site-wide constants for the 5Points Electric Technology website.
 *
 * DEMO CONTENT — items marked "unverified" must be confirmed with the
 * company before this site goes live. Empty strings hide the related UI.
 */

export const SITE = {
  name: "5Points Electric Technology",
  legalName: "5Points Electric Technology Limited",
  tagline: "Powering the Next Move.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#top" },
  { label: "EV Charging", href: "/#ev-charging" },
  { label: "Our Solutions", href: "/#solutions" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SECTION_IDS = {
  top: "top",
  evCharging: "ev-charging",
  stationFinder: "station-finder",
  solutions: "solutions",
  about: "about",
  contact: "contact",
} as const;

/**
 * Public contact channels. Phone and WhatsApp use the business line
 * published via the company's group channels; email stays hidden until a
 * verified address is supplied.
 */
export const CONTACT = {
  instagramUrl: "https://www.instagram.com/5pointselectrictech/",
  phoneDisplay: "+234 906 331 5492",
  phoneHref: "tel:+2349063315492",
  whatsappNumber: "2349063315492",
  whatsappUrl: "https://wa.me/2349063315492",
  email: "", // unverified — hidden until supplied
} as const;

/** Cities listed on the company's Instagram profile. */
export const SERVICE_AREAS = ["Abuja", "Lagos", "Port Harcourt"] as const;

/**
 * Advertised charging rate from the company's Instagram caption.
 * UNVERIFIED — confirm the current rate with the company before launch.
 */
export const CHARGING_RATE = {
  amount: "₦300",
  unit: "per kWh",
  note: "Advertised rate — confirm with 5Points before publishing.",
} as const;
