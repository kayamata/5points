import { cn } from "@/utils/cn";
import { SITE } from "@/utils/constants";

interface BrandLogoProps {
  className?: string;
  variant?: "default" | "footer";
}

/**
 * Interim wordmark for the demo site.
 *
 * The official 5Points logo asset was not available at build time. To swap in
 * the real logo, drop the file into `public/` (e.g. `/logo.png`) and render it
 * here with `next/image` — do not restyle or recolor the official asset.
 */
export function BrandLogo({ className, variant = "default" }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          variant === "footer" ? "bg-primary" : "bg-primary"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            variant === "footer" ? "text-white" : "text-foreground"
          )}
        >
          5<span className="text-primary">Points</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em]",
            variant === "footer" ? "text-white/70" : "text-muted-foreground"
          )}
        >
          Electric Technology
        </span>
      </span>
      <span className="sr-only">{SITE.legalName}</span>
    </span>
  );
}
