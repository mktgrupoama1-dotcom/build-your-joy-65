import FloatingParticles from "./FloatingParticles";
import { CheckCircle2, Clock, ArrowUp } from "lucide-react";

const steps = [
  { text: "Estudos técnicos e geotécnicos do terreno", emoji: "📋" },
  { text: "Desenvolvimento dos projetos executivos", emoji: "📐" },
  { text: "Licenciamento e aprovação junto aos órgãos públicos", emoji: "📜" },
  { text: "Execução das fundações e da estrutura da edificação", emoji: "🏗️" },
  { text: "Execução das instalações técnicas e acabamentos", emoji: "⚡" },
  { text: "Instalação de equipamentos e preparação para operação", emoji: "🏥" },
];

const statusItems = [
  { label: "Doação do terreno", status: "100%", done: true },
  { label: "Topografia", status: "100%", done: true },
  { label: "Projeto arquitetônico", status: "100%", done: true },
  { label: "Projetos de execução", status: "60%", done: false, progress: 60 },
  { label: "Sondagem", status: "100%", done: true },
  { label: "Aprovação da prefeitura", status: "Em andamento", done: false },
  { label: "Demolição e preparação do terreno", status: "Em andamento", done: false },
];

const ConstructionSection = () => {
  return (
    <section className="section-padding gradient-warm-vivid relative overflow-hidden">
      <FloatingParticles />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-badge mb-4">🏗️ Construção</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Um sonho construído com{" "}
              <span className="text-gradient">responsabilidade</span>
            </h2>
          </div>

          {/* Status da Obra */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              📊 Status da Obra
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Coluna: Concluídos */}
              <div>
                <h4 className="text-sm font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Concluídos
                </h4>
                <div className="space-y-2">
                  {statusItems.filter(item => item.done).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-green-200/50 hover:shadow-md transition-all">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground font-medium text-sm">{item.label}</p>
                      </div>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700 shrink-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna: Em Andamento */}
              <div>
                <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center gap-2">
                  <Clock size={16} />
                  Em Andamento
                </h4>
                <div className="space-y-2">
                  {statusItems.filter(item => !item.done).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-secondary/20 hover:border-primary/30 hover:shadow-lg card-hover-lift group">
                      <Clock size={20} className="text-secondary shrink-0 animate-pulse-soft" />
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground font-medium text-sm">{item.label}</p>
                        {item.progress && (
                          <div className="w-full bg-muted rounded-full h-2 mt-1.5">
                            <div
                              className="gradient-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-foreground shrink-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Etapas */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-background/90 backdrop-blur-sm rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg card-hover-lift group">
                <div className="w-12 h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {step.emoji}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-foreground font-medium">{step.text}</p>
                </div>
                <CheckCircle2 size={20} className="text-primary/30 group-hover:text-primary mt-2 transition-colors duration-300 shrink-0" />
              </div>
            ))}
          </div>

          {/* Voltar ao início */}
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUp size={16} />
              Voltar ao início
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
