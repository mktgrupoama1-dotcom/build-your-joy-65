import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ProblemSection from "@/components/ProblemSection";
import SequelaeSection from "@/components/SequelaeSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ImpactSection from "@/components/ImpactSection";
import ConstructionSection from "@/components/ConstructionSection";
import DonationFormSection from "@/components/DonationFormSection";
import Footer from "@/components/Footer";
import { DonationProvider } from "@/contexts/DonationContext";

const Index = () => {
  return (
    <DonationProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ProblemSection />
        <SequelaeSection />
        <TreatmentsSection />
        <ConstructionSection />
        <ImpactSection />
        <DonationFormSection />
        <Footer />
      </div>
    </DonationProvider>
  );
};

export default Index;
