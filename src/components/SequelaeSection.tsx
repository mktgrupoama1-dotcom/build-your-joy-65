import FloatingParticles from "./FloatingParticles";

const categories = [
  {
    title: "Físicas e Funcionais",
    items: ["Dor crônica", "Fibrose tecidual", "Perda de mobilidade", "Rigidez muscular", "Linfedema", "Limitações motoras"],
    color: "from-primary/15 to-primary/5",
    dotColor: "bg-primary",
    borderColor: "border-t-primary",
    emoji: "💪",
  },
  {
    title: "Neurológicas",
    items: ["Neuropatia periférica", "Dor neuropática", "Perda de sensibilidade", "Alterações de equilíbrio", "Fadiga crônica"],
    color: "from-secondary/15 to-secondary/5",
    dotColor: "bg-secondary",
    borderColor: "border-t-secondary",
    emoji: "🧠",
  },
  {
    title: "Odontológicas",
    items: ["Osteonecrose", "Perda dentária", "Dificuldade de abertura bucal", "Complicações gengivais"],
    color: "from-accent to-primary/10",
    dotColor: "bg-accent-foreground",
    borderColor: "border-t-accent-foreground",
    emoji: "🦷",
  },
  {
    title: "Emocionais e Sociais",
    items: ["Ansiedade", "Depressão", "Síndrome pós-tratamento", "Dificuldades de reintegração social"],
    color: "from-warm-gold-light to-secondary/10",
    dotColor: "bg-warm-gold",
    borderColor: "border-t-secondary",
    emoji: "💛",
  },
];

const SequelaeSection = () => {
  return (
    <section className="section-padding gradient-warm-vivid relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">🩺 Sequelas Tratadas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Cuidar das sequelas é devolver{" "}
            <span className="text-gradient">qualidade de vida</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`bg-gradient-to-br ${cat.color} rounded-2xl p-6 border-t-4 ${cat.borderColor} border border-border/50 card-hover-lift group`}>
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <h3 className="text-lg font-bold text-primary mb-4 font-serif">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className={`w-2 h-2 rounded-full ${cat.dotColor} mt-1.5 shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SequelaeSection;
