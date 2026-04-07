const categories = [
  {
    title: "Físicas e Funcionais",
    items: ["Dor crônica", "Fibrose tecidual", "Perda de mobilidade", "Rigidez muscular", "Linfedema", "Limitações motoras"],
  },
  {
    title: "Neurológicas",
    items: ["Neuropatia periférica", "Dor neuropática", "Perda de sensibilidade", "Alterações de equilíbrio", "Fadiga crônica"],
  },
  {
    title: "Odontológicas",
    items: ["Osteonecrose", "Perda dentária", "Dificuldade de abertura bucal", "Complicações gengivais"],
  },
  {
    title: "Emocionais e Sociais",
    items: ["Ansiedade", "Depressão", "Síndrome pós-tratamento", "Dificuldades de reintegração social"],
  },
];

const SequelaeSection = () => {
  return (
    <section className="section-padding bg-warm-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sequelas Tratadas</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Cuidar das sequelas é devolver qualidade de vida
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-background rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-primary mb-4 font-serif">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
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
