import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "O Instituto", href: "#instituto" },
  { label: "O Projeto", href: "#projeto" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Apoie", href: "#formulario-doacao" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logoImg} alt="Lugar de quem AMA" className="h-16 object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#formulario-doacao"
            className="gradient-primary text-primary-foreground px-7 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 flex items-center gap-2"
          >
            <Heart size={18} />
            Doe Agora
          </a>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border/30 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#formulario-doacao"
            onClick={() => setOpen(false)}
            className="block mt-3 gradient-primary text-primary-foreground text-center px-5 py-2.5 rounded-full text-sm font-semibold shadow-md"
          >
            ❤️ Doe Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
