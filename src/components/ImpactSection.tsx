import { Gift, HeartHandshake, Users, Home } from "lucide-react";

const impacts = [
  { icon: Gift, title: "Atendimento Gratuito", desc: "Tratamento sem custo para pacientes com sequelas do câncer em todo o Brasil." },
  { icon: HeartHandshake, title: "Reabilitação Integral", desc: "Física, funcional, psicológica e social em um único espaço." },
  { icon: Home, title: "Acolhimento Humanizado", desc: "Recuperação da autoestima, dignidade e qualidade de vida." },
  { icon: Users, title: "Suporte às Famílias", desc: "Apoio e orientação para familiares dos pacientes atendidos." },
];

const ImpactSection = () => {
  return (
    <section id="impacto" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Impacto Social</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Um projeto que pode transformar milhares de vidas
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-5">
                <item.icon className="text-accent-foreground" size={32} />
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
