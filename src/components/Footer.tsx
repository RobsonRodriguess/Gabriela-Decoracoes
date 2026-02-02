import { useEffect, useRef } from 'react';
import { Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Função para voltar ao topo suavemente
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" ref={sectionRef} className="bg-[#050505] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Decorativo (Gradiente sutil) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* CTA Section (Chamada para Ação) */}
      <div className="relative py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">
            Tem um projeto em mente?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Tire seu sonho do papel. Entre em contato com a <span className="text-white font-medium">Gabriela Decorações</span> e vamos transformar seu ambiente.
          </p>
          
          <a
            href="https://wa.me/556133880005"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-sm bg-white text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Phone size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Logo & Descrição */}
            <div className="lg:col-span-2 space-y-6">
              <a href="#home" className="inline-block">
                <img
                  src="/LogoGabrielaDecora.png" 
                  alt="Gabriela Decorações"
                  className="h-20 w-auto object-contain opacity-100 transition-opacity"
                />
              </a>
              <p className="text-gray-400 max-w-md leading-relaxed font-light text-sm md:text-base">
                Transformando ambientes com sofisticação e bom gosto há mais de 18 anos. 
                Especialistas em cortinas, persianas e soluções exclusivas de decoração em Brasília.
              </p>
            </div>

            {/* Contato Rápido */}
            <div>
              <h4 className="font-serif text-lg text-white mb-6 tracking-wide border-l-2 border-gray-500 pl-3">
                Contato
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/556133880005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone size={14} />
                    </div>
                    <span className="text-sm tracking-wider">(61) 3388-0005</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Gabrieladecoracoes@gmail.com"
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail size={14} />
                    </div>
                    <span className="text-sm tracking-wider">Gabrieladecoracoes@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg text-white mb-6 tracking-wide border-l-2 border-gray-500 pl-3">
                  Siga-nos
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://wa.me/556133880005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright e Voltar ao Topo */}
      <div className="border-t border-white/10 py-8 bg-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* AQUI ESTÁ A CORREÇÃO: TEXT-WHITE */}
          <p className="text-xs text-white uppercase tracking-widest text-center md:text-left opacity-90">
            © {new Date().getFullYear()} Gabriela Decorações. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors uppercase tracking-widest"
          >
            Voltar ao topo
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;