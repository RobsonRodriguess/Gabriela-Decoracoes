import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- FUNDOS (Máxima Claridade) --- */}

      {/* 1. Imagem MOBILE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden opacity-100"
        style={{ backgroundImage: "url('/hero-mobile.jpeg')" }} 
      >
        {/* Overlay Mobile Suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
      </div>

      {/* 2. Imagem DESKTOP */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block opacity-100"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay Desktop Suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center mt-[-40px]">
        <div className="max-w-4xl mx-auto">
          
          {/* Tagline - Negrito para leitura rápida */}
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-white mb-6 animate-fade-in drop-shadow-lg">
            Cortinas & Persianas
          </p>

          {/* Main Title - Font Bold e Sombra Forte */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-200">
              Sofisticação
            </span> e{' '}
            <span className="text-white">Bom Gosto</span>
            <br />
            <span className="text-white">para seu Ambiente</span>
          </h1>

          {/* Subtitle - De Light para Semibold/Bold */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-12 animate-fade-in font-semibold leading-relaxed drop-shadow-lg">
            Transformamos ambientes com elegância e qualidade há mais de <strong className="text-white font-black underline underline-offset-4">18 anos</strong>.
            <br className="hidden md:block" /> Projetos personalizados que refletem seu estilo.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-black rounded-full bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            >
              <span className="relative z-10 uppercase tracking-widest text-sm">Ver Projetos</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="text-white hover:text-gray-200 transition-colors">
          <ChevronDown size={36} strokeWidth={3} />
        </a>
      </div>

      {/* Elementos Decorativos */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;