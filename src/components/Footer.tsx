import { Heart, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary-foreground font-serif mb-4">
              Lugar de quem <span className="text-secondary">AMA</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Instituto Lugar de quem AMA<br />
              CNPJ: 32.399.245/0001-20<br />
              Instituto Preto no Branco
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="mailto:contato@lugardequeama.org.br" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                <Mail size={16} />
                contato@lugardequeama.org.br
              </a>
              <a href="https://instagram.com/lugardequemama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                <Instagram size={16} />
                @lugardequemama
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Rua Camilo Prates, 46 — Bairro União<br />Belo Horizonte / MG
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">Navegação</h4>
            <div className="space-y-2">
              {["O Instituto", "O Projeto", "Tratamentos", "Impacto", "Apoie"].map((label) => (
                <a key={label} href={`#${label.toLowerCase().replace("o ", "")}`} className="block text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Instituto Lugar de quem AMA. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-sm flex items-center gap-1">
            Feito com <Heart size={12} fill="currentColor" className="text-primary" /> para quem precisa de cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
