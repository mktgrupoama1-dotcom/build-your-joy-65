import { Heart, Users, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="instituto" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-warm-gold-light rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1.5 rounded-full mb-4">O Instituto</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Um instituto criado para cuidar de quem{" "}
            <span className="text-gradient">continua lutando</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O Instituto Lugar de quem AMA é uma organização filantrópica criada para acolher pessoas que venceram o câncer, mas ainda enfrentam as sequelas físicas, emocionais e sociais deixadas pela doença.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Heart,
              title: "Missão de Vida",
              desc: "Transformar dor em cuidado, acolhimento e esperança para quem sobreviveu ao câncer.",
              gradient: "from-primary/10 to-secondary/10",
            },
            {
              icon: Users,
              title: "Acolhimento",
              desc: "Recuperar autonomia, autoestima e qualidade de vida de pacientes com sequelas.",
              gradient: "from-secondary/10 to-accent",
            },
            {
              icon: Building2,
              title: "Pioneirismo",
              desc: "O primeiro centro filantrópico do Brasil dedicado à reabilitação oncológica.",
              gradient: "from-accent to-primary/10",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-accent via-accent to-warm-gold-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          <div className="max-w-3xl relative">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-background/60 px-4 py-1.5 rounded-full mb-4">A História</span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-4 font-serif">
              Uma experiência pessoal transformada em missão
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Após enfrentar a Covid-19 e, posteriormente, o câncer, o empresário e produtor cultural Amândio Lessa decidiu transformar sua experiência pessoal em uma missão de vida: criar um centro especializado dedicado à reabilitação de pacientes que convivem com sequelas do câncer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
