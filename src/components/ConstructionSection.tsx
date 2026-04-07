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
    <section className="section-padding bg-warm-cream">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Construção</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Um sonho construído com responsabilidade e planejamento
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
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
