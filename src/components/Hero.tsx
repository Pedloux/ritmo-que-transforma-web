import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-team-building.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('cotacao');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Equipe corporativa tocando instrumentos musicais em atividade de team building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Ritmo que Transforma Resultados</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transformamos eventos corporativos em{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              experiências inesquecíveis
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Team Building musical, shows e dinâmicas vivenciais que unem pessoas 
            e impulsionam cultura organizacional com ritmo, emoção e alta performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToForm}
              className="min-w-[200px]"
            >
              Solicitar Proposta
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground">
              <Play className="w-5 h-5 mr-2" />
              Ver em Ação
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-300">26</span>
              <span>anos de história</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-300">1500+</span>
              <span>eventos realizados</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-300">98%</span>
              <span>de aprovação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="w-6 h-6 text-white/60 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;