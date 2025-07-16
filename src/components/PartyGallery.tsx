import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartyGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryItems = [
    {
      type: "video",
      src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=7041b57f-9cfe-4706-8798-bd3266ad5610",
      caption: "Casamento Marina & João - Energia única"
    },
    {
      type: "video", 
      src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=73934b9d-403a-48d0-ad02-71a2010ed1d6",
      caption: "Bodas de Ouro - Momentos inesquecíveis"
    },
    {
      type: "video",
      src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=e1a7a900-833e-4bd4-a0e3-46197fcab99b", 
      caption: "Festa Premium - Samba autêntico"
    },
    {
      type: "video",
      src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=67e90cdc-c879-4142-b1b8-8c5d291a966a",
      caption: "Aniversário 50 anos - Alegria contagiante"
    },
    {
      type: "video",
      src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=813b9afa-f5e9-48a6-a9d6-68889ead7d0e",
      caption: "Experiência interativa - Todos participam"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Galeria de{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Momentos Únicos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada batida, uma memória. Veja como transformamos festas em experiências inesquecíveis.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Container - Formato 9:16 */}
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src={galleryItems[currentIndex].src}
                style={{ border: 'none' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
                
              />
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg font-medium text-center">
                {galleryItems[currentIndex].caption}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-brand rounded-xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Quer ver sua festa aqui?
            </h3>
            <p className="text-white/90 mb-6">
              Criamos momentos únicos que seus convidados vão lembrar para sempre. 
              Cada evento é uma obra de arte musical.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => {
                const formElement = document.getElementById('orcamento');
                formElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero meu orçamento rápido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyGallery;