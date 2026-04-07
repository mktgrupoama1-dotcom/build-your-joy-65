import buildingImg from "@/assets/building.jpg";

const stats = [
  { value: "444 m²", label: "Área do terreno" },
  { value: "2.541 m²", label: "Área construída" },
  { value: "6", label: "Pavimentos" },
  { value: "BH/MG", label: "Belo Horizonte" },
];

const ProjectSection = () => {
  return (
    <section id="projeto" className="section-padding bg-warm-cream">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">O Projeto</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              O primeiro centro do Brasil dedicado ao tratamento das sequelas do câncer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Um hospital filantrópico, gratuito e especializado em reabilitação oncológica, criado para oferecer atendimento multidisciplinar, humanizado e acolhedor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-background rounded-xl p-5 border border-border">
                  <p className="text-2xl font-bold text-primary font-serif">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={buildingImg}
              alt="Projeto arquitetônico do instituto"
              className="rounded-3xl shadow-2xl w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
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
