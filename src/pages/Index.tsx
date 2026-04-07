import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ProblemSection from "@/components/ProblemSection";
import SequelaeSection from "@/components/SequelaeSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ImpactSection from "@/components/ImpactSection";
import ConstructionSection from "@/components/ConstructionSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
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
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
