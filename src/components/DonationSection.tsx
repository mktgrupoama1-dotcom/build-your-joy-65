import { Heart } from "lucide-react";
import supportImg from "@/assets/support.jpg";

const DonationSection = () => {
  return (
    <section id="apoie" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={supportImg} alt="" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/70" />
      </div>
      <div className="relative container mx-auto text-center">
        <Heart className="mx-auto text-secondary mb-6" size={48} fill="currentColor" />
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Exército de quem AMA</span>
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-6">
          Faça parte do Exército de Quem Ama
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Com apenas <strong className="text-secondary">R$ 1 por dia</strong>, você ajuda a construir o primeiro centro gratuito do Brasil dedicado ao tratamento das sequelas do câncer.
        </p>
        <p className="text-secondary text-xl font-semibold font-serif mb-10">
          Um real por dia. Um gesto de amor. Um impacto que pode transformar milhares de vidas.
        </p>
        <a
          href="https://www.lugardequeama.org.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
        >
          Apoie Agora
        </a>
      </div>
    </section>
  );
};

export default DonationSection;
