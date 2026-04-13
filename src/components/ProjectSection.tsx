import FloatingParticles from "./FloatingParticles";
import { Sparkles } from "lucide-react";

const stats = [
  { value: "444 m²", label: "Área do terreno", emoji: "📐" },
  { value: "2.541 m²", label: "Área construída", emoji: "🏗️" },
  { value: "6", label: "Pavimentos", emoji: "🏢" },
  { value: "BH/MG", label: "Belo Horizonte", emoji: "📍" },
];

const ProjectSection = () => {
  return (
    <section id="projeto" className="section-padding gradient-warm-vivid relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-badge mb-4">
              <Sparkles size={14} className="text-secondary" />
              O Projeto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              O primeiro centro do Brasil dedicado ao tratamento das{" "}
              <span className="text-gradient">sequelas do câncer</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Um hospital filantrópico, gratuito e especializado em reabilitação oncológica, criado para oferecer atendimento multidisciplinar, humanizado e acolhedor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-background/90 backdrop-blur-sm rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg card-hover-lift group">
                  <span className="text-2xl mb-2 block">{stat.emoji}</span>
                  <p className="text-2xl font-bold text-gradient font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl shadow-2xl overflow-hidden w-full aspect-video border-2 border-secondary/20">
              <iframe
                src="https://www.youtube.com/embed/aYaUiBU8swE"
                title="Vídeo do projeto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 gradient-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg animate-bounce-gentle">
              <p className="text-sm font-medium">Um lugar onde o cuidado</p>
              <p className="text-lg font-bold">continua depois da cura. 💛</p>
            </div>
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-xl shadow-lg animate-pulse-soft">
              ▶
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
