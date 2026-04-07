import { Zap, Activity, Mic, Smile, Brain, HandHeart } from "lucide-react";

const treatments = [
  { icon: Zap, title: "Laserterapia", desc: "Tratamento moderno para dores, inflamações e cicatrizes decorrentes do câncer." },
  { icon: Activity, title: "Fisioterapia", desc: "Recuperação de mobilidade, força muscular e autonomia física." },
  { icon: Mic, title: "Fonoaudiologia", desc: "Reabilitação de fala, deglutição e mastigação." },
  { icon: Smile, title: "Odontologia", desc: "Tratamento de sequelas bucais causadas pelo tratamento oncológico." },
  { icon: Brain, title: "Psicologia", desc: "Suporte emocional, autoestima e reintegração social." },
  { icon: HandHeart, title: "Reabilitação Funcional", desc: "Programas integrados para retomada das atividades do dia a dia." },
];

const TreatmentsSection = () => {
  return (
    <section id="tratamentos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tratamentos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Um cuidado completo para quem precisa recomeçar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atendimento multidisciplinar com recursos modernos de reabilitação e acolhimento humanizado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                <t.icon className="text-accent-foreground group-hover:text-primary transition-colors" size={24} />
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
