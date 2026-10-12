import Image from "next/image";

import { cn } from "@/utils/cn";
import { SITE } from "@/utils/constants";

interface BrandLogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function BrandLogo({ className, variant = "default" }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative size-10 shrink-0 overflow-hidden rounded-full bg-white">
        <Image
          src="/logo.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="40px"
        />
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
