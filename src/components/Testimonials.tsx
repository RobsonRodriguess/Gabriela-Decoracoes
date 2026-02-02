import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula Ferreira',
    role: 'Arquiteta',
    content: 'Trabalho excepcional! A Gabriela Decorações superou todas as expectativas. As cortinas ficaram perfeitas e a instalação foi impecável. O acabamento é digno de revista.',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo Silva',
    role: 'Empresário',
    content: 'Profissionalismo do início ao fim. Recomendo para qualquer projeto residencial ou comercial. O atendimento consultivo fez toda a diferença na escolha dos tecidos.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'Designer de Interiores',
    content: 'Parceria de sucesso há anos. A qualidade dos materiais e o cuidado com cada detalhe fazem toda a diferença nos meus projetos. Sempre entregam no prazo.',
    rating: 5,
  },
  {
    name: 'Roberto Almeida',
    role: 'Médico',
    content: 'Transformaram minha clínica com persianas elegantes e funcionais. O sistema de motorização indicado facilitou muito o dia a dia. Recomendo fortemente.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlide = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Pequeno delay para a animação de saída acontecer
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === 'next') return (prev + 1) % testimonials.length;
        return (prev - 1 + testimonials.length) % testimonials.length;
      });
      setIsAnimating(false);
    }, 300); // Tempo igual ao duration-300 do CSS
  };

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      
      {/* Elementos de Fundo */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 block">
            Feedback
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            O que dizem nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Clientes</span>
          </h2>
          <div className="w-20 h-[1px] bg-white/20 mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Card Principal */}
          <div className="relative bg-[#121212] border border-white/10 p-8 md:p-14 rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            
            {/* Ícone de Aspas Gigante (Decorativo) */}
            <Quote className="absolute top-8 left-8 text-white/5 w-24 h-24 -scale-x-100 pointer-events-none" />

            <div className={`relative z-10 transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              
              {/* Estrelas */}
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-white text-white" />
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-8 italic text-center md:text-left">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 justify-center md:justify-start border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-serif font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-serif text-lg tracking-wide">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

            </div>

            {/* Navegação Lateral (Setas) - Desktop */}
            <button
              onClick={() => handleSlide('prev')}
              className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl hidden md:flex hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => handleSlide('next')}
              className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 shadow-xl hidden md:flex hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navegação Mobile (Bolinhas e Setas) */}
          <div className="flex flex-col items-center gap-6 mt-8 md:mt-12">
            
            {/* Setas (Apenas Mobile) */}
            <div className="flex gap-4 md:hidden">
              <button onClick={() => handleSlide('prev')} className="p-3 bg-[#1a1a1a] rounded-full text-white border border-white/10">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => handleSlide('next')} className="p-3 bg-[#1a1a1a] rounded-full text-white border border-white/10">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bolinhas Indicadoras */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-gray-700 hover:bg-gray-500'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;