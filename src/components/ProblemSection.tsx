const ProblemSection = () => {
  return (
    <section className="section-padding gradient-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full mb-4">O Problema</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Muitas pessoas vencem o câncer, mas continuam{" "}
            <span className="text-secondary">sofrendo depois dele.</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            O fim do tratamento oncológico nem sempre significa o fim da batalha. Muitos pacientes seguem enfrentando dores crônicas, perda de mobilidade, neuropatias, limitações funcionais e impactos emocionais.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
          <p className="text-secondary text-xl font-semibold font-serif">
            O Instituto nasce para cuidar dessa fase que quase sempre é esquecida: a vida depois do câncer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
