import { CheckCircle, X } from "lucide-react";

const ServicesMatrix = () => {
  const services = [
    {
      service: "Team Building Musical",
      problems: [
        { issue: "Falta de integração entre equipes", solution: true },
        { issue: "Comunicação deficiente", solution: true },
        { issue: "Baixo engajamento", solution: true },
        { issue: "Conflitos interpessoais", solution: true }
      ]
    },
    {
      service: "Shows Corporativos",
      problems: [
        { issue: "Eventos sem emoção", solution: true },
        { issue: "Baixa participação do público", solution: true },
        { issue: "Mensagens corporativas não fixadas", solution: true },
        { issue: "Falta de memorabilidade", solution: true }
      ]
    },
    {
      service: "Workshops de Diversidade",
      problems: [
        { issue: "Resistência a mudanças", solution: true },
        { issue: "Falta de consciência inclusiva", solution: true },
        { issue: "Preconceitos não discutidos", solution: true },
        { issue: "Ambiente não acolhedor", solution: true }
      ]
    },
    {
      service: "Palestras Motivacionais",
      problems: [
        { issue: "Desalinhamento com propósito", solution: true },
        { issue: "Falta de inspiração", solution: true },
        { issue: "Conhecimento não aplicado", solution: true },
        { issue: "Baixa motivação da equipe", solution: true }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Matriz de{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Soluções
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada desafio organizacional tem uma solução musical específica. 
            Veja como nossos serviços resolvem as principais dores corporativas.
          </p>
        </div>

        {/* Matrix */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-5 gap-4 mb-4">
              {/* Header */}
              <div className="font-bold text-lg p-4">
                Dores Corporativas
              </div>
              {services.map((service) => (
                <div key={service.service} className="text-center p-4">
                  <h3 className="font-semibold text-sm lg:text-base leading-tight">
                    {service.service}
                  </h3>
                </div>
              ))}
            </div>

            {/* Matrix Rows */}
            {Array.from({ length: 4 }).map((_, issueIndex) => (
              <div key={issueIndex} className="grid grid-cols-5 gap-4 mb-2">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <span className="text-sm lg:text-base text-muted-foreground">
                    {services[0].problems[issueIndex].issue}
                  </span>
                </div>
                {services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="p-4 bg-background rounded-lg border border-border text-center">
                    {service.problems[issueIndex].solution ? (
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Não encontrou sua dor específica?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa experiência de 26 anos nos permite adaptar soluções para desafios únicos. 
              Vamos conversar sobre suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-brand text-white px-6 py-3 rounded-lg font-semibold hover:shadow-hover transition-all duration-300">
                Agendar Consultoria Gratuita
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Baixar Case Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMatrix;