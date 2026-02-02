import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-primary/80 mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
            Cortinas & Persianas
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-tight mb-8 animate-fade-in opacity-0 [animation-delay:400ms]">
            <span className="text-gradient-silver">Sofisticação</span> e{' '}
            <span className="text-foreground">Bom Gosto</span>
            <br />
            <span className="text-foreground/90">para seu Ambiente</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in opacity-0 [animation-delay:600ms]">
            Transformamos ambientes com elegância e qualidade há mais de 12 anos.
            Projetos personalizados que refletem seu estilo.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in opacity-0 [animation-delay:800ms]">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full btn-silver text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl border-shine"
            >
              <span className="relative z-10">Saber Mais</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="text-primary/60 hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
