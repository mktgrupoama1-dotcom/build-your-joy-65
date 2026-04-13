import { Gift, HeartHandshake, Users, Home } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const impacts = [
  { icon: Gift, title: "Atendimento Gratuito", desc: "Tratamento sem custo para pacientes com sequelas do câncer em todo o Brasil.", emoji: "🎁" },
  { icon: HeartHandshake, title: "Reabilitação Integral", desc: "Física, funcional, psicológica e social em um único espaço.", emoji: "🤝" },
  { icon: Home, title: "Acolhimento Humanizado", desc: "Recuperação da autoestima, dignidade e qualidade de vida.", emoji: "🏠" },
  { icon: Users, title: "Suporte às Famílias", desc: "Apoio e orientação para familiares dos pacientes atendidos.", emoji: "👨‍👩‍👧‍👦" },
];

const ImpactSection = () => {
  return (
    <section id="impacto" className="section-padding bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">🌟 Impacto Social</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Um projeto que pode transformar{" "}
            <span className="text-gradient">milhares de vidas</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div key={i} className="text-center p-6 group card-hover-lift rounded-2xl bg-gradient-to-b from-accent/50 to-transparent border border-border/30">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <div className="w-16 h-16 rounded-2xl gradient-primary mx-auto flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/20">
                <item.icon className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
