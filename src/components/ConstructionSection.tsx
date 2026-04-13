const steps = [
  "Estudos técnicos e geotécnicos do terreno",
  "Desenvolvimento dos projetos executivos",
  "Licenciamento e aprovação junto aos órgãos públicos",
  "Execução das fundações e da estrutura da edificação",
  "Execução das instalações técnicas e acabamentos",
  "Instalação de equipamentos e preparação para operação",
];

const ConstructionSection = () => {
  return (
    <section className="section-padding gradient-warm relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1.5 rounded-full mb-4">Construção</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Um sonho construído com{" "}
              <span className="text-gradient">responsabilidade</span>
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-background/80 backdrop-blur-sm rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-primary/20">
                  {i + 1}
                </div>
                <p className="text-foreground font-medium pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
