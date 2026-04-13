const categories = [
  {
    title: "Físicas e Funcionais",
    items: ["Dor crônica", "Fibrose tecidual", "Perda de mobilidade", "Rigidez muscular", "Linfedema", "Limitações motoras"],
    color: "from-primary/5 to-primary/15",
    dotColor: "bg-primary",
  },
  {
    title: "Neurológicas",
    items: ["Neuropatia periférica", "Dor neuropática", "Perda de sensibilidade", "Alterações de equilíbrio", "Fadiga crônica"],
    color: "from-secondary/5 to-secondary/15",
    dotColor: "bg-secondary",
  },
  {
    title: "Odontológicas",
    items: ["Osteonecrose", "Perda dentária", "Dificuldade de abertura bucal", "Complicações gengivais"],
    color: "from-accent to-primary/10",
    dotColor: "bg-accent-foreground",
  },
  {
    title: "Emocionais e Sociais",
    items: ["Ansiedade", "Depressão", "Síndrome pós-tratamento", "Dificuldades de reintegração social"],
    color: "from-warm-gold-light to-secondary/10",
    dotColor: "bg-warm-gold",
  },
];

const SequelaeSection = () => {
  return (
    <section className="section-padding gradient-warm relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1.5 rounded-full mb-4">Sequelas Tratadas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Cuidar das sequelas é devolver{" "}
            <span className="text-gradient">qualidade de vida</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className={`bg-gradient-to-br ${cat.color} rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
              <h3 className="text-lg font-bold text-primary mb-4 font-serif">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor} mt-1.5 shrink-0`} />
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
