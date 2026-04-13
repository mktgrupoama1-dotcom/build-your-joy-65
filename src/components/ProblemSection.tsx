import FloatingParticles from "./FloatingParticles";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-padding gradient-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary-foreground/10 animate-float" />
        <div className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider bg-secondary/15 px-5 py-2 rounded-full mb-4 border border-secondary/20">
            <AlertTriangle size={14} />
            O Problema
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Muitas pessoas vencem o câncer, mas continuam{" "}
            <span className="text-secondary drop-shadow-lg">sofrendo depois dele.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            O fim do tratamento oncológico nem sempre significa o fim da batalha. Muitos pacientes seguem enfrentando dores crônicas, perda de mobilidade, neuropatias, limitações funcionais e impactos emocionais.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-16 h-1 bg-primary rounded-full" />
            <div className="w-8 h-1 bg-secondary rounded-full" />
            <div className="w-4 h-1 bg-primary/50 rounded-full" />
          </div>
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
            <p className="text-secondary text-xl font-semibold font-serif">
              💛 O Instituto nasce para cuidar dessa fase que quase sempre é esquecida: a vida depois do câncer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
