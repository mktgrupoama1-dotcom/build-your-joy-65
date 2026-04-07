import heroImg from "@/assets/hero.jpg";
import { useDonation } from "@/contexts/DonationContext";
import { ArrowRight } from "lucide-react";

const monthlyValues = [15, 30, 50];
const onceValues = [30, 50, 100];

const HeroSection = () => {
  const { type, amount, setType, setAmount } = useDonation();
  const values = type === "monthly" ? monthlyValues : onceValues;

  const scrollToForm = () => {
    document.getElementById("formulario-doacao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Pessoa sorrindo após tratamento" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left column */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Transforme uma{" "}
              <span className="text-secondary">vida.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Quem venceu o câncer não deveria continuar sofrendo sozinho.
              <br className="hidden md:block" />
              Seja parte da cura que vem depois.
            </p>
          </div>

          {/* Right column — Card */}
          <div className="w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-border">
              <button
                onClick={() => { setType("monthly"); setAmount(30); }}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                  type === "monthly"
                    ? "text-primary border-b-2 border-primary bg-accent/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                R$ 1 por dia
              </button>
              <button
                onClick={() => { setType("once"); setAmount(50); }}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                  type === "once"
                    ? "text-primary border-b-2 border-primary bg-accent/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Doação única
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {type === "monthly"
                  ? "Com R$ 1 por dia você ajuda a construir o único centro gratuito do Brasil para tratamento de sequelas do câncer."
                  : "Toda contribuição ajuda a construir um espaço onde quem venceu o câncer pode recuperar a vida com dignidade."}
              </p>

              {/* Value buttons */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {values.map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`py-2.5 rounded-lg text-sm font-semibold border transition-colors ${
                      amount === v
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    R$ {v}
                  </button>
                ))}
                <button
                  onClick={() => setAmount(null)}
                  className={`py-2.5 rounded-lg text-sm font-semibold border transition-colors ${
                    amount === null
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  Outro
                </button>
              </div>

              <button
                onClick={scrollToForm}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-full text-base font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {type === "monthly" ? "Quero transformar uma vida agora" : "Quero fazer minha doação"}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
