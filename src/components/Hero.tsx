import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- FUNDOS (Aqui está a mágica) --- */}

      {/* 1. Imagem MOBILE (Vertical - Só aparece no celular) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden opacity-90"
        style={{ backgroundImage: "url('/hero-mobile.jpeg')" }} 
      >
        {/* Overlay Mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      {/* 2. Imagem DESKTOP (Horizontal - Só aparece no PC) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block opacity-90"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay Desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center mt-[-40px]">
        <div className="max-w-4xl mx-auto">
          
          {/* Tagline */}
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-gray-300 mb-6 animate-fade-in">
            Cortinas & Persianas
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-8 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500">
              Sofisticação
            </span> e{' '}
            <span className="text-white">Bom Gosto</span>
            <br />
            <span className="text-white/90">para seu Ambiente</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in font-light leading-relaxed">
            Transformamos ambientes com elegância e qualidade há mais de <strong className="text-white">18 anos</strong>.
            Projetos personalizados que refletem seu estilo.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10 uppercase tracking-widest text-xs">Ver Projetos</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;