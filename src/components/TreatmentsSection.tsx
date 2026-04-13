import { Zap, Activity, Mic, Smile, Brain, HandHeart } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const treatments = [
  { icon: Zap, title: "Laserterapia", desc: "Tratamento moderno para dores, inflamações e cicatrizes decorrentes do câncer.", color: "from-primary to-primary/80", shadow: "shadow-primary/20" },
  { icon: Activity, title: "Fisioterapia", desc: "Recuperação de mobilidade, força muscular e autonomia física.", color: "from-secondary to-secondary/80", shadow: "shadow-secondary/20" },
  { icon: Mic, title: "Fonoaudiologia", desc: "Reabilitação de fala, deglutição e mastigação.", color: "from-primary to-primary/80", shadow: "shadow-primary/20" },
  { icon: Smile, title: "Odontologia", desc: "Tratamento de sequelas bucais causadas pelo tratamento oncológico.", color: "from-secondary to-secondary/80", shadow: "shadow-secondary/20" },
  { icon: Brain, title: "Psicologia", desc: "Suporte emocional, autoestima e reintegração social.", color: "from-primary to-primary/80", shadow: "shadow-primary/20" },
  { icon: HandHeart, title: "Reabilitação Funcional", desc: "Programas integrados para retomada das atividades do dia a dia.", color: "from-secondary to-secondary/80", shadow: "shadow-secondary/20" },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="section-padding bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-60 translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-warm-gold-light rounded-full blur-3xl opacity-40 -translate-y-1/2" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">🏥 Tratamentos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Um cuidado completo para quem precisa{" "}
            <span className="text-gradient">recomeçar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atendimento multidisciplinar com recursos modernos de reabilitação e acolhimento humanizado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/30 card-hover-lift relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.color}`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} icon-box mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${t.shadow}`}>
                <t.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
