import { Ruler, FileText, Hammer, Sparkles } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Ruler size={32} />,
      title: "1. Visita Técnica",
      description: "Vamos até seu imóvel para entender sua necessidade, medir o espaço e apresentar os catálogos de tecidos exclusivos."
    },
    {
      icon: <FileText size={32} />,
      title: "2. Orçamento Detalhado",
      description: "Enviamos uma proposta personalizada e transparente, com opções de acabamentos e prazos claros para sua aprovação."
    },
    {
      icon: <Hammer size={32} />,
      title: "3. Confecção e Instalação",
      description: "Após a confecção sob medida, nossa equipe realiza a instalação com limpeza, rapidez e mínimo ruído."
    },
    {
      icon: <Sparkles size={32} />,
      title: "4. Entrega Perfeita",
      description: "Finalizamos com a higienização do local e instruções de uso, garantindo que o ambiente esteja pronto para brilhar."
    }
  ];

  return (
    // ADICIONEI O ID="PROCESSO" AQUI EMBAIXO:
    <section id="processo" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 block">
            Passo a Passo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Como funciona nosso <span className="text-gray-500">Atendimento</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Linha conectora (Apenas Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Círculo do Ícone */}
              <div className="w-24 h-24 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/40 group-hover:scale-110 transition-all duration-500 shadow-2xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-serif text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;