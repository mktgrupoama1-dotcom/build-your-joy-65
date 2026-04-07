import heroImg from "@/assets/hero.jpg";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Centro de reabilitação" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Heart size={14} fill="currentColor" />
            1º no Brasil
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Vencer o câncer é apenas o{" "}
            <span className="text-secondary">começo.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
            Estamos construindo o primeiro centro do Brasil dedicado ao tratamento gratuito das sequelas do câncer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apoie"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Apoie o Projeto
            </a>
            <a
              href="#instituto"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center"
            >
              Conheça o Instituto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
