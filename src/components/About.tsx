import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Elemento Decorativo de Fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#151515] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Lado do Vídeo (Esquerda) */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
              {/* VÍDEO NO LUGAR DA IMAGEM */}
              <video
                src="/escritorio.mp4" // Certifique-se que o vídeo está na pasta public
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Brilho/Overlay sobre o vídeo para manter o texto legível se necessário */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Moldura Decorativa (Borda Prata) */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gray-600/30 rounded-sm -z-0" />
            
            {/* Badge "18 Anos" - Atualizado */}
            <div className="absolute -bottom-10 -left-4 md:-left-10 bg-white p-6 md:p-8 shadow-2xl z-20 border-t-4 border-gray-400">
              <p className="font-serif text-5xl md:text-6xl font-bold text-black leading-none">
                18
              </p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 mt-2">
                Anos de<br/>Experiência
              </p>
            </div>
          </div>

          {/* Lado do Texto (Direita) */}
          <div className="order-1 lg:order-2">
            <span className="block text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">
              Sobre Nós
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
              Construindo um <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                Ambiente Melhor
              </span>
            </h2>
            
            {/* Divisor Elegante */}
            <div className="w-20 h-[2px] bg-gray-700 mb-8" />
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Empresa consolidada no ramo de decoração de interiores. Há <strong className="text-white font-medium">18 anos</strong>, a <strong className="text-white font-medium">Gabriela Decorações</strong> transforma casas em lares com sofisticação e funcionalidade.
            </p>
            
            <p className="text-gray-500 leading-relaxed mb-10 font-light">
              Nossa missão é entender a essência de cada cliente e materializá-la através de cortinas, persianas e acabamentos de alto padrão. Cuidamos de tudo, do design à instalação final.
            </p>

            {/* Lista de Vantagens */}
            <ul className="space-y-5 mb-12">
              {[
                'Atendimento Consultivo e Personalizado',
                'Materiais de Alta Durabilidade',
                'Acabamento e Instalação Impecáveis',
                'Garantia e Suporte Pós-Venda',
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="font-light tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botão */}
            <a
              href="#contato"
              className="inline-block border border-white/30 px-10 py-4 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;