import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SpecializationsSection />
      <Footer />
    </div>
  );
};

export default Index;
