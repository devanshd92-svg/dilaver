import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { GallerySection } from "@/components/GallerySection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { StatsSection } from "@/components/StatsSection";
import { ProductCarousel } from "@/components/ProductCarousel";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <GallerySection />
        <WelcomeSection />
        <StatsSection />
        <ProductCarousel />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
