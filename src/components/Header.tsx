import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logos_usar.png";

const navItems = [
  { label: "O Instituto", href: "#instituto" },
  { label: "O Projeto", href: "#projeto" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Apoie", href: "#apoie" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <img src={logoImg} alt="Lugar de quem AMA" className="h-12 object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apoie"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Doe Agora
          </a>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apoie"
            onClick={() => setOpen(false)}
            className="block mt-2 bg-primary text-primary-foreground text-center px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Doe Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
