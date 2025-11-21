import { HeroSection } from "./(site)/sections/HeroSection";
import { ServicesSection } from "./(site)/sections/ServicesSection";
import { PortfolioSection } from "./(site)/sections/PortfolioSection";
import { AboutSection } from "./(site)/sections/AboutSection";
import { TestimonialsSection } from "./(site)/sections/TestimonialsSection";
import { ContactSection } from "./(site)/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
