import { AboutSection } from "@/components/landing/about-section";
import { BentoSection } from "@/components/landing/bento-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Hero } from "@/components/landing/hero";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <BentoSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
