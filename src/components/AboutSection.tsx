import { Heart, Users, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="instituto" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">O Instituto</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Um instituto criado para cuidar de quem continua lutando
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
            },
            {
              icon: Users,
              title: "Acolhimento",
              desc: "Recuperar autonomia, autoestima e qualidade de vida de pacientes com sequelas.",
            },
            {
              icon: Building2,
              title: "Pioneirismo",
              desc: "O primeiro centro filantrópico do Brasil dedicado à reabilitação oncológica.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
                <item.icon className="text-accent-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-accent rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">A História</span>
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
