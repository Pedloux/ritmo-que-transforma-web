import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, CheckCircle } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import corporateShow from "@/assets/corporate-show.jpg";
import workshopTraining from "@/assets/workshop-training.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: "dinamicas",
      title: "Dinâmicas Vivenciais",
      image: teamCollaboration,
      description: "Team building musical que transforma grupos em orquestras corporativas",
      benefits: [
        "Quebra barreiras hierárquicas instantaneamente",
        "Desenvolve escuta ativa e colaboração",
        "Cria memórias afetivas duradouras"
      ],
      highlight: "Em 30 minutos transformamos 750 colaboradores em uma bateria harmonizada",
      company: "Algar Telecom",
      videoId: "7041b57f-9cfe-4706-8798-bd3266ad5610"
    },
    {
      id: "shows",
      title: "Shows Corporativos",
      image: corporateShow,
      description: "Espetáculos musicais que alinham entretenimento e mensagens corporativas",
      benefits: [
        "Engajamento garantido do público",
        "Mensagens corporativas integradas à música",
        "Atmosfera festiva e motivacional"
      ],
      highlight: "Shows customizados que celebram conquistas e fortalecem cultura",
      company: "Bosch Brasil",
      videoId: "73934b9d-403a-48d0-ad02-71a2010ed1d6"
    },
    {
      id: "workshops",
      title: "Workshops Especializados",
      image: workshopTraining,
      description: "Trilhas de desenvolvimento com percussão, diversidade e liderança",
      benefits: [
        "Metodologia baseada em neurociência",
        "Aplicação prática de conceitos",
        "Desenvolvimento de soft skills"
      ],
      highlight: "Programas de diversidade & inclusão através da música",
      company: "Banco do Brasil",
      videoId: "e1a7a900-833e-4bd4-a0e3-46197fcab99b"
    },
    {
      id: "palestras",
      title: "Palestras Motivacionais",
      image: teamCollaboration,
      description: "Conteúdo inspirador combinado com demonstrações musicais ao vivo",
      benefits: [
        "Conteúdo baseado em cases reais",
        "Interação com demonstrações musicais",
        "Aplicação imediata dos conceitos"
      ],
      highlight: "Palestras que tocam corações e movem resultados",
      company: "Ferrero Group",
      videoId: "67e90cdc-c879-4142-b1b8-8c5d291a966a"
    }
  ];

  const [activeTab, setActiveTab] = useState("dinamicas");

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nosso{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências musicais que transformam equipes e fortalecem culturas organizacionais
          </p>
        </div>

        {/* Portfolio Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-background/80 backdrop-blur-sm">
            {portfolioItems.map((item) => (
              <TabsTrigger 
                key={item.id} 
                value={item.id}
                className="data-[state=active]:bg-gradient-brand data-[state=active]:text-white font-medium"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioItems.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {item.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="bg-gradient-card border border-border rounded-xl p-6">
                    <blockquote className="text-lg font-medium text-foreground mb-2">
                      "{item.highlight}"
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      — {item.company}
                    </cite>
                  </div>

                  {/* CTA */}
                  <Button variant="cta" size="lg" className="w-full md:w-auto">
                    <Play className="w-5 h-5 mr-2" />
                    Veja em Ação
                  </Button>
                </div>

                {/* Image & Video */}
                <div className="relative group">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                    <iframe 
                      id={`panda-${item.videoId}`}
                      src={`https://player-vz-fab3c7e6-e73.tv.pandavideo.com.br/embed/?v=${item.videoId}`}
                      style={{ border: 'none' }}
                      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                      allowFullScreen={true}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;