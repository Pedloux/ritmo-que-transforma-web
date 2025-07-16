import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "E se o espaço for pequeno?",
      answer: "Adaptamos instrumentos de percussão leve e usamos arranjos silenciosos para caber em auditórios a partir de 30 m². Nossa metodologia funciona tanto em salas de reunião quanto em grandes convenções."
    },
    {
      question: "Como medir o ROI de uma atividade musical?",
      answer: "Oferecemos métricas objetivas: pesquisas de clima antes/depois, indicadores de engajamento, redução de turnover e melhoria na comunicação interna. Nossos clientes relatam em média 40% de melhoria nos índices de satisfação."
    },
    {
      question: "O barulho pode incomodar?",
      answer: "Utilizamos instrumentos com volume controlado e técnicas de harmonia que criam som envolvente, não invasivo. Temos protocolos específicos para ambientes corporativos e horários de trabalho."
    },
    {
      question: "Qual a logística necessária?",
      answer: "Levamos todos os instrumentos e equipamentos. Só precisamos de energia elétrica e espaço para os participantes se movimentarem. Nossa equipe cuida de montagem, execução e desmontagem completa."
    },
    {
      question: "Qual o investimento?",
      answer: "O investimento varia conforme número de participantes, duração e formato da experiência. Temos opções a partir de R$ 150 por pessoa. Oferecemos proposta personalizada sem compromisso."
    },
    {
      question: "Fazem eventos internacionais?",
      answer: "Sim! Já realizamos experiências em mais de 15 países. Nossa metodologia transcende barreiras culturais e linguísticas, sendo especialmente eficaz em equipes multiculturais."
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
              Esclarecemos as principais dúvidas sobre nossas experiências musicais
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
                você a escolher a melhor experiência para sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300">
                  Falar com Especialista
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                  Baixar FAQ Completo
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