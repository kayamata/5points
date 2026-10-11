import {
  AboutSection,
  ChargingSection,
  ContactSection,
  HeroSection,
  SolutionsSection,
} from "@/features/site/components";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ChargingSection />
      <SolutionsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
