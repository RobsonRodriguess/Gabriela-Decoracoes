import { 
  Waves, 
  Blinds, 
  Armchair, 
  Umbrella, 
  Sparkles, 
  Zap 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden p-8 rounded-sm bg-[#121212] border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      
      {/* Detalhe Superior (Linha Prata) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20 group-hover:opacity-50 transition-opacity" />
      
      <div className="relative z-10 flex flex-col items-start">
        {/* Ícone com fundo sutil */}
        <div className="w-14 h-14 mb-6 rounded-sm bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
          <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
        
        {/* Título com destaque */}
        <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Descrição */}
        <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors border-l border-white/10 pl-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Waves strokeWidth={1} size={32} />, 
      title: 'Cortinas',
      description: 'Confecção sob medida com tecidos nobres. O caimento perfeito para transformar a elegância do seu ambiente.',
    },
    {
      icon: <Blinds strokeWidth={1} size={32} />, 
      title: 'Persianas',
      description: 'Controle de luminosidade e privacidade com designs modernos. Opções em madeira, alumínio e tecidos técnicos.',
    },
    {
      icon: <Armchair strokeWidth={1} size={32} />, 
      title: 'Reforma de Sofá',
      description: 'Renovação completa de estofados. Trazemos vida nova ao seu móvel com espumas de alta densidade e tecidos premium.',
    },
    {
      icon: <Umbrella strokeWidth={1} size={32} />, 
      title: 'Toldos',
      description: 'Soluções sofisticadas para áreas externas. Proteção contra sol e chuva sem abrir mão da estética da fachada.',
    },
    {
      icon: <Sparkles strokeWidth={1} size={32} />, 
      title: 'Manutenção',
      description: 'Limpeza profunda ultrassônica e manutenção especializada para garantir a durabilidade e saúde das suas cortinas.',
    },
    {
      icon: <Zap strokeWidth={1} size={32} />, 
      title: 'Motorização',
      description: 'Automação residencial de ponta. Controle suas cortinas e persianas por controle remoto, smartphone ou voz.',
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-black relative">
      
      {/* Container */}
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="block text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-4">
            O que oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 uppercase tracking-wide">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Serviços</span>
          </h2>
          <div className="w-24 h-[1px] bg-gray-700 mx-auto" />
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Botão Inferior (CTA) - Igual ao PDF "SABER MAIS" */}
        <div className="text-center mt-16">
          <a href="#contato" className="inline-block border-b border-gray-500 text-gray-400 text-sm uppercase tracking-widest hover:text-white hover:border-white transition-all pb-1">
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;