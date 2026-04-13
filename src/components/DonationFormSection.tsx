import { useState } from "react";
import { useDonation } from "@/contexts/DonationContext";
import { Lock, Heart } from "lucide-react";

const onceValues = [30, 50, 100];

const stripeLinks: Record<string, string> = {
  monthly: "https://buy.stripe.com/aFabJ26CI37wfcx8wQ6kg00",
  once_30: "https://buy.stripe.com/aFadRa3qw6jI8O914o6kg02",
  once_50: "https://buy.stripe.com/3cI5kE4uA0Zo2pL28s6kg03",
  once_100: "https://buy.stripe.com/3cI14o1io7nMaWh14o6kg04",
  once_other: "https://buy.stripe.com/fZu6oIgdicI68O96oI6kg05",
};

const DonationFormSection = () => {
  const { type, amount, setType, setAmount } = useDonation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let link: string;
    if (type === "monthly") {
      link = stripeLinks.monthly;
    } else if (amount === 30) {
      link = stripeLinks.once_30;
    } else if (amount === 50) {
      link = stripeLinks.once_50;
    } else if (amount === 100) {
      link = stripeLinks.once_100;
    } else {
      link = stripeLinks.once_other;
    }
    window.open(link, "_blank");
  };

  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    return digits
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 10) {
      return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    }
    return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  };

  return (
    <section id="formulario-doacao" className="section-padding bg-gradient-to-b from-muted/40 to-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-xl relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider bg-accent px-4 py-1.5 rounded-full mb-4">
            <Heart size={14} />
            Apoie
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Finalize sua doação
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex rounded-xl overflow-hidden border border-border mb-8">
          <button
            onClick={() => { setType("monthly"); setAmount(30); }}
            className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 ${
              type === "monthly"
                ? "gradient-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            Doação mensal (R$ 1/dia)
          </button>
          <button
            onClick={() => { setType("once"); setAmount(50); }}
            className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 ${
              type === "once"
                ? "gradient-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            Doação única
          </button>
        </div>

        <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8 border border-border/50">
          {type === "monthly" ? (
            <>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Você está prestes a ajudar a construir o único centro gratuito do Brasil para sequelas do câncer.
              </p>
              <div className="bg-gradient-to-r from-accent to-warm-gold-light rounded-xl p-4 mb-6 text-center">
                <p className="text-2xl font-bold text-foreground">R$ 30<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Sua doação vai direto para a construção do Instituto. Cada real conta.
              </p>
              <div className="grid grid-cols-4 gap-2 mb-6">
                {onceValues.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => { setAmount(v); setCustomAmount(""); }}
                    className={`py-2.5 rounded-lg text-sm font-semibold border transition-all duration-300 ${
                      amount === v
                        ? "gradient-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    R$ {v}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setAmount(null)}
                  className={`py-2.5 rounded-lg text-sm font-semibold border transition-all duration-300 ${
                    amount === null
                      ? "gradient-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  Outro
                </button>
              </div>
              {amount === null && (
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Valor personalizado</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">R$</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value.replace(/\D/g, ""))}
                      placeholder="0"
                      className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nome completo</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">CPF</label>
              <input
                type="text"
                required
                value={cpf}
                onChange={(e) => setCpf(formatCpf(e.target.value))}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="000.000.000-00"
                maxLength={14}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone <span className="text-muted-foreground font-normal">(opcional)</span></label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="(00) 00000-0000"
                maxLength={15}
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-3.5 rounded-full text-base font-bold hover:opacity-90 transition-all duration-300 mt-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              {type === "monthly" ? "Confirmar doação mensal" : "Confirmar minha doação"}
            </button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1.5">
            <Lock size={12} />
            {type === "monthly"
              ? "Pagamento 100% seguro. Você pode cancelar quando quiser."
              : "Pagamento 100% seguro. Doação com emissão de recibo."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationFormSection;
