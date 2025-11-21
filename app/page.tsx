import { Hero3D } from "./(site)/components/Hero3D";
import { ServicesSection } from "./(site)/sections/ServicesSection";
import { PortfolioSection } from "./(site)/sections/PortfolioSection";
import { AboutSection } from "./(site)/sections/AboutSection";
import { InstagramSection } from "./(site)/sections/InstagramSection";
import { TestimonialsSection } from "./(site)/sections/TestimonialsSection";
import { ContactSection } from "./(site)/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero3D />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <InstagramSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
