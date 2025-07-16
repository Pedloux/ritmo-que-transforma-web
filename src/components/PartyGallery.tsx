import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Versão revisada da galeria de vídeos
 * - Layout responsivo: 1 col (mobile) / 2 cols (≥ md)
 * - CTA e legenda ao lado do vídeo em telas largas → mais equilíbrio visual
 * - Controles de navegação acessíveis (teclado/aria)
 * - Auto‑play opcional (10 s) para manter dinamismo
 * - Botões e indicadores mais visíveis sem poluir a área do vídeo
 */

const galleryItems = [
  {
    type: "video",
    src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=7041b57f-9cfe-4706-8798-bd3266ad5610",
    caption: "Casamento Marina & João – Energia única",
  },
  {
    type: "video",
    src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=73934b9d-403a-48d0-ad02-71a2010ed1d6",
    caption: "Bodas de Ouro – Momentos inesquecíveis",
  },
  {
    type: "video",
    src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=e1a7a900-833e-4bd4-a0e3-46197fcab99b",
    caption: "Festa Premium – Samba autêntico",
  },
  {
    type: "video",
    src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=67e90cdc-c879-4142-b1b8-8c5d291a966a",
    caption: "Aniversário 50 anos – Alegria contagiante",
  },
  {
    type: "video",
    src: "https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=813b9afa-f5e9-48a6-a9d6-68889ead7d0e",
    caption: "Experiência interativa – Todos participam",
  },
] as const;

export default function PartyGallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % galleryItems.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  // Auto‑play suave (pausa a cada troca manual)
  useEffect(() => {
    const id = setInterval(next, 10000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section id="galeria" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Galeria de{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Momentos Únicos
            </span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-lg text-muted-foreground">
            Cada batida, uma memória. Veja como transformamos festas em experiências inesquecíveis.
          </p>
        </header>

        {/* Wrapper */}
        <div className="rounded-3xl shadow-2xl overflow-hidden bg-white/80 backdrop-blur-md md:grid md:grid-cols-2">
          {/* Vídeo + Controles */}
          <div className="relative">
            <div className="aspect-[9/16] md:aspect-video">
              <iframe
                key={index}
                src={galleryItems[index].src}
                className="absolute inset-0 w-full h-full rounded-none"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Navegação */}
            <Button
              aria-label="Anterior"
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
              onClick={prev}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              aria-label="Próximo"
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
              onClick={next}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === index ? 'bg-primary scale-110' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Legenda + CTA */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-12 space-y-6">
            <h3 className="text-2xl font-semibold leading-snug">
              {galleryItems[index].caption}
            </h3>
            <p className="text-muted-foreground">
              Criamos momentos únicos que seus convidados vão lembrar para sempre. Cada evento é uma obra de arte musical do começo ao fim.
            </p>
            <Button
              size="lg"
              className="w-fit"
              onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero meu orçamento rápido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
