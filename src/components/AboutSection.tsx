import { Heart, Users, Building2, Sparkles } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const AboutSection = () => {
  return (
    <section id="instituto" className="section-padding bg-background relative overflow-hidden">
      <FloatingParticles />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-warm-gold-light rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-badge mb-4">
            <Sparkles size={14} className="text-secondary" />
            O Instituto
          </span>
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
              iconBg: "gradient-primary",
              borderColor: "border-l-primary",
              accentColor: "from-primary/10 via-primary/5 to-transparent",
            },
            {
              icon: Users,
              title: "Acolhimento",
              desc: "Recuperar autonomia, autoestima e qualidade de vida de pacientes com sequelas.",
              iconBg: "bg-secondary",
              borderColor: "border-l-secondary",
              accentColor: "from-secondary/10 via-secondary/5 to-transparent",
            },
            {
              icon: Building2,
              title: "Pioneirismo",
              desc: "O primeiro centro filantrópico do Brasil dedicado à reabilitação oncológica.",
              iconBg: "gradient-primary",
              borderColor: "border-l-accent-foreground",
              accentColor: "from-accent via-accent/50 to-transparent",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${item.accentColor} rounded-2xl p-8 border-l-4 ${item.borderColor} border border-border/50 card-hover-lift`}
            >
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-500" />
              <div className={`w-16 h-16 rounded-2xl ${item.iconBg} icon-box mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-primary/30`}>
                <item.icon className="text-primary-foreground" size={30} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-accent via-warm-gold-light/50 to-accent rounded-3xl p-8 md:p-12 relative overflow-hidden border border-secondary/20">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute top-4 right-8 text-secondary/20">
              <Heart size={120} />
            </div>
            <div className="max-w-3xl relative">
              <span className="section-badge mb-4">A História</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-3 mb-4 font-serif">
                Uma experiência pessoal transformada em missão
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Após enfrentar a Covid-19 e, posteriormente, o câncer, o empresário e produtor cultural Amândio Lessa decidiu transformar sua experiência pessoal em uma missão de vida: criar um centro especializado dedicado à reabilitação de pacientes que convivem com sequelas do câncer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
