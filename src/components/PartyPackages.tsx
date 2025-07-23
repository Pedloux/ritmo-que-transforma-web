import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Music, Clock } from "lucide-react";
import sambaShowImage from "@/../public/Imagens/AM-LP17(Laranja)-menor.png";
import percussionImage from "@/../public/Imagens/AM-LP22-menor.png";
import workshopImage from "@/../public/Imagens/AM-LP24(Laranja)-menor.png";

const PartyPackages = () => {
  const packages = [
    {
      title: "Show Samba Premium",
      image: sambaShowImage,
      duration: "120 minutos",
      icon: Music,
      benefits: [
        "Repertório clássico + hits atuais",
        "Som, luz e figurino inclusos",
        "Interação total com convidados"
      ],
      cta: "Ver Playlist de Casamento"
    },
    {
      title: "Shows Intimistas",
      image: percussionImage,
      duration: "120 minutos",
      icon: Users,
      benefits: [
        "Repertório montado junto com o cliente",
        "Estética sofisticada e ambientação premium",
        "Diversos estilos musicais (MPB, pop, Black Music...)"
      ],
      cta: "Ver Playlist de Casamento"
    },
    {
      title: "Boteco em casa",
      image: workshopImage,
      duration: "120 minutos",
      icon: Play,
      benefits: [
        "Roda de samba em casa",
        "Clima de bar",
        "Alto nível de personalização"
      ],
      cta: "Ver Playlist de Casamento"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pacotes que Fazem{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Sua Festa Brilhar
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do casamento intimista à grande celebração, temos o ritmo perfeito 
            para cada momento especial da sua vida.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-hover transition-all duration-300 group">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <pkg.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{pkg.title}</h3>
                </div>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {pkg.title === "Shows Intimistas" ? (
                  <a
                    href="https://www.youtube.com/watch?v=PBhAj8y5JSc&list=PLeC6NGv0qCklDcqpZwRrslXFs5iiJVscH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      Veja nossa playlist acústica
                    </Button>
                  </a>
                ) : pkg.title === "Boteco em casa" ? (
                  <a
                    href="https://www.youtube.com/watch?v=f1ID1bQNqpU&list=PLeC6NGv0qCkm2pk2hoo-YOmnMyPDj9_Nd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      Veja a playlist de boteco
                    </Button>
                  </a>
                ) : pkg.title === "Show Samba Premium" ? (
                  <a
                    href="https://www.youtube.com/watch?v=vQ6mNl_L12k&list=PLeC6NGv0qCkm3k9GJj1LaZdx_-zUufihz&index=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      Veja a playlist de samba
                    </Button>
                  </a>
                ) : (
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    {pkg.cta}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Precisa de algo personalizado? Criamos experiências sob medida.
          </p>
          <Button size="lg" className="bg-gradient-brand text-white hover:shadow-hover transition-all duration-300">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartyPackages;