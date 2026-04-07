const ProblemSection = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">O Problema</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Muitas pessoas vencem o câncer, mas continuam sofrendo depois dele.
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            O fim do tratamento oncológico nem sempre significa o fim da batalha. Muitos pacientes seguem enfrentando dores crônicas, perda de mobilidade, neuropatias, limitações funcionais e impactos emocionais.
          </p>
          <p className="text-secondary text-xl font-semibold font-serif">
            O Instituto nasce para cuidar dessa fase que quase sempre é esquecida: a vida depois do câncer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
