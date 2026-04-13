import FloatingParticles from "./FloatingParticles";
import { CheckCircle2 } from "lucide-react";

const steps = [
  { text: "Estudos técnicos e geotécnicos do terreno", emoji: "📋" },
  { text: "Desenvolvimento dos projetos executivos", emoji: "📐" },
  { text: "Licenciamento e aprovação junto aos órgãos públicos", emoji: "📜" },
  { text: "Execução das fundações e da estrutura da edificação", emoji: "🏗️" },
  { text: "Execução das instalações técnicas e acabamentos", emoji: "⚡" },
  { text: "Instalação de equipamentos e preparação para operação", emoji: "🏥" },
];

const ConstructionSection = () => {
  return (
    <section className="section-padding gradient-warm-vivid relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-badge mb-4">🏗️ Construção</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Um sonho construído com{" "}
              <span className="text-gradient">responsabilidade</span>
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-background/90 backdrop-blur-sm rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg card-hover-lift group">
                <div className="w-12 h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {step.emoji}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-foreground font-medium">{step.text}</p>
                </div>
                <CheckCircle2 size={20} className="text-primary/30 group-hover:text-primary mt-2 transition-colors duration-300 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
