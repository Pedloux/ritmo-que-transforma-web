import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O Que Nossos{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Clientes Dizem
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados reais de quem viveu a experiência Apito de Mestre
            </p>
          </div>

          {/* Video Testimonial */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Renata Souza</h3>
                  <p className="text-muted-foreground">Diretora de RH - Empresa Multinacional</p>
                </div>
              </div>

              <blockquote className="text-xl font-medium text-foreground leading-relaxed">
                "A Apito de Mestre conseguiu algo que considerávamos impossível: 
                unir 500 colaboradores de diferentes culturas em uma única experiência. 
                O impacto foi imediato e duradouro."
              </blockquote>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">95% de engajamento medido</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Redução de 40% no turnover da equipe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">Melhoria de 60% na comunicação interna</span>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                <iframe 
                  id="panda-813b9afa-f5e9-48a6-a9d6-68889ead7d0e"
                  src="https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=813b9afa-f5e9-48a6-a9d6-68889ead7d0e"
                  style={{ border: 'none' }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                  allowFullScreen={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">André Lima</h4>
                  <p className="text-sm text-muted-foreground">CEO - Tech Startup</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "Transformaram nosso evento de fim de ano em uma experiência única. 
                Ver toda a equipe tocando junto foi emocionante e fortaleceu nossa cultura."
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Marina Santos</h4>
                  <p className="text-sm text-muted-foreground">Gerente de Pessoas - Retail</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "A metodologia deles é única. Em poucos minutos, quebraram barreiras que 
                existiam há anos entre os departamentos. Simplesmente incrível!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;