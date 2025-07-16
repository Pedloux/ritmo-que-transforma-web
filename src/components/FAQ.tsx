import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "E se o espaço for pequeno?",
      answer: "Adaptamos com nossa versão pocket usando instrumentos leves e portáteis. Conseguimos fazer apresentações incríveis em espaços a partir de 30m². A energia do samba se adapta a qualquer ambiente!"
    },
    {
      question: "O barulho pode incomodar os vizinhos?",
      answer: "Trabalhamos com volume controlado e rider técnico flexível. Nossa experiência nos permite criar a energia perfeita sem incomodar. Temos protocolos específicos para diferentes horários e locais."
    },
    {
      question: "Vocês viajam para outras cidades?",
      answer: "Sim! Atendemos em todo o Brasil. A logística de viagem já está inclusa no orçamento, sem surpresas. Já levamos nossa alegria para mais de 15 estados."
    },
    {
      question: "Qual o investimento para minha festa?",
      answer: "O valor varia conforme o pacote escolhido, número de convidados e duração. Temos opções a partir de R$ 3.500 para eventos menores. Fazemos orçamento personalizado sem compromisso."
    },
    {
      question: "Posso escolher o repertório?",
      answer: "Claro! Montamos playlist personalizada combinando seus pedidos especiais com nosso repertório de sucessos. Desde clássicos do samba até hits que fazem todo mundo cantar junto."
    },
    {
      question: "Preciso fornecer som e equipamentos?",
      answer: "Não se preocupe! Levamos tudo: instrumentos, som, microfones e até iluminação básica. Você só precisa nos indicar o local e garantir energia elétrica. Simples assim!"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Perguntas{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Esclarecemos as principais dúvidas sobre shows para festas e casamentos
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl px-6 py-2 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-brand rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-white/90 mb-6">
                Nossa equipe está pronta para esclarecer qualquer questão e ajudar 
                você a escolher o pacote perfeito para sua festa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300">
                  Falar com Especialista
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                  Ver Mais Vídeos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;