import WaveDivider from "@/components/WaveDivider";
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
import BackToTop from "@/components/BackToTop";
import { DonationProvider } from "@/contexts/DonationContext";

const Index = () => {
  return (
    <DonationProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <WaveDivider from="hsl(var(--foreground))" to="hsl(var(--background))" />
        <AboutSection />
        <WaveDivider from="hsl(var(--background))" to="hsl(var(--warm-cream))" />
        <ProjectSection />
        <WaveDivider from="hsl(var(--warm-cream))" to="hsl(var(--foreground))" />
        <ProblemSection />
        <WaveDivider from="hsl(var(--foreground))" to="hsl(var(--warm-cream))" />
        <SequelaeSection />
        <WaveDivider from="hsl(var(--warm-cream))" to="hsl(var(--background))" />
        <TreatmentsSection />
        <WaveDivider from="hsl(var(--background))" to="hsl(var(--warm-cream))" />
        <ConstructionSection />
        <WaveDivider from="hsl(var(--warm-cream))" to="hsl(var(--background))" />
        <ImpactSection />
        <WaveDivider from="hsl(var(--background))" to="hsl(var(--muted))" />
        <DonationFormSection />
        <WaveDivider from="hsl(var(--muted))" to="hsl(var(--foreground))" />
        <Footer />
        <BackToTop />
      </div>
    </DonationProvider>
  );
};

export default Index;
