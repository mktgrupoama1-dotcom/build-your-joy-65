const stats = [
  { value: "444 m²", label: "Área do terreno" },
  { value: "2.541 m²", label: "Área construída" },
  { value: "6", label: "Pavimentos" },
  { value: "BH/MG", label: "Belo Horizonte" },
];

const ProjectSection = () => {
  return (
    <section id="projeto" className="section-padding gradient-warm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1.5 rounded-full mb-4">O Projeto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              O primeiro centro do Brasil dedicado ao tratamento das{" "}
              <span className="text-gradient">sequelas do câncer</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Um hospital filantrópico, gratuito e especializado em reabilitação oncológica, criado para oferecer atendimento multidisciplinar, humanizado e acolhedor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-background/80 backdrop-blur-sm rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <p className="text-2xl font-bold text-gradient font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl shadow-2xl overflow-hidden w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/aYaUiBU8swE"
                title="Vídeo do projeto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 gradient-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-sm font-medium">Um lugar onde o cuidado</p>
              <p className="text-lg font-bold">continua depois da cura.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
