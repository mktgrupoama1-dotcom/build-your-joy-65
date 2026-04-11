import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import heroMobileImg from "@/assets/hero-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDonation } from "@/contexts/DonationContext";
import { ArrowRight } from "lucide-react";

type Tab = "monthly" | "once";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const { setType, setAmount } = useDonation();
  const [activeTab, setActiveTab] = useState<Tab>("monthly");

  const scrollToForm = () => {
    setType(activeTab);
    setAmount(activeTab === "monthly" ? 30 : 50);
    document.getElementById("formulario-doacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={isMobile ? heroMobileImg : heroImg} alt="Pessoa sorrindo após tratamento" className="w-full h-full object-cover object-left" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left column — Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Transforme uma{" "}
              <span className="text-secondary">vida.</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/85 leading-relaxed">
              Quem venceu o câncer não deveria continuar sofrendo sozinho. Seja parte da cura que vem depois.
            </p>
          </div>

          {/* Right column — Card */}
          <div className="w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex p-4 pb-0 gap-3">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeTab === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-foreground border border-border hover:border-primary/50"
                }`}
              >
                R$ 1 por dia
              </button>
              <button
                onClick={() => setActiveTab("once")}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeTab === "once"
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-foreground border border-border hover:border-primary/50"
                }`}
              >
                Doação única
              </button>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {activeTab === "monthly" ? "R$ 1 por dia" : "Doação única"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {activeTab === "monthly"
                  ? "Com R$ 1 por dia você ajuda a construir o único centro gratuito do Brasil para tratamento de sequelas do câncer."
                  : "Toda contribuição ajuda a construir um espaço onde quem venceu o câncer pode recuperar a vida com dignidade."}
              </p>

              <button
                onClick={scrollToForm}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {activeTab === "monthly" ? "Quero transformar uma vida agora" : "Quero fazer minha doação"}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
