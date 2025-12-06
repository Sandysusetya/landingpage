import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import DetailsSection from "@/components/DetailsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DetailsSection />
      <FacilitiesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
